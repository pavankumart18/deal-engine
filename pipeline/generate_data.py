import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta
import os

def main():
    # Set seed for reproducibility
    np.random.seed(42)
    random.seed(42)
    
    N_ROWS = 100
    
    # Directory paths
    DATA_DIR = 'data'
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        
    # Constants
    REGIONS = ['US', 'Germany', 'UK', 'France', 'Spain', 'Canada', 'Netherlands', 'Italy', 'Switzerland']
    CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD']
    SEGMENTS = ['Public Hospital', 'Private Hospital', 'Reference Lab', 'Research Institute', 'Biopharma', 'CRO']
    INSTRUMENTS = ['DX-1000', 'DX-2000', 'SEQ-500', 'SEQ-Pro', 'CYTO-Flow']
    COMPETITOR_PRESSURES = ['Low', 'Medium', 'High']
    STAGES = ['Prospecting', 'Proposal', 'Negotiation']
    SERVICE_LEVELS = ['Basic', 'Standard', 'Premium']

    # --- 1. Opportunities ---
    customer_ids = [f"CUST-{1000 + i}" for i in range(N_ROWS)]
    customer_names = [f"HealthCenter {i}" if i % 2 == 0 else f"BioLabs {i}" for i in range(N_ROWS)]
    regions = np.random.choice(REGIONS, N_ROWS)
    countries = regions  # Simplified 1:1 map for demo
    segments = np.random.choice(SEGMENTS, N_ROWS)
    currencies = [np.random.choice(CURRENCIES) for _ in range(N_ROWS)]
    
    opportunities = pd.DataFrame({
        'opportunity_id': [f"OPP-{2000 + i}" for i in range(N_ROWS)],
        'customer_id': customer_ids,
        'customer_name': customer_names,
        'region': regions,
        'country': countries,
        'segment': segments,
        'instrument_sku': np.random.choice(INSTRUMENTS, N_ROWS),
        'instrument_qty': np.random.randint(1, 10, N_ROWS),
        'requested_instrument_discount_pct': np.random.uniform(0.05, 0.25, N_ROWS).round(2),
        'expected_annual_consumables': np.random.randint(20000, 300000, N_ROWS),
        'expected_annual_service': np.random.randint(8000, 80000, N_ROWS),
        'contract_term_years': np.random.choice([1, 2, 3], N_ROWS),
        'competitor_pressure': np.random.choice(COMPETITOR_PRESSURES, N_ROWS),
        'strategic_flag': np.random.choice([True, False], N_ROWS, p=[0.2, 0.8]),
        'currency': currencies,
        'stage': np.random.choice(STAGES, N_ROWS)
    })

    # Inject issues into opportunities
    # Duplicate customer_id with slightly different customer_name
    opportunities.loc[10, 'customer_id'] = opportunities.loc[9, 'customer_id']
    opportunities.loc[10, 'customer_name'] = opportunities.loc[9, 'customer_name'] + " Inc."
    
    # Some discounts at 45%
    high_discount_idx = np.random.choice(N_ROWS, 5, replace=False)
    opportunities.loc[high_discount_idx, 'requested_instrument_discount_pct'] = 0.45
    
    # Some very long contract terms (5-7 years)
    long_term_idx = np.random.choice(N_ROWS, 5, replace=False)
    opportunities.loc[long_term_idx, 'contract_term_years'] = np.random.randint(5, 8, len(long_term_idx))
    
    # Extreme consumable expectation outlier
    outlier_idx = np.random.choice(N_ROWS, 3, replace=False)
    opportunities.loc[outlier_idx, 'expected_annual_consumables'] = np.random.randint(800000, 1500000, 3)
    
    # At least 5 very compelling "story-ready" opportunities
    story_indices = [80, 81, 82, 83, 84]
    for i in story_indices:
        opportunities.loc[i, 'strategic_flag'] = True
        opportunities.loc[i, 'competitor_pressure'] = 'High'
        opportunities.loc[i, 'requested_instrument_discount_pct'] = 0.40
        opportunities.loc[i, 'expected_annual_consumables'] = 290000
        opportunities.loc[i, 'stage'] = 'Negotiation'
        
    # Deprecated SKU used in opportunity
    opportunities.loc[0, 'instrument_sku'] = 'DX-Legacy'
    opportunities.loc[1, 'instrument_sku'] = 'CYTO-Old'

    # --- 2. SAP Pricing ---
    sap_skus = [f"SKU-{9000 + i}" for i in range(N_ROWS)]
    
    unique_opp_skus = opportunities['instrument_sku'].unique()
    for i, opp_sku in enumerate(unique_opp_skus):
        sap_skus[i] = opp_sku
        
    product_types = np.random.choice(['Instrument', 'Consumable', 'Service'], N_ROWS)
    for i in range(len(unique_opp_skus)):
        product_types[i] = 'Instrument'
        
    sap_regions = np.random.choice(REGIONS, N_ROWS)
    sap_currencies = np.random.choice(CURRENCIES, N_ROWS)
    
    list_prices = []
    for pt in product_types:
        if pt == 'Instrument':
            list_prices.append(np.random.randint(75000, 450000))
        elif pt == 'Consumable':
            list_prices.append(np.random.randint(20000, 300000))
        else:
            list_prices.append(np.random.randint(8000, 80000))
            
    list_prices = np.array(list_prices)
    standard_costs = (list_prices * np.random.uniform(0.35, 0.75, N_ROWS)).round(2)
    deprecated_flags = [False] * N_ROWS
    
    sap_pricing = pd.DataFrame({
        'sku': sap_skus,
        'product_type': product_types,
        'region': sap_regions,
        'currency': sap_currencies,
        'list_price': list_prices,
        'standard_cost': standard_costs,
        'deprecated_flag': deprecated_flags
    })
    
    # Inject issues into SAP Pricing
    # At least 3 rows missing standard_cost
    sap_pricing.loc[10:12, 'standard_cost'] = np.nan
    
    # At least 5 deprecated SKUs
    # Match the 2 deprecated ones we put in opps, then add 3 more
    deprecated_idx = list(sap_pricing.index[sap_pricing['sku'].isin(['DX-Legacy', 'CYTO-Old'])])
    remainder = list(set(range(len(unique_opp_skus), N_ROWS)) - set(deprecated_idx))
    deprecated_idx += list(np.random.choice(remainder, 3, replace=False))
    sap_pricing.loc[deprecated_idx, 'deprecated_flag'] = True
    
    # At least 3 currency mismatches relative to opportunities
    mismatch_skus = sap_pricing.loc[3:5, 'sku']
    for sku in mismatch_skus:
        opp_idx = opportunities[opportunities['instrument_sku'] == sku].index
        if len(opp_idx) > 0:
            sap_pricing.loc[sap_pricing['sku'] == sku, 'currency'] = 'CAD'
            opportunities.loc[opp_idx, 'currency'] = 'EUR'

    # --- 3. Installed Base ---
    installed_base = pd.DataFrame({
        'customer_id': customer_ids,
        'installed_instrument_sku': opportunities['instrument_sku'].values,
        'install_year': np.random.randint(2015, 2024, N_ROWS),
        'utilization_index': np.random.uniform(0.4, 0.9, N_ROWS).round(2),
        'region': regions
    })
    
    # Inject issues into installed_base
    # At least 5 rows where installed model differs from opp requested model
    upgrade_idx = np.random.choice(N_ROWS, 5, replace=False)
    for idx in upgrade_idx:
        installed_base.loc[idx, 'installed_instrument_sku'] = 'OLD-' + str(np.random.randint(100, 999))
        
    # Reagent pull-through anomaly (low util, high consumables)
    low_util_idx = np.random.choice(N_ROWS, 4, replace=False)
    installed_base.loc[low_util_idx, 'utilization_index'] = np.random.uniform(0.1, 0.3, 4).round(2)
    opportunities.loc[low_util_idx, 'expected_annual_consumables'] = np.random.randint(200000, 300000, 4)
    
    # Leakage anomaly (high util, low consumables)
    high_util_idx = list(set(range(N_ROWS)) - set(low_util_idx))
    high_util_idx = np.random.choice(high_util_idx, 4, replace=False)
    installed_base.loc[high_util_idx, 'utilization_index'] = np.random.uniform(0.85, 1.0, 4).round(2)
    opportunities.loc[high_util_idx, 'expected_annual_consumables'] = np.random.randint(10000, 30000, 4)

    # --- 4. Contracts ---
    today = datetime.now()
    start_dates = [today - timedelta(days=int(np.random.randint(100, 1000))) for _ in range(N_ROWS)]
    end_dates = [sd + timedelta(days=int(365 * np.random.choice([1, 2, 3]))) for sd in start_dates]
    statuses = ['Active' if ed > today else 'Expired' for ed in end_dates]
    
    contracts = pd.DataFrame({
        'contract_id': [f"CTR-{5000 + i}" for i in range(N_ROWS)],
        'customer_id': customer_ids,
        'start_date': [d.strftime('%Y-%m-%d') for d in start_dates],
        'end_date': [d.strftime('%Y-%m-%d') for d in end_dates],
        'status': statuses,
        'service_level': np.random.choice(SERVICE_LEVELS, N_ROWS),
        'region': regions
    })
    
    # Inject issues into contracts
    # Expired contract marked active
    expired_idx = np.random.choice(N_ROWS, 5, replace=False)
    for idx in expired_idx:
        contracts.loc[idx, 'end_date'] = (today - timedelta(days=int(np.random.randint(10, 100)))).strftime('%Y-%m-%d')
        contracts.loc[idx, 'status'] = 'Active'
        
    # Some long-term contracts (6-8 years)
    long_contract_idx = np.random.choice(N_ROWS, 6, replace=False)
    for idx in long_contract_idx:
        d = datetime.strptime(contracts.loc[idx, 'start_date'], '%Y-%m-%d')
        contracts.loc[idx, 'end_date'] = (d + timedelta(days=int(365 * np.random.randint(6, 9)))).strftime('%Y-%m-%d')
        if datetime.strptime(contracts.loc[idx, 'end_date'], '%Y-%m-%d') > today:
            contracts.loc[idx, 'status'] = 'Active'

    # --- 5. Service Cases ---
    service_cases = pd.DataFrame({
        'case_id': [f"CASE-{8000 + i}" for i in range(N_ROWS)],
        'customer_id': customer_ids,
        'instrument_sku': installed_base['installed_instrument_sku'].values,
        'region': regions,
        'cases_last_12m': np.random.randint(0, 10, N_ROWS),
        'avg_resolution_days': np.random.uniform(1.0, 14.0, N_ROWS).round(1),
        'sla_breach_pct': np.random.uniform(0, 0.2, N_ROWS).round(2)
    })
    
    # Inject issues into service_cases
    # High failure rate rows
    high_fail_idx = np.random.choice(N_ROWS, 6, replace=False)
    service_cases.loc[high_fail_idx, 'cases_last_12m'] = np.random.randint(16, 30, len(high_fail_idx))
    service_cases.loc[high_fail_idx, 'avg_resolution_days'] = np.random.uniform(10.0, 30.0, len(high_fail_idx)).round(1)
    service_cases.loc[high_fail_idx, 'sla_breach_pct'] = np.random.uniform(0.3, 0.8, len(high_fail_idx)).round(2)
    
    # Regional concentration (Germany high failure model)
    german_cases = service_cases[(service_cases['region'] == 'Germany')]
    if len(german_cases) > 0:
        target_sku = german_cases['instrument_sku'].iloc[0]
        condition = (service_cases['region'] == 'Germany') & (service_cases['instrument_sku'] == target_sku)
        service_cases.loc[condition, 'cases_last_12m'] = np.random.randint(15, 25, condition.sum())

    # Save to CSV
    opportunities.to_csv(os.path.join(DATA_DIR, 'opportunities.csv'), index=False)
    sap_pricing.to_csv(os.path.join(DATA_DIR, 'sap_pricing.csv'), index=False)
    installed_base.to_csv(os.path.join(DATA_DIR, 'installed_base.csv'), index=False)
    contracts.to_csv(os.path.join(DATA_DIR, 'contracts.csv'), index=False)
    service_cases.to_csv(os.path.join(DATA_DIR, 'service_cases.csv'), index=False)
    
    print("Successfully generated 5 synthetic datasets.")

if __name__ == "__main__":
    main()
