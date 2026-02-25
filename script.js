import { asyncLLM } from "asyncllm";
import { openaiConfig } from "bootstrap-llm-provider";
import { parse } from "partial-json";

const state = {
    data: null,
    selectedId: null
};

// DOM Elements
const elements = {
    demoCards: document.getElementById('demo-cards'),
    searchInput: document.getElementById('searchInput'),
    emptyState: document.getElementById('emptyState'),
    dealDetails: document.getElementById('dealDetails'),

    // Header
    dealHeadline: document.getElementById('dealHeadline'),
    dealIdBadge: document.getElementById('dealIdBadge'),
    complexityValue: document.getElementById('complexityValue'),
    approvalsValue: document.getElementById('approvalsValue'),
    confidenceValue: document.getElementById('confidenceValue'),

    // Main Panel
    recScenario: document.getElementById('recScenario'),
    execNarrative: document.getElementById('execNarrative'),
    scenarioTableBody: document.getElementById('scenarioTableBody'),

    // Side Panel
    countRed: document.getElementById('countRed'),
    countAmber: document.getElementById('countAmber'),
    countGreen: document.getElementById('countGreen'),
    issuesList: document.getElementById('issuesList'),
    auditList: document.getElementById('auditList'),

    // Orchestrator View Elements
    orchestratorView: document.getElementById('orchestratorView'),
    orchLog: document.getElementById('orchLog'),
    mainDashboard: document.getElementById('mainDashboard'),
    orchToggleBtn: document.getElementById('orchToggleBtn'),
    orchToggleIcon: document.getElementById('orchToggleIcon'),

    // Live Output
    liveOutputTarget: document.getElementById('liveOutputTarget'),
    liveOutputContent: document.getElementById('liveOutputContent')
};

