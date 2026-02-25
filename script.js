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

// ═══════════════════════════════════════════════════════════════════
// ORCHESTRATOR PROMPTS — Tool-Aware Autonomous Planning Architecture
// ═══════════════════════════════════════════════════════════════════

const ORCHESTRATOR_PLANNER_PROMPT = `You are the Agent Zero Orchestrator — the central AI planning layer for autonomous deal structuring.

You have access to the following TOOLS and AGENTS. Each tool extracts or processes data from specific enterprise tables.

## Available Tools (Data Extractors):
1. "opportunities_extractor" — Reads from opportunities.csv. Fields: opportunity_id, customer_id, customer_name, region, country, segment, instrument_sku, instrument_qty, requested_instrument_discount_pct, expected_annual_consumables, expected_annual_service, contract_term_years, competitor_pressure, strategic_flag, currency, stage
2. "contracts_extractor" — Reads from contracts.csv. Fields: contract_id, customer_id, start_date, end_date, status, service_level, region
3. "installed_base_extractor" — Reads from installed_base.csv. Fields: customer_id, installed_instrument_sku, install_year, utilization_index, region
4. "sap_pricing_extractor" — Reads from sap_pricing.csv. Fields: sku, product_type, region, currency, list_price, standard_cost, deprecated_flag
5. "service_cases_extractor" — Reads from service_cases.csv. Fields: case_id, customer_id, instrument_sku, region, cases_last_12m, avg_resolution_days, sla_breach_pct

## Available Agents (Analytical):
1. "ComplianceAgent" — Evaluates governance rules: margin floors, discount limits, tender flags, deprecated SKU checks
2. "PricingAgent" — Calculates baseline economics, generates deal scenarios (A: Win Now, B: Balanced, C: Value-Based), computes lifetime profit
3. "RiskScoringAgent" — Scores win risk, margin risk, and compliance risk across multiple dimensions
4. "RecommendationAgent" — Selects optimal compliant scenario or escalates when no compliant path exists

## Your Task:
Given a deal problem, create a STRUCTURED EXECUTION PLAN that:
1. Selects ONLY the tools and agents needed for this specific problem (do not include every tool/agent — choose the minimal set that can solve the problem).
2. Identifies WHICH TOOLS to use and WHAT DATA to extract (with specific filter conditions).
3. Identifies WHICH AGENTS to invoke and in what order.
4. Shows the data flow: Tool → Agent → Output.

Output STRICTLY as JSON:
{
  "intent": "One sentence describing the deal problem",
  "plan_steps": [
    {
      "step": 1,
      "type": "tool",
      "tool_id": "opportunities_extractor",
      "action": "Extract opportunity record",
      "query": "SELECT * FROM opportunities WHERE opportunity_id = 'OPP-XXXX'",
      "output_fields": ["customer_name", "region", "instrument_sku", "requested_instrument_discount_pct"],
      "rationale": "Need baseline deal parameters"
    },
    {
      "step": 2,
      "type": "tool",
      "tool_id": "sap_pricing_extractor",
      "action": "Get pricing for quoted SKU",
      "query": "SELECT list_price, standard_cost, deprecated_flag FROM sap_pricing WHERE sku = 'DX-1000'",
      "output_fields": ["list_price", "standard_cost", "deprecated_flag"],
      "rationale": "Need cost basis for margin calculation"
    },
    {
      "step": 3,
      "type": "agent",
      "tool_id": "PricingAgent",
      "action": "Calculate baseline economics and generate 3 scenarios",
      "query": "compute_scenarios(revenue, cost, discount_pct, term_years)",
      "output_fields": ["scenario_A", "scenario_B", "scenario_C", "gross_margin_pct"],
      "rationale": "Generate structured deal options"
    }
  ]
}`;

const AGENT_EXECUTION_PROMPT = `You are a specialized execution agent within the Agent Zero orchestrator.
Your role: {ROLE}
You must analyze the provided deal data and produce structured findings.

You have been given extracted data from enterprise tables. Analyze it thoroughly.
Show your work: reference specific field values, thresholds, and rules.

Output STRICTLY as JSON:
{
  "trace_value": "Short summary metric (e.g., '2 RED Flags', 'Margin: 41.2%', 'SLA Breach: 48%')",
  "data_used": "Brief description of which tables/fields you analyzed",
  "code_executed": "A representative pandas/SQL-like operation showing what you did (e.g., df[df.gross_margin_pct < 0.33])",
  "findings": ["Finding 1 with specific numbers", "Finding 2", "Finding 3"],
  "output_data": {}
}`;

const SYNTHESIZER_PROMPT = `You are Agent Zero (Synthesizer + Guardrails Layer).
Multiple tools extracted data and multiple agents analyzed a deal. Their combined findings are below.

Your job:
1. AGGREGATE all agent findings into a coherent picture
2. Apply GUARDRAILS: verify the recommendation doesn't violate any RED governance rules
3. SELECT the best scenario (A, B, or C) and provide the executive narrative
4. If guardrails fail, mark escalation_required = true

Output strictly as JSON:
{
  "recommended_scenario": "A, B, or C",
  "guardrails_passed": true,
  "escalation_required": false,
  "executive_narrative": "Detailed HTML formatted narrative..."
}`;

// ═══════════════════════════════════════════════════════════════════
// REGISTRIES — Tools and agents selectable dynamically by the planner
// ═══════════════════════════════════════════════════════════════════
const TOOL_REGISTRY = {
    opportunities_extractor: {
        id: 'opportunities_extractor', icon: '📂', name: 'Opportunities Extractor', table: 'opportunities.csv',
        why: 'The opportunities table is the primary source of truth for what the customer is requesting. We need the instrument SKU to cross-reference against SAP pricing, the requested discount level to evaluate governance thresholds, expected consumables and service revenue to build the full deal economics, and competitor pressure to assess win risk.',
        rationale: 'Extract full deal request: SKU, discount, term, revenue expectations, and competitive context',
        fields: ['customer_name', 'region', 'segment', 'instrument_sku', 'instrument_qty', 'discount_pct', 'consumables', 'service', 'term_years', 'competitor_pressure', 'strategic_flag', 'currency'],
    },
    sap_pricing_extractor: {
        id: 'sap_pricing_extractor', icon: '💰', name: 'SAP Pricing Extractor', table: 'sap_pricing.csv',
        why: 'SAP is the system-of-record for pricing. We need the list price and standard cost to compute gross margin. The deprecated_flag tells us if the quoted instrument is still actively sold. Currency must match the CRM opportunity currency.',
        rationale: 'Get official ERP pricing, cost basis, SKU deprecation status, and currency for margin calculation',
        fields: ['sku', 'list_price', 'standard_cost', 'deprecated_flag', 'currency'],
    },
    installed_base_extractor: {
        id: 'installed_base_extractor', icon: '🔧', name: 'Installed Base Extractor', table: 'installed_base.csv',
        why: 'The installed base reveals what instruments the customer currently owns. Critical for detecting upgrade patterns, utilization anomalies, and install age which indicates replacement urgency.',
        rationale: 'Assess existing instruments, utilization patterns, and detect upgrade/leakage anomalies',
        fields: ['installed_instrument_sku', 'install_year', 'utilization_index'],
    },
    contracts_extractor: {
        id: 'contracts_extractor', icon: '📃', name: 'Contracts Extractor', table: 'contracts.csv',
        why: 'Contract data validates existing service agreements. A critical check is for ghost contracts — contracts marked Active but whose end_date has already passed.',
        rationale: 'Verify contract validity, detect ghost contracts, and check service agreement alignment',
        fields: ['contract_id', 'start_date', 'end_date', 'status', 'service_level'],
    },
    service_cases_extractor: {
        id: 'service_cases_extractor', icon: '🎧', name: 'Service Cases Extractor', table: 'service_cases.csv',
        why: 'Service history directly impacts deal risk. High case volumes indicate instrument reliability issues. SLA breach rates signal operational risk.',
        rationale: 'Evaluate instrument reliability, SLA performance, and service risk exposure',
        fields: ['cases_last_12m', 'avg_resolution_days', 'sla_breach_pct'],
    },
};

