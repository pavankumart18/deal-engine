import json
import os
import pandas as pd
from optional_llm_insights import generate_insights

def main():
    OUTPUT_DIR = "output"
    
    # 1. Load data
    packets_path = f"{OUTPUT_DIR}/approval_packets.jsonl"
    with open(packets_path, 'r') as f:
        packets = [json.loads(line) for line in f]
        
    with open(f"{OUTPUT_DIR}/ui_summary.json", 'r') as f:
        ui_summary = json.load(f)
        
    risk_df = pd.read_csv(f"{OUTPUT_DIR}/opportunity_risk_scores.csv")
    risk_lookup = risk_df.set_index('opportunity_id').to_dict(orient='index')
    
    audits_path = f"{OUTPUT_DIR}/audit_trail.jsonl"
    with open(audits_path, 'r') as f:
        audits = [json.loads(line) for line in f]
    audit_lookup = {}
    for a in audits:
        opp_id = a['opportunity_id']
        if opp_id not in audit_lookup:
            audit_lookup[opp_id] = []
        audit_lookup[opp_id].append(a['audit_id'])

    # 2. Enrich Packets
    enriched_packets = []
    
    for packet in packets:
        opp_id = packet['opportunity_id']
        
        # Scenario Table structure
        scenario_table = []
        for sc in packet['scenarios']:
            profit = sc['total_revenue'] - sc['total_cost']
            scenario_table.append({
                "scenario": sc['scenario_name'],
                "margin": round(sc['gross_margin_pct'], 4),
                "requires_cfo": sc['requires_cfo'],
                "tender_flag": sc['tender_flag'],
                "lifetime_profit": round(profit, 2)
            })
            
        # Insights
        insights = generate_insights(
            packet['account_summary'], 
            packet['baseline_economics'], 
            packet['scenarios'], 
            packet['recommendation'], 
            packet['issues_summary']
        )
        
        packet['executive_summary'] = insights['executive_summary']
        packet['key_insights'] = insights['key_insights']
        packet['governance_note'] = insights['governance_note']
        packet['confidence_score'] = insights['confidence_score']
        packet['explainability_version'] = insights['explainability_version']
        packet['scenario_table'] = scenario_table
        
        enriched_packets.append(packet)
        
        # Enrich UI summary
        if opp_id in ui_summary:
            ui = ui_summary[opp_id]
            ui['executive_narrative'] = insights['executive_summary']
            ui['scenario_comparison_table'] = scenario_table
            
            # Count issues
            reds = len([i for i in packet['issues_summary'] if i['severity'] == 'RED'])
            ambers = len([i for i in packet['issues_summary'] if i['severity'] == 'AMBER'])
            greens = len([i for i in packet['issues_summary'] if i['severity'] == 'GREEN'])
            
            ui['issue_summary_counts'] = {
                "RED": reds,
                "AMBER": ambers,
                "GREEN": greens
            }
            
            ui['approval_routing_summary'] = "Escalation Required" if packet['recommendation']['escalation_required'] else ("Requires Routing" if packet['required_approvals'] else "Standard Approvals")
            
            if opp_id in risk_lookup:
                urisk = risk_lookup[opp_id]
                ui['risk_summary'] = {
                    "win_risk": urisk['win_risk'],
                    "margin_risk": urisk['margin_risk'],
                    "compliance_risk": urisk['compliance_risk']
                }
            
            if opp_id in audit_lookup:
                ui['audit_refs'] = audit_lookup[opp_id]
            else:
                ui['audit_refs'] = []
                
            ui['confidence_score'] = packet['confidence_score']

    # Save outputs
    with open(f"{OUTPUT_DIR}/approval_packets.jsonl", 'w') as f:
        for p in enriched_packets:
            f.write(json.dumps(p) + '\n')
            
    with open(f"{OUTPUT_DIR}/ui_summary.json", 'w') as f:
        json.dump(ui_summary, f, indent=2)

    # 3. Print Demo Output
    print("=" * 60)
    print("🚀 EXECUTIVE EXPLAINABILITY & NARRATIVE RUN COMPLETE")
    print("=" * 60)
    
    # Demo 3 opportunities handling edge cases
    flip_rec = [p for p in enriched_packets if 'Scenario A provides highest win probability' in p['recommendation']['rationale']]
    escalation_rec = [p for p in enriched_packets if p['recommendation']['escalation_required']]
    clean_rec = [p for p in enriched_packets if not p['recommendation']['escalation_required'] and p not in flip_rec]
    
    demo_opps = []
    if flip_rec: demo_opps.append(flip_rec[0]['opportunity_id'])
    if escalation_rec: demo_opps.append(escalation_rec[0]['opportunity_id'])
    if clean_rec: demo_opps.append(clean_rec[0]['opportunity_id'])

    for oid in demo_opps[:3]:
        packet = ui_summary[oid]
        print(f"\n🎯 DEAL HEADLINE: {oid} - {packet['account_summary']['customer_name']}")
        print(f"   Complexity: {packet['approval_routing_summary']} ({packet['issue_summary_counts']['RED']} RED, {packet['issue_summary_counts']['AMBER']} AMBER FLAGS)")
        print(f"   Recommended Scenario: {packet['recommendation']['recommended_scenario']} (Confidence Score: {packet.get('confidence_score', 0):.2f})")
        print(f"   Approvals Required: {', '.join(packet['required_approvals']) if packet['required_approvals'] else 'None'}")
        
        print(f"\n   --- Scenario Snapshot ---")
        for sc in packet['scenario_comparison_table']:
            curr = "€" if packet['account_summary']['region'] in ['Germany', 'France', 'Spain', 'Italy', 'Netherlands'] else "$"
            print(f"      > [{sc['scenario']}] Margin: {sc['margin']*100:.1f}% | Profit: {curr}{sc['lifetime_profit']/1000:,.1f}K | Requires CFO: {sc['requires_cfo']}")
            
        print(f"\n   --- Executive Narrative ---")
        print(f"   {packet['executive_narrative']}")
        
        print(f"\n   Audit Keys (Traceability): {', '.join(packet['audit_refs'][:2])}{'...' if len(packet['audit_refs']) > 2 else ''}")
        print("-" * 60)
        
    print("\n✅ Enriched existing Part 2 outputs with Narrative details flawlessly.")

if __name__ == "__main__":
    import sys
    sys.path.append(os.path.dirname(os.path.abspath(__file__)))
    main()
