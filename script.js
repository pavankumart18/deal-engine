const state = {
    data: null,
    selectedId: null
};

// DOM Elements
const elements = {
    dealList: document.getElementById('dealList'),
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
    auditList: document.getElementById('auditList')
};

// Application Init
async function init() {
    try {
        if (typeof uiData !== 'undefined') {
            state.data = Object.values(uiData);
            renderSidebar(state.data);
            setupEventListeners();
            return;
        }

        const response = await fetch('../output/ui_summary.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const jsonData = await response.json();

        state.data = Object.values(jsonData);
        renderSidebar(state.data);
        setupEventListeners();
    } catch (error) {
        console.error('Failed to load JSON data:', error);
        elements.emptyState.innerHTML = `<h2>Error Loading Data</h2><p>Please make sure you are running a local server (e.g. python -m http.server).</p>`;
    }
}

// Render the left sidebar list
function renderSidebar(deals) {
    elements.dealList.innerHTML = '';

    deals.forEach(deal => {
        const div = document.createElement('div');
        div.className = `deal-item ${state.selectedId === deal.opportunity_id ? 'active' : ''}`;
        div.onclick = () => selectDeal(deal.opportunity_id);

        const customer = deal.account_summary.customer_name || 'Customer';
        const region = deal.account_summary.region || 'Region';
        const risk = deal.risk_summary?.margin_risk || 'Low';

        div.innerHTML = `
            <div class="deal-item-header">
                <h4>${customer}</h4>
                <span class="region-tag">${region}</span>
            </div>
            <div class="deal-meta">
                <span>${deal.opportunity_id}</span>
                <span style="color: ${risk === 'High' ? 'var(--red)' : risk === 'Medium' ? 'var(--amber)' : 'var(--green)'}">Margin Risk: ${risk}</span>
            </div>
        `;

        elements.dealList.appendChild(div);
    });
}

// Select a deal
function selectDeal(id) {
    state.selectedId = id;

    // Update sidebar UI
    const items = elements.dealList.querySelectorAll('.deal-item');
    items.forEach(el => el.classList.remove('active'));

    const activeItem = Array.from(items).find(el => el.innerHTML.includes(id));
    if (activeItem) activeItem.classList.add('active');

    // Find deal data
    const deal = state.data.find(d => d.opportunity_id === id);
    if (deal) renderDealDetails(deal);
}

// Format Currency Utility
function formatCurrency(amount, region) {
    const isEU = ['Germany', 'France', 'Spain', 'Italy', 'Netherlands'].includes(region);
    const symbol = isEU ? '€' : '$';
    return `${symbol}${(amount / 1000).toFixed(1)}K`;
}

// Render the exact detail payloads
function renderDealDetails(deal) {
    // Hide empty state, show content
    elements.emptyState.style.display = 'none';
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

    // 2. Recommend
    elements.recScenario.textContent = `Scenario ${deal.recommendation.recommended_scenario}`;
    elements.execNarrative.innerHTML = `<strong>Autonomous Assessment:</strong><br/>${deal.executive_narrative || deal.recommendation.rationale}`;

    // 3. Scenario Table
    elements.scenarioTableBody.innerHTML = '';
    if (deal.scenario_comparison_table) {
        deal.scenario_comparison_table.forEach(sc => {
            const tr = document.createElement('tr');
            const isRec = sc.scenario === deal.recommendation.recommended_scenario;

            tr.innerHTML = `
                <td><strong>${sc.scenario}</strong> ${isRec ? '<span" style="color:var(--accent-blue);font-size:0.7em;margin-left:4px;">(REC)</span>' : ''}</td>
                <td>${(sc.margin * 100).toFixed(1)}%</td>
                <td>${formatCurrency(sc.lifetime_profit, region)}</td>
                <td>${sc.requires_cfo ? '<span style="color:var(--amber)">Yes</span>' : 'No'}</td>
                <td>${sc.tender_flag ? '<span style="color:var(--red)">Active</span>' : '-'}</td>
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
            li.className = iss.severity;
            li.innerHTML = `<strong>${iss.description}</strong><br/><span style="color:var(--text-muted);font-size:0.8rem;">Action: ${iss.recommended_action}</span>`;
            elements.issuesList.appendChild(li);
        });
    }

    // 5. Audits
    elements.auditList.innerHTML = '';
    if (deal.audit_refs && deal.audit_refs.length > 0) {
        deal.audit_refs.forEach(ref => {
            const li = document.createElement('li');
            li.textContent = '> ' + ref;
            elements.auditList.appendChild(li);
        });
    } else {
        elements.auditList.innerHTML = '<li>No significant structural edits required (Clean Profile).</li>';
    }
}

// Search Functionality
function setupEventListeners() {
    elements.searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = state.data.filter(d =>
            d.opportunity_id.toLowerCase().includes(term) ||
            d.account_summary.customer_name.toLowerCase().includes(term) ||
            d.account_summary.region.toLowerCase().includes(term)
        );
        renderSidebar(filtered);
    });
}

// Boot
init();
