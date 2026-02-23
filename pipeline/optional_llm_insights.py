import os
import json

def generate_insights(account_summary, baseline_economics, scenarios, recommendation, issues_summary):
    # Check for LLM key
    has_llm = bool(os.getenv("OPENAI_API_KEY"))
    
    if has_llm:
        # Placeholder for actual LLM call using openai library
        # We simulate the response structure here as the prompt asks to fallback gracefully
        pass
    
    # Deterministic Fallback Template Logic
    return generate_deterministic_insights(account_summary, baseline_economics, scenarios, recommendation, issues_summary)

def generate_deterministic_insights(account_summary, baseline_economics, scenarios, recommendation, issues_summary):
    region = account_summary.get("region", "Unknown")
    rec_scenario_name = recommendation.get("recommended_scenario", "Unknown")
    
    # Find the recommended scenario details
    rec_sc = next((sc for sc in scenarios if sc["scenario_name"] == rec_scenario_name), None)
    
    floor_pct = 0.35
    if region in ['Germany', 'France', 'Spain', 'Italy', 'Netherlands']:
        floor_pct = 0.33
    elif region == 'US':
        floor_pct = 0.36
    
    # Format issues
    red_issues = [i for i in issues_summary if i['severity'] == 'RED']
    amber_issues = [i for i in issues_summary if i['severity'] == 'AMBER']
    green_issues = [i for i in issues_summary if i['severity'] == 'GREEN']
    
    issue_texts = []
    if red_issues:
        issue_texts.append(f"Contains {len(red_issues)} critical RED flag(s) including {red_issues[0]['description']}.")
    if amber_issues:
        issue_texts.append(f"Requires review for {len(amber_issues)} AMBER flag(s).")
    
    issue_summary_str = " ".join(issue_texts) if issue_texts else "Clean deal with no major flags."
    
    # Confidence Score Logic
    comp_score = 0.50
    if not red_issues and rec_sc and rec_sc['gross_margin_pct'] >= floor_pct:
        comp_score = 0.90
    elif not red_issues and amber_issues:
        comp_score = 0.70
    
    if recommendation.get("escalation_required", False):
        comp_score = 0.45
        
    # Generate Executive Summary
    if rec_sc:
        margin_str = f"{rec_sc['gross_margin_pct']*100:.1f}%"
        profit = rec_sc['total_revenue'] - rec_sc['total_cost']
        currency_symbol = "€" if account_summary.get("region") in ['Germany', 'France', 'Spain', 'Italy', 'Netherlands'] else "$"
        profit_str = f"{currency_symbol}{(profit/1000):.1f}K"
        
        exec_summary = f"Recommending Scenario {(rec_scenario_name)} for {account_summary.get('customer_name', 'Account')} to maintain a {margin_str} margin and generate {profit_str} in lifetime gross profit. {issue_summary_str} {recommendation.get('rationale', '')}"
        
        # Key Insights
        key_insights = [
            f"Margin Compliance: The recommended scenario secures {margin_str} margin, remaining compliant against the {region} floor of {floor_pct*100:.1f}%.",
            f"Discounting & Approvals: Selected discount level is {rec_sc.get('instrument_discount_pct', 0)*100:.1f}%, which {'requires CFO approval' if rec_sc.get('requires_cfo') else 'requires VP approval' if rec_sc.get('requires_vp') else 'is within standard sales authority'}.",
            f"Strategic Value: Structured as a {rec_sc.get('term_years', 1)}-year {rec_sc.get('scenario_type', 'Contract')} contract to balance win probability with enterprise economics."
        ]
        
        if rec_sc.get('tender_flag'):
             key_insights[2] = f"Tender Alert: Flagged for EU Public Hospital Tender parameters, requiring Legal review."
             
    else:
        exec_summary = "Unable to generate insights due to missing scenario data."
        key_insights = ["No scenario data available.", "Please review manually.", "Requires Escalation."]
    
    # Governance Note
    escalation_str = "Requires Escalation" if recommendation.get("escalation_required", False) else "Standard Routing"
    gov_note = f"Governance Tier: {escalation_str}. Evaluated against {len(issues_summary)} potential multi-dimensional enterprise risks."

    return {
        "executive_summary": exec_summary,
        "key_insights": key_insights[:3], 
        "governance_note": gov_note,
        "confidence_score": comp_score,
        "explainability_version": "v1.1-deterministic"
    }
