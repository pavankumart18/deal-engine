const uiData = {
  "OPP-2000": {
    "opportunity_id": "OPP-2000",
    "account_summary": {
      "customer_id": "CUST-1000",
      "customer_name": "HealthCenter 0",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 678359.8,
      "total_cost": 431327.64,
      "gross_margin_pct": 0.36416096590629343
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2000",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 648013.3,
        "total_cost": 431327.64,
        "gross_margin_pct": 0.1,
        "instrument_discount_pct": 0.29,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2000",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 676934.4,
        "total_cost": 431327.64,
        "gross_margin_pct": 0.3628220991576141,
        "instrument_discount_pct": 0.24,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2000",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 920097.7000000001,
        "total_cost": 541299.54,
        "gross_margin_pct": 0.41169341038457113,
        "instrument_discount_pct": 0.19,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2000",
      "recommended_scenario": "B",
      "rationale": "Scenario A provides highest win probability but violates margin floor policy. Scenario B recommended instead to maintain compliance.",
      "escalation_required": false,
      "expected_margin": 0.41169341038457113
    },
    "issues_summary": [
      {
        "issue_id": "e5ec07da-f20b-4cf3-bef8-d69b6efb10a2",
        "severity": "AMBER",
        "opportunity_id": "OPP-2000",
        "customer_id": "CUST-1000",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.24",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "42f62402-1073-4ec9-934f-e1c84ee4a16e",
        "severity": "AMBER",
        "opportunity_id": "OPP-2000",
        "customer_id": "CUST-1000",
        "source_table": "sap_pricing",
        "rule_id": "R_DEPRECATED_SKU",
        "field": "deprecated_flag",
        "current_value": "True",
        "expected_value": "False",
        "description": "Opportunity includes deprecated SKU",
        "recommended_action": "Suggest upgrade to current model"
      },
      {
        "issue_id": "c1d184ba-e1e2-4886-9e1a-dc0e15ba7588",
        "severity": "AMBER",
        "opportunity_id": "OPP-2000",
        "customer_id": "CUST-1000",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "191e98f8-7027-4f7c-a440-0af5d23049f7",
        "severity": "GREEN",
        "opportunity_id": "OPP-2000",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario B for HealthCenter 0 to maintain a 36.3% margin and generate \u20ac245.6K in lifetime gross profit. Requires review for 3 AMBER flag(s). Scenario A provides highest win probability but violates margin floor policy. Scenario B recommended instead to maintain compliance.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.1,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 216685.66
      },
      {
        "scenario": "B",
        "margin": 0.3628,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 245606.76
      },
      {
        "scenario": "C",
        "margin": 0.4117,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 378798.16
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 3,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "8ba4a008-4593-4dbc-845e-47d7cb19a11c",
      "eb36f368-be25-44eb-98c9-a215c521625f",
      "393d27a7-f683-4740-b3ab-477ad93c0d12"
    ],
    "confidence_score": 0.9
  },
  "OPP-2001": {
    "opportunity_id": "OPP-2001",
    "account_summary": {
      "customer_id": "CUST-1001",
      "customer_name": "BioLabs 1",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 580373.6,
      "total_cost": 303128.93000000005,
      "gross_margin_pct": 0.47770034681108847
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2001",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 559532.8500000001,
        "total_cost": 303128.93000000005,
        "gross_margin_pct": 0.45824641037608427,
        "instrument_discount_pct": 0.21000000000000002,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2001",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 577859.2,
        "total_cost": 303128.93000000005,
        "gross_margin_pct": 0.4754276993426771,
        "instrument_discount_pct": 0.16,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2001",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 821405.75,
        "total_cost": 420767.83,
        "gross_margin_pct": 0.4877466708748995,
        "instrument_discount_pct": 0.11,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2001",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4877466708748995
    },
    "issues_summary": [
      {
        "issue_id": "f4e059d1-db5f-4e5b-9d80-134d4229575e",
        "severity": "AMBER",
        "opportunity_id": "OPP-2001",
        "customer_id": "CUST-1001",
        "source_table": "sap_pricing",
        "rule_id": "R_DEPRECATED_SKU",
        "field": "deprecated_flag",
        "current_value": "True",
        "expected_value": "False",
        "description": "Opportunity includes deprecated SKU",
        "recommended_action": "Suggest upgrade to current model"
      },
      {
        "issue_id": "2235e1ba-240d-4ecd-9f3e-317713425c39",
        "severity": "AMBER",
        "opportunity_id": "OPP-2001",
        "customer_id": "CUST-1001",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:GBP",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "8ab43660-df1a-482a-a535-179c6c56f627",
        "severity": "GREEN",
        "opportunity_id": "OPP-2001",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 1 to maintain a 48.8% margin and generate \u20ac400.6K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4582,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 256403.92
      },
      {
        "scenario": "B",
        "margin": 0.4754,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 274730.27
      },
      {
        "scenario": "C",
        "margin": 0.4877,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 400637.92
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "0934e128-5e96-4d9f-b98e-3816ff8ff167",
      "035335b4-3bbb-4493-83fb-9e3236476fc2"
    ],
    "confidence_score": 0.9
  },
  "OPP-2002": {
    "opportunity_id": "OPP-2002",
    "account_summary": {
      "customer_id": "CUST-1002",
      "customer_name": "HealthCenter 2",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 794254.68,
      "total_cost": 452925.04,
      "gross_margin_pct": 0.42974835225396474
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2002",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 755876.4800000001,
        "total_cost": 452925.04,
        "gross_margin_pct": 0.4007949023628835,
        "instrument_discount_pct": 0.18,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2002",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 787811.88,
        "total_cost": 452925.04,
        "gross_margin_pct": 0.42508478039198905,
        "instrument_discount_pct": 0.13,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2002",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 876541.48,
        "total_cost": 487764.94,
        "gross_margin_pct": 0.4435346744799801,
        "instrument_discount_pct": 0.08,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2002",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4435346744799801
    },
    "issues_summary": [
      {
        "issue_id": "03f67a19-b4fb-4f6b-bf10-ff2ae9666339",
        "severity": "AMBER",
        "opportunity_id": "OPP-2002",
        "customer_id": "CUST-1002",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "b874f546-24f9-46d1-9542-233b1aa45e7d",
        "severity": "GREEN",
        "opportunity_id": "OPP-2002",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 2 to maintain a 44.4% margin and generate \u20ac388.8K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4008,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 302951.44
      },
      {
        "scenario": "B",
        "margin": 0.4251,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 334886.84
      },
      {
        "scenario": "C",
        "margin": 0.4435,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 388776.54
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "c550a9da-c07b-49ed-a4b3-bc9f34630255"
    ],
    "confidence_score": 0.9
  },
  "OPP-2003": {
    "opportunity_id": "OPP-2003",
    "account_summary": {
      "customer_id": "CUST-1003",
      "customer_name": "BioLabs 3",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 2361530.16,
      "total_cost": 1249464.62,
      "gross_margin_pct": 0.470908887312284
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2003",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2235393.96,
        "total_cost": 1249464.62,
        "gross_margin_pct": 0.44105395185016955,
        "instrument_discount_pct": 0.21000000000000002,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2003",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2345575.3600000003,
        "total_cost": 1249464.62,
        "gross_margin_pct": 0.46730996526157237,
        "instrument_discount_pct": 0.16,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2003",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2561022.96,
        "total_cost": 1318052.52,
        "gross_margin_pct": 0.4853413887394434,
        "instrument_discount_pct": 0.11,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2003",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4853413887394434
    },
    "issues_summary": [
      {
        "issue_id": "1313a620-1fd9-48f3-9fce-a56e4992c586",
        "severity": "AMBER",
        "opportunity_id": "OPP-2003",
        "customer_id": "CUST-1003",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "815cc743-068f-4ca4-9941-453273c53ab1",
        "severity": "GREEN",
        "opportunity_id": "OPP-2003",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 3 to maintain a 48.5% margin and generate \u20ac1243.0K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4411,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 985929.34
      },
      {
        "scenario": "B",
        "margin": 0.4673,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1096110.74
      },
      {
        "scenario": "C",
        "margin": 0.4853,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1242970.44
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "2b3ad2a2-0efa-4dc9-81fa-cc899272b28c"
    ],
    "confidence_score": 0.9
  },
  "OPP-2004": {
    "opportunity_id": "OPP-2004",
    "account_summary": {
      "customer_id": "CUST-1004",
      "customer_name": "HealthCenter 4",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 1156203.18,
      "total_cost": 677978.86,
      "gross_margin_pct": 0.41361616043989774
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2004",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1098635.88,
        "total_cost": 677978.86,
        "gross_margin_pct": 0.3828902984672228,
        "instrument_discount_pct": 0.22000000000000003,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2004",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1153385.18,
        "total_cost": 677978.86,
        "gross_margin_pct": 0.4121834823644951,
        "instrument_discount_pct": 0.17,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2004",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1305609.48,
        "total_cost": 729534.36,
        "gross_margin_pct": 0.4412308035630991,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2004",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4412308035630991
    },
    "issues_summary": [
      {
        "issue_id": "81fd096b-c3f5-4912-9889-618753b22131",
        "severity": "AMBER",
        "opportunity_id": "OPP-2004",
        "customer_id": "CUST-1004",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "c9c899ff-a1dd-4ac2-906f-48f1e9250a48",
        "severity": "GREEN",
        "opportunity_id": "OPP-2004",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 4 to maintain a 44.1% margin and generate \u20ac576.1K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3829,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 420657.02
      },
      {
        "scenario": "B",
        "margin": 0.4122,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 475406.32
      },
      {
        "scenario": "C",
        "margin": 0.4412,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 576075.12
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "4897356b-bcf3-4467-890d-eeacbb1661d8"
    ],
    "confidence_score": 0.9
  },
  "OPP-2005": {
    "opportunity_id": "OPP-2005",
    "account_summary": {
      "customer_id": "CUST-1005",
      "customer_name": "BioLabs 5",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 1498760.0,
      "total_cost": 732023.4,
      "gross_margin_pct": 0.5115806399957298
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2005",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1442664.75,
        "total_cost": 732023.4,
        "gross_margin_pct": 0.49258939057047035,
        "instrument_discount_pct": 0.25,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2005",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1492868.9,
        "total_cost": 732023.4,
        "gross_margin_pct": 0.5096532589030422,
        "instrument_discount_pct": 0.2,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2005",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1739557.65,
        "total_cost": 834193.1000000001,
        "gross_margin_pct": 0.5204567666958321,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2005",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5204567666958321
    },
    "issues_summary": [
      {
        "issue_id": "f6eb5f15-9284-43e9-a118-62efb49ea3bb",
        "severity": "AMBER",
        "opportunity_id": "OPP-2005",
        "customer_id": "CUST-1005",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "2d736898-6caf-4585-b405-4fc61aa59cb1",
        "severity": "GREEN",
        "opportunity_id": "OPP-2005",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 5 to maintain a 52.0% margin and generate $905.4K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4926,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 710641.35
      },
      {
        "scenario": "B",
        "margin": 0.5097,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 760845.5
      },
      {
        "scenario": "C",
        "margin": 0.5205,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 905364.55
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "0985ee91-2ccd-4933-bbdf-821edee3b25c"
    ],
    "confidence_score": 0.9
  },
  "OPP-2006": {
    "opportunity_id": "OPP-2006",
    "account_summary": {
      "customer_id": "CUST-1006",
      "customer_name": "HealthCenter 6",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 249907.72,
      "total_cost": 155150.31,
      "gross_margin_pct": 0.3791695990824133
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2006",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 239573.17,
        "total_cost": 155150.31,
        "gross_margin_pct": 0.3523886251536431,
        "instrument_discount_pct": 0.13,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2006",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 246866.22,
        "total_cost": 155150.31,
        "gross_margin_pct": 0.3715206965132775,
        "instrument_discount_pct": 0.08,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2006",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 307828.27,
        "total_cost": 188067.81,
        "gross_margin_pct": 0.3890495827430015,
        "instrument_discount_pct": 0.03,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2006",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.3890495827430015
    },
    "issues_summary": [
      {
        "issue_id": "75cd5b2e-ecca-40da-909e-11342df7ae75",
        "severity": "AMBER",
        "opportunity_id": "OPP-2006",
        "customer_id": "CUST-1006",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "76f5590d-1f42-4dc5-ad7c-ba75c348c4bb",
        "severity": "GREEN",
        "opportunity_id": "OPP-2006",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 6 to maintain a 38.9% margin and generate \u20ac119.8K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3524,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 84422.86
      },
      {
        "scenario": "B",
        "margin": 0.3715,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 91715.91
      },
      {
        "scenario": "C",
        "margin": 0.389,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 119760.46
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "d57f9ced-cb16-4235-9e11-14db022585f6"
    ],
    "confidence_score": 0.9
  },
  "OPP-2007": {
    "opportunity_id": "OPP-2007",
    "account_summary": {
      "customer_id": "CUST-1007",
      "customer_name": "BioLabs 7",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 2869394.2,
      "total_cost": 1671679.08,
      "gross_margin_pct": 0.4174104485190637
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2007",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2786717.8,
        "total_cost": 1671679.08,
        "gross_margin_pct": 0.40012616993367606,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2007",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2866187.1,
        "total_cost": 1671679.08,
        "gross_margin_pct": 0.4167585640169827,
        "instrument_discount_pct": 0.1,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2007",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 4320461.199999999,
        "total_cost": 2365495.68,
        "gross_margin_pct": 0.4524900073168113,
        "instrument_discount_pct": 0.05,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2007",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4524900073168113
    },
    "issues_summary": [
      {
        "issue_id": "d4ad21ff-0330-4946-b841-80dbe5583cae",
        "severity": "AMBER",
        "opportunity_id": "OPP-2007",
        "customer_id": "CUST-1007",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "13d95f3e-9fd7-4eb7-9e0c-681b9278f510",
        "severity": "GREEN",
        "opportunity_id": "OPP-2007",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 7 to maintain a 45.2% margin and generate \u20ac1955.0K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4001,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1115038.72
      },
      {
        "scenario": "B",
        "margin": 0.4168,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1194508.02
      },
      {
        "scenario": "C",
        "margin": 0.4525,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1954965.52
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "279b66a8-4c87-4282-b4f6-be0c09c619b2"
    ],
    "confidence_score": 0.9
  },
  "OPP-2008": {
    "opportunity_id": "OPP-2008",
    "account_summary": {
      "customer_id": "CUST-1008",
      "customer_name": "HealthCenter 8",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 1433857.65,
      "total_cost": 919081.9500000001,
      "gross_margin_pct": 0.3590145088670412
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2008",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1382184.9,
        "total_cost": 919081.9500000001,
        "gross_margin_pct": 0.3350513740961863,
        "instrument_discount_pct": 0.22000000000000003,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2008",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1413984.75,
        "total_cost": 919081.9500000001,
        "gross_margin_pct": 0.35000575501256287,
        "instrument_discount_pct": 0.17,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2008",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1624566.0,
        "total_cost": 1021721.25,
        "gross_margin_pct": 0.37108049165130874,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2008",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.37108049165130874
    },
    "issues_summary": [
      {
        "issue_id": "c1723162-e264-4315-afcb-b131c64a97f0",
        "severity": "AMBER",
        "opportunity_id": "OPP-2008",
        "customer_id": "CUST-1008",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "8ddee633-de97-4e92-954f-66358036f716",
        "severity": "GREEN",
        "opportunity_id": "OPP-2008",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 8 to maintain a 37.1% margin and generate \u20ac602.8K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3351,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 463102.95
      },
      {
        "scenario": "B",
        "margin": 0.35,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 494902.8
      },
      {
        "scenario": "C",
        "margin": 0.3711,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 602844.75
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "53744e97-c83e-4781-a626-3c553c318f4b"
    ],
    "confidence_score": 0.9
  },
  "OPP-2009": {
    "opportunity_id": "OPP-2009",
    "account_summary": {
      "customer_id": "CUST-1009",
      "customer_name": "BioLabs 9",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 1872003.6,
      "total_cost": 1047947.85,
      "gross_margin_pct": 0.44019987461562576
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2009",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1766890.0999999999,
        "total_cost": 1047947.85,
        "gross_margin_pct": 0.40689698244389955,
        "instrument_discount_pct": 0.27,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2009",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1867079.6,
        "total_cost": 1047947.85,
        "gross_margin_pct": 0.4387235284451719,
        "instrument_discount_pct": 0.22,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2009",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2189654.1,
        "total_cost": 1168988.35,
        "gross_margin_pct": 0.4661310432547314,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2009",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4661310432547314
    },
    "issues_summary": [
      {
        "issue_id": "127a06ee-2a4d-4382-b695-8f78a6d15e50",
        "severity": "AMBER",
        "opportunity_id": "OPP-2009",
        "customer_id": "CUST-1009",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.22",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "d0eca1a5-d0b8-4fbf-b43b-a8a6ab0909d7",
        "severity": "AMBER",
        "opportunity_id": "OPP-2009",
        "customer_id": "CUST-1009",
        "source_table": "contracts",
        "rule_id": "R_EXPIRED_ACTIVE",
        "field": "end_date",
        "current_value": "2025-12-29",
        "expected_value": "Active contract should be in future",
        "description": "Ghost contract detected",
        "recommended_action": "Close out or renew contract in CRM"
      },
      {
        "issue_id": "fa6f600e-7b4f-4d73-ada3-1f2dcb7f2427",
        "severity": "AMBER",
        "opportunity_id": "OPP-2009",
        "customer_id": "CUST-1009",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "bf3b4560-98f0-4ec4-8582-4eeef27c59e0",
        "severity": "GREEN",
        "opportunity_id": "OPP-2009",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "Legal",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 9 to maintain a 46.6% margin and generate \u20ac1020.7K in lifetime gross profit. Requires review for 3 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4069,
        "requires_cfo": false,
        "tender_flag": true,
        "lifetime_profit": 718942.25
      },
      {
        "scenario": "B",
        "margin": 0.4387,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 819131.75
      },
      {
        "scenario": "C",
        "margin": 0.4661,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1020665.75
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 3,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "8a70e77c-4155-4c4a-b1ff-b56524796eca",
      "0032316f-f736-4f8b-a764-c7541fdd174d",
      "c2c13c42-1adb-4caa-84b7-042415c8425d"
    ],
    "confidence_score": 0.9
  },
  "OPP-2010": {
    "opportunity_id": "OPP-2010",
    "account_summary": {
      "customer_id": "CUST-1009",
      "customer_name": "BioLabs 9 Inc.",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 1696260.2799999998,
      "total_cost": 792456.8200000001,
      "gross_margin_pct": 0.5328212130275195
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2010",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1617726.9300000002,
        "total_cost": 792456.8200000001,
        "gross_margin_pct": 0.5101417888864593,
        "instrument_discount_pct": 0.21000000000000002,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2010",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1687973.48,
        "total_cost": 792456.8200000001,
        "gross_margin_pct": 0.5305276834088649,
        "instrument_discount_pct": 0.16,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2010",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1938383.2300000002,
        "total_cost": 890825.22,
        "gross_margin_pct": 0.5404287417406104,
        "instrument_discount_pct": 0.11,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2010",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5404287417406104
    },
    "issues_summary": [
      {
        "issue_id": "e620bd19-4fb6-45ec-8652-8081baa83560",
        "severity": "AMBER",
        "opportunity_id": "OPP-2010",
        "customer_id": "CUST-1009",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "a55fbd2f-9e65-4cb8-b9f8-0517bc5f0781",
        "severity": "GREEN",
        "opportunity_id": "OPP-2010",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 9 Inc. to maintain a 54.0% margin and generate \u20ac1047.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.5101,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 825270.11
      },
      {
        "scenario": "B",
        "margin": 0.5305,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 895516.66
      },
      {
        "scenario": "C",
        "margin": 0.5404,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1047558.01
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "1f75f99a-d3ed-4b29-af91-784922b78360"
    ],
    "confidence_score": 0.9
  },
  "OPP-2011": {
    "opportunity_id": "OPP-2011",
    "account_summary": {
      "customer_id": "CUST-1011",
      "customer_name": "BioLabs 11",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 1420213.6,
      "total_cost": 763493.04,
      "gross_margin_pct": 0.4624097107646343
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2011",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1381835.4,
        "total_cost": 763493.04,
        "gross_margin_pct": 0.4474790268073896,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2011",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1404668.8,
        "total_cost": 763493.04,
        "gross_margin_pct": 0.4564604553044817,
        "instrument_discount_pct": 0.1,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2011",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1776660.4,
        "total_cost": 953616.94,
        "gross_margin_pct": 0.4632531124124791,
        "instrument_discount_pct": 0.05,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2011",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4632531124124791
    },
    "issues_summary": [
      {
        "issue_id": "325489c2-1999-4697-a6a4-628cbbc0e7da",
        "severity": "GREEN",
        "opportunity_id": "OPP-2011",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 11 to maintain a 46.3% margin and generate \u20ac823.0K in lifetime gross profit. Clean deal with no major flags. Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4475,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 618342.36
      },
      {
        "scenario": "B",
        "margin": 0.4565,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 641175.76
      },
      {
        "scenario": "C",
        "margin": 0.4633,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 823043.46
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 0,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [],
    "confidence_score": 0.9
  },
  "OPP-2012": {
    "opportunity_id": "OPP-2012",
    "account_summary": {
      "customer_id": "CUST-1012",
      "customer_name": "HealthCenter 12",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 686958.02,
      "total_cost": 490560.4,
      "gross_margin_pct": 0.28589464608041115
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2012",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 654045.9199999999,
        "total_cost": 490560.4,
        "gross_margin_pct": 0.24996030859729226,
        "instrument_discount_pct": 0.24,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2012",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 679611.62,
        "total_cost": 490560.4,
        "gross_margin_pct": 0.27817537904958123,
        "instrument_discount_pct": 0.19,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2012",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 774721.92,
        "total_cost": 532679.1,
        "gross_margin_pct": 0.31242541840045013,
        "instrument_discount_pct": 0.14,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2012",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.31242541840045013
    },
    "issues_summary": [
      {
        "issue_id": "0071b5f7-a1a6-4e9b-9189-da159d53f649",
        "severity": "RED",
        "opportunity_id": "OPP-2012",
        "customer_id": "CUST-1012",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.286",
        "expected_value": ">=0.35",
        "description": "Margin below UK floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "677e3da4-3b66-462a-bcd7-f9ff385b3736",
        "severity": "AMBER",
        "opportunity_id": "OPP-2012",
        "customer_id": "CUST-1012",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 12 to maintain a 31.2% margin and generate $242.0K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below UK floor. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.25,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 163485.52
      },
      {
        "scenario": "B",
        "margin": 0.2782,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 189051.22
      },
      {
        "scenario": "C",
        "margin": 0.3124,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 242042.82
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "4952cd15-bbf2-4c9f-b255-5b211ac2b212",
      "ed07fee2-74cb-4b4c-8b91-c8e00aa15145"
    ],
    "confidence_score": 0.45
  },
  "OPP-2013": {
    "opportunity_id": "OPP-2013",
    "account_summary": {
      "customer_id": "CUST-1013",
      "customer_name": "BioLabs 13",
      "region": "Canada"
    },
    "baseline_economics": {
      "total_revenue": 832042.2000000001,
      "total_cost": 494172.14,
      "gross_margin_pct": 0.40607322561283554
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2013",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 793664.0,
        "total_cost": 494172.14,
        "gross_margin_pct": 0.3773534644383517,
        "instrument_discount_pct": 0.25,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2013",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 830110.8,
        "total_cost": 494172.14,
        "gross_margin_pct": 0.4046913496366991,
        "instrument_discount_pct": 0.2,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2013",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1080685.7999999998,
        "total_cost": 605099.04,
        "gross_margin_pct": 0.4400786611612736,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2013",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4400786611612736
    },
    "issues_summary": [
      {
        "issue_id": "94f5e58d-14fc-4e0e-82af-4e08c6e16b15",
        "severity": "AMBER",
        "opportunity_id": "OPP-2013",
        "customer_id": "CUST-1013",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:USD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "dadcd220-fc5c-471a-8479-f7ed2916b124",
        "severity": "GREEN",
        "opportunity_id": "OPP-2013",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 13 to maintain a 44.0% margin and generate $475.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3774,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 299491.86
      },
      {
        "scenario": "B",
        "margin": 0.4047,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 335938.66
      },
      {
        "scenario": "C",
        "margin": 0.4401,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 475586.76
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "1a04e72a-a593-4d09-82e9-bd4890adcf55"
    ],
    "confidence_score": 0.9
  },
  "OPP-2014": {
    "opportunity_id": "OPP-2014",
    "account_summary": {
      "customer_id": "CUST-1014",
      "customer_name": "HealthCenter 14",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 733354.9,
      "total_cost": 428125.3,
      "gross_margin_pct": 0.4162099414621761
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2014",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 716898.85,
        "total_cost": 428125.3,
        "gross_margin_pct": 0.40280933635198324,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2014",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 726964.1,
        "total_cost": 428125.3,
        "gross_margin_pct": 0.4110777960012056,
        "instrument_discount_pct": 0.1,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2014",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 949211.5499999999,
        "total_cost": 540607.2,
        "gross_margin_pct": 0.4304671071480325,
        "instrument_discount_pct": 0.05,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2014",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4304671071480325
    },
    "issues_summary": [
      {
        "issue_id": "407e3e83-a1f6-48cc-87b8-3293bbff737b",
        "severity": "AMBER",
        "opportunity_id": "OPP-2014",
        "customer_id": "CUST-1014",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "d3088f4b-a17b-4802-9210-2fdb6fc5f7c2",
        "severity": "GREEN",
        "opportunity_id": "OPP-2014",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 14 to maintain a 43.0% margin and generate \u20ac408.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4028,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 288773.55
      },
      {
        "scenario": "B",
        "margin": 0.4111,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 298838.8
      },
      {
        "scenario": "C",
        "margin": 0.4305,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 408604.35
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "b9880d5f-68cc-4288-aa44-4e29f144bcd3"
    ],
    "confidence_score": 0.9
  },
  "OPP-2015": {
    "opportunity_id": "OPP-2015",
    "account_summary": {
      "customer_id": "CUST-1015",
      "customer_name": "BioLabs 15",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 1672472.1900000002,
      "total_cost": 942139.57,
      "gross_margin_pct": 0.43667848372414503
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2015",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1605310.34,
        "total_cost": 942139.57,
        "gross_margin_pct": 0.413110632552208,
        "instrument_discount_pct": 0.18,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2015",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1652939.79,
        "total_cost": 942139.57,
        "gross_margin_pct": 0.4300218461072923,
        "instrument_discount_pct": 0.13,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2015",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1855499.6400000001,
        "total_cost": 1032626.3699999999,
        "gross_margin_pct": 0.44347800035143103,
        "instrument_discount_pct": 0.08,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2015",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.44347800035143103
    },
    "issues_summary": [
      {
        "issue_id": "e37daa31-e9b7-4bf4-928f-674b4fb4d927",
        "severity": "GREEN",
        "opportunity_id": "OPP-2015",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 15 to maintain a 44.3% margin and generate \u20ac822.9K in lifetime gross profit. Clean deal with no major flags. Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4131,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 663170.77
      },
      {
        "scenario": "B",
        "margin": 0.43,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 710800.22
      },
      {
        "scenario": "C",
        "margin": 0.4435,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 822873.27
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 0,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [],
    "confidence_score": 0.9
  },
  "OPP-2016": {
    "opportunity_id": "OPP-2016",
    "account_summary": {
      "customer_id": "CUST-1016",
      "customer_name": "HealthCenter 16",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 1784440.3199999998,
      "total_cost": 832523.28,
      "gross_margin_pct": 0.5334541196648145
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2016",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1694687.9200000002,
        "total_cost": 832523.28,
        "gross_margin_pct": 0.5087453741925534,
        "instrument_discount_pct": 0.21000000000000002,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2016",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1771039.92,
        "total_cost": 832523.28,
        "gross_margin_pct": 0.5299240459808494,
        "instrument_discount_pct": 0.16,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2016",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1930658.32,
        "total_cost": 883090.08,
        "gross_margin_pct": 0.5425963927164492,
        "instrument_discount_pct": 0.11,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2016",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5425963927164492
    },
    "issues_summary": [
      {
        "issue_id": "d329f75d-229f-4bc7-9bce-59afb85d0603",
        "severity": "AMBER",
        "opportunity_id": "OPP-2016",
        "customer_id": "CUST-1016",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "fa90c84f-9d46-407d-aae7-bab5e4dde33e",
        "severity": "GREEN",
        "opportunity_id": "OPP-2016",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 16 to maintain a 54.3% margin and generate \u20ac1047.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.5087,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 862164.64
      },
      {
        "scenario": "B",
        "margin": 0.5299,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 938516.64
      },
      {
        "scenario": "C",
        "margin": 0.5426,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1047568.24
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "49e1fee3-7a50-48f3-9db2-181b644b9aad"
    ],
    "confidence_score": 0.9
  },
  "OPP-2017": {
    "opportunity_id": "OPP-2017",
    "account_summary": {
      "customer_id": "CUST-1017",
      "customer_name": "BioLabs 17",
      "region": "Canada"
    },
    "baseline_economics": {
      "total_revenue": 589485.8,
      "total_cost": 382229.1,
      "gross_margin_pct": 0.3515889610911748
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2017",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 567544.4,
        "total_cost": 382229.1,
        "gross_margin_pct": 0.3265212378097644,
        "instrument_discount_pct": 0.2,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2017",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 586379.7000000001,
        "total_cost": 382229.1,
        "gross_margin_pct": 0.3481542761456443,
        "instrument_discount_pct": 0.15,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2017",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 815484.7999999999,
        "total_cost": 493576.2,
        "gross_margin_pct": 0.39474506453093905,
        "instrument_discount_pct": 0.09999999999999999,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2017",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.39474506453093905
    },
    "issues_summary": [
      {
        "issue_id": "7896ec0e-47ae-42aa-85ca-ecf1e119a6a4",
        "severity": "GREEN",
        "opportunity_id": "OPP-2017",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 17 to maintain a 39.5% margin and generate $321.9K in lifetime gross profit. Clean deal with no major flags. Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3265,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 185315.3
      },
      {
        "scenario": "B",
        "margin": 0.3482,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 204150.6
      },
      {
        "scenario": "C",
        "margin": 0.3947,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 321908.6
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 0,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [],
    "confidence_score": 0.9
  },
  "OPP-2018": {
    "opportunity_id": "OPP-2018",
    "account_summary": {
      "customer_id": "CUST-1018",
      "customer_name": "HealthCenter 18",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 1302042.96,
      "total_cost": 670314.1399999999,
      "gross_margin_pct": 0.4851827776865366
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2018",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1259997.56,
        "total_cost": 670314.1399999999,
        "gross_margin_pct": 0.46800362057843997,
        "instrument_discount_pct": 0.18,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2018",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1287718.26,
        "total_cost": 670314.1399999999,
        "gross_margin_pct": 0.4794559021008214,
        "instrument_discount_pct": 0.13,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2018",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1496040.16,
        "total_cost": 770164.5399999999,
        "gross_margin_pct": 0.48519795083575834,
        "instrument_discount_pct": 0.08,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2018",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.48519795083575834
    },
    "issues_summary": [
      {
        "issue_id": "0dc058c1-b713-4cd3-bbda-3883b1805ba2",
        "severity": "AMBER",
        "opportunity_id": "OPP-2018",
        "customer_id": "CUST-1018",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "be05321b-f5a6-4b32-8844-4ec5a9fdd66b",
        "severity": "GREEN",
        "opportunity_id": "OPP-2018",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 18 to maintain a 48.5% margin and generate \u20ac725.9K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.468,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 589683.42
      },
      {
        "scenario": "B",
        "margin": 0.4795,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 617404.12
      },
      {
        "scenario": "C",
        "margin": 0.4852,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 725875.62
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "6dd33e37-944d-4fb8-b98e-9e299a4edda8"
    ],
    "confidence_score": 0.9
  },
  "OPP-2019": {
    "opportunity_id": "OPP-2019",
    "account_summary": {
      "customer_id": "CUST-1019",
      "customer_name": "BioLabs 19",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 805377.15,
      "total_cost": 539284.53,
      "gross_margin_pct": 0.3303950453523545
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2019",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 776593.5,
        "total_cost": 539284.53,
        "gross_margin_pct": 0.305576817215184,
        "instrument_discount_pct": 0.5,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2019",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 797905.05,
        "total_cost": 539284.53,
        "gross_margin_pct": 0.32412443059484336,
        "instrument_discount_pct": 0.45,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2019",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 977154.2000000001,
        "total_cost": 623234.73,
        "gross_margin_pct": 0.3621940835949946,
        "instrument_discount_pct": 0.4,
        "term_years": 4,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2019",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.3621940835949946
    },
    "issues_summary": [
      {
        "issue_id": "9ebc8292-4c6e-4269-ba27-bece36039be8",
        "severity": "RED",
        "opportunity_id": "OPP-2019",
        "customer_id": "CUST-1019",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.45",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "03208645-cb07-4c7f-b948-1f6919a3870c",
        "severity": "AMBER",
        "opportunity_id": "OPP-2019",
        "customer_id": "CUST-1019",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:GBP/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 19 to maintain a 36.2% margin and generate \u20ac353.9K in lifetime gross profit. Contains 1 critical RED flag(s) including Discount exceeds hard limit. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3056,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 237308.97
      },
      {
        "scenario": "B",
        "margin": 0.3241,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 258620.52
      },
      {
        "scenario": "C",
        "margin": 0.3622,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 353919.47
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "59352fc7-8bfc-4b52-ab39-317e5b0616bd",
      "e94f18e1-c8a0-4013-9fdb-07b63e1c2768"
    ],
    "confidence_score": 0.45
  },
  "OPP-2020": {
    "opportunity_id": "OPP-2020",
    "account_summary": {
      "customer_id": "CUST-1020",
      "customer_name": "HealthCenter 20",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 796188.63,
      "total_cost": 420742.51,
      "gross_margin_pct": 0.4715542345788083
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2020",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 786594.08,
        "total_cost": 420742.51,
        "gross_margin_pct": 0.46510847119520654,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 6,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2020",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 780122.4299999999,
        "total_cost": 420742.51,
        "gross_margin_pct": 0.46067117952242437,
        "instrument_discount_pct": 0.07,
        "term_years": 6,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2020",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 871250.3799999999,
        "total_cost": 474897.70999999996,
        "gross_margin_pct": 0.4549239565324493,
        "instrument_discount_pct": 0.020000000000000004,
        "term_years": 7,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2020",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4549239565324493
    },
    "issues_summary": [
      {
        "issue_id": "4dc76872-ee71-4fac-a37f-da1b11efb979",
        "severity": "AMBER",
        "opportunity_id": "OPP-2020",
        "customer_id": "CUST-1020",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "5dac7b07-3a4b-4262-aa9a-ee6527e6b3d9",
        "severity": "GREEN",
        "opportunity_id": "OPP-2020",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 20 to maintain a 45.5% margin and generate $396.4K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4651,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 365851.57
      },
      {
        "scenario": "B",
        "margin": 0.4607,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 359379.92
      },
      {
        "scenario": "C",
        "margin": 0.4549,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 396352.67
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "5b11e013-9de5-4da2-baa7-cb6ba1b9f10e"
    ],
    "confidence_score": 0.9
  },
  "OPP-2021": {
    "opportunity_id": "OPP-2021",
    "account_summary": {
      "customer_id": "CUST-1021",
      "customer_name": "BioLabs 21",
      "region": "Canada"
    },
    "baseline_economics": {
      "total_revenue": 1083300.64,
      "total_cost": 682865.0,
      "gross_margin_pct": 0.36964405375039744
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2021",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1039417.84,
        "total_cost": 682865.0,
        "gross_margin_pct": 0.3430312875907537,
        "instrument_discount_pct": 0.11,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2021",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1071351.64,
        "total_cost": 682865.0,
        "gross_margin_pct": 0.3626135672877674,
        "instrument_discount_pct": 0.06,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2021",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1220488.44,
        "total_cost": 753415.5,
        "gross_margin_pct": 0.3826934567278654,
        "instrument_discount_pct": 0.009999999999999995,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2021",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.3826934567278654
    },
    "issues_summary": [
      {
        "issue_id": "f9f6a3a2-57f5-4e7c-9633-09aa94605c2d",
        "severity": "AMBER",
        "opportunity_id": "OPP-2021",
        "customer_id": "CUST-1021",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "0272fff3-a360-44bb-a6bc-5da82c907710",
        "severity": "GREEN",
        "opportunity_id": "OPP-2021",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 21 to maintain a 38.3% margin and generate $467.1K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.343,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 356552.84
      },
      {
        "scenario": "B",
        "margin": 0.3626,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 388486.64
      },
      {
        "scenario": "C",
        "margin": 0.3827,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 467072.94
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "ff09864f-71e5-4b94-80bd-fb52598149cb"
    ],
    "confidence_score": 0.9
  },
  "OPP-2022": {
    "opportunity_id": "OPP-2022",
    "account_summary": {
      "customer_id": "CUST-1022",
      "customer_name": "HealthCenter 22",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 1163863.1199999999,
      "total_cost": 665083.2100000001,
      "gross_margin_pct": 0.4285554730869038
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2022",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1100795.02,
        "total_cost": 665083.2100000001,
        "gross_margin_pct": 0.39581557154936975,
        "instrument_discount_pct": 0.29,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2022",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1157538.32,
        "total_cost": 665083.2100000001,
        "gross_margin_pct": 0.42543309494928855,
        "instrument_discount_pct": 0.24,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2022",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1310570.8200000003,
        "total_cost": 719552.61,
        "gross_margin_pct": 0.4509624363527338,
        "instrument_discount_pct": 0.19,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2022",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4509624363527338
    },
    "issues_summary": [
      {
        "issue_id": "e97826bd-0c6a-4644-8bf9-ce919234cb50",
        "severity": "AMBER",
        "opportunity_id": "OPP-2022",
        "customer_id": "CUST-1022",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.24",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "a64a96be-66be-4f24-ae47-3e88ebec4489",
        "severity": "AMBER",
        "opportunity_id": "OPP-2022",
        "customer_id": "CUST-1022",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "9cd4fb6a-6f5d-44c0-96c4-036d79432fa1",
        "severity": "GREEN",
        "opportunity_id": "OPP-2022",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 22 to maintain a 45.1% margin and generate $591.0K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3958,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 435711.81
      },
      {
        "scenario": "B",
        "margin": 0.4254,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 492455.11
      },
      {
        "scenario": "C",
        "margin": 0.451,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 591018.21
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "f5467182-74e0-4d7a-9ea8-abd8c7800057",
      "62d1386e-ff9e-4b54-a29f-9383d54dcc69"
    ],
    "confidence_score": 0.9
  },
  "OPP-2023": {
    "opportunity_id": "OPP-2023",
    "account_summary": {
      "customer_id": "CUST-1023",
      "customer_name": "BioLabs 23",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 2657266.84,
      "total_cost": 1484728.49,
      "gross_margin_pct": 0.44125728449612533
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2023",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2510107.94,
        "total_cost": 1484728.49,
        "gross_margin_pct": 0.4085001420297487,
        "instrument_discount_pct": 0.27,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2023",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2651002.6399999997,
        "total_cost": 1484728.49,
        "gross_margin_pct": 0.4399370005908405,
        "instrument_discount_pct": 0.22,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2023",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2966427.14,
        "total_cost": 1578257.59,
        "gross_margin_pct": 0.46796010300795726,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2023",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.46796010300795726
    },
    "issues_summary": [
      {
        "issue_id": "b8d8dc2e-1a90-46e9-b8dc-71db298dbfc7",
        "severity": "AMBER",
        "opportunity_id": "OPP-2023",
        "customer_id": "CUST-1023",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.22",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "ffcb3483-1076-4259-aad2-78fc6ae533ad",
        "severity": "AMBER",
        "opportunity_id": "OPP-2023",
        "customer_id": "CUST-1023",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "33f93151-4d02-4e17-b1ba-f77ec1645224",
        "severity": "GREEN",
        "opportunity_id": "OPP-2023",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 23 to maintain a 46.8% margin and generate $1388.2K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4085,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1025379.45
      },
      {
        "scenario": "B",
        "margin": 0.4399,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1166274.15
      },
      {
        "scenario": "C",
        "margin": 0.468,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1388169.55
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "7f171c6b-f66c-4689-8527-00643e7f0c95",
      "eca23206-5f90-4db7-aae4-fbcd16a1eb8a"
    ],
    "confidence_score": 0.9
  },
  "OPP-2024": {
    "opportunity_id": "OPP-2024",
    "account_summary": {
      "customer_id": "CUST-1024",
      "customer_name": "HealthCenter 24",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 1921138.4,
      "total_cost": 894294.1000000001,
      "gross_margin_pct": 0.5344978269134592
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2024",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1865043.15,
        "total_cost": 894294.1000000001,
        "gross_margin_pct": 0.5204968314003887,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2024",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1919289.5999999999,
        "total_cost": 894294.1000000001,
        "gross_margin_pct": 0.5340494212025115,
        "instrument_discount_pct": 0.12,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2024",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2903700.4499999997,
        "total_cost": 1363073.9000000001,
        "gross_margin_pct": 0.5305735135316729,
        "instrument_discount_pct": 0.06999999999999999,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2024",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5305735135316729
    },
    "issues_summary": [
      {
        "issue_id": "c23bcca9-8316-4cd9-846d-aafd5d86f06c",
        "severity": "AMBER",
        "opportunity_id": "OPP-2024",
        "customer_id": "CUST-1024",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "6b16f25c-e51d-43ca-9b61-af19f1b8fe5c",
        "severity": "GREEN",
        "opportunity_id": "OPP-2024",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 24 to maintain a 53.1% margin and generate $1540.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.5205,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 970749.05
      },
      {
        "scenario": "B",
        "margin": 0.534,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1024995.5
      },
      {
        "scenario": "C",
        "margin": 0.5306,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1540626.55
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "bc58214e-f118-4920-99ef-bbb707698494"
    ],
    "confidence_score": 0.9
  },
  "OPP-2025": {
    "opportunity_id": "OPP-2025",
    "account_summary": {
      "customer_id": "CUST-1025",
      "customer_name": "BioLabs 25",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 2256339.2,
      "total_cost": 1265386.55,
      "gross_margin_pct": 0.43918602752635777
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2025",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2151225.7,
        "total_cost": 1265386.55,
        "gross_margin_pct": 0.4117834544278641,
        "instrument_discount_pct": 0.29,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2025",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2247167.0,
        "total_cost": 1265386.55,
        "gross_margin_pct": 0.43689696849410836,
        "instrument_discount_pct": 0.24,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2025",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2556531.5,
        "total_cost": 1378212.9500000002,
        "gross_margin_pct": 0.46090515606789895,
        "instrument_discount_pct": 0.19,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2025",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.46090515606789895
    },
    "issues_summary": [
      {
        "issue_id": "181c3dea-06ec-47a5-a67a-7ad6315413e8",
        "severity": "AMBER",
        "opportunity_id": "OPP-2025",
        "customer_id": "CUST-1025",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.24",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "76d2450d-08ea-40b2-8351-1dfc224f36cc",
        "severity": "AMBER",
        "opportunity_id": "OPP-2025",
        "customer_id": "CUST-1025",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "fc1632ab-2796-4014-a04c-506f1d30714e",
        "severity": "GREEN",
        "opportunity_id": "OPP-2025",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 25 to maintain a 46.1% margin and generate \u20ac1178.3K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4118,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 885839.15
      },
      {
        "scenario": "B",
        "margin": 0.4369,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 981780.45
      },
      {
        "scenario": "C",
        "margin": 0.4609,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1178318.55
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "09578f7f-3692-455b-8dbd-b0da8032168f",
      "0e8e8ca5-734a-4c6b-ae56-06edc8bccd08"
    ],
    "confidence_score": 0.9
  },
  "OPP-2026": {
    "opportunity_id": "OPP-2026",
    "account_summary": {
      "customer_id": "CUST-1026",
      "customer_name": "HealthCenter 26",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 2555249.18,
      "total_cost": 1389927.79,
      "gross_margin_pct": 0.4560500005717642
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2026",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2408090.28,
        "total_cost": 1389927.79,
        "gross_margin_pct": 0.422809102489297,
        "instrument_discount_pct": 0.24,
        "term_years": 5,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2026",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2548629.18,
        "total_cost": 1389927.79,
        "gross_margin_pct": 0.45463710417064285,
        "instrument_discount_pct": 0.19,
        "term_years": 5,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2026",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2720775.08,
        "total_cost": 1408379.29,
        "gross_margin_pct": 0.48236100060134335,
        "instrument_discount_pct": 0.14,
        "term_years": 6,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2026",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.48236100060134335
    },
    "issues_summary": [
      {
        "issue_id": "5b8c8eee-788e-4df4-be84-c55cdd1cb653",
        "severity": "AMBER",
        "opportunity_id": "OPP-2026",
        "customer_id": "CUST-1026",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "18942dec-4a7c-460d-ba06-54caae2e8b00",
        "severity": "GREEN",
        "opportunity_id": "OPP-2026",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 26 to maintain a 48.2% margin and generate \u20ac1312.4K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4228,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1018162.49
      },
      {
        "scenario": "B",
        "margin": 0.4546,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1158701.39
      },
      {
        "scenario": "C",
        "margin": 0.4824,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1312395.79
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "1d2bcead-1ca2-411a-a2f5-1459922411fc"
    ],
    "confidence_score": 0.9
  },
  "OPP-2027": {
    "opportunity_id": "OPP-2027",
    "account_summary": {
      "customer_id": "CUST-1027",
      "customer_name": "BioLabs 27",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 3482541.0999999996,
      "total_cost": 1811711.43,
      "gross_margin_pct": 0.4797731374943428
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2027",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 3293336.8000000003,
        "total_cost": 1811711.43,
        "gross_margin_pct": 0.44988577238744615,
        "instrument_discount_pct": 0.2,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2027",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 3472296.9,
        "total_cost": 1811711.43,
        "gross_margin_pct": 0.4782383297925935,
        "instrument_discount_pct": 0.15,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2027",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 3774046.8,
        "total_cost": 1883350.53,
        "gross_margin_pct": 0.5009731914294226,
        "instrument_discount_pct": 0.09999999999999999,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2027",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5009731914294226
    },
    "issues_summary": [
      {
        "issue_id": "2aa813ec-4285-4cbb-8029-a2ef1ab57ae0",
        "severity": "AMBER",
        "opportunity_id": "OPP-2027",
        "customer_id": "CUST-1027",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "e625ebec-f751-4aad-9dca-6a8eab0e4708",
        "severity": "GREEN",
        "opportunity_id": "OPP-2027",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 27 to maintain a 50.1% margin and generate $1890.7K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4499,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1481625.37
      },
      {
        "scenario": "B",
        "margin": 0.4782,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1660585.47
      },
      {
        "scenario": "C",
        "margin": 0.501,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1890696.27
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "15f21758-5f5f-4d37-8318-b760592a87ae"
    ],
    "confidence_score": 0.9
  },
  "OPP-2028": {
    "opportunity_id": "OPP-2028",
    "account_summary": {
      "customer_id": "CUST-1028",
      "customer_name": "HealthCenter 28",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 944626.75,
      "total_cost": 646106.8500000001,
      "gross_margin_pct": 0.31601889317659054
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2028",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 892954.0,
        "total_cost": 646106.8500000001,
        "gross_margin_pct": 0.2764388199168153,
        "instrument_discount_pct": 0.2,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2028",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 942778.95,
        "total_cost": 646106.8500000001,
        "gross_margin_pct": 0.31467832411828867,
        "instrument_discount_pct": 0.15,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2028",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1055098.3,
        "total_cost": 681049.65,
        "gross_margin_pct": 0.354515451309134,
        "instrument_discount_pct": 0.09999999999999999,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2028",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.354515451309134
    },
    "issues_summary": [
      {
        "issue_id": "236ebfd2-c8df-4259-9c8d-4bc828a45f9b",
        "severity": "RED",
        "opportunity_id": "OPP-2028",
        "customer_id": "CUST-1028",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.316",
        "expected_value": ">=0.35",
        "description": "Margin below UK floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "71dc880d-d8a3-4126-9a06-a179dfa7aebf",
        "severity": "AMBER",
        "opportunity_id": "OPP-2028",
        "customer_id": "CUST-1028",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 28 to maintain a 35.5% margin and generate $374.0K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below UK floor. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.2764,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 246847.15
      },
      {
        "scenario": "B",
        "margin": 0.3147,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 296672.1
      },
      {
        "scenario": "C",
        "margin": 0.3545,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 374048.65
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "339c1105-e592-4f62-a2a7-903ea76a22d5",
      "cd0094b8-cf29-41bf-95cc-51b096b9a0f5"
    ],
    "confidence_score": 0.5
  },
  "OPP-2029": {
    "opportunity_id": "OPP-2029",
    "account_summary": {
      "customer_id": "CUST-1029",
      "customer_name": "BioLabs 29",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 576958.33,
      "total_cost": 281973.86,
      "gross_margin_pct": 0.5112751730267938
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2029",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 565739.28,
        "total_cost": 281973.86,
        "gross_margin_pct": 0.5015833795383626,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2029",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 564229.33,
        "total_cost": 281973.86,
        "gross_margin_pct": 0.5002495527837945,
        "instrument_discount_pct": 0.07,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2029",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 734132.38,
        "total_cost": 380409.36,
        "gross_margin_pct": 0.48182457229307885,
        "instrument_discount_pct": 0.020000000000000004,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2029",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.48182457229307885
    },
    "issues_summary": [
      {
        "issue_id": "21308305-83f7-4d7e-8790-6c710c91d27b",
        "severity": "AMBER",
        "opportunity_id": "OPP-2029",
        "customer_id": "CUST-1029",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "93ca6189-76ac-412c-992a-9043df57138e",
        "severity": "GREEN",
        "opportunity_id": "OPP-2029",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 29 to maintain a 48.2% margin and generate \u20ac353.7K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.5016,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 283765.42
      },
      {
        "scenario": "B",
        "margin": 0.5002,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 282255.47
      },
      {
        "scenario": "C",
        "margin": 0.4818,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 353723.02
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "06b802b9-2e12-4774-8701-46134b9424d8"
    ],
    "confidence_score": 0.9
  },
  "OPP-2030": {
    "opportunity_id": "OPP-2030",
    "account_summary": {
      "customer_id": "CUST-1030",
      "customer_name": "HealthCenter 30",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 468646.63,
      "total_cost": 243631.51,
      "gross_margin_pct": 0.4801381373424151
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2030",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 459052.07999999996,
        "total_cost": 243631.51,
        "gross_margin_pct": 0.4692726149939239,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2030",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 465920.43,
        "total_cost": 243631.51,
        "gross_margin_pct": 0.4770963144930133,
        "instrument_discount_pct": 0.07,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2030",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 757524.3799999999,
        "total_cost": 391451.71,
        "gross_margin_pct": 0.48324869755347005,
        "instrument_discount_pct": 0.020000000000000004,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2030",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.48324869755347005
    },
    "issues_summary": [
      {
        "issue_id": "e4359f62-e543-4e96-9a91-174f6b3af508",
        "severity": "AMBER",
        "opportunity_id": "OPP-2030",
        "customer_id": "CUST-1030",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "f99dea37-ce0b-4cbf-aee3-714a6a1c516a",
        "severity": "GREEN",
        "opportunity_id": "OPP-2030",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 30 to maintain a 48.3% margin and generate $366.1K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4693,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 215420.57
      },
      {
        "scenario": "B",
        "margin": 0.4771,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 222288.92
      },
      {
        "scenario": "C",
        "margin": 0.4832,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 366072.67
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "39246159-023d-4f11-b67f-2beedd6f21ce"
    ],
    "confidence_score": 0.9
  },
  "OPP-2031": {
    "opportunity_id": "OPP-2031",
    "account_summary": {
      "customer_id": "CUST-1031",
      "customer_name": "BioLabs 31",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 762949.62,
      "total_cost": 444097.8,
      "gross_margin_pct": 0.4179198883407269
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2031",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 751978.92,
        "total_cost": 444097.8,
        "gross_margin_pct": 0.4094278600256508,
        "instrument_discount_pct": 0.22000000000000003,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2031",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 744710.8200000001,
        "total_cost": 444097.8,
        "gross_margin_pct": 0.4036640960849744,
        "instrument_discount_pct": 0.17,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2031",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 918895.52,
        "total_cost": 546983.4,
        "gross_margin_pct": 0.40473820135721195,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2031",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.40473820135721195
    },
    "issues_summary": [
      {
        "issue_id": "663cd902-2a0c-4b82-82a7-daf69541ffb0",
        "severity": "AMBER",
        "opportunity_id": "OPP-2031",
        "customer_id": "CUST-1031",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "88f98816-db25-44b7-9539-fbe2c47a28c2",
        "severity": "GREEN",
        "opportunity_id": "OPP-2031",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 31 to maintain a 40.5% margin and generate \u20ac371.9K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4094,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 307881.12
      },
      {
        "scenario": "B",
        "margin": 0.4037,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 300613.02
      },
      {
        "scenario": "C",
        "margin": 0.4047,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 371912.12
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "7b1f125d-78fa-41b1-a68f-5866315605a3"
    ],
    "confidence_score": 0.9
  },
  "OPP-2032": {
    "opportunity_id": "OPP-2032",
    "account_summary": {
      "customer_id": "CUST-1032",
      "customer_name": "HealthCenter 32",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 1128340.6400000001,
      "total_cost": 656716.0599999999,
      "gross_margin_pct": 0.4179806729287001
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2032",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1070773.34,
        "total_cost": 656716.0599999999,
        "gross_margin_pct": 0.38668994130914774,
        "instrument_discount_pct": 0.21000000000000002,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2032",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1127097.4400000002,
        "total_cost": 656716.0599999999,
        "gross_margin_pct": 0.4173386996602531,
        "instrument_discount_pct": 0.16,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2032",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1342145.14,
        "total_cost": 738564.26,
        "gross_margin_pct": 0.4497135682359957,
        "instrument_discount_pct": 0.11,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2032",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4497135682359957
    },
    "issues_summary": [
      {
        "issue_id": "83f5d47a-0212-4cfc-be2f-559946519add",
        "severity": "AMBER",
        "opportunity_id": "OPP-2032",
        "customer_id": "CUST-1032",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:GBP/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "21e639c8-443d-4e78-b6b1-c79bd651c917",
        "severity": "GREEN",
        "opportunity_id": "OPP-2032",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 32 to maintain a 45.0% margin and generate \u20ac603.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3867,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 414057.28
      },
      {
        "scenario": "B",
        "margin": 0.4173,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 470381.38
      },
      {
        "scenario": "C",
        "margin": 0.4497,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 603580.88
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "36a1ea70-960a-4eca-aa38-ff40a692d034"
    ],
    "confidence_score": 0.9
  },
  "OPP-2033": {
    "opportunity_id": "OPP-2033",
    "account_summary": {
      "customer_id": "CUST-1033",
      "customer_name": "BioLabs 33",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 1992263.3900000001,
      "total_cost": 850446.34,
      "gross_margin_pct": 0.573125549428482
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2033",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1891291.94,
        "total_cost": 850446.34,
        "gross_margin_pct": 0.5503357667774971,
        "instrument_discount_pct": 0.14,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2033",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1985034.29,
        "total_cost": 850446.34,
        "gross_margin_pct": 0.5715709575979164,
        "instrument_discount_pct": 0.09,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2033",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2218901.44,
        "total_cost": 934966.94,
        "gross_margin_pct": 0.57863520968286,
        "instrument_discount_pct": 0.039999999999999994,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2033",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.57863520968286
    },
    "issues_summary": [
      {
        "issue_id": "eaa55ea2-66a8-425f-965d-7bc433c92255",
        "severity": "AMBER",
        "opportunity_id": "OPP-2033",
        "customer_id": "CUST-1033",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "134729c2-0940-4465-a16c-ccd3bcae4f69",
        "severity": "GREEN",
        "opportunity_id": "OPP-2033",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 33 to maintain a 57.9% margin and generate $1283.9K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.5503,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1040845.6
      },
      {
        "scenario": "B",
        "margin": 0.5716,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1134587.95
      },
      {
        "scenario": "C",
        "margin": 0.5786,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1283934.5
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "244ce957-5bdc-49f2-80fb-d389c5b2e7be"
    ],
    "confidence_score": 0.9
  },
  "OPP-2034": {
    "opportunity_id": "OPP-2034",
    "account_summary": {
      "customer_id": "CUST-1034",
      "customer_name": "HealthCenter 34",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 2210972.56,
      "total_cost": 1320480.9,
      "gross_margin_pct": 0.4027601590858279
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2034",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2167089.76,
        "total_cost": 1320480.9,
        "gross_margin_pct": 0.3906662638653232,
        "instrument_discount_pct": 0.29,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2034",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2204232.66,
        "total_cost": 1320480.9,
        "gross_margin_pct": 0.4009339740025448,
        "instrument_discount_pct": 0.24,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2034",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 3771849.7600000002,
        "total_cost": 2099197.8,
        "gross_margin_pct": 0.4434566768110086,
        "instrument_discount_pct": 0.19,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2034",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4434566768110086
    },
    "issues_summary": [
      {
        "issue_id": "772b988f-a7bf-4cd7-857f-51fe00736f83",
        "severity": "AMBER",
        "opportunity_id": "OPP-2034",
        "customer_id": "CUST-1034",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.24",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "bf8c0296-8ea8-4533-b0ed-c650697386df",
        "severity": "AMBER",
        "opportunity_id": "OPP-2034",
        "customer_id": "CUST-1034",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:GBP/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "9f1067d2-ea5f-40c0-879b-9b31995e55cf",
        "severity": "GREEN",
        "opportunity_id": "OPP-2034",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "Legal",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 34 to maintain a 44.3% margin and generate \u20ac1672.7K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3907,
        "requires_cfo": false,
        "tender_flag": true,
        "lifetime_profit": 846608.86
      },
      {
        "scenario": "B",
        "margin": 0.4009,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 883751.76
      },
      {
        "scenario": "C",
        "margin": 0.4435,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1672651.96
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "78479406-8a3f-4859-b48c-2c675ce0ae83",
      "144b1da3-e7d9-4d8e-9b5b-c6fb436e5744"
    ],
    "confidence_score": 0.9
  },
  "OPP-2035": {
    "opportunity_id": "OPP-2035",
    "account_summary": {
      "customer_id": "CUST-1035",
      "customer_name": "BioLabs 35",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 971726.9500000001,
      "total_cost": 474068.1,
      "gross_margin_pct": 0.5121385693789804
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2035",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 915631.7,
        "total_cost": 474068.1,
        "gross_margin_pct": 0.4822502322713379,
        "instrument_discount_pct": 0.26,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2035",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 965884.15,
        "total_cost": 474068.1,
        "gross_margin_pct": 0.5091874113474169,
        "instrument_discount_pct": 0.21,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2035",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1089873.0,
        "total_cost": 522621.89999999997,
        "gross_margin_pct": 0.5204744956522458,
        "instrument_discount_pct": 0.15999999999999998,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2035",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5204744956522458
    },
    "issues_summary": [
      {
        "issue_id": "bdc57ed9-48b8-4cde-9d5b-6911bc79a57f",
        "severity": "AMBER",
        "opportunity_id": "OPP-2035",
        "customer_id": "CUST-1035",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.21",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "07439974-4002-47f7-bf54-a709682547b9",
        "severity": "AMBER",
        "opportunity_id": "OPP-2035",
        "customer_id": "CUST-1035",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "b60e87f4-d794-466f-9d73-5838db371069",
        "severity": "GREEN",
        "opportunity_id": "OPP-2035",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 35 to maintain a 52.0% margin and generate \u20ac567.3K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4823,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 441563.6
      },
      {
        "scenario": "B",
        "margin": 0.5092,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 491816.05
      },
      {
        "scenario": "C",
        "margin": 0.5205,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 567251.1
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "bbf42366-3d3e-4d92-9114-5e5303bff7f4",
      "095b0bdf-ac0c-49ad-bae6-ac53a1c9ae68"
    ],
    "confidence_score": 0.9
  },
  "OPP-2036": {
    "opportunity_id": "OPP-2036",
    "account_summary": {
      "customer_id": "CUST-1036",
      "customer_name": "HealthCenter 36",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 1123497.7,
      "total_cost": 633996.07,
      "gross_margin_pct": 0.43569437658839894
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2036",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1102475.0,
        "total_cost": 633996.07,
        "gross_margin_pct": 0.4249338352343591,
        "instrument_discount_pct": 0.5,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2036",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1121007.0999999999,
        "total_cost": 633996.07,
        "gross_margin_pct": 0.43444062932340033,
        "instrument_discount_pct": 0.45,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2036",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1435294.7999999998,
        "total_cost": 783534.27,
        "gross_margin_pct": 0.4540952353481667,
        "instrument_discount_pct": 0.4,
        "term_years": 4,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2036",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.4540952353481667
    },
    "issues_summary": [
      {
        "issue_id": "067c912f-46b0-4b7f-961f-b74995d6f809",
        "severity": "RED",
        "opportunity_id": "OPP-2036",
        "customer_id": "CUST-1036",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.45",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "fb2081a2-4f9a-4d31-9d3d-6dc2e5ad78e8",
        "severity": "AMBER",
        "opportunity_id": "OPP-2036",
        "customer_id": "CUST-1036",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 36 to maintain a 45.4% margin and generate \u20ac651.8K in lifetime gross profit. Contains 1 critical RED flag(s) including Discount exceeds hard limit. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4249,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 468478.93
      },
      {
        "scenario": "B",
        "margin": 0.4344,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 487011.03
      },
      {
        "scenario": "C",
        "margin": 0.4541,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 651760.53
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "b2ccb5bc-6912-409c-aedd-326de3047f7b",
      "3d5383d9-764c-4725-9f14-db23b1661858"
    ],
    "confidence_score": 0.45
  },
  "OPP-2037": {
    "opportunity_id": "OPP-2037",
    "account_summary": {
      "customer_id": "CUST-1037",
      "customer_name": "BioLabs 37",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 960904.9500000001,
      "total_cost": 745726.5,
      "gross_margin_pct": 0.22393312678845087
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2037",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 922507.5,
        "total_cost": 745726.5,
        "gross_margin_pct": 0.1916309623498996,
        "instrument_discount_pct": 0.5,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2037",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 958488.45,
        "total_cost": 745726.5,
        "gross_margin_pct": 0.2219765402493895,
        "instrument_discount_pct": 0.45,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2037",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1172369.4,
        "total_cost": 836287.5,
        "gross_margin_pct": 0.2866689458117893,
        "instrument_discount_pct": 0.4,
        "term_years": 4,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2037",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.2866689458117893
    },
    "issues_summary": [
      {
        "issue_id": "7e2f073f-2fbc-4bdf-bc7b-78daa50134b1",
        "severity": "RED",
        "opportunity_id": "OPP-2037",
        "customer_id": "CUST-1037",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.224",
        "expected_value": ">=0.35",
        "description": "Margin below Switzerland floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "4694a470-ffc9-4b2b-b2e0-e4642d5f2776",
        "severity": "RED",
        "opportunity_id": "OPP-2037",
        "customer_id": "CUST-1037",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.45",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "e457e561-3621-4445-a06f-0fe7913ae5b2",
        "severity": "AMBER",
        "opportunity_id": "OPP-2037",
        "customer_id": "CUST-1037",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:GBP/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 37 to maintain a 28.7% margin and generate $336.1K in lifetime gross profit. Contains 2 critical RED flag(s) including Margin below Switzerland floor. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.1916,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 176781.0
      },
      {
        "scenario": "B",
        "margin": 0.222,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 212761.95
      },
      {
        "scenario": "C",
        "margin": 0.2867,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 336081.9
      }
    ],
    "issue_summary_counts": {
      "RED": 2,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "e29539b2-6e5b-4da0-b8da-e73aa1cdfcbd",
      "9cd06f77-5e21-4804-b968-3a9954a80ad9",
      "fa4677d4-eaad-4602-a2d2-29a981e90a79"
    ],
    "confidence_score": 0.45
  },
  "OPP-2038": {
    "opportunity_id": "OPP-2038",
    "account_summary": {
      "customer_id": "CUST-1038",
      "customer_name": "HealthCenter 38",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 1882299.2,
      "total_cost": 1072537.75,
      "gross_margin_pct": 0.4301980524668979
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2038",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1777185.7,
        "total_cost": 1072537.75,
        "gross_margin_pct": 0.3964965225637366,
        "instrument_discount_pct": 0.29,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2038",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1878955.8,
        "total_cost": 1072537.75,
        "gross_margin_pct": 0.4291841511120166,
        "instrument_discount_pct": 0.24,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2038",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2119669.5,
        "total_cost": 1145352.9500000002,
        "gross_margin_pct": 0.45965493677198255,
        "instrument_discount_pct": 0.19,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2038",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.45965493677198255
    },
    "issues_summary": [
      {
        "issue_id": "9f6c00ee-9af1-41dd-acfd-91e05e9e6eb6",
        "severity": "AMBER",
        "opportunity_id": "OPP-2038",
        "customer_id": "CUST-1038",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.24",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "0f34a609-5e67-4b90-88bf-0b30bda4eec3",
        "severity": "AMBER",
        "opportunity_id": "OPP-2038",
        "customer_id": "CUST-1038",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "6e448f08-5af5-4139-9203-72b7d36e3035",
        "severity": "GREEN",
        "opportunity_id": "OPP-2038",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 38 to maintain a 46.0% margin and generate \u20ac974.3K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3965,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 704647.95
      },
      {
        "scenario": "B",
        "margin": 0.4292,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 806418.05
      },
      {
        "scenario": "C",
        "margin": 0.4597,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 974316.55
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "98f0a2e3-3735-4f6e-aadc-a73c4b1c8dfe",
      "84bb3768-91bf-4832-bff6-cde1cbae8e61"
    ],
    "confidence_score": 0.9
  },
  "OPP-2039": {
    "opportunity_id": "OPP-2039",
    "account_summary": {
      "customer_id": "CUST-1039",
      "customer_name": "BioLabs 39",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 1846144.5,
      "total_cost": 1077195.06,
      "gross_margin_pct": 0.4165163886142173
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2039",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1788577.2,
        "total_cost": 1077195.06,
        "gross_margin_pct": 0.3977363347805171,
        "instrument_discount_pct": 0.3,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2039",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1835134.8,
        "total_cost": 1077195.06,
        "gross_margin_pct": 0.4130158394903742,
        "instrument_discount_pct": 0.25,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2039",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2201897.6,
        "total_cost": 1244637.46,
        "gross_margin_pct": 0.43474325963205557,
        "instrument_discount_pct": 0.2,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2039",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.43474325963205557
    },
    "issues_summary": [
      {
        "issue_id": "051dd110-a2db-470f-a0e2-03fb7e8d5343",
        "severity": "AMBER",
        "opportunity_id": "OPP-2039",
        "customer_id": "CUST-1039",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.25",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "b04bdb0c-022a-44bf-bbc1-aeb3cfa9651c",
        "severity": "AMBER",
        "opportunity_id": "OPP-2039",
        "customer_id": "CUST-1039",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "aad4245b-64a6-4751-b1bc-d3cc6554c4e7",
        "severity": "GREEN",
        "opportunity_id": "OPP-2039",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 39 to maintain a 43.5% margin and generate $957.3K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3977,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 711382.14
      },
      {
        "scenario": "B",
        "margin": 0.413,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 757939.74
      },
      {
        "scenario": "C",
        "margin": 0.4347,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 957260.14
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "b60ec384-9690-4a1a-a9a2-96e9a9543793",
      "457cb231-2989-4157-9393-67bde01af0f1"
    ],
    "confidence_score": 0.9
  },
  "OPP-2040": {
    "opportunity_id": "OPP-2040",
    "account_summary": {
      "customer_id": "CUST-1040",
      "customer_name": "HealthCenter 40",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 1550837.7799999998,
      "total_cost": 837474.97,
      "gross_margin_pct": 0.4599854473496254
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2040",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1483675.93,
        "total_cost": 837474.97,
        "gross_margin_pct": 0.43554050243303466,
        "instrument_discount_pct": 0.11,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2040",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1528139.48,
        "total_cost": 837474.97,
        "gross_margin_pct": 0.4519643128387731,
        "instrument_discount_pct": 0.06,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2040",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1653535.8299999998,
        "total_cost": 893073.57,
        "gross_margin_pct": 0.4599006844623379,
        "instrument_discount_pct": 0.009999999999999995,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2040",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4599006844623379
    },
    "issues_summary": [
      {
        "issue_id": "248404cb-f237-47b1-b424-df59c5e75f8b",
        "severity": "AMBER",
        "opportunity_id": "OPP-2040",
        "customer_id": "CUST-1040",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "66e76bdd-a30f-4d9b-8c5b-1859116c8f17",
        "severity": "GREEN",
        "opportunity_id": "OPP-2040",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 40 to maintain a 46.0% margin and generate \u20ac760.5K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4355,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 646200.96
      },
      {
        "scenario": "B",
        "margin": 0.452,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 690664.51
      },
      {
        "scenario": "C",
        "margin": 0.4599,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 760462.26
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "50328c59-b974-40e0-a748-1c5084816e8a"
    ],
    "confidence_score": 0.9
  },
  "OPP-2041": {
    "opportunity_id": "OPP-2041",
    "account_summary": {
      "customer_id": "CUST-1041",
      "customer_name": "BioLabs 41",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 765786.8,
      "total_cost": 464855.9,
      "gross_margin_pct": 0.39296955758443475
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2041",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 749330.75,
        "total_cost": 464855.9,
        "gross_margin_pct": 0.3796385641454057,
        "instrument_discount_pct": 0.25,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2041",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 755337.4,
        "total_cost": 464855.9,
        "gross_margin_pct": 0.38457184828925456,
        "instrument_discount_pct": 0.2,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2041",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1002139.65,
        "total_cost": 595703.1,
        "gross_margin_pct": 0.4055687747710611,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2041",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4055687747710611
    },
    "issues_summary": [
      {
        "issue_id": "53cb4ea7-8af0-4285-8ca8-b839dd36ce55",
        "severity": "AMBER",
        "opportunity_id": "OPP-2041",
        "customer_id": "CUST-1041",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:GBP/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "88cca10b-a8b0-4464-af91-28c9516d3bb6",
        "severity": "GREEN",
        "opportunity_id": "OPP-2041",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 41 to maintain a 40.6% margin and generate \u20ac406.4K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3796,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 284474.85
      },
      {
        "scenario": "B",
        "margin": 0.3846,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 290481.5
      },
      {
        "scenario": "C",
        "margin": 0.4056,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 406436.55
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "66626076-c649-4208-81bb-20158873dddf"
    ],
    "confidence_score": 0.9
  },
  "OPP-2042": {
    "opportunity_id": "OPP-2042",
    "account_summary": {
      "customer_id": "CUST-1042",
      "customer_name": "HealthCenter 42",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 1235426.64,
      "total_cost": 690068.4,
      "gross_margin_pct": 0.4414331230545586
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2042",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1218970.59,
        "total_cost": 690068.4,
        "gross_margin_pct": 0.4338924944858596,
        "instrument_discount_pct": 0.21000000000000002,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2042",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1228002.2400000002,
        "total_cost": 690068.4,
        "gross_margin_pct": 0.43805607390423007,
        "instrument_discount_pct": 0.16,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2042",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1551739.29,
        "total_cost": 852370.7,
        "gross_margin_pct": 0.450699801511116,
        "instrument_discount_pct": 0.11,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2042",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.450699801511116
    },
    "issues_summary": [
      {
        "issue_id": "d2f8d4ab-9850-47ee-b6cb-37700b665715",
        "severity": "AMBER",
        "opportunity_id": "OPP-2042",
        "customer_id": "CUST-1042",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "cabd54c3-bb10-405e-9001-18db83ae588e",
        "severity": "GREEN",
        "opportunity_id": "OPP-2042",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 42 to maintain a 45.1% margin and generate \u20ac699.4K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4339,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 528902.19
      },
      {
        "scenario": "B",
        "margin": 0.4381,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 537933.84
      },
      {
        "scenario": "C",
        "margin": 0.4507,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 699368.59
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "c4e365af-e903-4202-a229-a5724d2a1a52"
    ],
    "confidence_score": 0.9
  },
  "OPP-2043": {
    "opportunity_id": "OPP-2043",
    "account_summary": {
      "customer_id": "CUST-1043",
      "customer_name": "BioLabs 43",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 2183282.05,
      "total_cost": 1071618.5,
      "gross_margin_pct": 0.5091708375470773
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2043",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2127186.8,
        "total_cost": 1071618.5,
        "gross_margin_pct": 0.49622736470534695,
        "instrument_discount_pct": 0.24,
        "term_years": 7,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2043",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2174447.35,
        "total_cost": 1071618.5,
        "gross_margin_pct": 0.5071766166239896,
        "instrument_discount_pct": 0.19,
        "term_years": 7,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2043",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2401260.6999999997,
        "total_cost": 1163919.1,
        "gross_margin_pct": 0.5152883233378199,
        "instrument_discount_pct": 0.14,
        "term_years": 8,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2043",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5152883233378199
    },
    "issues_summary": [
      {
        "issue_id": "1358ce2d-c1ea-4e28-af88-53f79bd7eb80",
        "severity": "AMBER",
        "opportunity_id": "OPP-2043",
        "customer_id": "CUST-1043",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "b13bab50-bd14-458c-864d-41bd090001fa",
        "severity": "GREEN",
        "opportunity_id": "OPP-2043",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 43 to maintain a 51.5% margin and generate \u20ac1237.3K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4962,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1055568.3
      },
      {
        "scenario": "B",
        "margin": 0.5072,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1102828.85
      },
      {
        "scenario": "C",
        "margin": 0.5153,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1237341.6
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "7c2bc33b-9136-49f1-b5f5-a62c32a297bb"
    ],
    "confidence_score": 0.9
  },
  "OPP-2044": {
    "opportunity_id": "OPP-2044",
    "account_summary": {
      "customer_id": "CUST-1044",
      "customer_name": "HealthCenter 44",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 1072220.3599999999,
      "total_cost": 537442.06,
      "gross_margin_pct": 0.49875782996696677
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2044",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1004906.0599999999,
        "total_cost": 537442.06,
        "gross_margin_pct": 0.46518179022624256,
        "instrument_discount_pct": 0.29,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2044",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1069916.96,
        "total_cost": 537442.06,
        "gross_margin_pct": 0.4976787170473491,
        "instrument_discount_pct": 0.24,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2044",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1179364.06,
        "total_cost": 564266.9600000001,
        "gross_margin_pct": 0.5215498088011941,
        "instrument_discount_pct": 0.19,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2044",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5215498088011941
    },
    "issues_summary": [
      {
        "issue_id": "d82c6a95-6fdb-4143-9f57-2a930c8eb4e7",
        "severity": "AMBER",
        "opportunity_id": "OPP-2044",
        "customer_id": "CUST-1044",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.24",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "43c40608-ca1f-4d1f-b2f0-da6fdcfff0af",
        "severity": "AMBER",
        "opportunity_id": "OPP-2044",
        "customer_id": "CUST-1044",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "aed25abb-5670-49a4-87d8-fc7ddc832294",
        "severity": "GREEN",
        "opportunity_id": "OPP-2044",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 44 to maintain a 52.2% margin and generate \u20ac615.1K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4652,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 467464.0
      },
      {
        "scenario": "B",
        "margin": 0.4977,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 532474.9
      },
      {
        "scenario": "C",
        "margin": 0.5215,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 615097.1
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "ead107c7-c514-42b0-8523-9cdbc4f4fa28",
      "3a5ca9ae-9f7c-4488-a1be-6d2af67d1b81"
    ],
    "confidence_score": 0.9
  },
  "OPP-2045": {
    "opportunity_id": "OPP-2045",
    "account_summary": {
      "customer_id": "CUST-1045",
      "customer_name": "BioLabs 45",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 2429363.3,
      "total_cost": 1845116.43,
      "gross_margin_pct": 0.24049382404023306
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2045",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2240159.0,
        "total_cost": 1845116.43,
        "gross_margin_pct": 0.1763457727777359,
        "instrument_discount_pct": 0.5,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2045",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2426738.1,
        "total_cost": 1845116.43,
        "gross_margin_pct": 0.23967220442947682,
        "instrument_discount_pct": 0.45,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2045",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2784750.0,
        "total_cost": 1933458.03,
        "gross_margin_pct": 0.3056978077026663,
        "instrument_discount_pct": 0.4,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2045",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.3056978077026663
    },
    "issues_summary": [
      {
        "issue_id": "251b1c17-3c86-4197-a410-12051b446bed",
        "severity": "RED",
        "opportunity_id": "OPP-2045",
        "customer_id": "CUST-1045",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.24",
        "expected_value": ">=0.35",
        "description": "Margin below UK floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "c762440b-0d64-4e73-ba7b-a0a7f6708e3b",
        "severity": "RED",
        "opportunity_id": "OPP-2045",
        "customer_id": "CUST-1045",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.45",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "0f0083a9-266c-4c90-b1f8-9e927a7aaee9",
        "severity": "AMBER",
        "opportunity_id": "OPP-2045",
        "customer_id": "CUST-1045",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 45 to maintain a 30.6% margin and generate $851.3K in lifetime gross profit. Contains 2 critical RED flag(s) including Margin below UK floor. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.1763,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 395042.57
      },
      {
        "scenario": "B",
        "margin": 0.2397,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 581621.67
      },
      {
        "scenario": "C",
        "margin": 0.3057,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 851291.97
      }
    ],
    "issue_summary_counts": {
      "RED": 2,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "deda9ca5-193f-4549-8a1f-cb5a78ee1eb9",
      "19c67533-900a-40d3-a724-3d543fc803e3",
      "77e44f3b-0349-41c1-9f33-d0da5df97bb5"
    ],
    "confidence_score": 0.45
  },
  "OPP-2046": {
    "opportunity_id": "OPP-2046",
    "account_summary": {
      "customer_id": "CUST-1046",
      "customer_name": "HealthCenter 46",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 964831.3,
      "total_cost": 609713.9,
      "gross_margin_pct": 0.36806164974125527
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2046",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 937404.55,
        "total_cost": 609713.9,
        "gross_margin_pct": 0.34957228445285443,
        "instrument_discount_pct": 0.27,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2046",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 962206.9,
        "total_cost": 609713.9,
        "gross_margin_pct": 0.3663380505793504,
        "instrument_discount_pct": 0.22,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2046",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1252871.85,
        "total_cost": 745269.6,
        "gross_margin_pct": 0.40515097374084996,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2046",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.40515097374084996
    },
    "issues_summary": [
      {
        "issue_id": "0394afac-e74f-4975-b020-64a4ef82b100",
        "severity": "AMBER",
        "opportunity_id": "OPP-2046",
        "customer_id": "CUST-1046",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.22",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "ff2a4997-68d2-4730-a700-cce899c97ae5",
        "severity": "AMBER",
        "opportunity_id": "OPP-2046",
        "customer_id": "CUST-1046",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "ad57b473-ff9d-46fa-9684-2253fb137ea0",
        "severity": "GREEN",
        "opportunity_id": "OPP-2046",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 46 to maintain a 40.5% margin and generate $507.6K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3496,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 327690.65
      },
      {
        "scenario": "B",
        "margin": 0.3663,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 352493.0
      },
      {
        "scenario": "C",
        "margin": 0.4052,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 507602.25
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "8c7718e5-e1c6-4e3a-b2da-b489475bd355",
      "4addc50b-3e27-4acb-a936-4016d5683874"
    ],
    "confidence_score": 0.9
  },
  "OPP-2047": {
    "opportunity_id": "OPP-2047",
    "account_summary": {
      "customer_id": "CUST-1047",
      "customer_name": "BioLabs 47",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 342958.98,
      "total_cost": 197659.31,
      "gross_margin_pct": 0.4236648651101073
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2047",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 333364.43,
        "total_cost": 197659.31,
        "gross_margin_pct": 0.4070773837508699,
        "instrument_discount_pct": 0.27,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2047",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 337752.98,
        "total_cost": 197659.31,
        "gross_margin_pct": 0.4147814476722011,
        "instrument_discount_pct": 0.22,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2047",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 433577.53,
        "total_cost": 248583.31,
        "gross_margin_pct": 0.4266692971842891,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2047",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4266692971842891
    },
    "issues_summary": [
      {
        "issue_id": "1b62654b-4f2d-4dd9-a439-4845f14260e1",
        "severity": "AMBER",
        "opportunity_id": "OPP-2047",
        "customer_id": "CUST-1047",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.22",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "b7f90a5b-bb9c-41ff-a4c3-fea90047548b",
        "severity": "AMBER",
        "opportunity_id": "OPP-2047",
        "customer_id": "CUST-1047",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:GBP/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "24fee68b-0f4d-4829-885f-d2ef364febde",
        "severity": "GREEN",
        "opportunity_id": "OPP-2047",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "Legal",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 47 to maintain a 42.7% margin and generate \u20ac185.0K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4071,
        "requires_cfo": false,
        "tender_flag": true,
        "lifetime_profit": 135705.12
      },
      {
        "scenario": "B",
        "margin": 0.4148,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 140093.67
      },
      {
        "scenario": "C",
        "margin": 0.4267,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 184994.22
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "c4a3ce54-d0b8-43af-a95d-3f0b802ccb60",
      "9bc514d6-006d-4188-8918-bc44b254b5e8"
    ],
    "confidence_score": 0.9
  },
  "OPP-2048": {
    "opportunity_id": "OPP-2048",
    "account_summary": {
      "customer_id": "CUST-1048",
      "customer_name": "HealthCenter 48",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 983970.72,
      "total_cost": 488728.24,
      "gross_margin_pct": 0.5033101797988461
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2048",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 939094.52,
        "total_cost": 488728.24,
        "gross_margin_pct": 0.47957502722942097,
        "instrument_discount_pct": 0.27,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2048",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 977604.9199999999,
        "total_cost": 488728.24,
        "gross_margin_pct": 0.5000759202398449,
        "instrument_discount_pct": 0.22,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2048",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1287285.72,
        "total_cost": 637045.0399999999,
        "gross_margin_pct": 0.5051253734097199,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2048",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5051253734097199
    },
    "issues_summary": [
      {
        "issue_id": "0e91a928-d080-4509-8dad-1e36c493004b",
        "severity": "AMBER",
        "opportunity_id": "OPP-2048",
        "customer_id": "CUST-1048",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.22",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "39dbe89b-8791-42f3-b8bc-fe1e44187db4",
        "severity": "AMBER",
        "opportunity_id": "OPP-2048",
        "customer_id": "CUST-1048",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "373e7ed0-f615-4736-bcf8-c377458631b0",
        "severity": "GREEN",
        "opportunity_id": "OPP-2048",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 48 to maintain a 50.5% margin and generate \u20ac650.2K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4796,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 450366.28
      },
      {
        "scenario": "B",
        "margin": 0.5001,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 488876.68
      },
      {
        "scenario": "C",
        "margin": 0.5051,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 650240.68
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "4a566042-58d8-4b06-8706-3dbfc8179906",
      "4703714b-411f-47d4-a246-37a0cd4c41dc"
    ],
    "confidence_score": 0.9
  },
  "OPP-2049": {
    "opportunity_id": "OPP-2049",
    "account_summary": {
      "customer_id": "CUST-1049",
      "customer_name": "BioLabs 49",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 1983932.3,
      "total_cost": 949052.7000000001,
      "gross_margin_pct": 0.5216305012020823
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2049",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1927837.05,
        "total_cost": 949052.7000000001,
        "gross_margin_pct": 0.5077111418727013,
        "instrument_discount_pct": 0.19,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2049",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1969940.9,
        "total_cost": 949052.7000000001,
        "gross_margin_pct": 0.5182329073933131,
        "instrument_discount_pct": 0.14,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2049",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2342415.15,
        "total_cost": 1123565.5,
        "gross_margin_pct": 0.5203388690514574,
        "instrument_discount_pct": 0.09000000000000001,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2049",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5203388690514574
    },
    "issues_summary": [
      {
        "issue_id": "5c1858d1-80f8-4f6a-9f62-2a7d49b03411",
        "severity": "AMBER",
        "opportunity_id": "OPP-2049",
        "customer_id": "CUST-1049",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "207f1f60-0ca3-495c-b290-c985da149de1",
        "severity": "GREEN",
        "opportunity_id": "OPP-2049",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 49 to maintain a 52.0% margin and generate \u20ac1218.8K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.5077,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 978784.35
      },
      {
        "scenario": "B",
        "margin": 0.5182,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1020888.2
      },
      {
        "scenario": "C",
        "margin": 0.5203,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1218849.65
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "4d803a08-d013-4527-908f-4644ecd4715c"
    ],
    "confidence_score": 0.9
  },
  "OPP-2050": {
    "opportunity_id": "OPP-2050",
    "account_summary": {
      "customer_id": "CUST-1050",
      "customer_name": "HealthCenter 50",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 1472360.05,
      "total_cost": 823724.75,
      "gross_margin_pct": 0.44054122495377407
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2050",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1424387.2999999998,
        "total_cost": 823724.75,
        "gross_margin_pct": 0.42169889467562643,
        "instrument_discount_pct": 0.14,
        "term_years": 6,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2050",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1427319.85,
        "total_cost": 823724.75,
        "gross_margin_pct": 0.42288706347074206,
        "instrument_discount_pct": 0.09,
        "term_years": 6,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2050",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1515115.0,
        "total_cost": 881169.45,
        "gross_margin_pct": 0.41841414678093747,
        "instrument_discount_pct": 0.039999999999999994,
        "term_years": 7,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": true
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2050",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.41841414678093747
    },
    "issues_summary": [
      {
        "issue_id": "2d893692-8478-407b-aa30-1b178340fd4a",
        "severity": "AMBER",
        "opportunity_id": "OPP-2050",
        "customer_id": "CUST-1050",
        "source_table": "opportunities",
        "rule_id": "R_TENDER",
        "field": "tender_flag",
        "current_value": "True",
        "expected_value": "False",
        "description": "EU Public Hospital Tender parameters met",
        "recommended_action": "Engage Legal for Tender Review"
      },
      {
        "issue_id": "54400f7d-b554-4c59-a8ae-445cb75a1628",
        "severity": "AMBER",
        "opportunity_id": "OPP-2050",
        "customer_id": "CUST-1050",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:USD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "d2183421-b1a4-4b71-acea-10e4c6195aac",
        "severity": "GREEN",
        "opportunity_id": "OPP-2050",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "Legal"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 50 to maintain a 41.8% margin and generate \u20ac633.9K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4217,
        "requires_cfo": false,
        "tender_flag": true,
        "lifetime_profit": 600662.55
      },
      {
        "scenario": "B",
        "margin": 0.4229,
        "requires_cfo": false,
        "tender_flag": true,
        "lifetime_profit": 603595.1
      },
      {
        "scenario": "C",
        "margin": 0.4184,
        "requires_cfo": false,
        "tender_flag": true,
        "lifetime_profit": 633945.55
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "73490601-34fa-42e1-9e51-8e127be14cb9",
      "51ff7834-c777-4af7-9662-d7a9d491ce8b"
    ],
    "confidence_score": 0.9
  },
  "OPP-2051": {
    "opportunity_id": "OPP-2051",
    "account_summary": {
      "customer_id": "CUST-1051",
      "customer_name": "BioLabs 51",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 1818374.29,
      "total_cost": 830201.8200000001,
      "gross_margin_pct": 0.5434373304959124
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2051",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1739840.9400000002,
        "total_cost": 830201.8200000001,
        "gross_margin_pct": 0.522828897220915,
        "instrument_discount_pct": 0.18,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2051",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1809839.49,
        "total_cost": 830201.8200000001,
        "gross_margin_pct": 0.5412842826188967,
        "instrument_discount_pct": 0.13,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2051",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2097250.24,
        "total_cost": 947442.72,
        "gross_margin_pct": 0.5482452680515607,
        "instrument_discount_pct": 0.08,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2051",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5482452680515607
    },
    "issues_summary": [
      {
        "issue_id": "ff9fa900-56d4-4294-b4fc-5a1dbe4ea28f",
        "severity": "AMBER",
        "opportunity_id": "OPP-2051",
        "customer_id": "CUST-1051",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "997cb031-f34b-4a0e-9205-f8a9ded282f0",
        "severity": "GREEN",
        "opportunity_id": "OPP-2051",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 51 to maintain a 54.8% margin and generate \u20ac1149.8K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.5228,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 909639.12
      },
      {
        "scenario": "B",
        "margin": 0.5413,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 979637.67
      },
      {
        "scenario": "C",
        "margin": 0.5482,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1149807.52
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "b6bab671-986d-4d89-8cae-ab1e81f3d11b"
    ],
    "confidence_score": 0.9
  },
  "OPP-2052": {
    "opportunity_id": "OPP-2052",
    "account_summary": {
      "customer_id": "CUST-1052",
      "customer_name": "HealthCenter 52",
      "region": "Canada"
    },
    "baseline_economics": {
      "total_revenue": 1669766.8,
      "total_cost": 1127066.08,
      "gross_margin_pct": 0.32501587646849844
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2052",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1585676.0,
        "total_cost": 1127066.08,
        "gross_margin_pct": 0.28922044604320174,
        "instrument_discount_pct": 0.5,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2052",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1656610.6,
        "total_cost": 1127066.08,
        "gross_margin_pct": 0.3196553975931338,
        "instrument_discount_pct": 0.45,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2052",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1967030.4000000001,
        "total_cost": 1255579.48,
        "gross_margin_pct": 0.3616878112305738,
        "instrument_discount_pct": 0.4,
        "term_years": 4,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2052",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.3616878112305738
    },
    "issues_summary": [
      {
        "issue_id": "ca371f68-75f6-4e7c-aac6-6b16dd1aa286",
        "severity": "RED",
        "opportunity_id": "OPP-2052",
        "customer_id": "CUST-1052",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.325",
        "expected_value": ">=0.35",
        "description": "Margin below Canada floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "05e362eb-051b-41f4-afbb-55fa9472f99e",
        "severity": "RED",
        "opportunity_id": "OPP-2052",
        "customer_id": "CUST-1052",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.45",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "4a3cecda-fa45-4ddb-9616-13c4c10afd9c",
        "severity": "AMBER",
        "opportunity_id": "OPP-2052",
        "customer_id": "CUST-1052",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 52 to maintain a 36.2% margin and generate $711.5K in lifetime gross profit. Contains 2 critical RED flag(s) including Margin below Canada floor. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.2892,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 458609.92
      },
      {
        "scenario": "B",
        "margin": 0.3197,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 529544.52
      },
      {
        "scenario": "C",
        "margin": 0.3617,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 711450.92
      }
    ],
    "issue_summary_counts": {
      "RED": 2,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "e7a8ebe0-8cd1-44b1-9a9b-db4d7d00b6c5",
      "d798f403-9797-4aaf-995f-403c023952c3",
      "e186cb5d-4df2-49d0-8a1a-d6e92c309a38"
    ],
    "confidence_score": 0.45
  },
  "OPP-2053": {
    "opportunity_id": "OPP-2053",
    "account_summary": {
      "customer_id": "CUST-1053",
      "customer_name": "BioLabs 53",
      "region": "Canada"
    },
    "baseline_economics": {
      "total_revenue": 757327.44,
      "total_cost": 412200.3,
      "gross_margin_pct": 0.4557171994190518
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2053",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 751842.09,
        "total_cost": 412200.3,
        "gross_margin_pct": 0.4517461771793064,
        "instrument_discount_pct": 0.13,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2053",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 741046.1399999999,
        "total_cost": 412200.3,
        "gross_margin_pct": 0.4437589270757148,
        "instrument_discount_pct": 0.08,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2053",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 938194.99,
        "total_cost": 527026.9,
        "gross_margin_pct": 0.4382544080735285,
        "instrument_discount_pct": 0.03,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2053",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4382544080735285
    },
    "issues_summary": [
      {
        "issue_id": "f2fc9c6e-a37b-42f2-a8bb-c4e6759b24df",
        "severity": "AMBER",
        "opportunity_id": "OPP-2053",
        "customer_id": "CUST-1053",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:USD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "edcb5822-a0e7-4182-ac8e-260d7ad586a1",
        "severity": "GREEN",
        "opportunity_id": "OPP-2053",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 53 to maintain a 43.8% margin and generate $411.2K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4517,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 339641.79
      },
      {
        "scenario": "B",
        "margin": 0.4438,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 328845.84
      },
      {
        "scenario": "C",
        "margin": 0.4383,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 411168.09
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "e10f5629-eecf-4048-ba6a-ddfc5695f717"
    ],
    "confidence_score": 0.9
  },
  "OPP-2054": {
    "opportunity_id": "OPP-2054",
    "account_summary": {
      "customer_id": "CUST-1054",
      "customer_name": "HealthCenter 54",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 920819.75,
      "total_cost": 536349.85,
      "gross_margin_pct": 0.41753003234346353
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2054",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 872847.0,
        "total_cost": 536349.85,
        "gross_margin_pct": 0.385516762960748,
        "instrument_discount_pct": 0.2,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2054",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 916167.95,
        "total_cost": 536349.85,
        "gross_margin_pct": 0.41457256827200734,
        "instrument_discount_pct": 0.15,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2054",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1055468.3,
        "total_cost": 593643.15,
        "gross_margin_pct": 0.4375547328138609,
        "instrument_discount_pct": 0.09999999999999999,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2054",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4375547328138609
    },
    "issues_summary": [
      {
        "issue_id": "322873fa-bd7b-40f8-baa1-3b470a2b2391",
        "severity": "AMBER",
        "opportunity_id": "OPP-2054",
        "customer_id": "CUST-1054",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:USD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "228fe6ae-671e-47ab-be2f-a6f3b0f71e1a",
        "severity": "GREEN",
        "opportunity_id": "OPP-2054",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 54 to maintain a 43.8% margin and generate \u20ac461.8K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3855,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 336497.15
      },
      {
        "scenario": "B",
        "margin": 0.4146,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 379818.1
      },
      {
        "scenario": "C",
        "margin": 0.4376,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 461825.15
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "8e27f83f-3871-4f24-991b-59c820f24de7"
    ],
    "confidence_score": 0.9
  },
  "OPP-2055": {
    "opportunity_id": "OPP-2055",
    "account_summary": {
      "customer_id": "CUST-1055",
      "customer_name": "BioLabs 55",
      "region": "Canada"
    },
    "baseline_economics": {
      "total_revenue": 811586.1,
      "total_cost": 537912.9,
      "gross_margin_pct": 0.33720784523046904
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2055",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 773188.65,
        "total_cost": 537912.9,
        "gross_margin_pct": 0.3042928139206389,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2055",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 807932.7,
        "total_cost": 537912.9,
        "gross_margin_pct": 0.33421075790099836,
        "instrument_discount_pct": 0.1,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2055",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 899239.35,
        "total_cost": 569847.6,
        "gross_margin_pct": 0.36630041823681314,
        "instrument_discount_pct": 0.05,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2055",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.36630041823681314
    },
    "issues_summary": [
      {
        "issue_id": "0f42e539-9ab4-400e-b053-c3d8889505fa",
        "severity": "RED",
        "opportunity_id": "OPP-2055",
        "customer_id": "CUST-1055",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.337",
        "expected_value": ">=0.35",
        "description": "Margin below Canada floor",
        "recommended_action": "Increase price or bundle"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 55 to maintain a 36.6% margin and generate $329.4K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below Canada floor. Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3043,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 235275.75
      },
      {
        "scenario": "B",
        "margin": 0.3342,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 270019.8
      },
      {
        "scenario": "C",
        "margin": 0.3663,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 329391.75
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 0,
      "GREEN": 0
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "66d2b24d-418a-4784-94cc-2b94a022083a"
    ],
    "confidence_score": 0.5
  },
  "OPP-2056": {
    "opportunity_id": "OPP-2056",
    "account_summary": {
      "customer_id": "CUST-1056",
      "customer_name": "HealthCenter 56",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 1347631.38,
      "total_cost": 626630.36,
      "gross_margin_pct": 0.5350135286995172
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2056",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1280317.08,
        "total_cost": 626630.36,
        "gross_margin_pct": 0.5105662731610204,
        "instrument_discount_pct": 0.22000000000000003,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2056",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1346725.18,
        "total_cost": 626630.36,
        "gross_margin_pct": 0.5347006432299721,
        "instrument_discount_pct": 0.17,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2056",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1641534.88,
        "total_cost": 742643.56,
        "gross_margin_pct": 0.5475919707536157,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2056",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5475919707536157
    },
    "issues_summary": [
      {
        "issue_id": "0f79b2df-7103-4aa2-a114-cb7ab2290243",
        "severity": "AMBER",
        "opportunity_id": "OPP-2056",
        "customer_id": "CUST-1056",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "6108dcb8-a690-40b2-8766-adc3fe30d3e7",
        "severity": "GREEN",
        "opportunity_id": "OPP-2056",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 56 to maintain a 54.8% margin and generate \u20ac898.9K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.5106,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 653686.72
      },
      {
        "scenario": "B",
        "margin": 0.5347,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 720094.82
      },
      {
        "scenario": "C",
        "margin": 0.5476,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 898891.32
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "9f050d28-c8a4-459c-9740-5a24c945593a"
    ],
    "confidence_score": 0.9
  },
  "OPP-2057": {
    "opportunity_id": "OPP-2057",
    "account_summary": {
      "customer_id": "CUST-1057",
      "customer_name": "BioLabs 57",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 1640274.9,
      "total_cost": 825643.2000000001,
      "gross_margin_pct": 0.4966433980060293
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2057",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1584179.65,
        "total_cost": 825643.2000000001,
        "gross_margin_pct": 0.47881971593310135,
        "instrument_discount_pct": 0.27,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2057",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1622740.5,
        "total_cost": 825643.2000000001,
        "gross_margin_pct": 0.49120441623290967,
        "instrument_discount_pct": 0.22,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2057",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1904674.75,
        "total_cost": 959019.5,
        "gross_margin_pct": 0.4964917238494394,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2057",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4964917238494394
    },
    "issues_summary": [
      {
        "issue_id": "20550bd5-7ec7-4aef-a18a-5da35a8defd3",
        "severity": "AMBER",
        "opportunity_id": "OPP-2057",
        "customer_id": "CUST-1057",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.22",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "68aaadd4-122a-40a1-9158-546f5638860e",
        "severity": "AMBER",
        "opportunity_id": "OPP-2057",
        "customer_id": "CUST-1057",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "86548c0a-8895-43fb-9541-b4fa5f7f8699",
        "severity": "GREEN",
        "opportunity_id": "OPP-2057",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "Legal",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 57 to maintain a 49.6% margin and generate \u20ac945.7K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4788,
        "requires_cfo": false,
        "tender_flag": true,
        "lifetime_profit": 758536.45
      },
      {
        "scenario": "B",
        "margin": 0.4912,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 797097.3
      },
      {
        "scenario": "C",
        "margin": 0.4965,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 945655.25
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "239bf3a2-c018-475e-8dfb-06bca5246e12",
      "7caf847d-e6a9-4688-b49a-40042aeff0b2"
    ],
    "confidence_score": 0.9
  },
  "OPP-2058": {
    "opportunity_id": "OPP-2058",
    "account_summary": {
      "customer_id": "CUST-1058",
      "customer_name": "HealthCenter 58",
      "region": "France"
    },
    "baseline_economics": {
      "total_revenue": 900101.28,
      "total_cost": 539206.64,
      "gross_margin_pct": 0.40094892432549367
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2058",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 861723.08,
        "total_cost": 539206.64,
        "gross_margin_pct": 0.37426923739816736,
        "instrument_discount_pct": 0.28,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2058",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 898678.38,
        "total_cost": 539206.64,
        "gross_margin_pct": 0.4000004317451144,
        "instrument_discount_pct": 0.23,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2058",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1241864.88,
        "total_cost": 695168.04,
        "gross_margin_pct": 0.4402224821753554,
        "instrument_discount_pct": 0.18,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2058",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4402224821753554
    },
    "issues_summary": [
      {
        "issue_id": "078b6c4d-6aac-43d9-a18e-51f9c6611a41",
        "severity": "AMBER",
        "opportunity_id": "OPP-2058",
        "customer_id": "CUST-1058",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.23",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "626b0a65-3147-437d-8a0b-d8771945c663",
        "severity": "AMBER",
        "opportunity_id": "OPP-2058",
        "customer_id": "CUST-1058",
        "source_table": "contracts",
        "rule_id": "R_EXPIRED_ACTIVE",
        "field": "end_date",
        "current_value": "2026-01-15",
        "expected_value": "Active contract should be in future",
        "description": "Ghost contract detected",
        "recommended_action": "Close out or renew contract in CRM"
      },
      {
        "issue_id": "600f5b57-04b3-4e60-a89c-5ae6dc2468cd",
        "severity": "GREEN",
        "opportunity_id": "OPP-2058",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 58 to maintain a 44.0% margin and generate \u20ac546.7K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3743,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 322516.44
      },
      {
        "scenario": "B",
        "margin": 0.4,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 359471.74
      },
      {
        "scenario": "C",
        "margin": 0.4402,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 546696.84
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "a8945bb7-e391-4230-bbe5-79cd28d9c3c5",
      "d2df3ff1-fb13-43e7-a4bd-c882402e39f4"
    ],
    "confidence_score": 0.9
  },
  "OPP-2059": {
    "opportunity_id": "OPP-2059",
    "account_summary": {
      "customer_id": "CUST-1059",
      "customer_name": "BioLabs 59",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 877797.2000000001,
      "total_cost": 437732.24,
      "gross_margin_pct": 0.5013287351565943
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2059",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 835751.7999999999,
        "total_cost": 437732.24,
        "gross_margin_pct": 0.47624134342277213,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2059",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 871317.9,
        "total_cost": 437732.24,
        "gross_margin_pct": 0.49762051255919343,
        "instrument_discount_pct": 0.1,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2059",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1014905.4,
        "total_cost": 504701.54,
        "gross_margin_pct": 0.5027107551107719,
        "instrument_discount_pct": 0.05,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2059",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5027107551107719
    },
    "issues_summary": [
      {
        "issue_id": "15b0bf58-2f53-41c9-aaca-dec81c66e8cd",
        "severity": "AMBER",
        "opportunity_id": "OPP-2059",
        "customer_id": "CUST-1059",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "e0001c76-46e6-4c6c-83fd-bd4f23b3be1b",
        "severity": "GREEN",
        "opportunity_id": "OPP-2059",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 59 to maintain a 50.3% margin and generate \u20ac510.2K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4762,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 398019.56
      },
      {
        "scenario": "B",
        "margin": 0.4976,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 433585.66
      },
      {
        "scenario": "C",
        "margin": 0.5027,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 510203.86
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "7424723e-228b-4745-aaf4-1fb5bf610f31"
    ],
    "confidence_score": 0.9
  },
  "OPP-2060": {
    "opportunity_id": "OPP-2060",
    "account_summary": {
      "customer_id": "CUST-1060",
      "customer_name": "HealthCenter 60",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 1065060.28,
      "total_cost": 714340.24,
      "gross_margin_pct": 0.3292959530891529
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2060",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1023722.08,
        "total_cost": 714340.24,
        "gross_margin_pct": 0.30221272554754314,
        "instrument_discount_pct": 0.28,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2060",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1053877.28,
        "total_cost": 714340.24,
        "gross_margin_pct": 0.3221789163155695,
        "instrument_discount_pct": 0.23,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2060",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1287075.48,
        "total_cost": 827044.74,
        "gross_margin_pct": 0.3574232802570367,
        "instrument_discount_pct": 0.18,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2060",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.3574232802570367
    },
    "issues_summary": [
      {
        "issue_id": "76afb53b-226c-4956-a88e-b736eb9daca1",
        "severity": "RED",
        "opportunity_id": "OPP-2060",
        "customer_id": "CUST-1060",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.329",
        "expected_value": ">=0.33",
        "description": "Margin below Netherlands floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "f8477d4e-38b3-4966-a94f-d8d791a140da",
        "severity": "AMBER",
        "opportunity_id": "OPP-2060",
        "customer_id": "CUST-1060",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.23",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "f7ab196c-6741-4d24-ba83-9b54ce7b5fa7",
        "severity": "AMBER",
        "opportunity_id": "OPP-2060",
        "customer_id": "CUST-1060",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 60 to maintain a 35.7% margin and generate \u20ac460.0K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below Netherlands floor. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3022,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 309381.84
      },
      {
        "scenario": "B",
        "margin": 0.3222,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 339537.04
      },
      {
        "scenario": "C",
        "margin": 0.3574,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 460030.74
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 2,
      "GREEN": 0
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "cc295fd5-6db9-415e-b904-deb47fa6830e",
      "5173660a-4968-4bfa-8ea5-23c5147d773e",
      "8ebb9d62-ea46-46ea-b5f9-3c756a4c6a1c"
    ],
    "confidence_score": 0.5
  },
  "OPP-2061": {
    "opportunity_id": "OPP-2061",
    "account_summary": {
      "customer_id": "CUST-1061",
      "customer_name": "BioLabs 61",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 1096338.5899999999,
      "total_cost": 599225.33,
      "gross_margin_pct": 0.45343041331784184
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2061",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1067554.94,
        "total_cost": 599225.33,
        "gross_margin_pct": 0.43869368446742424,
        "instrument_discount_pct": 0.22000000000000003,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2061",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1093812.19,
        "total_cost": 599225.33,
        "gross_margin_pct": 0.45216799055786716,
        "instrument_discount_pct": 0.17,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2061",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1426808.04,
        "total_cost": 755121.0299999999,
        "gross_margin_pct": 0.47076200243446914,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2061",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.47076200243446914
    },
    "issues_summary": [
      {
        "issue_id": "57a74325-b796-49ea-a0c3-f62ff48e3bd7",
        "severity": "AMBER",
        "opportunity_id": "OPP-2061",
        "customer_id": "CUST-1061",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:GBP/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "3f291d1e-4790-47bf-a538-fbbbc676630a",
        "severity": "GREEN",
        "opportunity_id": "OPP-2061",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 61 to maintain a 47.1% margin and generate $671.7K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4387,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 468329.61
      },
      {
        "scenario": "B",
        "margin": 0.4522,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 494586.86
      },
      {
        "scenario": "C",
        "margin": 0.4708,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 671687.01
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "0a595a86-9c1e-47d0-ae80-6f7038658422"
    ],
    "confidence_score": 0.9
  },
  "OPP-2062": {
    "opportunity_id": "OPP-2062",
    "account_summary": {
      "customer_id": "CUST-1062",
      "customer_name": "HealthCenter 62",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 843943.08,
      "total_cost": 456739.11,
      "gross_margin_pct": 0.4588034183537591
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2062",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 833608.53,
        "total_cost": 456739.11,
        "gross_margin_pct": 0.4520940062837409,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2062",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 840464.2799999999,
        "total_cost": 456739.11,
        "gross_margin_pct": 0.45656332949688233,
        "instrument_discount_pct": 0.12,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2062",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1065685.83,
        "total_cost": 568241.2100000001,
        "gross_margin_pct": 0.4667835547742996,
        "instrument_discount_pct": 0.06999999999999999,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2062",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4667835547742996
    },
    "issues_summary": [
      {
        "issue_id": "a9e4f19a-abea-4f49-a0b5-ea6abe1d3634",
        "severity": "AMBER",
        "opportunity_id": "OPP-2062",
        "customer_id": "CUST-1062",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "25188c09-9509-49ff-8cdd-1fd2f98549f1",
        "severity": "GREEN",
        "opportunity_id": "OPP-2062",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 62 to maintain a 46.7% margin and generate \u20ac497.4K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4521,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 376869.42
      },
      {
        "scenario": "B",
        "margin": 0.4566,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 383725.17
      },
      {
        "scenario": "C",
        "margin": 0.4668,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 497444.62
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "25fdd5fb-c31f-4013-8db8-0f8f4c6221da"
    ],
    "confidence_score": 0.9
  },
  "OPP-2063": {
    "opportunity_id": "OPP-2063",
    "account_summary": {
      "customer_id": "CUST-1063",
      "customer_name": "BioLabs 63",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 1435402.6800000002,
      "total_cost": 1027301.78,
      "gross_margin_pct": 0.28431108962399326
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2063",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1352726.28,
        "total_cost": 1027301.78,
        "gross_margin_pct": 0.24056936337482848,
        "instrument_discount_pct": 0.24,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2063",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1433985.8800000001,
        "total_cost": 1027301.78,
        "gross_margin_pct": 0.28360397802522297,
        "instrument_discount_pct": 0.19,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2063",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1608456.8800000001,
        "total_cost": 1076741.08,
        "gross_margin_pct": 0.3305751037603196,
        "instrument_discount_pct": 0.14,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2063",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.3305751037603196
    },
    "issues_summary": [
      {
        "issue_id": "6fec8690-b615-482e-b68f-040a2c667010",
        "severity": "RED",
        "opportunity_id": "OPP-2063",
        "customer_id": "CUST-1063",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.284",
        "expected_value": ">=0.33",
        "description": "Margin below Spain floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "0ebe6e8e-7e00-48d8-ad5f-64c0abe24133",
        "severity": "AMBER",
        "opportunity_id": "OPP-2063",
        "customer_id": "CUST-1063",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 63 to maintain a 33.1% margin and generate \u20ac531.7K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below Spain floor. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.2406,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 325424.5
      },
      {
        "scenario": "B",
        "margin": 0.2836,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 406684.1
      },
      {
        "scenario": "C",
        "margin": 0.3306,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 531715.8
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "b4a97964-082b-4a36-b012-d4bcfded4421",
      "fef5d6ee-a914-419c-99f8-5615c0264edd"
    ],
    "confidence_score": 0.5
  },
  "OPP-2064": {
    "opportunity_id": "OPP-2064",
    "account_summary": {
      "customer_id": "CUST-1064",
      "customer_name": "HealthCenter 64",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 1916564.4999999998,
      "total_cost": 993280.95,
      "gross_margin_pct": 0.48173883529617706
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2064",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1811451.0,
        "total_cost": 993280.95,
        "gross_margin_pct": 0.4516655708600454,
        "instrument_discount_pct": 0.2,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2064",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1915008.4,
        "total_cost": 993280.95,
        "gross_margin_pct": 0.48131770596933154,
        "instrument_discount_pct": 0.15,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2064",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2145088.6,
        "total_cost": 1059654.55,
        "gross_margin_pct": 0.5060089592569743,
        "instrument_discount_pct": 0.09999999999999999,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2064",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5060089592569743
    },
    "issues_summary": [
      {
        "issue_id": "e0a28755-0cfe-4b18-820b-b8a4f90ce8e3",
        "severity": "AMBER",
        "opportunity_id": "OPP-2064",
        "customer_id": "CUST-1064",
        "source_table": "contracts",
        "rule_id": "R_EXPIRED_ACTIVE",
        "field": "end_date",
        "current_value": "2025-12-29",
        "expected_value": "Active contract should be in future",
        "description": "Ghost contract detected",
        "recommended_action": "Close out or renew contract in CRM"
      },
      {
        "issue_id": "07e81a62-2da9-4c4e-b8cc-63c33eeb5b2e",
        "severity": "AMBER",
        "opportunity_id": "OPP-2064",
        "customer_id": "CUST-1064",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "0d123d75-95eb-473b-ab9a-0c62ee1f3f70",
        "severity": "GREEN",
        "opportunity_id": "OPP-2064",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 64 to maintain a 50.6% margin and generate \u20ac1085.4K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4517,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 818170.05
      },
      {
        "scenario": "B",
        "margin": 0.4813,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 921727.45
      },
      {
        "scenario": "C",
        "margin": 0.506,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1085434.05
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "3a7ade2e-4adb-4a98-8046-33511aaa4f30",
      "85a7f2cd-d081-4368-b834-c26871ca7ca9"
    ],
    "confidence_score": 0.9
  },
  "OPP-2065": {
    "opportunity_id": "OPP-2065",
    "account_summary": {
      "customer_id": "CUST-1065",
      "customer_name": "BioLabs 65",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 937139.68,
      "total_cost": 601332.14,
      "gross_margin_pct": 0.3583324312977549
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2065",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 895801.4800000001,
        "total_cost": 601332.14,
        "gross_margin_pct": 0.3287216493547209,
        "instrument_discount_pct": 0.18,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2065",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 933666.28,
        "total_cost": 601332.14,
        "gross_margin_pct": 0.3559453169927054,
        "instrument_discount_pct": 0.13,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2065",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1182439.2799999998,
        "total_cost": 713733.04,
        "gross_margin_pct": 0.39638926744720443,
        "instrument_discount_pct": 0.08,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2065",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.39638926744720443
    },
    "issues_summary": [
      {
        "issue_id": "5a515c75-87af-4dd2-9bc6-060bc26687ce",
        "severity": "AMBER",
        "opportunity_id": "OPP-2065",
        "customer_id": "CUST-1065",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "542fa17d-5a64-476e-aa65-b5983e5ab5e6",
        "severity": "GREEN",
        "opportunity_id": "OPP-2065",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 65 to maintain a 39.6% margin and generate \u20ac468.7K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3287,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 294469.34
      },
      {
        "scenario": "B",
        "margin": 0.3559,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 332334.14
      },
      {
        "scenario": "C",
        "margin": 0.3964,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 468706.24
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "ad94c57c-0bde-4dbb-96e5-5dae8f7bff97"
    ],
    "confidence_score": 0.9
  },
  "OPP-2066": {
    "opportunity_id": "OPP-2066",
    "account_summary": {
      "customer_id": "CUST-1066",
      "customer_name": "HealthCenter 66",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 1553863.6800000002,
      "total_cost": 1089426.78,
      "gross_margin_pct": 0.2988916633922482
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2066",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1471187.28,
        "total_cost": 1089426.78,
        "gross_margin_pct": 0.25949143605972447,
        "instrument_discount_pct": 0.24,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2066",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1549552.3800000001,
        "total_cost": 1089426.78,
        "gross_margin_pct": 0.2969409785295545,
        "instrument_discount_pct": 0.19,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2066",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1696545.28,
        "total_cost": 1126614.88,
        "gross_margin_pct": 0.33593586137588977,
        "instrument_discount_pct": 0.14,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2066",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.33593586137588977
    },
    "issues_summary": [
      {
        "issue_id": "87b9f001-21af-4fe1-9f2b-f208184b273d",
        "severity": "RED",
        "opportunity_id": "OPP-2066",
        "customer_id": "CUST-1066",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.299",
        "expected_value": ">=0.33",
        "description": "Margin below Italy floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "2b1008b3-21e3-4b1c-b36d-2b673fab926d",
        "severity": "AMBER",
        "opportunity_id": "OPP-2066",
        "customer_id": "CUST-1066",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 66 to maintain a 33.6% margin and generate \u20ac569.9K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below Italy floor. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.2595,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 381760.5
      },
      {
        "scenario": "B",
        "margin": 0.2969,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 460125.6
      },
      {
        "scenario": "C",
        "margin": 0.3359,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 569930.4
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "414ac237-c4e5-4bed-998f-cbed88df8cb4",
      "c9020355-f116-4dd0-943f-cd26c30141ed"
    ],
    "confidence_score": 0.5
  },
  "OPP-2067": {
    "opportunity_id": "OPP-2067",
    "account_summary": {
      "customer_id": "CUST-1067",
      "customer_name": "BioLabs 67",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 3158362.2,
      "total_cost": 1562641.99,
      "gross_margin_pct": 0.5052366096580057
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2067",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 3011203.3,
        "total_cost": 1562641.99,
        "gross_margin_pct": 0.481057293607509,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2067",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 3148141.5,
        "total_cost": 1562641.99,
        "gross_margin_pct": 0.5036303196663809,
        "instrument_discount_pct": 0.1,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2067",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 3448099.9,
        "total_cost": 1650965.8900000001,
        "gross_margin_pct": 0.5211954589830764,
        "instrument_discount_pct": 0.05,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2067",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5211954589830764
    },
    "issues_summary": [
      {
        "issue_id": "a5d1562f-bca1-42a9-b90e-64257b7718b9",
        "severity": "AMBER",
        "opportunity_id": "OPP-2067",
        "customer_id": "CUST-1067",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "7f9a35a2-d7b0-485a-b254-cc37726dd92a",
        "severity": "GREEN",
        "opportunity_id": "OPP-2067",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 67 to maintain a 52.1% margin and generate $1797.1K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4811,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1448561.31
      },
      {
        "scenario": "B",
        "margin": 0.5036,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1585499.51
      },
      {
        "scenario": "C",
        "margin": 0.5212,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1797134.01
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "eb1f506f-8278-4153-8f10-4ddc2b4b135d"
    ],
    "confidence_score": 0.9
  },
  "OPP-2068": {
    "opportunity_id": "OPP-2068",
    "account_summary": {
      "customer_id": "CUST-1068",
      "customer_name": "HealthCenter 68",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 659364.1599999999,
      "total_cost": 396441.62,
      "gross_margin_pct": 0.3987516397615545
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2068",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 638695.06,
        "total_cost": 396441.62,
        "gross_margin_pct": 0.37929436936618866,
        "instrument_discount_pct": 0.16999999999999998,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2068",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 655182.1599999999,
        "total_cost": 396441.62,
        "gross_margin_pct": 0.3949138969229564,
        "instrument_discount_pct": 0.12,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2068",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 815281.26,
        "total_cost": 472429.62,
        "gross_margin_pct": 0.4205317315891696,
        "instrument_discount_pct": 0.06999999999999999,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2068",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4205317315891696
    },
    "issues_summary": [
      {
        "issue_id": "abeac701-7d0a-4c3e-b6b5-583d9c8c465a",
        "severity": "AMBER",
        "opportunity_id": "OPP-2068",
        "customer_id": "CUST-1068",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "b211222c-5e83-4d28-b687-55048cacb466",
        "severity": "GREEN",
        "opportunity_id": "OPP-2068",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 68 to maintain a 42.1% margin and generate $342.9K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3793,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 242253.44
      },
      {
        "scenario": "B",
        "margin": 0.3949,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 258740.54
      },
      {
        "scenario": "C",
        "margin": 0.4205,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 342851.64
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "8ad74798-3840-4cac-9c8f-c2bcdb39b8b1"
    ],
    "confidence_score": 0.9
  },
  "OPP-2069": {
    "opportunity_id": "OPP-2069",
    "account_summary": {
      "customer_id": "CUST-1069",
      "customer_name": "BioLabs 69",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 532138.26,
      "total_cost": 305679.81,
      "gross_margin_pct": 0.4255631797645973
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2069",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 521803.71,
        "total_cost": 305679.81,
        "gross_margin_pct": 0.41418620806663103,
        "instrument_discount_pct": 0.19,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2069",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 525883.26,
        "total_cost": 305679.81,
        "gross_margin_pct": 0.4187306703773001,
        "instrument_discount_pct": 0.14,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2069",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 700899.81,
        "total_cost": 397403.31,
        "gross_margin_pct": 0.4330098191922752,
        "instrument_discount_pct": 0.09000000000000001,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2069",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4330098191922752
    },
    "issues_summary": [
      {
        "issue_id": "916a0b8b-a097-4379-adb3-bd8e0f8840ed",
        "severity": "AMBER",
        "opportunity_id": "OPP-2069",
        "customer_id": "CUST-1069",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "8d0c6a67-29b7-4f9c-ae7e-2d5bb9cbf7d9",
        "severity": "GREEN",
        "opportunity_id": "OPP-2069",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 69 to maintain a 43.3% margin and generate $303.5K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4142,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 216123.9
      },
      {
        "scenario": "B",
        "margin": 0.4187,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 220203.45
      },
      {
        "scenario": "C",
        "margin": 0.433,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 303496.5
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "470c910d-63c4-41cc-92b7-1ad3e681c625"
    ],
    "confidence_score": 0.9
  },
  "OPP-2070": {
    "opportunity_id": "OPP-2070",
    "account_summary": {
      "customer_id": "CUST-1070",
      "customer_name": "HealthCenter 70",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 1267855.6,
      "total_cost": 764416.04,
      "gross_margin_pct": 0.3970795727841562
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2070",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1226517.4,
        "total_cost": 764416.04,
        "gross_margin_pct": 0.37675891104357745,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2070",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1254254.8,
        "total_cost": 764416.04,
        "gross_margin_pct": 0.3905416666533786,
        "instrument_discount_pct": 0.1,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2070",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1530275.4,
        "total_cost": 902158.44,
        "gross_margin_pct": 0.41046007797027906,
        "instrument_discount_pct": 0.05,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2070",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.41046007797027906
    },
    "issues_summary": [
      {
        "issue_id": "29a0b5fe-a949-4abd-a51a-38af246841af",
        "severity": "AMBER",
        "opportunity_id": "OPP-2070",
        "customer_id": "CUST-1070",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "4134efe2-9b0d-4ba9-92eb-605e8d905aca",
        "severity": "GREEN",
        "opportunity_id": "OPP-2070",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 70 to maintain a 41.0% margin and generate $628.1K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3768,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 462101.36
      },
      {
        "scenario": "B",
        "margin": 0.3905,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 489838.76
      },
      {
        "scenario": "C",
        "margin": 0.4105,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 628116.96
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "0f1c035f-cb9f-4b56-b4a2-8055455cc85c"
    ],
    "confidence_score": 0.9
  },
  "OPP-2071": {
    "opportunity_id": "OPP-2071",
    "account_summary": {
      "customer_id": "CUST-1071",
      "customer_name": "BioLabs 71",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 1441796.36,
      "total_cost": 826706.08,
      "gross_margin_pct": 0.4266138388641792
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2071",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1365039.9600000002,
        "total_cost": 826706.08,
        "gross_margin_pct": 0.3943722497325281,
        "instrument_discount_pct": 0.18,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2071",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1434698.26,
        "total_cost": 826706.08,
        "gross_margin_pct": 0.4237770386645622,
        "instrument_discount_pct": 0.13,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2071",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1596395.36,
        "total_cost": 886921.6799999999,
        "gross_margin_pct": 0.4444222889748315,
        "instrument_discount_pct": 0.08,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2071",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4444222889748315
    },
    "issues_summary": [
      {
        "issue_id": "e65ff12a-165e-41ca-8007-2bcd59ff532c",
        "severity": "AMBER",
        "opportunity_id": "OPP-2071",
        "customer_id": "CUST-1071",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:USD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "d149b33b-50cf-4c42-bca4-8824ceed996f",
        "severity": "GREEN",
        "opportunity_id": "OPP-2071",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 71 to maintain a 44.4% margin and generate \u20ac709.5K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3944,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 538333.88
      },
      {
        "scenario": "B",
        "margin": 0.4238,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 607992.18
      },
      {
        "scenario": "C",
        "margin": 0.4444,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 709473.68
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "a6ef62e1-f653-4d19-8e82-b2decd606b71"
    ],
    "confidence_score": 0.9
  },
  "OPP-2072": {
    "opportunity_id": "OPP-2072",
    "account_summary": {
      "customer_id": "CUST-1072",
      "customer_name": "HealthCenter 72",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 449167.88,
      "total_cost": 261273.41999999998,
      "gross_margin_pct": 0.41831677723705446
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2072",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 429978.78,
        "total_cost": 261273.41999999998,
        "gross_margin_pct": 0.3923574088935273,
        "instrument_discount_pct": 0.21000000000000002,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2072",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 442912.58,
        "total_cost": 261273.41999999998,
        "gross_margin_pct": 0.4101016051519693,
        "instrument_discount_pct": 0.16,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2072",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 570126.78,
        "total_cost": 330924.22,
        "gross_margin_pct": 0.41956029499263314,
        "instrument_discount_pct": 0.11,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2072",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.41956029499263314
    },
    "issues_summary": [
      {
        "issue_id": "5d408f3e-c7bc-47c1-a880-e2e469d2e1e6",
        "severity": "AMBER",
        "opportunity_id": "OPP-2072",
        "customer_id": "CUST-1072",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "d84bcfd6-b524-4dff-9efe-38c532ef7685",
        "severity": "GREEN",
        "opportunity_id": "OPP-2072",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 72 to maintain a 42.0% margin and generate $239.2K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3924,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 168705.36
      },
      {
        "scenario": "B",
        "margin": 0.4101,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 181639.16
      },
      {
        "scenario": "C",
        "margin": 0.4196,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 239202.56
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "86b0f520-b05e-4cc9-86af-a4a581d1b181"
    ],
    "confidence_score": 0.9
  },
  "OPP-2073": {
    "opportunity_id": "OPP-2073",
    "account_summary": {
      "customer_id": "CUST-1073",
      "customer_name": "BioLabs 73",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 615936.4,
      "total_cost": 376422.32999999996,
      "gross_margin_pct": 0.3888616909148413
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2073",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 587152.75,
        "total_cost": 376422.32999999996,
        "gross_margin_pct": 0.35890221071092665,
        "instrument_discount_pct": 0.25,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2073",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 604647.0,
        "total_cost": 376422.32999999996,
        "gross_margin_pct": 0.37745109129789783,
        "instrument_discount_pct": 0.2,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2073",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 688550.8500000001,
        "total_cost": 420916.52999999997,
        "gross_margin_pct": 0.388692164129926,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2073",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.388692164129926
    },
    "issues_summary": [
      {
        "issue_id": "70223904-05c4-4741-bf0a-6e7a72302af3",
        "severity": "GREEN",
        "opportunity_id": "OPP-2073",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 73 to maintain a 38.9% margin and generate \u20ac267.6K in lifetime gross profit. Clean deal with no major flags. Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3589,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 210730.42
      },
      {
        "scenario": "B",
        "margin": 0.3775,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 228224.67
      },
      {
        "scenario": "C",
        "margin": 0.3887,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 267634.32
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 0,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [],
    "confidence_score": 0.9
  },
  "OPP-2074": {
    "opportunity_id": "OPP-2074",
    "account_summary": {
      "customer_id": "CUST-1074",
      "customer_name": "HealthCenter 74",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 480209.2,
      "total_cost": 261557.37,
      "gross_margin_pct": 0.45532619949805214
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2074",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 459186.5,
        "total_cost": 261557.37,
        "gross_margin_pct": 0.43038967826798047,
        "instrument_discount_pct": 0.25,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2074",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 475956.3,
        "total_cost": 261557.37,
        "gross_margin_pct": 0.45045927535784275,
        "instrument_discount_pct": 0.2,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2074",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 628066.2999999999,
        "total_cost": 337733.26999999996,
        "gross_margin_pct": 0.46226493922695744,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2074",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.46226493922695744
    },
    "issues_summary": [
      {
        "issue_id": "95827fb5-0f62-49ad-8576-5fa46f413426",
        "severity": "AMBER",
        "opportunity_id": "OPP-2074",
        "customer_id": "CUST-1074",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "50f04664-3e52-4b6b-b90d-e75bba23c37f",
        "severity": "GREEN",
        "opportunity_id": "OPP-2074",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 74 to maintain a 46.2% margin and generate $290.3K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4304,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 197629.13
      },
      {
        "scenario": "B",
        "margin": 0.4505,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 214398.93
      },
      {
        "scenario": "C",
        "margin": 0.4623,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 290333.03
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "5cb74f61-ed1d-4774-ae0c-ca5e9499195e"
    ],
    "confidence_score": 0.9
  },
  "OPP-2075": {
    "opportunity_id": "OPP-2075",
    "account_summary": {
      "customer_id": "CUST-1075",
      "customer_name": "BioLabs 75",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 424954.99,
      "total_cost": 214001.86,
      "gross_margin_pct": 0.49641287892630703
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2075",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 413735.94,
        "total_cost": 214001.86,
        "gross_margin_pct": 0.48275738385212563,
        "instrument_discount_pct": 0.26,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2075",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 419902.99,
        "total_cost": 214001.86,
        "gross_margin_pct": 0.4903540458237747,
        "instrument_discount_pct": 0.21,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2075",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 544865.04,
        "total_cost": 278451.36,
        "gross_margin_pct": 0.48895352140779674,
        "instrument_discount_pct": 0.15999999999999998,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2075",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.48895352140779674
    },
    "issues_summary": [
      {
        "issue_id": "922e1bf3-f60a-444e-8539-812b9e043e56",
        "severity": "AMBER",
        "opportunity_id": "OPP-2075",
        "customer_id": "CUST-1075",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.21",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "c1dd9439-fa43-4c78-86a5-bca19d2025e7",
        "severity": "AMBER",
        "opportunity_id": "OPP-2075",
        "customer_id": "CUST-1075",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "4fff3fae-4a99-4752-aa61-538987d1f00c",
        "severity": "GREEN",
        "opportunity_id": "OPP-2075",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 75 to maintain a 48.9% margin and generate \u20ac266.4K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4828,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 199734.08
      },
      {
        "scenario": "B",
        "margin": 0.4904,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 205901.13
      },
      {
        "scenario": "C",
        "margin": 0.489,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 266413.68
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "27b0615c-8fd6-4e2a-8f58-b981173538ed",
      "c4f9646f-90f3-447e-ac6b-58eb5fa1c9c9"
    ],
    "confidence_score": 0.9
  },
  "OPP-2076": {
    "opportunity_id": "OPP-2076",
    "account_summary": {
      "customer_id": "CUST-1076",
      "customer_name": "HealthCenter 76",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 575492.4,
      "total_cost": 409959.02999999997,
      "gross_margin_pct": 0.2876378037312049
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2076",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 544488.75,
        "total_cost": 409959.02999999997,
        "gross_margin_pct": 0.24707529769898834,
        "instrument_discount_pct": 0.25,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2076",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 571948.8,
        "total_cost": 409959.02999999997,
        "gross_margin_pct": 0.2832242501426702,
        "instrument_discount_pct": 0.2,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2076",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 623524.45,
        "total_cost": 424379.23,
        "gross_margin_pct": 0.31938638492844984,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2076",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.31938638492844984
    },
    "issues_summary": [
      {
        "issue_id": "ddc3354e-1ba8-4ae3-a2b2-dbd4cb3eb60b",
        "severity": "RED",
        "opportunity_id": "OPP-2076",
        "customer_id": "CUST-1076",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.288",
        "expected_value": ">=0.33",
        "description": "Margin below Italy floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "a4bb21f5-dfe6-4b89-ab20-66d5991803be",
        "severity": "AMBER",
        "opportunity_id": "OPP-2076",
        "customer_id": "CUST-1076",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 76 to maintain a 31.9% margin and generate \u20ac199.1K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below Italy floor. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.2471,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 134529.72
      },
      {
        "scenario": "B",
        "margin": 0.2832,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 161989.77
      },
      {
        "scenario": "C",
        "margin": 0.3194,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 199145.22
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "e9bdb0da-16b0-485b-bae3-2840a286c322",
      "a5a47e4c-78a3-4a02-bd59-847bff0e6ebb"
    ],
    "confidence_score": 0.45
  },
  "OPP-2077": {
    "opportunity_id": "OPP-2077",
    "account_summary": {
      "customer_id": "CUST-1077",
      "customer_name": "BioLabs 77",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 1426940.55,
      "total_cost": 913289.8500000001,
      "gross_margin_pct": 0.3599664330795
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2077",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1375267.8,
        "total_cost": 913289.8500000001,
        "gross_margin_pct": 0.3359185389202015,
        "instrument_discount_pct": 0.24,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2077",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1419735.75,
        "total_cost": 913289.8500000001,
        "gross_margin_pct": 0.35671842453780567,
        "instrument_discount_pct": 0.19,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2077",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1751919.9,
        "total_cost": 1064352.75,
        "gross_margin_pct": 0.3924649465994421,
        "instrument_discount_pct": 0.14,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2077",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.3924649465994421
    },
    "issues_summary": [
      {
        "issue_id": "4f5e6749-5ccc-41cd-860c-46381d65392d",
        "severity": "AMBER",
        "opportunity_id": "OPP-2077",
        "customer_id": "CUST-1077",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "264a3564-c41f-40b4-b87d-c458a913d413",
        "severity": "GREEN",
        "opportunity_id": "OPP-2077",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 77 to maintain a 39.2% margin and generate $687.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3359,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 461977.95
      },
      {
        "scenario": "B",
        "margin": 0.3567,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 506445.9
      },
      {
        "scenario": "C",
        "margin": 0.3925,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 687567.15
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "3b744dc6-1d0e-4b79-a89b-2426d71f9747"
    ],
    "confidence_score": 0.9
  },
  "OPP-2078": {
    "opportunity_id": "OPP-2078",
    "account_summary": {
      "customer_id": "CUST-1078",
      "customer_name": "HealthCenter 78",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 2009068.8,
      "total_cost": 1013062.71,
      "gross_margin_pct": 0.495755093105821
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2078",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1946000.7,
        "total_cost": 1013062.71,
        "gross_margin_pct": 0.4794129776006761,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2078",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1989072.0,
        "total_cost": 1013062.71,
        "gross_margin_pct": 0.49068575194864744,
        "instrument_discount_pct": 0.1,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2078",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2310093.1,
        "total_cost": 1165368.81,
        "gross_margin_pct": 0.4955316692647582,
        "instrument_discount_pct": 0.05,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2078",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4955316692647582
    },
    "issues_summary": [
      {
        "issue_id": "79028ef8-0d58-427c-8c9b-61c82bd0a338",
        "severity": "AMBER",
        "opportunity_id": "OPP-2078",
        "customer_id": "CUST-1078",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "7304c1b2-edee-4c36-bf37-440ea808c00f",
        "severity": "GREEN",
        "opportunity_id": "OPP-2078",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 78 to maintain a 49.6% margin and generate $1144.7K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4794,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 932937.99
      },
      {
        "scenario": "B",
        "margin": 0.4907,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 976009.29
      },
      {
        "scenario": "C",
        "margin": 0.4955,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1144724.29
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "7058696e-2aa9-4912-a7af-6ba89bf25732"
    ],
    "confidence_score": 0.9
  },
  "OPP-2079": {
    "opportunity_id": "OPP-2079",
    "account_summary": {
      "customer_id": "CUST-1079",
      "customer_name": "BioLabs 79",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 373119.17000000004,
      "total_cost": 222410.31,
      "gross_margin_pct": 0.4039161536513925
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2079",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 362784.62,
        "total_cost": 222410.31,
        "gross_margin_pct": 0.3869356699851278,
        "instrument_discount_pct": 0.18,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2079",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 369590.67000000004,
        "total_cost": 222410.31,
        "gross_margin_pct": 0.3982253123435178,
        "instrument_discount_pct": 0.13,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2079",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 562637.72,
        "total_cost": 322587.81,
        "gross_margin_pct": 0.42665093623655376,
        "instrument_discount_pct": 0.08,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2079",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.42665093623655376
    },
    "issues_summary": [
      {
        "issue_id": "276454cd-14b6-4f2c-837c-29ef719e11a9",
        "severity": "AMBER",
        "opportunity_id": "OPP-2079",
        "customer_id": "CUST-1079",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "dda10eb8-c933-4b83-8a28-23c19b5ed50f",
        "severity": "GREEN",
        "opportunity_id": "OPP-2079",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 79 to maintain a 42.7% margin and generate \u20ac240.0K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3869,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 140374.31
      },
      {
        "scenario": "B",
        "margin": 0.3982,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 147180.36
      },
      {
        "scenario": "C",
        "margin": 0.4267,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 240049.91
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "8ce50a2c-45f9-43d1-9743-d12410a4c3bd"
    ],
    "confidence_score": 0.9
  },
  "OPP-2080": {
    "opportunity_id": "OPP-2080",
    "account_summary": {
      "customer_id": "CUST-1080",
      "customer_name": "HealthCenter 80",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 714344.6,
      "total_cost": 397337.31,
      "gross_margin_pct": 0.4437736213026598
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2080",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 704750.05,
        "total_cost": 397337.31,
        "gross_margin_pct": 0.4362010900176595,
        "instrument_discount_pct": 0.45,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2080",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 712423.6,
        "total_cost": 397337.31,
        "gross_margin_pct": 0.442273796095469,
        "instrument_discount_pct": 0.4,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2080",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1017781.15,
        "total_cost": 548100.31,
        "gross_margin_pct": 0.46147527884555534,
        "instrument_discount_pct": 0.35000000000000003,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2080",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.46147527884555534
    },
    "issues_summary": [
      {
        "issue_id": "22c8c428-d562-4ba1-a191-888d223c5709",
        "severity": "RED",
        "opportunity_id": "OPP-2080",
        "customer_id": "CUST-1080",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.4",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "6b3bd340-0f9f-4d7e-92d0-6991fb30e135",
        "severity": "AMBER",
        "opportunity_id": "OPP-2080",
        "customer_id": "CUST-1080",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:USD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 80 to maintain a 46.1% margin and generate $469.7K in lifetime gross profit. Contains 1 critical RED flag(s) including Discount exceeds hard limit. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4362,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 307412.74
      },
      {
        "scenario": "B",
        "margin": 0.4423,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 315086.29
      },
      {
        "scenario": "C",
        "margin": 0.4615,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 469680.84
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "caa59b99-46f8-4cbf-b617-4a67577211b8",
      "7fe4dc37-5f7f-4865-a673-84abfa89abae"
    ],
    "confidence_score": 0.45
  },
  "OPP-2081": {
    "opportunity_id": "OPP-2081",
    "account_summary": {
      "customer_id": "CUST-1081",
      "customer_name": "BioLabs 81",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 1446186.8,
      "total_cost": 873317.68,
      "gross_margin_pct": 0.39612387556019735
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2081",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1356434.4,
        "total_cost": 873317.68,
        "gross_margin_pct": 0.3561666675513389,
        "instrument_discount_pct": 0.45,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2081",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1438271.0,
        "total_cost": 873317.68,
        "gross_margin_pct": 0.3928003276155884,
        "instrument_discount_pct": 0.4,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2081",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1873434.0,
        "total_cost": 1065812.48,
        "gross_margin_pct": 0.4310915249749925,
        "instrument_discount_pct": 0.35000000000000003,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2081",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.4310915249749925
    },
    "issues_summary": [
      {
        "issue_id": "ea86f078-de81-4b5e-a777-735c2c3ed8c9",
        "severity": "RED",
        "opportunity_id": "OPP-2081",
        "customer_id": "CUST-1081",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.4",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "f1d20f0f-54c4-43c9-b252-8ed41d826896",
        "severity": "AMBER",
        "opportunity_id": "OPP-2081",
        "customer_id": "CUST-1081",
        "source_table": "contracts",
        "rule_id": "R_EXPIRED_ACTIVE",
        "field": "end_date",
        "current_value": "2025-11-19",
        "expected_value": "Active contract should be in future",
        "description": "Ghost contract detected",
        "recommended_action": "Close out or renew contract in CRM"
      },
      {
        "issue_id": "e933ef29-1443-460e-9df5-1c2b843dedc7",
        "severity": "AMBER",
        "opportunity_id": "OPP-2081",
        "customer_id": "CUST-1081",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 81 to maintain a 43.1% margin and generate $807.6K in lifetime gross profit. Contains 1 critical RED flag(s) including Discount exceeds hard limit. Requires review for 2 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3562,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 483116.72
      },
      {
        "scenario": "B",
        "margin": 0.3928,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 564953.32
      },
      {
        "scenario": "C",
        "margin": 0.4311,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 807621.52
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 2,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "1182a56a-3077-406b-878e-3d694cf1a509",
      "ce243466-5f01-47d3-a8d3-b4045cf3f57e",
      "22d599ea-6f30-4712-86c2-47819b88922b"
    ],
    "confidence_score": 0.45
  },
  "OPP-2082": {
    "opportunity_id": "OPP-2082",
    "account_summary": {
      "customer_id": "CUST-1082",
      "customer_name": "HealthCenter 82",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 1107065.4,
      "total_cost": 633691.2,
      "gross_margin_pct": 0.4275937085559715
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2082",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1096094.7,
        "total_cost": 633691.2,
        "gross_margin_pct": 0.42186455239679566,
        "instrument_discount_pct": 0.45,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2082",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1096523.7,
        "total_cost": 633691.2,
        "gross_margin_pct": 0.4220907400359883,
        "instrument_discount_pct": 0.4,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2082",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1415063.9000000001,
        "total_cost": 799774.6,
        "gross_margin_pct": 0.4348137918012042,
        "instrument_discount_pct": 0.35000000000000003,
        "term_years": 4,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2082",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.4348137918012042
    },
    "issues_summary": [
      {
        "issue_id": "53443cf2-0473-4d83-8bbe-9841211b1937",
        "severity": "RED",
        "opportunity_id": "OPP-2082",
        "customer_id": "CUST-1082",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.4",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "7f35c4cb-fc97-42d6-95e9-46dff53934c4",
        "severity": "AMBER",
        "opportunity_id": "OPP-2082",
        "customer_id": "CUST-1082",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:GBP/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 82 to maintain a 43.5% margin and generate $615.3K in lifetime gross profit. Contains 1 critical RED flag(s) including Discount exceeds hard limit. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4219,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 462403.5
      },
      {
        "scenario": "B",
        "margin": 0.4221,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 462832.5
      },
      {
        "scenario": "C",
        "margin": 0.4348,
        "requires_cfo": true,
        "tender_flag": false,
        "lifetime_profit": 615289.3
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "e861a20a-7a36-496a-9d1c-b1c2ec7814b2",
      "c1041822-f2a7-4baa-b8af-6bfaf1059fc8"
    ],
    "confidence_score": 0.45
  },
  "OPP-2083": {
    "opportunity_id": "OPP-2083",
    "account_summary": {
      "customer_id": "CUST-1083",
      "customer_name": "BioLabs 83",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 1434457.8,
      "total_cost": 917146.83,
      "gross_margin_pct": 0.3606317104623085
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2083",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1403454.15,
        "total_cost": 917146.83,
        "gross_margin_pct": 0.34650745092028834,
        "instrument_discount_pct": 0.45,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2083",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1415216.4000000001,
        "total_cost": 917146.83,
        "gross_margin_pct": 0.3519388059663527,
        "instrument_discount_pct": 0.4,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2083",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1768289.05,
        "total_cost": 1100629.63,
        "gross_margin_pct": 0.3775736890979448,
        "instrument_discount_pct": 0.35000000000000003,
        "term_years": 4,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": true
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2083",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.3775736890979448
    },
    "issues_summary": [
      {
        "issue_id": "8cfee6eb-55b0-4989-942a-5851f528fcec",
        "severity": "RED",
        "opportunity_id": "OPP-2083",
        "customer_id": "CUST-1083",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.4",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "e57acce2-97dd-46a1-89c7-b83c1e8067d5",
        "severity": "AMBER",
        "opportunity_id": "OPP-2083",
        "customer_id": "CUST-1083",
        "source_table": "opportunities",
        "rule_id": "R_TENDER",
        "field": "tender_flag",
        "current_value": "True",
        "expected_value": "False",
        "description": "EU Public Hospital Tender parameters met",
        "recommended_action": "Engage Legal for Tender Review"
      },
      {
        "issue_id": "2e8f9c4b-3b3c-462b-b52b-8fd8cf84a465",
        "severity": "AMBER",
        "opportunity_id": "OPP-2083",
        "customer_id": "CUST-1083",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "Legal",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 83 to maintain a 37.8% margin and generate \u20ac667.7K in lifetime gross profit. Contains 1 critical RED flag(s) including Discount exceeds hard limit. Requires review for 2 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3465,
        "requires_cfo": true,
        "tender_flag": true,
        "lifetime_profit": 486307.32
      },
      {
        "scenario": "B",
        "margin": 0.3519,
        "requires_cfo": true,
        "tender_flag": true,
        "lifetime_profit": 498069.57
      },
      {
        "scenario": "C",
        "margin": 0.3776,
        "requires_cfo": true,
        "tender_flag": true,
        "lifetime_profit": 667659.42
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 2,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "c9e2c6e9-c1a9-4424-9495-9e98b0ac55e9",
      "e0bbbd9e-988e-4a57-a48f-8384c0a3526b",
      "8e22bc83-0085-46bd-963f-e3a62f0074c9"
    ],
    "confidence_score": 0.45
  },
  "OPP-2084": {
    "opportunity_id": "OPP-2084",
    "account_summary": {
      "customer_id": "CUST-1084",
      "customer_name": "HealthCenter 84",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 1166023.2,
      "total_cost": 666075.02,
      "gross_margin_pct": 0.4287634928704677
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2084",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1146834.1,
        "total_cost": 666075.02,
        "gross_margin_pct": 0.4192054282306395,
        "instrument_discount_pct": 0.45,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2084",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1159447.8,
        "total_cost": 666075.02,
        "gross_margin_pct": 0.42552392613104273,
        "instrument_discount_pct": 0.4,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": true
      },
      {
        "opportunity_id": "OPP-2084",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1479595.9000000001,
        "total_cost": 824225.82,
        "gross_margin_pct": 0.44293856180596347,
        "instrument_discount_pct": 0.35000000000000003,
        "term_years": 4,
        "requires_vp": true,
        "requires_cfo": true,
        "tender_flag": true
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2084",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.44293856180596347
    },
    "issues_summary": [
      {
        "issue_id": "d7ee25e4-6eff-4cd8-a606-f547a09a31f3",
        "severity": "RED",
        "opportunity_id": "OPP-2084",
        "customer_id": "CUST-1084",
        "source_table": "opportunities",
        "rule_id": "R_HIGH_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.4",
        "expected_value": "<=0.30",
        "description": "Discount exceeds hard limit",
        "recommended_action": "Require CFO approval"
      },
      {
        "issue_id": "f4271e71-d8c5-4b76-8555-8c06d3f43b12",
        "severity": "AMBER",
        "opportunity_id": "OPP-2084",
        "customer_id": "CUST-1084",
        "source_table": "opportunities",
        "rule_id": "R_TENDER",
        "field": "tender_flag",
        "current_value": "True",
        "expected_value": "False",
        "description": "EU Public Hospital Tender parameters met",
        "recommended_action": "Engage Legal for Tender Review"
      },
      {
        "issue_id": "fa972698-aec6-403d-839a-b3a35d2ea7aa",
        "severity": "AMBER",
        "opportunity_id": "OPP-2084",
        "customer_id": "CUST-1084",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "CFO",
      "Legal",
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 84 to maintain a 44.3% margin and generate \u20ac655.4K in lifetime gross profit. Contains 1 critical RED flag(s) including Discount exceeds hard limit. Requires review for 2 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4192,
        "requires_cfo": true,
        "tender_flag": true,
        "lifetime_profit": 480759.08
      },
      {
        "scenario": "B",
        "margin": 0.4255,
        "requires_cfo": true,
        "tender_flag": true,
        "lifetime_profit": 493372.78
      },
      {
        "scenario": "C",
        "margin": 0.4429,
        "requires_cfo": true,
        "tender_flag": true,
        "lifetime_profit": 655370.08
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 2,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "20cdfc5a-7751-4c87-89ff-7489dfdf1041",
      "28a3f032-5d7a-4686-91dd-33dc42b9556d",
      "777682ab-a727-43b1-8505-291d386621a6"
    ],
    "confidence_score": 0.45
  },
  "OPP-2085": {
    "opportunity_id": "OPP-2085",
    "account_summary": {
      "customer_id": "CUST-1085",
      "customer_name": "BioLabs 85",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 555776.75,
      "total_cost": 361174.1,
      "gross_margin_pct": 0.3501453596250653
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2085",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 539320.7,
        "total_cost": 361174.1,
        "gross_margin_pct": 0.3303166372067677,
        "instrument_discount_pct": 0.3,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2085",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 552232.15,
        "total_cost": 361174.1,
        "gross_margin_pct": 0.3459741523560337,
        "instrument_discount_pct": 0.25,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2085",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 866990.4,
        "total_cost": 519186.7,
        "gross_margin_pct": 0.401162112060295,
        "instrument_discount_pct": 0.2,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2085",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.401162112060295
    },
    "issues_summary": [
      {
        "issue_id": "b6659ba3-9874-42b0-8409-30b3ff87d9e0",
        "severity": "AMBER",
        "opportunity_id": "OPP-2085",
        "customer_id": "CUST-1085",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.25",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "ee4db231-6a1e-4ba2-9bb6-ca1aade7aab1",
        "severity": "AMBER",
        "opportunity_id": "OPP-2085",
        "customer_id": "CUST-1085",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "539e0781-7457-4eeb-b05d-fac01da15409",
        "severity": "GREEN",
        "opportunity_id": "OPP-2085",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 85 to maintain a 40.1% margin and generate $347.8K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3303,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 178146.6
      },
      {
        "scenario": "B",
        "margin": 0.346,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 191058.05
      },
      {
        "scenario": "C",
        "margin": 0.4012,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 347803.7
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "b92cd463-4f9c-429c-9a99-09fb8e8db61f",
      "eeca23d6-fbcf-4872-adb1-738316ba6c92"
    ],
    "confidence_score": 0.9
  },
  "OPP-2086": {
    "opportunity_id": "OPP-2086",
    "account_summary": {
      "customer_id": "CUST-1086",
      "customer_name": "HealthCenter 86",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 1403494.2799999998,
      "total_cost": 639891.62,
      "gross_margin_pct": 0.5440725130707337
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2086",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1324960.9300000002,
        "total_cost": 639891.62,
        "gross_margin_pct": 0.5170486876167738,
        "instrument_discount_pct": 0.21000000000000002,
        "term_years": 1,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2086",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1401389.68,
        "total_cost": 639891.62,
        "gross_margin_pct": 0.5433878034552102,
        "instrument_discount_pct": 0.16,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2086",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1557743.2300000002,
        "total_cost": 684063.22,
        "gross_margin_pct": 0.5608626589890556,
        "instrument_discount_pct": 0.11,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2086",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5608626589890556
    },
    "issues_summary": [
      {
        "issue_id": "882d2eca-050a-46ff-bbe5-6ecc512a0981",
        "severity": "AMBER",
        "opportunity_id": "OPP-2086",
        "customer_id": "CUST-1086",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "8d70c853-be69-4a8f-a159-98ca9ec0f5cd",
        "severity": "GREEN",
        "opportunity_id": "OPP-2086",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 86 to maintain a 56.1% margin and generate \u20ac873.7K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.517,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 685069.31
      },
      {
        "scenario": "B",
        "margin": 0.5434,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 761498.06
      },
      {
        "scenario": "C",
        "margin": 0.5609,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 873680.01
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "d0fb8e65-3ecf-45bc-ab19-0a5304513d47"
    ],
    "confidence_score": 0.9
  },
  "OPP-2087": {
    "opportunity_id": "OPP-2087",
    "account_summary": {
      "customer_id": "CUST-1087",
      "customer_name": "BioLabs 87",
      "region": "Switzerland"
    },
    "baseline_economics": {
      "total_revenue": 142184.22999999998,
      "total_cost": 93274.8,
      "gross_margin_pct": 0.3439863197205484
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2087",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 136698.88,
        "total_cost": 93274.8,
        "gross_margin_pct": 0.3176622954043223,
        "instrument_discount_pct": 0.16,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2087",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 138902.43,
        "total_cost": 93274.8,
        "gross_margin_pct": 0.32848690984023815,
        "instrument_discount_pct": 0.11,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2087",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 179087.38,
        "total_cost": 118829.1,
        "gross_margin_pct": 0.3364741837197015,
        "instrument_discount_pct": 0.06,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2087",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.3364741837197015
    },
    "issues_summary": [
      {
        "issue_id": "28a7107e-a317-4d01-862b-a0377e5fa814",
        "severity": "RED",
        "opportunity_id": "OPP-2087",
        "customer_id": "CUST-1087",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.344",
        "expected_value": ">=0.35",
        "description": "Margin below Switzerland floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "7e03a43d-57ad-4fc6-8acd-b41e42c45757",
        "severity": "AMBER",
        "opportunity_id": "OPP-2087",
        "customer_id": "CUST-1087",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 87 to maintain a 33.6% margin and generate $60.3K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below Switzerland floor. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3177,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 43424.08
      },
      {
        "scenario": "B",
        "margin": 0.3285,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 45627.63
      },
      {
        "scenario": "C",
        "margin": 0.3365,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 60258.28
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "3283d47e-c59d-4add-a0e9-77ba2589ea2f",
      "d5376447-b24b-45f1-81ec-5b8c03fe0086"
    ],
    "confidence_score": 0.45
  },
  "OPP-2088": {
    "opportunity_id": "OPP-2088",
    "account_summary": {
      "customer_id": "CUST-1088",
      "customer_name": "HealthCenter 88",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 1711958.3199999998,
      "total_cost": 902191.88,
      "gross_margin_pct": 0.4730059315930074
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2088",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1635201.92,
        "total_cost": 902191.88,
        "gross_margin_pct": 0.4482688229720278,
        "instrument_discount_pct": 0.11,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2088",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1710725.92,
        "total_cost": 902191.88,
        "gross_margin_pct": 0.47262628720794736,
        "instrument_discount_pct": 0.06,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2088",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2052723.1199999999,
        "total_cost": 1037893.28,
        "gross_margin_pct": 0.49438223309922086,
        "instrument_discount_pct": 0.009999999999999995,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2088",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.49438223309922086
    },
    "issues_summary": [
      {
        "issue_id": "757a59a4-ac82-4c63-b343-9e19025492a4",
        "severity": "AMBER",
        "opportunity_id": "OPP-2088",
        "customer_id": "CUST-1088",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:CAD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "92cca269-bf72-4de0-ac71-b166a723a5e0",
        "severity": "GREEN",
        "opportunity_id": "OPP-2088",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 88 to maintain a 49.4% margin and generate \u20ac1014.8K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4483,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 733010.04
      },
      {
        "scenario": "B",
        "margin": 0.4726,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 808534.04
      },
      {
        "scenario": "C",
        "margin": 0.4944,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1014829.84
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "d338df09-fe8f-414e-9377-a161815fb18d"
    ],
    "confidence_score": 0.9
  },
  "OPP-2089": {
    "opportunity_id": "OPP-2089",
    "account_summary": {
      "customer_id": "CUST-1089",
      "customer_name": "BioLabs 89",
      "region": "Germany"
    },
    "baseline_economics": {
      "total_revenue": 1957812.78,
      "total_cost": 1041850.7,
      "gross_margin_pct": 0.46784967866028543
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2089",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1946842.08,
        "total_cost": 1041850.7,
        "gross_margin_pct": 0.4648509446641918,
        "instrument_discount_pct": 0.28,
        "term_years": 7,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2089",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1945835.08,
        "total_cost": 1041850.7,
        "gross_margin_pct": 0.46457399668218546,
        "instrument_discount_pct": 0.23,
        "term_years": 7,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2089",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2196957.88,
        "total_cost": 1171337.8,
        "gross_margin_pct": 0.4668364784490087,
        "instrument_discount_pct": 0.18,
        "term_years": 8,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2089",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4668364784490087
    },
    "issues_summary": [
      {
        "issue_id": "37751670-9d7d-4f11-9a1f-7988eb57661c",
        "severity": "AMBER",
        "opportunity_id": "OPP-2089",
        "customer_id": "CUST-1089",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.23",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "9ab2914d-a53d-49cf-a4e8-10127134a236",
        "severity": "GREEN",
        "opportunity_id": "OPP-2089",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 89 to maintain a 46.7% margin and generate \u20ac1025.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4649,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 904991.38
      },
      {
        "scenario": "B",
        "margin": 0.4646,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 903984.38
      },
      {
        "scenario": "C",
        "margin": 0.4668,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1025620.08
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "990d5d2f-0045-40f6-90e0-bf9bccd25d66"
    ],
    "confidence_score": 0.9
  },
  "OPP-2090": {
    "opportunity_id": "OPP-2090",
    "account_summary": {
      "customer_id": "CUST-1090",
      "customer_name": "HealthCenter 90",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 1547311.74,
      "total_cost": 858008.91,
      "gross_margin_pct": 0.44548413366268386
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2090",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1484243.6400000001,
        "total_cost": 858008.91,
        "gross_margin_pct": 0.421921787719434,
        "instrument_discount_pct": 0.28,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2090",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1533478.74,
        "total_cost": 858008.91,
        "gross_margin_pct": 0.4404820310713926,
        "instrument_discount_pct": 0.23,
        "term_years": 3,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2090",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1765512.84,
        "total_cost": 958630.41,
        "gross_margin_pct": 0.45702439071471157,
        "instrument_discount_pct": 0.18,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2090",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.45702439071471157
    },
    "issues_summary": [
      {
        "issue_id": "4f2ed3f8-c1d1-4d7a-ad2a-288539a8f812",
        "severity": "AMBER",
        "opportunity_id": "OPP-2090",
        "customer_id": "CUST-1090",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.23",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "3de35892-b966-46c8-8910-64ae438469ca",
        "severity": "AMBER",
        "opportunity_id": "OPP-2090",
        "customer_id": "CUST-1090",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "765d01c7-e809-4516-9d65-3656105cba26",
        "severity": "GREEN",
        "opportunity_id": "OPP-2090",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 90 to maintain a 45.7% margin and generate $806.9K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4219,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 626234.73
      },
      {
        "scenario": "B",
        "margin": 0.4405,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 675469.83
      },
      {
        "scenario": "C",
        "margin": 0.457,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 806882.43
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "e221698f-0e61-4280-baae-3adfb9482a49",
      "c10aef65-0a9f-48c8-9420-ea0ff8a51fcf"
    ],
    "confidence_score": 0.9
  },
  "OPP-2091": {
    "opportunity_id": "OPP-2091",
    "account_summary": {
      "customer_id": "CUST-1091",
      "customer_name": "BioLabs 91",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 1424958.7000000002,
      "total_cost": 882528.3,
      "gross_margin_pct": 0.38066394485678784
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2091",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1375590.5499999998,
        "total_cost": 882528.3,
        "gross_margin_pct": 0.35843678193340295,
        "instrument_discount_pct": 0.15000000000000002,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2091",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1420080.9000000001,
        "total_cost": 882528.3,
        "gross_margin_pct": 0.37853660309071124,
        "instrument_discount_pct": 0.1,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2091",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1727859.4500000002,
        "total_cost": 1019050.2,
        "gross_margin_pct": 0.4102239044963988,
        "instrument_discount_pct": 0.05,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2091",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4102239044963988
    },
    "issues_summary": [
      {
        "issue_id": "d359e76d-d1ab-453a-b836-2ee1eb0ea8ec",
        "severity": "AMBER",
        "opportunity_id": "OPP-2091",
        "customer_id": "CUST-1091",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:USD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "f7eca2d1-1215-475a-b453-1242699c3653",
        "severity": "GREEN",
        "opportunity_id": "OPP-2091",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 91 to maintain a 41.0% margin and generate \u20ac708.8K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3584,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 493062.25
      },
      {
        "scenario": "B",
        "margin": 0.3785,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 537552.6
      },
      {
        "scenario": "C",
        "margin": 0.4102,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 708809.25
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "2548c0e2-45c4-47ed-aee2-fdec3f63ed63"
    ],
    "confidence_score": 0.9
  },
  "OPP-2092": {
    "opportunity_id": "OPP-2092",
    "account_summary": {
      "customer_id": "CUST-1092",
      "customer_name": "HealthCenter 92",
      "region": "Netherlands"
    },
    "baseline_economics": {
      "total_revenue": 1863855.9700000002,
      "total_cost": 1211474.0699999998,
      "gross_margin_pct": 0.35001733529871426
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2092",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1791514.12,
        "total_cost": 1211474.0699999998,
        "gross_margin_pct": 0.3237708503240824,
        "instrument_discount_pct": 0.24,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2092",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1853970.57,
        "total_cost": 1211474.0699999998,
        "gross_margin_pct": 0.3465516175912114,
        "instrument_discount_pct": 0.19,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2092",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2252500.62,
        "total_cost": 1389396.27,
        "gross_margin_pct": 0.38317607655086905,
        "instrument_discount_pct": 0.14,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2092",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.38317607655086905
    },
    "issues_summary": [
      {
        "issue_id": "c70a695b-7957-45e0-afe9-ea5867e186ca",
        "severity": "AMBER",
        "opportunity_id": "OPP-2092",
        "customer_id": "CUST-1092",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "0e934bec-a27c-4c25-849d-25258af67386",
        "severity": "GREEN",
        "opportunity_id": "OPP-2092",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 92 to maintain a 38.3% margin and generate \u20ac863.1K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3238,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 580040.05
      },
      {
        "scenario": "B",
        "margin": 0.3466,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 642496.5
      },
      {
        "scenario": "C",
        "margin": 0.3832,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 863104.35
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "f2511003-75c9-439e-8679-967d76b7648f"
    ],
    "confidence_score": 0.9
  },
  "OPP-2093": {
    "opportunity_id": "OPP-2093",
    "account_summary": {
      "customer_id": "CUST-1093",
      "customer_name": "BioLabs 93",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 831205.5199999999,
      "total_cost": 523763.33999999997,
      "gross_margin_pct": 0.3698750460656228
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2093",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 789867.32,
        "total_cost": 523763.33999999997,
        "gross_margin_pct": 0.3368970626611062,
        "instrument_discount_pct": 0.12000000000000001,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2093",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 827530.9199999999,
        "total_cost": 523763.33999999997,
        "gross_margin_pct": 0.3670770150799924,
        "instrument_discount_pct": 0.07,
        "term_years": 1,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2093",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 920160.32,
        "total_cost": 558595.44,
        "gross_margin_pct": 0.39293683083400077,
        "instrument_discount_pct": 0.020000000000000004,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2093",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.39293683083400077
    },
    "issues_summary": [
      {
        "issue_id": "d1c0c548-d180-44c9-902f-7efb6ec3794d",
        "severity": "AMBER",
        "opportunity_id": "OPP-2093",
        "customer_id": "CUST-1093",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "e0489dfb-b28d-4a28-8d42-5e9ff6d916fd",
        "severity": "GREEN",
        "opportunity_id": "OPP-2093",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 93 to maintain a 39.3% margin and generate \u20ac361.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3369,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 266103.98
      },
      {
        "scenario": "B",
        "margin": 0.3671,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 303767.58
      },
      {
        "scenario": "C",
        "margin": 0.3929,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 361564.88
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "c826d4e9-19f0-4a30-acfb-8c5e801dcbd0"
    ],
    "confidence_score": 0.9
  },
  "OPP-2094": {
    "opportunity_id": "OPP-2094",
    "account_summary": {
      "customer_id": "CUST-1094",
      "customer_name": "HealthCenter 94",
      "region": "Spain"
    },
    "baseline_economics": {
      "total_revenue": 2227947.4,
      "total_cost": 1076271.9500000002,
      "gross_margin_pct": 0.5169221903533269
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2094",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2122833.9,
        "total_cost": 1076271.9500000002,
        "gross_margin_pct": 0.49300227869924246,
        "instrument_discount_pct": 0.13,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2094",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2225512.3000000003,
        "total_cost": 1076271.9500000002,
        "gross_margin_pct": 0.5163936186737768,
        "instrument_discount_pct": 0.08,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2094",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2424520.3,
        "total_cost": 1126060.1500000001,
        "gross_margin_pct": 0.5355534247331316,
        "instrument_discount_pct": 0.03,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2094",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5355534247331316
    },
    "issues_summary": [
      {
        "issue_id": "5b2f8769-db97-416d-91d9-eb1d647f9479",
        "severity": "AMBER",
        "opportunity_id": "OPP-2094",
        "customer_id": "CUST-1094",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "03b7abab-1705-493b-be5e-aa54240c523a",
        "severity": "GREEN",
        "opportunity_id": "OPP-2094",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 94 to maintain a 53.6% margin and generate \u20ac1298.5K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.493,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1046561.95
      },
      {
        "scenario": "B",
        "margin": 0.5164,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1149240.35
      },
      {
        "scenario": "C",
        "margin": 0.5356,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1298460.15
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "4a92ae5d-f9ab-431c-88b0-3494cb11a4f6"
    ],
    "confidence_score": 0.9
  },
  "OPP-2095": {
    "opportunity_id": "OPP-2095",
    "account_summary": {
      "customer_id": "CUST-1095",
      "customer_name": "BioLabs 95",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 786662.62,
      "total_cost": 416703.32,
      "gross_margin_pct": 0.4702896649646325
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2095",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 767473.52,
        "total_cost": 416703.32,
        "gross_margin_pct": 0.4570453453560196,
        "instrument_discount_pct": 0.14,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2095",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 780292.42,
        "total_cost": 416703.32,
        "gross_margin_pct": 0.4659651826426816,
        "instrument_discount_pct": 0.09,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2095",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 934671.52,
        "total_cost": 491730.22,
        "gross_margin_pct": 0.4739004992898468,
        "instrument_discount_pct": 0.039999999999999994,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2095",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4739004992898468
    },
    "issues_summary": [
      {
        "issue_id": "05d468b8-eb5a-4936-8dc2-83ac1d24b50a",
        "severity": "AMBER",
        "opportunity_id": "OPP-2095",
        "customer_id": "CUST-1095",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:USD/SAP:EUR",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "1af23ee3-a249-43c6-b41d-a420deb0be8c",
        "severity": "GREEN",
        "opportunity_id": "OPP-2095",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 95 to maintain a 47.4% margin and generate $442.9K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.457,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 350770.2
      },
      {
        "scenario": "B",
        "margin": 0.466,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 363589.1
      },
      {
        "scenario": "C",
        "margin": 0.4739,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 442941.3
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "High",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "8c3ca168-f904-472a-92b9-8b3e56fcf7bd"
    ],
    "confidence_score": 0.9
  },
  "OPP-2096": {
    "opportunity_id": "OPP-2096",
    "account_summary": {
      "customer_id": "CUST-1096",
      "customer_name": "HealthCenter 96",
      "region": "Italy"
    },
    "baseline_economics": {
      "total_revenue": 2490232.92,
      "total_cost": 1505591.28,
      "gross_margin_pct": 0.39540142293195607
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2096",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 2407556.52,
        "total_cost": 1505591.28,
        "gross_margin_pct": 0.37463927949654113,
        "instrument_discount_pct": 0.16,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2096",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 2471800.62,
        "total_cost": 1505591.28,
        "gross_margin_pct": 0.3908929110957178,
        "instrument_discount_pct": 0.11,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2096",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2863287.52,
        "total_cost": 1681500.88,
        "gross_margin_pct": 0.4127376771439286,
        "instrument_discount_pct": 0.06,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2096",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.4127376771439286
    },
    "issues_summary": [
      {
        "issue_id": "f4a51a43-37d0-4dec-b5b2-d3962eb43451",
        "severity": "AMBER",
        "opportunity_id": "OPP-2096",
        "customer_id": "CUST-1096",
        "source_table": "contracts",
        "rule_id": "R_EXPIRED_ACTIVE",
        "field": "end_date",
        "current_value": "2025-12-27",
        "expected_value": "Active contract should be in future",
        "description": "Ghost contract detected",
        "recommended_action": "Close out or renew contract in CRM"
      },
      {
        "issue_id": "71649438-f2cf-44e3-a484-a636de9e63ae",
        "severity": "AMBER",
        "opportunity_id": "OPP-2096",
        "customer_id": "CUST-1096",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "917f0b09-6647-48cf-8db0-f00ac1d143df",
        "severity": "GREEN",
        "opportunity_id": "OPP-2096",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for HealthCenter 96 to maintain a 41.3% margin and generate \u20ac1181.8K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3746,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 901965.24
      },
      {
        "scenario": "B",
        "margin": 0.3909,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 966209.34
      },
      {
        "scenario": "C",
        "margin": 0.4127,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 1181786.64
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "051f4871-4d2d-4987-85fd-6db509c0e100",
      "93fbbeb2-1b95-4fa6-a8f3-1937f5ef1a54"
    ],
    "confidence_score": 0.9
  },
  "OPP-2097": {
    "opportunity_id": "OPP-2097",
    "account_summary": {
      "customer_id": "CUST-1097",
      "customer_name": "BioLabs 97",
      "region": "Canada"
    },
    "baseline_economics": {
      "total_revenue": 1017009.0,
      "total_cost": 514113.64,
      "gross_margin_pct": 0.4944846702438228
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2097",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 972132.7999999999,
        "total_cost": 514113.64,
        "gross_margin_pct": 0.47114875663078126,
        "instrument_discount_pct": 0.3,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2097",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1015239.8,
        "total_cost": 514113.64,
        "gross_margin_pct": 0.4936037377573259,
        "instrument_discount_pct": 0.25,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2097",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1228510.6,
        "total_cost": 600964.74,
        "gross_margin_pct": 0.5108184333126634,
        "instrument_discount_pct": 0.2,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2097",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.5108184333126634
    },
    "issues_summary": [
      {
        "issue_id": "af2d0fb4-8ed7-416b-aeee-6c621f98ee0f",
        "severity": "AMBER",
        "opportunity_id": "OPP-2097",
        "customer_id": "CUST-1097",
        "source_table": "opportunities",
        "rule_id": "R_MED_DISC",
        "field": "requested_instrument_discount_pct",
        "current_value": "0.25",
        "expected_value": "<=0.20",
        "description": "High discount level",
        "recommended_action": "Require VP approval"
      },
      {
        "issue_id": "c4399e15-c93d-42d7-bcb9-519b9e4a3d19",
        "severity": "AMBER",
        "opportunity_id": "OPP-2097",
        "customer_id": "CUST-1097",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "61b3d0d0-617f-4ed9-81eb-138a71b36e89",
        "severity": "GREEN",
        "opportunity_id": "OPP-2097",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for BioLabs 97 to maintain a 51.1% margin and generate $627.5K in lifetime gross profit. Requires review for 2 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.4711,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 458019.16
      },
      {
        "scenario": "B",
        "margin": 0.4936,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 501126.16
      },
      {
        "scenario": "C",
        "margin": 0.5108,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 627545.86
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 2,
      "GREEN": 1
    },
    "approval_routing_summary": "Requires Routing",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Low",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "a58233af-214c-4c7f-a9b9-b116951131c0",
      "9d77be95-8500-40d3-8619-839a181e2532"
    ],
    "confidence_score": 0.9
  },
  "OPP-2098": {
    "opportunity_id": "OPP-2098",
    "account_summary": {
      "customer_id": "CUST-1098",
      "customer_name": "HealthCenter 98",
      "region": "UK"
    },
    "baseline_economics": {
      "total_revenue": 1674689.3900000001,
      "total_cost": 1187842.09,
      "gross_margin_pct": 0.29070901320990633
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2098",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1581678.44,
        "total_cost": 1187842.09,
        "gross_margin_pct": 0.2489990000748824,
        "instrument_discount_pct": 0.24,
        "term_years": 2,
        "requires_vp": true,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2098",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1670898.59,
        "total_cost": 1187842.09,
        "gross_margin_pct": 0.2890998310076975,
        "instrument_discount_pct": 0.19,
        "term_years": 2,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2098",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 1840283.9400000002,
        "total_cost": 1231715.49,
        "gross_margin_pct": 0.330692691911445,
        "instrument_discount_pct": 0.14,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2098",
      "recommended_scenario": "C",
      "rationale": "No compliant scenarios available. Recommending highest margin option. Requires escalation.",
      "escalation_required": true,
      "expected_margin": 0.330692691911445
    },
    "issues_summary": [
      {
        "issue_id": "fa3a5fb2-e201-41d6-8fce-f88da60b737b",
        "severity": "RED",
        "opportunity_id": "OPP-2098",
        "customer_id": "CUST-1098",
        "source_table": "scenarios",
        "rule_id": "R_LOW_MARGIN",
        "field": "gross_margin_pct",
        "current_value": "0.291",
        "expected_value": ">=0.35",
        "description": "Margin below UK floor",
        "recommended_action": "Increase price or bundle"
      },
      {
        "issue_id": "871e5b8b-7b8b-4a1a-815a-7e57d625cfb3",
        "severity": "AMBER",
        "opportunity_id": "OPP-2098",
        "customer_id": "CUST-1098",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      }
    ],
    "required_approvals": [
      "VP Sales"
    ],
    "executive_narrative": "Recommending Scenario C for HealthCenter 98 to maintain a 33.1% margin and generate $608.6K in lifetime gross profit. Contains 1 critical RED flag(s) including Margin below UK floor. Requires review for 1 AMBER flag(s). No compliant scenarios available. Recommending highest margin option. Requires escalation.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.249,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 393836.35
      },
      {
        "scenario": "B",
        "margin": 0.2891,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 483056.5
      },
      {
        "scenario": "C",
        "margin": 0.3307,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 608568.45
      }
    ],
    "issue_summary_counts": {
      "RED": 1,
      "AMBER": 1,
      "GREEN": 0
    },
    "approval_routing_summary": "Escalation Required",
    "risk_summary": {
      "win_risk": "Medium",
      "margin_risk": "High",
      "compliance_risk": "High"
    },
    "audit_refs": [
      "bd2a8ace-2dc7-403c-8f06-32f8693c6655",
      "c67411a0-b2b5-4fd0-a019-8ed4b094dbf9"
    ],
    "confidence_score": 0.45
  },
  "OPP-2099": {
    "opportunity_id": "OPP-2099",
    "account_summary": {
      "customer_id": "CUST-1099",
      "customer_name": "BioLabs 99",
      "region": "US"
    },
    "baseline_economics": {
      "total_revenue": 1865645.85,
      "total_cost": 1110788.25,
      "gross_margin_pct": 0.40460926708035183
    },
    "scenarios": [
      {
        "opportunity_id": "OPP-2099",
        "scenario_name": "A",
        "scenario_type": "Win Now",
        "total_revenue": 1813973.1,
        "total_cost": 1110788.25,
        "gross_margin_pct": 0.3876489954564376,
        "instrument_discount_pct": 0.18,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2099",
        "scenario_name": "B",
        "scenario_type": "Balanced",
        "total_revenue": 1849291.6500000001,
        "total_cost": 1110788.25,
        "gross_margin_pct": 0.3993439325808885,
        "instrument_discount_pct": 0.13,
        "term_years": 3,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      },
      {
        "opportunity_id": "OPP-2099",
        "scenario_name": "C",
        "scenario_type": "Value-Based",
        "total_revenue": 2195887.4,
        "total_cost": 1277329.6500000001,
        "gross_margin_pct": 0.41830822017558816,
        "instrument_discount_pct": 0.08,
        "term_years": 4,
        "requires_vp": false,
        "requires_cfo": false,
        "tender_flag": false
      }
    ],
    "recommendation": {
      "opportunity_id": "OPP-2099",
      "recommended_scenario": "C",
      "rationale": "Maximizes lifetime gross profit while remaining compliant.",
      "escalation_required": false,
      "expected_margin": 0.41830822017558816
    },
    "issues_summary": [
      {
        "issue_id": "40a20c8f-fe70-4645-9a4f-9e384f665d55",
        "severity": "AMBER",
        "opportunity_id": "OPP-2099",
        "customer_id": "CUST-1099",
        "source_table": "sap_pricing",
        "rule_id": "R_CURR_MISMATCH",
        "field": "currency",
        "current_value": "Opp:EUR/SAP:CAD",
        "expected_value": "Match",
        "description": "Currency mismatch between CRM and ERP",
        "recommended_action": "Align currencies before quoting"
      },
      {
        "issue_id": "27366962-cd6e-43b3-9dfe-f8f9fe0b1b3c",
        "severity": "GREEN",
        "opportunity_id": "OPP-2099",
        "customer_id": "Multiple",
        "source_table": "scenarios",
        "rule_id": "R_COMPLIANT",
        "field": "overall",
        "current_value": "Compliant",
        "expected_value": "Compliant",
        "description": "Scenario passes all red flags",
        "recommended_action": "Proceed"
      }
    ],
    "required_approvals": [],
    "executive_narrative": "Recommending Scenario C for BioLabs 99 to maintain a 41.8% margin and generate $918.6K in lifetime gross profit. Requires review for 1 AMBER flag(s). Maximizes lifetime gross profit while remaining compliant.",
    "scenario_comparison_table": [
      {
        "scenario": "A",
        "margin": 0.3876,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 703184.85
      },
      {
        "scenario": "B",
        "margin": 0.3993,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 738503.4
      },
      {
        "scenario": "C",
        "margin": 0.4183,
        "requires_cfo": false,
        "tender_flag": false,
        "lifetime_profit": 918557.75
      }
    ],
    "issue_summary_counts": {
      "RED": 0,
      "AMBER": 1,
      "GREEN": 1
    },
    "approval_routing_summary": "Standard Approvals",
    "risk_summary": {
      "win_risk": "Low",
      "margin_risk": "Medium",
      "compliance_risk": "Low"
    },
    "audit_refs": [
      "410dcb5a-7147-4538-96cc-deb117e2be01"
    ],
    "confidence_score": 0.9
  }
};