// Application Init
async function init() {
    try {
        if (typeof uiData !== 'undefined') {
            state.data = Object.values(uiData);
            renderDemoCards(state.data);
            setupEventListeners();
            return;
        }

        const response = await fetch('../output/ui_summary.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const jsonData = await response.json();

        state.data = Object.values(jsonData);
        renderDemoCards(state.data);
        setupEventListeners();
    } catch (error) {
        console.error('Failed to load JSON data:', error);
        elements.demoCards.innerHTML = `<div class="alert alert-danger w-100 text-center">Failed to load data. Please ensure you are running a local server.</div>`;
    }
}

// Render the demo cards
function renderDemoCards(deals) {
    elements.demoCards.innerHTML = '';

    // If there are many deals, paginate or slice to prevent huge page
    const displayDeals = deals.slice(0, 12);

    if (displayDeals.length === 0) {
        elements.demoCards.innerHTML = `<div class="col-12 text-center text-muted py-5">No opportunities found matching your criteria.</div>`;
        return;
    }

    displayDeals.forEach(deal => {
        const div = document.createElement('div');
        div.className = "col-md-6 col-lg-3";

        const customer = deal.account_summary.customer_name || 'Customer';
        const region = deal.account_summary.region || 'Region';
        const risk = deal.risk_summary?.margin_risk || 'Low';
        const isHighRisk = risk === 'High';
        const isSelected = state.selectedId === deal.opportunity_id;

        div.innerHTML = `
            <div class="card demo-card h-100 text-center ${isSelected ? 'border-primary border-2 shadow' : 'border-secondary'}">
                <div class="card-body d-flex flex-column">
                    <div class="mb-3">
                        <i class="display-3 ${isHighRisk ? 'text-danger bi-exclamation-triangle' : 'text-primary bi-briefcase'}"></i>
                    </div>
                    <h6 class="card-title h5 mb-1 text-dark fw-bold">${customer}</h6>
                    <p class="card-text text-secondary small mb-2">${region} &bull; ${deal.opportunity_id}</p>
                    <p class="card-text small mb-4">
                        Margin Risk: <span class="badge ${isHighRisk ? 'bg-danger' : risk === 'Medium' ? 'bg-warning text-dark' : 'bg-success'}">${risk}</span>
                    </p>
                    <button class="mt-auto btn btn-${isSelected ? 'success' : 'primary'} w-100 fw-semibold" data-run-demo="${deal.opportunity_id}">
                        ${isSelected ? '<i class="bi bi-check2-circle me-1"></i> Analyzing' : 'Run Scenario'}
                    </button>
                </div>
            </div>`;

        elements.demoCards.appendChild(div);
    });
}

// Select a deal
async function selectDeal(id) {
    if (state.selectedId === id) return; // Prevent re-triggering for same deal
    state.selectedId = id;

    // Repaint exact active state on Demo Cards
    // Wait an animation frame if needed, but synchronous is fine
    const currentSearchTerm = elements.searchInput.value.toLowerCase();
    const filtered = state.data.filter(d =>
        d.opportunity_id.toLowerCase().includes(currentSearchTerm) ||
        d.account_summary.customer_name.toLowerCase().includes(currentSearchTerm) ||
        d.account_summary.region.toLowerCase().includes(currentSearchTerm)
    );
    renderDemoCards(filtered);

    // Find deal data
    const deal = state.data.find(d => d.opportunity_id === id);
    if (!deal) return;

    // Render headers right away
    elements.emptyState.style.display = 'none';
    renderDealDetails(deal);

    // Hide main dashboard during orchestration
    elements.mainDashboard.style.display = 'none';
    elements.mainDashboard.style.opacity = '0';

    // Show orchestrator view and ensure it is not collapsed
    elements.orchestratorView.style.display = 'flex';
    if (elements.orchToggleIcon) {
        elements.orchToggleIcon.style.transform = 'rotate(0deg)';
    }

    // Scroll to output
    document.getElementById('output').scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Run Animation
    await runOrchestratorAnimation(deal);

    // Show and fade in main dashboard
    elements.mainDashboard.style.display = 'flex';
    setTimeout(() => {
        elements.mainDashboard.style.opacity = '1';
    }, 50);
}

// System Prompt Definitions
const AGENT_ZERO_PLANNER_PROMPT = `You are Agent Zero, the central AI orchestration layer for deal structuring.
Your task is to review the following deal summary and intelligently route the request to the appropriate specialized execution agents.

Available Agents:
1. "DataAnalysisAgent": Specialized in analyzing installed base, audit refs, and raw deal metrics.
2. "ComplianceRiskAgent": Specializes in governance rules, compliance, and severity flags.
3. "PricingStrategyAgent": Specializes in margin evaluation, scenario comparison, and lifetime profit.
4. "CompetitiveIntelAgent": Focuses on tender constraints and competitor pressures.
5. "ServiceRiskAgent": Analyzes SLA history and service fail rates.

Select EXACTLY 4 appropriate agents from the list above to process this deal collaboratively.
Think about what the deal needs most (e.g., if there's high risk, definitely use ComplianceRiskAgent).
Output STRICTLY in JSON format:
{
  "selected_agents": [
    {
      "id": "DataAnalysisAgent",
      "name": "Data Analyst",
      "icon": "📊",
      "task_description": "Task for this agent..."
    }
  ]
}`;

const AGENT_ZERO_SYNTH_PROMPT = `You are Agent Zero (Synthesizer Layer).
You dispatched multiple specialized AI agents to analyze a deal simultaneously. Their findings have been aggregated below.

Based on these combined insights, select the best scenario and provide the executive narrative.
Provide output strictly as JSON matching this schema:
{
  "recommended_scenario": "A single letter (A, B, or C)",
  "executive_narrative": "Detailed HTML formatted narrative explicitly explaining why this scenario is recommended..."
}`;

// Orchestrator Animation Flow
async function runOrchestratorAnimation(deal) {
    if (elements.orchProgress) elements.orchProgress.style.width = '0%';

    // Helper waits
    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    const cy = cytoscape({
        container: document.getElementById('cy'),
        minZoom: 0.4,
        maxZoom: 2,
        wheelSensitivity: 0.3,
        elements: [],
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': '#ffffff',
                    'border-color': '#cbd5e1',
                    'border-width': 2,
                    'label': 'data(label)',
                    'text-wrap': 'wrap',
                    'text-max-width': '160px',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    'color': '#0f172a',
                    'font-size': '11px',
                    'font-weight': '600',
                    'width': '200px',
                    'height': '56px',
                    'shape': 'round-rectangle',
                    'ghost': 'yes',
                    'ghost-offset-y': 2,
                    'ghost-opacity': 0.06,
                    'ghost-color': '#94a3b8',
                    'transition-property': 'border-color, border-width, background-color',
                    'transition-duration': '0.4s'
                }
            },
            {
                selector: 'node.root',
                style: {
                    'border-color': '#4f46e5',
                    'border-width': 2,
                    'background-color': '#eef2ff',
                    'color': '#312e81',
                    'font-size': '12px'
                }
            },
            {
                selector: 'node.agent',
                style: {
                    'border-color': '#cbd5e1',
                    'border-width': 2,
                    'background-color': '#ffffff'
                }
            },
            {
                selector: 'node.agent-active',
                style: {
                    'border-color': '#2563eb',
                    'border-width': 3,
                    'background-color': '#eff6ff',
                    'color': '#1e40af'
                }
            },
            {
                selector: 'node.agent-done',
                style: {
                    'border-color': '#059669',
                    'border-width': 2,
                    'background-color': '#ecfdf5',
                    'color': '#065f46'
                }
            },
            {
                selector: 'node.synth',
                style: {
                    'border-color': '#d97706',
                    'border-width': 2,
                    'background-color': '#fffbeb',
                    'color': '#92400e',
                    'font-size': '12px'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 2,
                    'line-color': '#e2e8f0',
                    'target-arrow-color': '#e2e8f0',
                    'target-arrow-shape': 'triangle',
                    'arrow-scale': 0.8,
                    'curve-style': 'bezier',
                    'line-style': 'dashed',
                    'line-dash-pattern': [8, 5],
                    'line-dash-offset': 0,
                    'opacity': 0.5,
                    'transition-property': 'line-color, target-arrow-color, opacity, width',
                    'transition-duration': '0.5s'
                }
            },
            {
                selector: 'edge.flowing',
                style: {
                    'line-color': '#3b82f6',
                    'target-arrow-color': '#3b82f6',
                    'line-style': 'dashed',
                    'line-dash-pattern': [8, 5],
                    'opacity': 0.9,
                    'width': 2.5
                }
            },
            {
                selector: 'edge.active',
                style: {
                    'line-color': '#2563eb',
                    'target-arrow-color': '#2563eb',
                    'line-style': 'solid',
                    'width': 2,
                    'opacity': 1
                }
            },
            {
                selector: 'edge.synthEdge',
                style: {
                    'line-color': '#d97706',
                    'target-arrow-color': '#d97706',
                    'opacity': 0.7
                }
            },
            {
                selector: 'edge.synthEdge.flowing',
                style: {
                    'line-color': '#f59e0b',
                    'target-arrow-color': '#f59e0b',
                    'opacity': 1,
                    'width': 2.5
                }
            }
        ],
        layout: { name: 'preset' }
    });

    // Animate flowing dashes on edges
    let dashAnim = null;
    const startEdgeAnimation = () => {
        let offset = 0;
        dashAnim = setInterval(() => {
            offset = (offset + 1) % 26;
            cy.edges('.flowing').style('line-dash-offset', -offset);
        }, 60);
    };
    const stopEdgeAnimation = () => { if (dashAnim) { clearInterval(dashAnim); dashAnim = null; } };

    const runLayout = () => {
        cy.resize();
        cy.layout({
            name: 'breadthfirst',
            directed: true,
            spacingFactor: 1.4,
            fit: true,
            padding: 50,
            avoidOverlap: true
        }).run();
        cy.center();
        cy.fit(undefined, 50);
    };

    const setLiveOutput = (title, htmlContent) => {
        if (elements.liveOutputTarget) elements.liveOutputTarget.textContent = title;
        if (elements.liveOutputContent) elements.liveOutputContent.innerHTML = htmlContent;
    };

    cy.on('tap', 'node', function (evt) {
        const node = evt.target;
        const outData = node.data('outputHtml');
        if (outData) {
            setLiveOutput(node.data('rawName'), outData);
        } else {
            setLiveOutput(node.data('rawName'), "<span class='text-muted'>No detailed output available yet.</span>");
        }
    });

    setLiveOutput("Agent Zero Orchestrator", "Initializing execution planner...");

    // 1. Show Root & Status Box
    if (elements.orchLog) elements.orchLog.textContent = `Agent Zero initialized for ${deal.opportunity_id}`;
    if (elements.orchStatusBox) {
        elements.orchStatusBox.classList.add('active');
        elements.orchStatusBox.style.opacity = '1';
    }
    await wait(400);

    cy.add({ data: { id: 'root', label: `🤖 Orchestrator\nTarget: ${deal.account_summary.customer_name}`, rawName: '🤖 Orchestrator', outputHtml: `Analyzing deal context for ${deal.account_summary.customer_name}.` }, classes: 'root' });
    runLayout();

    if (elements.orchProgress) elements.orchProgress.style.width = '10%';
    await wait(800);

    try {
        const { baseUrl, apiKey } = await openaiConfig({
            defaultBaseUrls: [
                "https://api.openai.com/v1",
                "https://aipipe.org/openai/v1",
                "https://llmfoundry.straivedemo.com/openai/v1",
                "https://llmfoundry.straive.com/openai/v1",
                "https://openrouter.ai/api/v1",
                "https://aipipe.org/openrouter/v1",
                "https://llmfoundry.straivedemo.com/openrouter/v1",
                "https://llmfoundry.straive.com/openrouter/v1",
            ]
        });

        const model = document.getElementById("model")?.value || "gpt-5-mini";

        // --- PHASE 1: AGENT ZERO ROUTER ---
        if (elements.orchLog) elements.orchLog.textContent = `Agent Zero analyzing query and deciding correct sub-agents to dispatch...`;

        const dealContext = {
            customer: deal.account_summary.customer_name,
            region: deal.account_summary.region,
            issues: deal.issues_summary,
            scenarios: deal.scenarios
        };

        const routerResponse = await fetch(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify({
                model,
                messages: [
                    { role: "system", content: AGENT_ZERO_PLANNER_PROMPT },
                    { role: "user", content: `Deal Context: ${JSON.stringify(dealContext)}` }
                ],
                response_format: { type: "json_object" },
                temperature: 0.2
            })
        });

        const routerJson = await routerResponse.json();
        const plannerOutput = JSON.parse(routerJson.choices[0].message.content);
        const selectedAgents = plannerOutput.selected_agents || [];

        if (elements.orchProgress) elements.orchProgress.style.width = '30%';
        if (elements.orchLog) elements.orchLog.textContent = `Agent Zero dispatching ${selectedAgents.length} specialized agents in parallel...`;
        await wait(500);

        // Spawn Nodes visually
        setLiveOutput("Execution Planner", `<div style="margin-bottom:8px;">Selected <strong>${selectedAgents.length}</strong> specialized agents:</div><ul style="list-style:none;padding:0;">${selectedAgents.map(a => `<li style="padding:4px 0;">● ${a.icon || '🤖'} <strong>${a.name}</strong></li>`).join('')}</ul>`);
        selectedAgents.forEach((agent, i) => {
            cy.add({ data: { id: `agent_${i}`, label: `${agent.icon || '🤖'} ${agent.name}\nEvaluating...`, rawName: `${agent.icon || '🤖'} ${agent.name}` }, classes: 'agent agent-active' });
            cy.add({ data: { id: `edge_t_${i}`, source: 'root', target: `agent_${i}` }, classes: 'flowing' });
        });
        runLayout();
        startEdgeAnimation();
        await wait(selectedAgents.length * 200 + 400); // let them fade in

        // --- PHASE 2: PARALLEL EXECUTION OF CHOSEN AGENTS ---
        if (elements.orchProgress) elements.orchProgress.style.width = '60%';

        const executeAgent = async (agent, index) => {
            const agentPrompt = `You are an AI Agent specialized as: ${agent.id}. Your specific focus for this request: ${agent.task_description}.
You are working on a deal for ${deal.account_summary.customer_name}.
Payload Data: 
${JSON.stringify({ economics: deal.baseline_economics, issues: deal.issues_summary, scenarios: deal.scenario_comparison_table, audits: deal.audit_refs })}

Provide your findings based strictly on your specialization. Output STRICTLY as JSON:
{
  "trace_value": "Short summary metric (e.g., '2 High Risks', 'Margin: 40%')",
  "findings": ["Insight 1", "Insight 2", "Insight 3"]
}`;

            try {
                const res = await fetch(`${baseUrl}/chat/completions`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
                    body: JSON.stringify({
                        model,
                        messages: [{ role: "user", content: agentPrompt }],
                        response_format: { type: "json_object" },
                        temperature: 0.3
                    })
                });

                const json = await res.json();
                const result = JSON.parse(json.choices[0].message.content);

                // Update cytoscape node visually
                const node = cy.getElementById(`agent_${index}`);
                if (node) {
                    node.data('label', `${agent.icon || '🤖'} ${agent.name}\n✓ ${result.trace_value || 'Done'}`);
                    node.removeClass('agent-active').addClass('agent-done');
                    // Turn edge to solid
                    const edge = cy.getElementById(`edge_t_${index}`);
                    if (edge) edge.removeClass('flowing').addClass('active');

                    const findingsHtml = (result.findings || []).map(f => `<div class="mb-2 pb-2 border-bottom"><i class="bi bi-arrow-right-short text-primary"></i> ${f}</div>`).join('');
                    node.data('outputHtml', findingsHtml);

                    // Auto-select the last one to finish if no one clicked
                    setLiveOutput(node.data('rawName'), findingsHtml);
                }

                return { agent_id: agent.id, results: result };
            } catch (e) {
                console.error(`Agent ${agent.id} failed:`, e);
                const node = cy.getElementById(`agent_${index}`);
                if (node) {
                    node.data('label', `${agent.icon || '🤖'} ${agent.name}\nError`);
                    node.data('outputHtml', `<span class='text-danger'>Execution failed: ${e.message}</span>`);
                }
                return { agent_id: agent.id, results: { trace_value: "Error", findings: [`Execution failed: ${e.message}`] } };
            }
        };

        const agentResults = await Promise.all(selectedAgents.map((agent, i) => executeAgent(agent, i)));

        // Stop top-edge animation, all agents done
        stopEdgeAnimation();

        // Wait for user to read slightly before synthesis
        await wait(800);

        // Turn on bottom synth node
        cy.add({ data: { id: 'synth', label: '⚡ Scenario Synthesizer\nAnalyzing...', rawName: '⚡ Scenario Synthesizer', outputHtml: '<span class="typing-cursor"></span> Aggregating inputs...' }, classes: 'synth' });
        selectedAgents.forEach((a, i) => {
            cy.add({ data: { id: `edge_b_${i}`, source: `agent_${i}`, target: 'synth' }, classes: 'synthEdge flowing' });
        });
        runLayout();
        startEdgeAnimation();

        if (elements.orchProgress) elements.orchProgress.style.width = '80%';
        if (elements.orchLog) elements.orchLog.textContent = `Agent Zero aggregating findings to resolve final scenario...`;

        await wait(800);

        // --- PHASE 3: AGENT ZERO SYNTHESIS ---
        if (elements.orchProgress) elements.orchProgress.style.width = '100%';
        if (elements.recScenario) elements.recScenario.textContent = "Analyzing...";
        if (elements.execNarrative) elements.execNarrative.innerHTML = "<span class='text-muted'><em>Waiting for Agent Zero reasoning stream...</em></span>";

        const synthBody = {
            model: model,
            messages: [
                { role: "system", content: AGENT_ZERO_SYNTH_PROMPT },
                { role: "user", content: `Deal Details: Opportunity ${deal.opportunity_id}\\nAgent Findings:\\n${JSON.stringify(agentResults, null, 2)}` }
            ],
            response_format: { type: "json_object" },
            stream: true,
            temperature: 0.4
        };

        setLiveOutput('⚡ Scenario Synthesizer', '<span class="typing-cursor"></span> Aggregating inputs...');

        for await (
            const { content, error } of asyncLLM(`${baseUrl}/chat/completions`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
                body: JSON.stringify(synthBody),
            })
        ) {
            if (error) throw error;
            if (!content) continue;

            const parsed = parse(content);
            if (!parsed) continue;

            const synthNode = cy.getElementById('synth');

            if (parsed.recommended_scenario) {
                if (elements.recScenario) elements.recScenario.textContent = `Scenario ${parsed.recommended_scenario}`;
                if (synthNode) synthNode.data('label', `⚡ Scenario Synthesizer\nSelected: ${parsed.recommended_scenario}`);
            }
            if (parsed.executive_narrative) {
                const streamHtml = `<strong>Agent Zero Resolution:</strong><br/>${parsed.executive_narrative}<span class="typing-cursor">|</span>`;
                if (elements.execNarrative) elements.execNarrative.innerHTML = streamHtml;
                if (synthNode) synthNode.data('outputHtml', streamHtml);
                setLiveOutput('⚡ Scenario Synthesizer', streamHtml);
            }
        }

        // All done — stop animations, finalize
        stopEdgeAnimation();
        cy.edges('.flowing').removeClass('flowing').addClass('active');

        if (elements.orchLog) elements.orchLog.textContent = `✓ Agent Zero Multi-Agent Processing Complete.`;
        const cursor = elements.execNarrative?.querySelector('.typing-cursor');
        if (cursor) cursor.remove();
        const synthNode = cy.getElementById('synth');
        if (synthNode) synthNode.data('outputHtml', synthNode.data('outputHtml')?.replace('<span class="typing-cursor">|</span>', ''));

        // Final update to clear cursor in live view
        if (synthNode) setLiveOutput('⚡ Scenario Synthesizer', synthNode.data('outputHtml'));

    } catch (e) {
        stopEdgeAnimation();
        console.error("LLM Execution Error:", e);
        if (elements.orchLog) elements.orchLog.textContent = `LLM Error: ${e.message}. Using cache.`;
        if (elements.recScenario) elements.recScenario.textContent = `Scenario ${deal.recommendation?.recommended_scenario || "Unknown"}`;
        if (elements.execNarrative) elements.execNarrative.innerHTML = `<strong>Autonomous Assessment (Cached Storage):</strong><br/>${deal.executive_narrative || deal.recommendation?.rationale || "No cached data available."}`;
        if (elements.traceSynth) elements.traceSynth.textContent = `Selected: Scenario ${deal.recommendation?.recommended_scenario || "Unknown"}`;
    }
}