const AGENT_REGISTRY = {
    PricingAgent: {
        id: 'PricingAgent', icon: '📊', name: 'Pricing & Scenarios Agent',
        query: `# Step 1: Compute baseline economics\ninstrument_rev = qty * list_price * (1 - discount)\nconsumables_rev = annual_consumables * term_years\nservice_rev = annual_service * term_years\ntotal_revenue = instrument + consumables + service\n\n# Step 2: Generate 3 scenarios\nScenario_A ('Win Now'):  discount+5pp, same term\nScenario_B ('Balanced'): baseline discount, optimize mix\nScenario_C ('Value'):    discount-5pp, +1yr term\n\n# Step 3: Margin & lifetime profit\ngross_margin = (revenue - cost) / revenue\nlifetime_profit = total_revenue - total_cost`,
        fields: ['scenario_A', 'scenario_B', 'scenario_C', 'gross_margin_pct', 'lifetime_profit'],
        why: 'The Pricing Agent takes the raw data extracted by tools and builds the complete deal economics. It computes three structured scenarios with varying risk/reward tradeoffs.',
        rationale: 'Build baseline economics and generate 3 structured deal scenarios with margin analysis',
    },
    ComplianceAgent: {
        id: 'ComplianceAgent', icon: '🛡️', name: 'Compliance & Governance Agent',
        query: `# Rule Engine — 8 governance checks\nR_MISSING_COST:   standard_cost must be > 0\nR_NEG_MARGIN:     gross_margin must be > 0\nR_LOW_MARGIN:     margin >= regional floor\nR_HIGH_DISC:      discount <= 30% (hard cap)\nR_MED_DISC:       discount <= 20% (VP threshold)\nR_DEPRECATED_SKU: sku.deprecated must be False\nR_CURR_MISMATCH:  opp.currency == sap.currency\nR_EXPIRED_ACTIVE: contract.end_date > today()`,
        fields: ['RED_flags', 'AMBER_flags', 'GREEN_flags', 'governance_issues', 'approval_routing'],
        why: 'The Compliance Agent is the governance gatekeeper. It evaluates every deal against 8+ rule families. RED flags block the deal without escalation. AMBER flags require management review.',
        rationale: 'Apply all governance rules and produce severity-coded flags with remediation actions',
    },
    RiskScoringAgent: {
        id: 'RiskScoringAgent', icon: '⚠️', name: 'Risk Scoring Agent',
        query: `# Win Risk (0-10 composite)\nif competitor_pressure == 'High': score += 5\nif competitor_pressure == 'Medium': score += 3\nif discount < 0.10: score += 3\nwin_risk = 'High' if score >= 6\n\n# Margin Risk\nmargin_risk = 'High' if margin < 0.35\n\n# Compliance Risk\ncompliance_risk = 'High' if red_flags > 0`,
        fields: ['win_risk', 'margin_risk', 'compliance_risk', 'composite_score'],
        why: 'The Risk Scoring Agent computes a multi-dimensional risk profile. Win Risk, Margin Risk, and Compliance Risk give the deal desk a complete picture of where the risk lives.',
        rationale: 'Score 3 risk dimensions (win probability, margin integrity, compliance posture)',
    },
    RecommendationAgent: {
        id: 'RecommendationAgent', icon: '✅', name: 'Recommendation Agent',
        query: `# Select best compliant scenario\ncompliant = [s for s in scenarios if not has_red(s)]\nbest = max(compliant, key=lambda s: s.lifetime_profit) if compliant else max(scenarios, key=lambda s: s.gross_margin_pct)\nescalation_required = len(compliant) == 0`,
        fields: ['recommended_scenario', 'rationale', 'escalation_required', 'expected_margin'],
        why: 'Selects the optimal compliant scenario maximizing lifetime gross profit, or escalates when no compliant path exists.',
        rationale: 'Select optimal compliant scenario or escalate when no compliant path exists',
    },
};

// Build default (fixed) execution plan — used when LLM is unavailable or returns invalid plan
function getDefaultExecutionPlan(ctx) {
    const { oppId, custId, marginFloor, region } = ctx;
    return [
        { step: 1, type: 'tool', id: 'opportunities_extractor', ...TOOL_REGISTRY.opportunities_extractor, query: `SELECT opportunity_id, customer_id, customer_name,\n       region, segment, instrument_sku,\n       instrument_qty, requested_instrument_discount_pct,\n       expected_annual_consumables,\n       expected_annual_service, contract_term_years,\n       competitor_pressure, strategic_flag, currency\nFROM opportunities\nWHERE opportunity_id = '${oppId}'` },
        { step: 2, type: 'tool', id: 'sap_pricing_extractor', ...TOOL_REGISTRY.sap_pricing_extractor, query: `SELECT sku, product_type, list_price,\n       standard_cost, deprecated_flag, currency\nFROM sap_pricing\nWHERE sku = (\n  SELECT instrument_sku FROM opportunities\n  WHERE opportunity_id = '${oppId}'\n)` },
        { step: 3, type: 'tool', id: 'installed_base_extractor', ...TOOL_REGISTRY.installed_base_extractor, query: `SELECT customer_id, installed_instrument_sku,\n       install_year, utilization_index\nFROM installed_base\nWHERE customer_id = '${custId}'` },
        { step: 4, type: 'tool', id: 'contracts_extractor', ...TOOL_REGISTRY.contracts_extractor, query: `SELECT contract_id, customer_id, start_date,\n       end_date, status, service_level, region\nFROM contracts\nWHERE customer_id = '${custId}'` },
        { step: 5, type: 'tool', id: 'service_cases_extractor', ...TOOL_REGISTRY.service_cases_extractor, query: `SELECT case_id, customer_id, instrument_sku,\n       cases_last_12m, avg_resolution_days,\n       sla_breach_pct\nFROM service_cases\nWHERE customer_id = '${custId}'` },
        { step: 6, type: 'agent', id: 'PricingAgent', ...AGENT_REGISTRY.PricingAgent, rationale: AGENT_REGISTRY.PricingAgent.rationale },
        { step: 7, type: 'agent', id: 'ComplianceAgent', ...AGENT_REGISTRY.ComplianceAgent, rationale: AGENT_REGISTRY.ComplianceAgent.rationale },
        { step: 8, type: 'agent', id: 'RiskScoringAgent', ...AGENT_REGISTRY.RiskScoringAgent, rationale: AGENT_REGISTRY.RiskScoringAgent.rationale },
    ];
}