// Format Currency Utility
function formatCurrency(amount, region) {
    const isEU = ['Germany', 'France', 'Spain', 'Italy', 'Netherlands'].includes(region);
    const symbol = isEU ? '€' : '$';
    return `${symbol}${(amount / 1000).toFixed(1)}K`;
}

// Render the exact detail payloads
function renderDealDetails(deal) {
    // Ensure content body is visible
    elements.dealDetails.style.display = 'block';

    // 1. Header
    const region = deal.account_summary.region || 'Unknown';
    elements.dealHeadline.textContent = `${deal.account_summary.customer_name} — ${region}`;
    elements.dealIdBadge.textContent = deal.opportunity_id;

    elements.complexityValue.textContent = deal.approval_routing_summary || 'Standard';

    const approvals = deal.required_approvals && deal.required_approvals.length > 0
        ? deal.required_approvals.join(', ')
        : 'None';
    elements.approvalsValue.textContent = approvals;

    const score = deal.confidence_score ? Math.round(deal.confidence_score * 100) : '--';
    elements.confidenceValue.textContent = `${score}%`;

    // 2. Recommend (Will be populated by LLM during the Orchestrator Animation, or overwritten here if static fallback is needed quickly)
    // To ensure the animation visually builds it, we purposely leave it empty or show a loading state on initial renderDealDetails
    elements.recScenario.textContent = `--`;
    elements.execNarrative.innerHTML = `<span class="text-muted">Awaiting LLM response...</span>`;

    // 3. Scenario Table
    elements.scenarioTableBody.innerHTML = '';
    if (deal.scenario_comparison_table) {
        deal.scenario_comparison_table.forEach(sc => {
            const tr = document.createElement('tr');
            const isRec = sc.scenario === deal.recommendation.recommended_scenario;

            tr.innerHTML = `
                <td><strong>${sc.scenario}</strong> ${isRec ? '<span style="color:var(--accent-blue);font-size:0.75em;margin-left:6px;font-weight:bold;">(REC)</span>' : ''}</td>
                <td>${(sc.margin * 100).toFixed(1)}%</td>
                <td>${formatCurrency(sc.lifetime_profit, region)}</td>
                <td>${sc.requires_cfo ? '<span class="badge bg-warning text-dark px-2">Yes</span>' : 'No'}</td>
                <td>${sc.tender_flag ? '<span class="badge bg-danger px-2">Active</span>' : '-'}</td>
            `;
            elements.scenarioTableBody.appendChild(tr);
        });
    }

    // 4. Governance & Issues
    const counts = deal.issue_summary_counts || { RED: 0, AMBER: 0, GREEN: 0 };
    elements.countRed.textContent = counts.RED;
    elements.countAmber.textContent = counts.AMBER;
    elements.countGreen.textContent = counts.GREEN;

    elements.issuesList.innerHTML = '';
    if (deal.issues_summary && deal.issues_summary.length > 0) {
        deal.issues_summary.forEach(iss => {
            if (iss.severity === 'GREEN') return; // Hide standard pass logic
            const li = document.createElement('li');
            li.className = `p-3 rounded-3 mb-2 ${iss.severity === 'RED' ? 'bg-danger bg-opacity-10 border-start border-danger border-4' : 'bg-warning bg-opacity-10 border-start border-warning border-4'}`;
            li.innerHTML = `<strong>${iss.description}</strong><br/><span class="text-muted small">Action: ${iss.recommended_action}</span>`;
            elements.issuesList.appendChild(li);
        });
    }

    // 5. Audits
    elements.auditList.innerHTML = '';
    if (deal.audit_refs && deal.audit_refs.length > 0) {
        deal.audit_refs.forEach(ref => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="bi bi-shield-check text-primary me-2"></i> ${ref}`;
            elements.auditList.appendChild(li);
        });
    } else {
        elements.auditList.innerHTML = '<li><i class="bi bi-check-circle text-success me-2"></i> No significant structural edits required (Clean Profile).</li>';
    }
}

// Search Functionality & Event Listeners
function setupEventListeners() {
    elements.searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = state.data.filter(d =>
            d.opportunity_id.toLowerCase().includes(term) ||
            d.account_summary.customer_name.toLowerCase().includes(term) ||
            d.account_summary.region.toLowerCase().includes(term)
        );
        renderDemoCards(filtered);
    });

    if (elements.orchToggleBtn) {
        elements.orchToggleBtn.addEventListener('click', () => {
            const view = elements.orchestratorView;
            if (view.style.display === 'none') {
                view.style.display = 'flex';
                elements.orchToggleIcon.style.transform = 'rotate(0deg)';
            } else {
                view.style.display = 'none';
                elements.orchToggleIcon.style.transform = 'rotate(-90deg)';
            }
        });
    }

    // Use event delegation for the deal cards
    elements.demoCards.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-run-demo]');
        if (button) {
            const id = button.getAttribute('data-run-demo');
            selectDeal(id);
        }
    });

    // Configure LLM Hook
    // Form event hooks (hidden from UI but used by script for configuration)
    const configureBtn = document.getElementById('configure-llm');
    if (configureBtn) {
        configureBtn.addEventListener('click', async () => await openaiConfig({ show: true }));
    }

    // Data Modal — fetch and display actual CSVs from data/ folder
    const csvFiles = ['opportunities', 'contracts', 'installed_base', 'sap_pricing', 'service_cases'];
    const csvCache = {};

    const dataModal = document.getElementById('dataModal');
    if (dataModal) {
        dataModal.addEventListener('show.bs.modal', async () => {
            const badge = document.getElementById('dataRowCount');
            if (badge) badge.textContent = 'Loading…';

            for (const name of csvFiles) {
                if (!csvCache[name]) {
                    try {
                        const resp = await fetch(`data/${name}.csv`);
                        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                        const text = await resp.text();
                        csvCache[name] = parseCSV(text);
                    } catch (e) {
                        console.error(`Failed to load data/${name}.csv:`, e);
                        csvCache[name] = [];
                    }
                }
                renderCSVTable(`csv-${name}`, csvCache[name]);
            }

            if (badge) {
                const total = csvFiles.reduce((s, n) => s + (csvCache[n]?.length || 0), 0);
                badge.textContent = `${total} total rows across 5 tables`;
            }
        });
    }

    // Simple CSV parser (handles quoted fields with commas)
    function parseCSV(text) {
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        if (lines.length < 2) return [];
        const headers = splitCSVLine(lines[0]);
        const rows = [];
        for (let i = 1; i < lines.length; i++) {
            const values = splitCSVLine(lines[i]);
            const obj = {};
            headers.forEach((h, idx) => { obj[h] = values[idx] || ''; });
            rows.push(obj);
        }
        return rows;
    }

    function splitCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (ch === '"') { inQuotes = !inQuotes; }
            else if (ch === ',' && !inQuotes) { result.push(current.trim()); current = ''; }
            else { current += ch; }
        }
        result.push(current.trim());
        return result;
    }

    function renderCSVTable(tableId, allRows) {
        const MAX = 10;
        const table = document.getElementById(tableId);
        if (!table) return;
        const thead = table.querySelector('thead tr');
        const tbody = table.querySelector('tbody');

        if (!allRows || allRows.length === 0) {
            thead.innerHTML = '';
            tbody.innerHTML = '<tr><td class="text-center text-muted py-4" colspan="99">No data available</td></tr>';
            return;
        }

        const rows = allRows.slice(0, MAX);
        const cols = Object.keys(rows[0]);

        thead.innerHTML = cols.map(c =>
            `<th style="padding: 10px 14px; font-size: 0.72rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; white-space: nowrap; border-bottom: 2px solid #e2e8f0;">${c.replace(/_/g, ' ')}</th>`
        ).join('');

        tbody.innerHTML = rows.map(row =>
            `<tr style="border-bottom: 1px solid #f1f5f9;">` +
            cols.map(c => {
                let val = row[c] ?? '';
                // Boolean badges
                if (val === 'True') val = '<span style="color:#059669;font-weight:600">✔ True</span>';
                else if (val === 'False') val = '<span style="color:#94a3b8">False</span>';
                // Status badge
                if (c === 'status' && val === 'Active') val = '<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:0.7rem;font-weight:700;color:#059669;background:#ecfdf5">Active</span>';
                if (c === 'status' && val === 'Expired') val = '<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:0.7rem;font-weight:700;color:#dc2626;background:#fef2f2">Expired</span>';
                return `<td style="padding: 10px 14px; font-size: 0.82rem; color: #334155; white-space: nowrap;">${val}</td>`;
            }).join('') +
            `</tr>`
        ).join('');
    }
}

// Boot
init();