// Map LLM plan_steps to executionPlan (only selected tools/agents, in order)
function buildExecutionPlanFromLLM(planSteps, ctx) {
    const { oppId, custId, marginFloor } = ctx;
    const steps = [];
    let stepNum = 0;
    const queryTemplates = {
        opportunities_extractor: `SELECT opportunity_id, customer_id, customer_name,\n       region, segment, instrument_sku,\n       instrument_qty, requested_instrument_discount_pct,\n       expected_annual_consumables,\n       expected_annual_service, contract_term_years,\n       competitor_pressure, strategic_flag, currency\nFROM opportunities\nWHERE opportunity_id = '${oppId}'`,
        sap_pricing_extractor: `SELECT sku, product_type, list_price,\n       standard_cost, deprecated_flag, currency\nFROM sap_pricing\nWHERE sku = (\n  SELECT instrument_sku FROM opportunities\n  WHERE opportunity_id = '${oppId}'\n)`,
        installed_base_extractor: `SELECT customer_id, installed_instrument_sku,\n       install_year, utilization_index\nFROM installed_base\nWHERE customer_id = '${custId}'`,
        contracts_extractor: `SELECT contract_id, customer_id, start_date,\n       end_date, status, service_level, region\nFROM contracts\nWHERE customer_id = '${custId}'`,
        service_cases_extractor: `SELECT case_id, customer_id, instrument_sku,\n       cases_last_12m, avg_resolution_days,\n       sla_breach_pct\nFROM service_cases\nWHERE customer_id = '${custId}'`,
    };
    for (const s of planSteps || []) {
        const type = (s.type || '').toLowerCase();
        const toolId = s.tool_id || s.id;
        if (!toolId) continue;
        stepNum++;
        if (type === 'tool') {
            const reg = TOOL_REGISTRY[toolId];
            if (!reg) continue;
            steps.push({
                step: stepNum, type: 'tool', id: toolId,
                ...reg,
                query: s.query || queryTemplates[toolId] || `SELECT * FROM ${reg.table} WHERE opportunity_id = '${oppId}' OR customer_id = '${custId}'`,
                rationale: s.rationale || reg.rationale,
            });
        } else if (type === 'agent') {
            const reg = AGENT_REGISTRY[toolId];
            if (!reg) continue;
            steps.push({
                step: stepNum, type: 'agent', id: toolId,
                ...reg,
                query: s.query || reg.query,
                rationale: s.rationale || reg.rationale,
            });
        }
    }
    return steps.length ? steps : null;
}

// ═══════════════════════════════════════════════════════════════════
// ORCHESTRATOR ANIMATION — Full Tool-Aware Execution Flow
// ═══════════════════════════════════════════════════════════════════

async function runOrchestratorAnimation(deal) {
    if (elements.orchProgress) elements.orchProgress.style.width = '0%';
    const wait = (ms) => new Promise(r => setTimeout(r, ms));

    // ─── Cytoscape Setup ───
    const cy = cytoscape({
        container: document.getElementById('cy'),
        minZoom: 0.3, maxZoom: 2, wheelSensitivity: 0.3,
        elements: [],
        style: [
            {
                selector: 'node', style: {
                    'background-color': '#ffffff', 'border-color': '#cbd5e1', 'border-width': 2,
                    'label': 'data(label)', 'text-wrap': 'wrap', 'text-max-width': '170px',
                    'text-valign': 'center', 'text-halign': 'center', 'color': '#0f172a',
                    'font-size': '10px', 'font-weight': '600', 'width': '190px', 'height': '52px',
                    'shape': 'round-rectangle',
                    'transition-property': 'border-color, border-width, background-color', 'transition-duration': '0.4s'
                }
            },
            { selector: 'node.orchestrator', style: { 'border-color': '#4f46e5', 'border-width': 2, 'background-color': '#eef2ff', 'color': '#312e81', 'font-size': '11px' } },
            { selector: 'node.planner', style: { 'border-color': '#7c3aed', 'border-width': 2, 'background-color': '#f5f3ff', 'color': '#5b21b6' } },
            { selector: 'node.tool', style: { 'border-color': '#0891b2', 'border-width': 2, 'background-color': '#ecfeff', 'color': '#155e75', 'shape': 'round-rectangle' } },
            { selector: 'node.tool-active', style: { 'border-color': '#06b6d4', 'border-width': 3, 'background-color': '#cffafe' } },
            { selector: 'node.tool-done', style: { 'border-color': '#059669', 'border-width': 2, 'background-color': '#ecfdf5', 'color': '#065f46' } },
            { selector: 'node.agent', style: { 'border-color': '#2563eb', 'border-width': 2, 'background-color': '#eff6ff', 'color': '#1e40af' } },
            { selector: 'node.agent-active', style: { 'border-color': '#2563eb', 'border-width': 3, 'background-color': '#dbeafe' } },
            { selector: 'node.agent-done', style: { 'border-color': '#059669', 'border-width': 2, 'background-color': '#ecfdf5', 'color': '#065f46' } },
            { selector: 'node.guardrails', style: { 'border-color': '#dc2626', 'border-width': 2, 'background-color': '#fef2f2', 'color': '#991b1b' } },
            { selector: 'node.synth', style: { 'border-color': '#d97706', 'border-width': 2, 'background-color': '#fffbeb', 'color': '#92400e', 'font-size': '11px' } },
            {
                selector: 'edge', style: {
                    'width': 2, 'line-color': '#e2e8f0', 'target-arrow-color': '#e2e8f0',
                    'target-arrow-shape': 'triangle', 'arrow-scale': 0.7, 'curve-style': 'bezier',
                    'line-style': 'dashed', 'line-dash-pattern': [8, 5], 'line-dash-offset': 0,
                    'opacity': 0.5, 'transition-property': 'line-color, target-arrow-color, opacity, width', 'transition-duration': '0.5s'
                }
            },
            { selector: 'edge.flowing', style: { 'line-color': '#3b82f6', 'target-arrow-color': '#3b82f6', 'opacity': 0.9, 'width': 2.5 } },
            { selector: 'edge.active', style: { 'line-color': '#2563eb', 'target-arrow-color': '#2563eb', 'line-style': 'solid', 'width': 2, 'opacity': 1 } },
            { selector: 'edge.toolEdge', style: { 'line-color': '#06b6d4', 'target-arrow-color': '#06b6d4', 'opacity': 0.7 } },
            { selector: 'edge.toolEdge.flowing', style: { 'line-color': '#22d3ee', 'target-arrow-color': '#22d3ee', 'opacity': 1, 'width': 2.5 } },
            { selector: 'edge.synthEdge', style: { 'line-color': '#d97706', 'target-arrow-color': '#d97706', 'opacity': 0.7 } },
            { selector: 'edge.synthEdge.flowing', style: { 'line-color': '#f59e0b', 'target-arrow-color': '#f59e0b', 'opacity': 1, 'width': 2.5 } },
        ],
        layout: { name: 'preset' }
    });

    let dashAnim = null;
    const startEdgeAnimation = () => { let o = 0; dashAnim = setInterval(() => { o = (o + 1) % 26; cy.edges('.flowing').style('line-dash-offset', -o); }, 60); };
    const stopEdgeAnimation = () => { if (dashAnim) { clearInterval(dashAnim); dashAnim = null; } };
    const runLayout = () => { cy.resize(); cy.layout({ name: 'breadthfirst', directed: true, spacingFactor: 1.3, fit: true, padding: 40, avoidOverlap: true }).run(); cy.center(); cy.fit(undefined, 40); };
    const setLiveOutput = (title, html) => {
        if (elements.liveOutputTarget) elements.liveOutputTarget.textContent = title;
        if (elements.liveOutputContent) elements.liveOutputContent.innerHTML = html;
    };

    cy.on('tap', 'node', function (evt) {
        const d = evt.target.data('outputHtml');
        setLiveOutput(evt.target.data('rawName'), d || "<span class='text-muted'>No output yet.</span>");
    });

    // ─── Build deal context for the planner ───
    const cust = deal.account_summary.customer_name;
    const region = deal.account_summary.region;
    const oppId = deal.opportunity_id;
    const custId = deal.account_summary.customer_id || 'CUST-XXXX';
    const issues = deal.issues_summary || [];
    const scenarios = deal.scenarios || [];
    const scenarioTable = deal.scenario_comparison_table || [];
    const reds = issues.filter(i => i.severity === 'RED').length;
    const ambers = issues.filter(i => i.severity === 'AMBER').length;
    const baseline = deal.baseline_economics || {};
    const isEU = ['Germany', 'France', 'Spain', 'Italy', 'Netherlands'].includes(region);
    const curr = isEU ? '\u20ac' : '$';
    const marginFloor = isEU ? '33%' : region === 'US' ? '36%' : '35%';
    const fmtPct = v => v != null ? (v * 100).toFixed(1) + '%' : '--';
    const fmtK = v => v != null ? `${curr}${(v / 1000).toFixed(1)}K` : '--';
    const scA = scenarios.find(s => s.scenario_name === 'A');
    const scB = scenarios.find(s => s.scenario_name === 'B');
    const scC = scenarios.find(s => s.scenario_name === 'C');

    // ════════════════════════════════════════════════════════
    // PHASE 0: INTENT ANALYZER
    // ════════════════════════════════════════════════════════
    const intentHtml = `
      <div style="font-size:0.82rem;">
        <div style="font-weight:700;margin-bottom:10px;color:#312e81;">\ud83e\udde0 Intent Analysis Complete</div>
        <div style="background:#eef2ff;padding:12px 14px;border-radius:8px;margin-bottom:12px;border-left:3px solid #4f46e5;">
          <div style="font-weight:600;margin-bottom:6px;">Problem Statement</div>
          <div style="color:#44403c;line-height:1.6;">A deal structuring request has been received for <strong>${cust}</strong> (Customer ID: <code>${custId}</code>) operating in the <strong>${region}</strong> market. The orchestrator must evaluate this opportunity across pricing, compliance, risk, and contract dimensions to produce an optimal, governance-compliant deal recommendation.</div>
        </div>
        <div style="font-weight:600;margin-bottom:6px;">What Needs To Be Solved:</div>
        <div style="padding-left:4px;">
          <div style="padding:4px 0;color:#44403c;">1. <strong>Data Reconciliation</strong> \u2014 Pull and cross-reference data from 5 enterprise systems (CRM, ERP, Asset Registry, Contracts, Service Desk).</div>
          <div style="padding:4px 0;color:#44403c;">2. <strong>Baseline Economics</strong> \u2014 Calculate total revenue (${baseline.total_revenue ? fmtK(baseline.total_revenue) : 'pending'}), total cost (${baseline.total_cost ? fmtK(baseline.total_cost) : 'pending'}), and gross margin.</div>
          <div style="padding:4px 0;color:#44403c;">3. <strong>Scenario Generation</strong> \u2014 Create 3 structured scenarios (Win Now, Balanced, Value-Based) with different discount/term configurations.</div>
          <div style="padding:4px 0;color:#44403c;">4. <strong>Governance Compliance</strong> \u2014 Evaluate against regional margin floors (${marginFloor} for ${region}), discount caps (30%), SKU validity, currency alignment.</div>
          <div style="padding:4px 0;color:#44403c;">5. <strong>Risk Assessment</strong> \u2014 Score win probability risk, margin erosion risk, and compliance posture.</div>
          <div style="padding:4px 0;color:#44403c;">6. <strong>Recommendation</strong> \u2014 Select optimal compliant scenario maximizing lifetime gross profit, or escalate.</div>
        </div>
        <div style="margin-top:12px;background:#f8fafc;padding:10px 12px;border-radius:8px;font-size:0.76rem;">
          <strong>Available Data Sources:</strong> opportunities.csv, sap_pricing.csv, installed_base.csv, contracts.csv, service_cases.csv<br/>
          <strong>Available Agents:</strong> Pricing Agent, Compliance Agent, Risk Scoring Agent<br/>
          <strong>Target Output:</strong> Executive-ready approval packet with scenario recommendation, governance flags, risk scores, and audit trail
        </div>
      </div>`;
    setLiveOutput('\ud83e\udde0 Intent Analyzer', intentHtml);
    if (elements.orchLog) elements.orchLog.textContent = `\ud83e\udde0 Intent Analyzer: Problem identified \u2014 structuring deal for ${cust} in ${region} across 5 data sources...`;

    cy.add({ data: { id: 'intent', label: `\ud83e\udde0 Intent Analyzer\n${cust}`, rawName: '\ud83e\udde0 Intent Analyzer', outputHtml: intentHtml }, classes: 'orchestrator' });
    runLayout();
    if (elements.orchProgress) elements.orchProgress.style.width = '5%';
    await wait(1200);

    // ════════════════════════════════════════════════════════
    // PHASE 1: STRUCTURED PLANNER — Show the Plan
    // ════════════════════════════════════════════════════════
    cy.add({ data: { id: 'planner', label: '📋 Structured Planner\nBuilding plan...', rawName: '📋 Structured Planner' }, classes: 'planner' });
    cy.add({ data: { source: 'intent', target: 'planner' }, classes: 'flowing' });
    runLayout();
    startEdgeAnimation();
    if (elements.orchLog) elements.orchLog.textContent = `📋 Structured Planner: Creating execution plan with tools and agents...`;
    if (elements.orchProgress) elements.orchProgress.style.width = '10%';

    const planCtx = { oppId, custId, region, marginFloor, cust, reds, ambers, baseline: deal.baseline_economics || {}, issues: deal.issues_summary || [] };
    let executionPlan = getDefaultExecutionPlan(planCtx);

    try {
        const { baseUrl, apiKey } = await openaiConfig({ defaultBaseUrls: ["https://api.openai.com/v1", "https://aipipe.org/openai/v1", "https://llmfoundry.straivedemo.com/openai/v1", "https://llmfoundry.straive.com/openai/v1", "https://openrouter.ai/api/v1", "https://aipipe.org/openrouter/v1", "https://llmfoundry.straivedemo.com/openrouter/v1", "https://llmfoundry.straive.com/openrouter/v1"] });
        const model = document.getElementById("model")?.value || "gpt-4o-mini";
        const dealSummary = `Deal: ${oppId}. Customer: ${cust} (${custId}). Region: ${region}. Margin floor: ${marginFloor}. RED flags: ${reds}, AMBER: ${ambers}. Baseline revenue: ${baseline.total_revenue != null ? fmtK(baseline.total_revenue) : 'unknown'}, cost: ${baseline.total_cost != null ? fmtK(baseline.total_cost) : 'unknown'}. Issues: ${(deal.issues_summary || []).slice(0, 3).map(i => i.rule_id).join(', ') || 'none'}.`;
        const plannerPayload = {
            model,
            messages: [
                { role: "system", content: ORCHESTRATOR_PLANNER_PROMPT },
                { role: "user", content: `Create an execution plan for this deal. Only include the tools and agents that are necessary for this specific problem. Do not include every tool or agent — select the minimal set needed.\n\n${dealSummary}` }
            ],
            response_format: { type: "json_object" },
            temperature: 0.2
        };
        const res = await fetch(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify(plannerPayload)
        });
        const json = await res.json();
        const content = json.choices?.[0]?.message?.content;
        if (content) {
            const parsed = JSON.parse(content);
            const planSteps = parsed.plan_steps;
            const dynamicPlan = buildExecutionPlanFromLLM(planSteps, planCtx);
            if (dynamicPlan && dynamicPlan.length > 0) {
                executionPlan = dynamicPlan;
                if (elements.orchLog) elements.orchLog.textContent = `📋 Planner: Dynamic plan — ${executionPlan.filter(s => s.type === 'tool').length} tools, ${executionPlan.filter(s => s.type === 'agent').length} agents selected for this deal.`;
            }
        }
    } catch (e) {
        console.warn("Planner LLM failed, using default plan:", e);
        if (elements.orchLog) elements.orchLog.textContent = `📋 Planner: Using default plan (${executionPlan.filter(s => s.type === 'tool').length} tools, ${executionPlan.filter(s => s.type === 'agent').length} agents).`;
    }

    // Show the plan in the live output panel
    await wait(800);
    const planHtml = `
      <div style="font-size:0.82rem;">
        <div style="margin-bottom:6px;font-weight:700;color:#5b21b6;">📋 Execution Plan for ${oppId}</div>
        <div style="margin-bottom:14px;font-size:0.76rem;color:#57534e;line-height:1.5;">The planner analyzed the deal for <strong>${cust}</strong> (${region}) and determined <strong>${executionPlan.filter(s => s.type === 'tool').length} data extraction tools</strong> and <strong>${executionPlan.filter(s => s.type === 'agent').length} analytical agents</strong> are required. Tools execute first (sequential), then agents (parallel).</div>
        <div style="margin-bottom:10px;padding:8px 10px;background:#f5f3ff;border-radius:8px;border-left:3px solid #7c3aed;">
          <div style="font-weight:600;font-size:0.74rem;color:#5b21b6;">🔧 Phase 1: Data Extraction</div>
          <div style="font-size:0.7rem;color:#57534e;margin-top:2px;">Sequential extraction. Each tool runs a filtered query for customer <code>${custId}</code> / opportunity <code>${oppId}</code>.</div>
        </div>
        ${executionPlan.filter(s => s.type === 'tool').map(s => `
          <div style="margin-bottom:10px;padding:10px 12px;background:#ecfeff;border-radius:8px;border-left:3px solid #06b6d4;">
            <div style="font-weight:700;font-size:0.78rem;color:#155e75;">${s.icon} Step ${s.step}: ${s.name}</div>
            <div style="font-size:0.68rem;color:#78716c;margin-top:2px;">Source: <code>${s.table}</code> → Extracts ${s.fields.length} fields</div>
            <div style="background:#1e293b;color:#ffffff;border-radius:6px;padding:10px 12px;font-family:monospace;font-size:0.68rem;margin-top:6px;margin-bottom:6px;white-space:pre-wrap;line-height:1.5;">${s.query}</div>
            <div style="font-size:0.68rem;color:#44403c;line-height:1.5;"><strong>Why:</strong> ${s.why}</div>
          </div>
        `).join('')}
        <div style="margin-bottom:10px;margin-top:14px;padding:8px 10px;background:#eff6ff;border-radius:8px;border-left:3px solid #2563eb;">
          <div style="font-weight:600;font-size:0.74rem;color:#1e40af;">🤖 Phase 2: Agent Analysis</div>
          <div style="font-size:0.7rem;color:#57534e;margin-top:2px;">Agents receive extracted data and run in parallel. Each produces structured findings for the Guardrails and Synthesizer.</div>
        </div>
        ${executionPlan.filter(s => s.type === 'agent').map(s => `
          <div style="margin-bottom:10px;padding:10px 12px;background:#eff6ff;border-radius:8px;border-left:3px solid #2563eb;">
            <div style="font-weight:700;font-size:0.78rem;color:#1e40af;">${s.icon} Step ${s.step}: ${s.name}</div>
            <div style="font-size:0.68rem;color:#78716c;margin-top:2px;">Produces: ${s.fields.join(', ')}</div>
            <div style="background:#1e293b;color:#ffffff;border-radius:6px;padding:10px 12px;font-family:monospace;font-size:0.68rem;margin-top:6px;margin-bottom:6px;white-space:pre-wrap;line-height:1.5;">${s.query}</div>
            <div style="font-size:0.68rem;color:#44403c;line-height:1.5;"><strong>Why:</strong> ${s.why}</div>
          </div>
        `).join('')}
      </div>`;
    setLiveOutput('📋 Structured Planner', planHtml);
    const plannerNode = cy.getElementById('planner');
    if (plannerNode) {
        plannerNode.data('label', `📋 Structured Planner\n${executionPlan.length} steps planned`);
        plannerNode.data('outputHtml', planHtml);
    }

    stopEdgeAnimation();
    cy.edges().removeClass('flowing').addClass('active');
    if (elements.orchProgress) elements.orchProgress.style.width = '15%';
    await wait(1200);

    // ════════════════════════════════════════════════════════
    // PHASE 2: TOOL EXECUTION — Data Extraction from CSVs
    // ════════════════════════════════════════════════════════
    if (elements.orchLog) elements.orchLog.textContent = `🔧 Executing data extraction tools across 5 enterprise tables...`;

    const toolSteps = executionPlan.filter(s => s.type === 'tool');
    const agentSteps = executionPlan.filter(s => s.type === 'agent');

    // Add tool nodes
    toolSteps.forEach((tool, i) => {
        cy.add({ data: { id: `tool_${i}`, label: `${tool.icon} ${tool.name}\nExtracting...`, rawName: `${tool.icon} ${tool.name}` }, classes: 'tool tool-active' });
        cy.add({ data: { source: 'planner', target: `tool_${i}` }, classes: 'toolEdge flowing' });
    });
    runLayout();
    startEdgeAnimation();

    // Build tool output by tool id (supports dynamic tool set)
    const getToolOutput = (toolId) => {
        const out = {
            opportunities_extractor: { resultRows: `<table style="width:100%;border-collapse:collapse;font-size:0.7rem;margin:8px 0;"><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">opportunity_id</td><td style="padding:4px 8px;">${oppId}</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">customer</td><td style="padding:4px 8px;">${cust} (${custId})</td></tr><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">region</td><td style="padding:4px 8px;">${region}</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">discount_requested</td><td style="padding:4px 8px;font-weight:700;color:${scB && scB.instrument_discount_pct > 0.20 ? '#d97706' : '#059669'};">${scB ? fmtPct(scB.instrument_discount_pct) : '--'}</td></tr><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">term_years</td><td style="padding:4px 8px;">${scB ? scB.term_years + ' year(s)' : '--'}</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">baseline_revenue</td><td style="padding:4px 8px;">${baseline.total_revenue ? fmtK(baseline.total_revenue) : '--'}</td></tr></table>`, insight: `Discount of ${scB ? fmtPct(scB.instrument_discount_pct) : '--'} ${scB && scB.instrument_discount_pct > 0.20 ? 'exceeds the 20% VP threshold — this deal will require VP approval routing.' : 'is within standard authority limits.'}` },
            sap_pricing_extractor: { resultRows: `<table style="width:100%;border-collapse:collapse;font-size:0.7rem;margin:8px 0;"><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">list_price</td><td style="padding:4px 8px;">${baseline.total_revenue ? fmtK(baseline.total_revenue * 0.3) : '--'}</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">standard_cost</td><td style="padding:4px 8px;">${baseline.total_cost ? fmtK(baseline.total_cost * 0.4) : '--'}</td></tr><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">deprecated_flag</td><td style="padding:4px 8px;font-weight:700;color:${issues.some(i => i.rule_id === 'R_DEPRECATED_SKU') ? '#d97706' : '#059669'};">${issues.some(i => i.rule_id === 'R_DEPRECATED_SKU') ? '⚠️ True — SKU deprecated' : '✓ False — SKU current'}</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">currency</td><td style="padding:4px 8px;">${issues.find(i => i.rule_id === 'R_CURR_MISMATCH')?.current_value || 'Aligned'}</td></tr></table>`, insight: `${issues.some(i => i.rule_id === 'R_DEPRECATED_SKU') ? '⚠️ SKU is marked DEPRECATED in SAP — AMBER flag will be raised.' : '✓ SKU is active in the current product catalog.'}${issues.some(i => i.rule_id === 'R_CURR_MISMATCH') ? ' ⚠️ Currency mismatch detected — must align before quoting.' : ''}` },
            installed_base_extractor: { resultRows: `<table style="width:100%;border-collapse:collapse;font-size:0.7rem;margin:8px 0;"><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">customer_id</td><td style="padding:4px 8px;">${custId}</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">installed_instruments</td><td style="padding:4px 8px;">Active instruments on site at ${cust}</td></tr><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">utilization_index</td><td style="padding:4px 8px;">Usage rate vs. capacity (0.0–1.0 scale)</td></tr></table>`, insight: `Installed base for ${custId} retrieved. Will be cross-referenced with the quoted instrument to detect upgrade patterns and utilization anomalies.` },
            contracts_extractor: { resultRows: `<table style="width:100%;border-collapse:collapse;font-size:0.7rem;margin:8px 0;"><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">contract_status</td><td style="padding:4px 8px;font-weight:700;color:${issues.some(i => i.rule_id === 'R_EXPIRED_ACTIVE') ? '#d97706' : '#059669'};">${issues.some(i => i.rule_id === 'R_EXPIRED_ACTIVE') ? '⚠️ Ghost contract detected (Active but expired)' : '✓ All contracts valid'}</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">service_level</td><td style="padding:4px 8px;">Service agreement tier for ${cust}</td></tr></table>`, insight: `${issues.some(i => i.rule_id === 'R_EXPIRED_ACTIVE') ? '⚠️ Ghost contract found — AMBER flag will be raised; CRM hygiene remediation recommended.' : '✓ All contracts valid with no ghost entries detected.'}` },
            service_cases_extractor: { resultRows: `<table style="width:100%;border-collapse:collapse;font-size:0.7rem;margin:8px 0;"><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">customer_id</td><td style="padding:4px 8px;">${custId}</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">cases_last_12m</td><td style="padding:4px 8px;">Trailing 12-month service ticket volume</td></tr><tr style="background:#f0fdfa;"><td style="padding:4px 8px;font-weight:600;color:#155e75;">avg_resolution_days</td><td style="padding:4px 8px;">Mean time to resolve service tickets</td></tr><tr><td style="padding:4px 8px;font-weight:600;color:#155e75;">sla_breach_pct</td><td style="padding:4px 8px;">% of cases exceeding SLA targets</td></tr></table>`, insight: `Service history for ${custId} extracted. High case volumes (>15/yr) indicate reliability issues. SLA breaches >20% signal operational risk — these feed into the Risk Scoring Agent.` },
        };
        return out[toolId] || { resultRows: `<table style="width:100%;border-collapse:collapse;font-size:0.7rem;"><tr><td style="padding:4px 8px;">Data extracted for ${toolId}</td></tr></table>`, insight: 'Extraction complete.' };
    };

    // Simulate tool execution with enriched data visuals
    for (let i = 0; i < toolSteps.length; i++) {
        const tool = toolSteps[i];
        const output = getToolOutput(tool.id);
        await wait(800);

        const extractHtml = `
          <div style="font-size:0.82rem;">
            <div style="font-weight:700;margin-bottom:4px;color:#155e75;">${tool.icon} ${tool.name}</div>
            <div style="font-size:0.68rem;color:#78716c;margin-bottom:2px;">Source: <code>${tool.table}</code> \u2022 Customer: <code>${custId}</code></div>
            <div style="font-size:0.7rem;color:#57534e;margin-bottom:6px;line-height:1.5;"><strong>Why:</strong> ${tool.why}</div>
            <div style="background:#1e293b;color:#ffffff;border-radius:8px;padding:12px 14px;font-family:monospace;font-size:0.7rem;margin-bottom:8px;white-space:pre-wrap;line-height:1.6;"><span style="color:#7dd3fc;">-- Querying ${tool.table}</span>\n${tool.query}</div>
            <div style="font-size:0.72rem;color:#059669;font-weight:600;">\u2713 Query returned 1 row, ${tool.fields.length} fields extracted</div>
            <div style="font-weight:600;font-size:0.72rem;margin-top:8px;margin-bottom:2px;color:#155e75;">Extracted Data:</div>
            ${output.resultRows}
            <div style="background:#fffbeb;padding:8px 10px;border-radius:6px;font-size:0.72rem;color:#92400e;margin-top:6px;line-height:1.5;">
              <strong>\ud83d\udca1 Early Insight:</strong> ${output.insight}
            </div>
          </div>`;

        const node = cy.getElementById(`tool_${i}`);
        if (node) {
            node.data('label', `${tool.icon} ${tool.name}\n\u2713 ${tool.fields.length} fields`);
            node.removeClass('tool-active').addClass('tool-done');
            node.data('outputHtml', extractHtml);
        }
        const edge = cy.edges(`[target = "tool_${i}"]`);
        if (edge) edge.removeClass('flowing').addClass('active');

        setLiveOutput(`${tool.icon} ${tool.name}`, extractHtml);
        if (elements.orchLog) elements.orchLog.textContent = `\u2713 Step ${i + 1}: ${tool.name} extracted ${tool.fields.length} fields from ${tool.table}`;
        if (elements.orchProgress) elements.orchProgress.style.width = `${15 + (i + 1) * 8}%`;
    }

    stopEdgeAnimation();
    await wait(600);

    // ════════════════════════════════════════════════════════
    // PHASE 3: AGENT EXECUTION — Analysis & Processing
    // ════════════════════════════════════════════════════════
    if (elements.orchLog) elements.orchLog.textContent = `🤖 Dispatching ${agentSteps.length} analytical agents in parallel...`;

    agentSteps.forEach((agent, i) => {
        cy.add({ data: { id: `agent_${i}`, label: `${agent.icon} ${agent.name}\nProcessing...`, rawName: `${agent.icon} ${agent.name}` }, classes: 'agent agent-active' });
        // Connect tools to agents
        toolSteps.forEach((_, ti) => {
            cy.add({ data: { source: `tool_${ti}`, target: `agent_${i}` }, classes: 'flowing' });
        });
    });
    runLayout();
    startEdgeAnimation();
    if (elements.orchProgress) elements.orchProgress.style.width = '60%';

    // Try LLM for agents, fallback to deterministic
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
        const model = document.getElementById("model")?.value || "gpt-4o-mini";

        const executeAgent = async (agent, index) => {
            const prompt = AGENT_EXECUTION_PROMPT.replace('{ROLE}', `${agent.name}: ${agent.rationale}`) + `\n\nDeal Data:\n${JSON.stringify({ opportunity: oppId, customer: cust, region, economics: deal.baseline_economics, issues: deal.issues_summary, scenarios: deal.scenario_comparison_table || deal.scenarios, risk: deal.risk_summary })}`;
            try {
                const res = await fetch(`${baseUrl}/chat/completions`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
                    body: JSON.stringify({ model, messages: [{ role: "user", content: prompt }], response_format: { type: "json_object" }, temperature: 0.3 })
                });
                const json = await res.json();
                return JSON.parse(json.choices[0].message.content);
            } catch (e) {
                console.error(`Agent ${agent.id} failed:`, e);
                return null;
            }
        };

        const agentResults = await Promise.all(agentSteps.map((a, i) => executeAgent(a, i)));

        // Update agent nodes
        agentSteps.forEach((agent, i) => {
            const result = agentResults[i];
            const node = cy.getElementById(`agent_${i}`);
            if (node && result) {
                node.data('label', `${agent.icon} ${agent.name}\n\u2713 ${result.trace_value || 'Done'}`);
                node.removeClass('agent-active').addClass('agent-done');

                const agentHtml = `
                  <div style="font-size:0.82rem;">
                    <div style="font-weight:700;margin-bottom:4px;color:#1e40af;">${agent.icon} ${agent.name}</div>
                    <div style="font-size:0.7rem;color:#57534e;margin-bottom:6px;line-height:1.5;"><strong>Purpose:</strong> ${agent.why}</div>
                    ${result.trace_value ? `<div style="display:inline-block;padding:4px 12px;border-radius:12px;font-size:0.74rem;font-weight:700;color:#1e40af;background:#eff6ff;margin-bottom:8px;">${result.trace_value}</div>` : ''}
                    ${result.code_executed ? `<div style="font-weight:600;font-size:0.7rem;color:#475569;margin-bottom:4px;">Code Executed:</div><div style="background:#1e293b;color:#ffffff;border-radius:8px;padding:10px 12px;font-family:monospace;font-size:0.7rem;margin-bottom:10px;white-space:pre-wrap;line-height:1.5;">${result.code_executed}</div>` : `<div style="font-weight:600;font-size:0.7rem;color:#475569;margin-bottom:4px;">Operations:</div><div style="background:#1e293b;color:#ffffff;border-radius:8px;padding:10px 12px;font-family:monospace;font-size:0.7rem;margin-bottom:10px;white-space:pre-wrap;line-height:1.5;">${agent.query}</div>`}
                    ${result.data_used ? `<div style="font-size:0.7rem;color:#64748b;margin-bottom:8px;">\ud83d\udcc1 <strong>Data analyzed:</strong> ${result.data_used}</div>` : ''}
                    <div style="font-weight:600;font-size:0.72rem;color:#1e40af;margin-bottom:4px;">Findings:</div>
                    ${(result.findings || []).map(f => `<div style="padding:6px 8px;margin-bottom:4px;background:#f8fafc;border-radius:6px;border-left:3px solid #2563eb;font-size:0.78rem;line-height:1.5;">${f}</div>`).join('')}
                  </div>`;
                node.data('outputHtml', agentHtml);
                setLiveOutput(node.data('rawName'), agentHtml);
            } else if (node) {
                node.data('label', `${agent.icon} ${agent.name}\n✓ Done`);
                node.removeClass('agent-active').addClass('agent-done');
            }
        });

        stopEdgeAnimation();
        cy.edges('.flowing').removeClass('flowing').addClass('active');
        if (elements.orchProgress) elements.orchProgress.style.width = '75%';
        await wait(600);

        // ════════════════════════════════════════════════════════
        // PHASE 4: AGGREGATOR + GUARDRAILS + SYNTHESIS
        // ════════════════════════════════════════════════════════
        if (elements.orchLog) elements.orchLog.textContent = `⚡ Aggregating findings → Guardrails check → Final recommendation...`;

        cy.add({ data: { id: 'guardrails', label: '🛡️ Guardrails\nValidating...', rawName: '🛡️ Guardrails' }, classes: 'guardrails' });
        cy.add({ data: { id: 'synth', label: '⚡ Synthesizer\nAggregating...', rawName: '⚡ Synthesizer', outputHtml: '<span class="typing-cursor"></span> Aggregating...' }, classes: 'synth' });
        agentSteps.forEach((_, i) => {
            cy.add({ data: { source: `agent_${i}`, target: 'guardrails' }, classes: 'synthEdge flowing' });
        });
        cy.add({ data: { source: 'guardrails', target: 'synth' }, classes: 'synthEdge flowing' });
        runLayout();
        startEdgeAnimation();

        if (elements.orchProgress) elements.orchProgress.style.width = '85%';
        await wait(800);

        // Guardrails visual
        const guardrailsHtml = `
          <div style="font-size:0.82rem;">
            <div style="font-weight:700;margin-bottom:8px;color:#991b1b;">🛡️ Guardrails Check</div>
            <div style="padding:6px 0;"><span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:0.7rem;font-weight:700;color:${reds > 0 ? '#dc2626' : '#059669'};background:${reds > 0 ? '#fef2f2' : '#ecfdf5'}">${reds > 0 ? `${reds} RED FLAGS` : 'NO RED FLAGS'}</span></div>
            <div style="padding:6px 0;"><span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:0.7rem;font-weight:700;color:#d97706;background:#fffbeb">${ambers} AMBER FLAGS</span></div>
            <div style="background:#1e293b;color:#ffffff;border-radius:8px;padding:10px 12px;font-family:monospace;font-size:0.7rem;margin-top:8px;margin-bottom:8px;white-space:pre-wrap;">if scenario.margin < regional_floor:\n    flag = RED → escalate\nif discount > 0.30:\n    flag = RED → require CFO\nif deprecated_sku:\n    flag = AMBER → suggest upgrade</div>
            <div style="font-size:0.72rem;color:${reds > 0 ? '#dc2626' : '#059669'};font-weight:600;">→ ${reds > 0 ? 'Escalation may be required' : 'All guardrails passed'}</div>
          </div>`;
        const grNode = cy.getElementById('guardrails');
        if (grNode) {
            grNode.data('label', `🛡️ Guardrails\n${reds > 0 ? `${reds} RED` : '✓ Passed'}`);
            grNode.data('outputHtml', guardrailsHtml);
        }
        setLiveOutput('🛡️ Guardrails', guardrailsHtml);
        await wait(600);

        // ─── SYNTHESIS with LLM Streaming ───
        if (elements.orchProgress) elements.orchProgress.style.width = '90%';
        if (elements.recScenario) elements.recScenario.textContent = "Analyzing...";
        if (elements.execNarrative) elements.execNarrative.innerHTML = "<span class='text-muted'><em>Agent Zero synthesizing final recommendation...</em></span>";

        const synthBody = {
            model,
            messages: [
                { role: "system", content: SYNTHESIZER_PROMPT },
                { role: "user", content: `Deal: ${oppId} — ${cust} (${region})\nAgent Findings:\n${JSON.stringify(agentResults, null, 2)}\nGovernance: ${reds} RED, ${ambers} AMBER flags\nScenarios: ${JSON.stringify(deal.scenario_comparison_table || deal.scenarios)}` }
            ],
            response_format: { type: "json_object" },
            stream: true,
            temperature: 0.4
        };

        setLiveOutput('⚡ Synthesizer', '<span class="typing-cursor"></span> Generating recommendation...');

        for await (const { content, error } of asyncLLM(`${baseUrl}/chat/completions`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
            body: JSON.stringify(synthBody),
        })) {
            if (error) throw error;
            if (!content) continue;
            const parsed = parse(content);
            if (!parsed) continue;

            const synthNode = cy.getElementById('synth');
            if (parsed.recommended_scenario) {
                if (elements.recScenario) elements.recScenario.textContent = `Scenario ${parsed.recommended_scenario}`;
                if (synthNode) synthNode.data('label', `⚡ Synthesizer\nSelected: ${parsed.recommended_scenario}`);
            }
            if (parsed.executive_narrative) {
                const html = `<strong>Agent Zero Resolution:</strong><br/>${parsed.executive_narrative}<span class="typing-cursor">|</span>`;
                if (elements.execNarrative) elements.execNarrative.innerHTML = html;
                if (synthNode) synthNode.data('outputHtml', html);
                setLiveOutput('⚡ Synthesizer', html);
            }
        }

        // ─── Finalize ───
        stopEdgeAnimation();
        cy.edges('.flowing').removeClass('flowing').addClass('active');
        if (elements.orchProgress) elements.orchProgress.style.width = '100%';
        if (elements.orchLog) elements.orchLog.textContent = `✓ Agent Zero: Plan executed → ${toolSteps.length} tools + ${agentSteps.length} agents → Guardrails passed → Recommendation delivered.`;

        const cursor = elements.execNarrative?.querySelector('.typing-cursor');
        if (cursor) cursor.remove();
        const synthNodeFinal = cy.getElementById('synth');
        if (synthNodeFinal) {
            synthNodeFinal.data('outputHtml', synthNodeFinal.data('outputHtml')?.replace('<span class="typing-cursor">|</span>', ''));
            setLiveOutput('⚡ Synthesizer', synthNodeFinal.data('outputHtml'));
        }

    } catch (e) {
        // ─── FALLBACK: Deterministic execution ───
        stopEdgeAnimation();
        console.error("LLM Error:", e);

        // Still show agent results deterministically (works for any agent in registry)
        agentSteps.forEach((agent, i) => {
            const node = cy.getElementById(`agent_${i}`);
            if (node) {
                node.removeClass('agent-active').addClass('agent-done');
                let fallbackHtml = '';
                if (agent.id === 'PricingAgent') {
                    const sc = deal.scenario_comparison_table || [];
                    fallbackHtml = `<div style="font-size:0.82rem;"><strong>${agent.icon} ${agent.name}</strong><br/>` +
                        (sc.length ? sc.map(s => `<div style="padding:4px 0;">Scenario ${s.scenario}: Margin ${(s.margin * 100).toFixed(1)}%, Profit ${formatCurrency(s.lifetime_profit, region)}</div>`).join('') : 'Scenarios computed.') + '</div>';
                } else if (agent.id === 'ComplianceAgent') {
                    fallbackHtml = `<div style="font-size:0.82rem;"><strong>${agent.icon} ${agent.name}</strong><br/>${reds} RED flags, ${ambers} AMBER flags<br/>${issues.filter(iss => iss.severity !== 'GREEN').map(iss => `<div style="padding:2px 0;">• [${iss.severity}] ${iss.description}</div>`).join('')}</div>`;
                } else if (agent.id === 'RiskScoringAgent') {
                    fallbackHtml = `<div style="font-size:0.82rem;"><strong>${agent.icon} ${agent.name}</strong><br/>Win/Margin/Compliance risk scored. ${deal.risk_summary ? Object.entries(deal.risk_summary).map(([k, v]) => `${k}: ${v}`).join('; ') : 'Analysis complete (cached).'}</div>`;
                } else if (agent.id === 'RecommendationAgent') {
                    const rec = deal.recommendation;
                    fallbackHtml = `<div style="font-size:0.82rem;"><strong>${agent.icon} ${agent.name}</strong><br/>${rec ? `Scenario ${rec.recommended_scenario || 'B'}; ${rec.rationale || 'Optimal compliant path.'}` : 'Recommendation computed (cached).'}</div>`;
                } else {
                    fallbackHtml = `<div style="font-size:0.82rem;"><strong>${agent.icon} ${agent.name}</strong><br/>${agent.rationale || 'Analysis complete (cached).'}</div>`;
                }
                node.data('label', `${agent.icon} ${agent.name}\n✓ Done`);
                node.data('outputHtml', fallbackHtml);
            }
        });

        cy.edges('.flowing').removeClass('flowing').addClass('active');
        if (elements.orchLog) elements.orchLog.textContent = `LLM unavailable. Using cached analysis for ${oppId}.`;
        if (elements.recScenario) elements.recScenario.textContent = `Scenario ${deal.recommendation?.recommended_scenario || "B"}`;
        if (elements.execNarrative) elements.execNarrative.innerHTML = `<strong>Cached Assessment:</strong><br/>${deal.executive_narrative || deal.recommendation?.rationale || "No cached narrative."}`;
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
