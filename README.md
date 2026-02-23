# Synthetic Enterprise Data Generator (Diagnostics Deal Desk Demo)

**Part 1: Synthetic Data Generation**

This repository contains a synthetic data generator designed to build a highly realistic, interconnected dataset for a Diagnostics AI demo scenario. It outputs 5 interrelated CSV files, each containing exactly 100 rows, supporting multiple business use cases such as deal desk analysis, governance evaluation, and data issue detection.

## 🚀 What the Script Does

The Python script `pipeline/generate_data.py` generates deterministic, enterprise-style data representing a fictional diagnostics company operating in multiple regions (US, Europe, Canada). The datasets reflect common structures found in ERP, CRM, and Service Management systems.

It intentionally introduces over 20 anomalies, edge cases, and "gotchas" that are commonly found in real-world enterprise data.

## 🏃 How to Run It

To execute the data generation script, ensure you have Python 3.11+ installed along with `pandas` and `numpy`.

```bash
# Run the pipeline script from the root of the project
python pipeline/generate_data.py
```

This will automatically create a `data/` directory and populate it with the 5 CSV files. 

*Note: The script uses fixed random seeds (42) to ensure the generated output is deterministic and fully reproducible for demos.*

## 📄 Description of Generated Datasets

The script will output the following files to the `data/` directory:

1. **opportunities.csv (100 rows)**: Represents active or recently closed opportunities containing customer details, target instrument SKUs, intended pricing, and forecasted volume expectations.
2. **sap_pricing.csv (100 rows)**: The master product pricing list including list price, standard cost, and product types. Includes historical (deprecated) items.
3. **installed_base.csv (100 rows)**: Tracks the active instruments installed at customer sites, their age, and recent utilization indexes.
4. **contracts.csv (100 rows)**: The active and expired service level agreements, tracking duration and statuses.
5. **service_cases.csv (100 rows)**: Historical 12-month records for service and maintenance support on instruments, tracking resolution days and failure rates.

## ⚠️ Summary of Intentional Edge Cases & Anomalies

To support downstream rule evaluations and AI detection demos, the following issues are baked into the data:

* **Missing SAP Costs**: Certain SKUs lack standard cost values in `sap_pricing.csv`.
* **Deprecated SKUs**: Opportunities request instruments flagged as deprecated.
* **Customer Duplication**: Duplicate or highly similar customer ID/Names within opportunities.
* **Currency Mismatch**: Skewed pricing when SAP records use CAD but the opportunity quotes in EUR.
* **Ghost Contracts**: Service contracts that are marked 'Active' despite their end date being in the past.
* **Installed Base Mismatch**: Instruments actually installed do not align with the original opportunity requests.
* **High Service Failure Rate**: Instruments exceeding acceptable service frequency (e.g., in Germany specifically).
* **Utilization / Pull-Through Anomalies**: High utilization with extremely low consumable expectation, or vice versa.
* **Margin/Pricing Outliers**: Extreme discount requests (45%).
* **Consumable Volume Outliers**: Implausible expected annual volumes for specific deals.
* **Contract Length Overextensions**: Hardcoded 5-8 year service level agreements escaping typical maximums.

---

## 🧭 Architecture Summary

This repository operates in three successive layers for the complete demo narrative:

**Part 1: Synthetic Data Generation**
* Generates foundational deterministic edge-case rich `data/` source tables.

**Part 2: Governance & Scenario Engine**
* Normalizes the synthetic data, calculates baseline economics, triggers strict governance rules on edge cases, and creates optimal alternative scenarios inside `output/`.

**Part 3: Explainability & Narrative Layer**
* Dynamically enriches the exact output structures from Part 2. It introduces "Why" context parsing the rule evaluations, outputs an executive summary, and formats a clean UI-consumable layout complete with confidence scoring. Includes an optional LLM interface with a robust deterministic template fallback.

## 🧠 Running Part 3 (Explainability Layer)

```bash
# Run the Explainability payload from root
python pipeline/enrich_outputs.py
```

### 🤖 LLM Activation (Optional)
This layer contains an LLM stub to dynamically generate the narratives using OpenAI.
If an `OPENAI_API_KEY` environment variable is detected, it will utilize the LLM context.
If no LLM key exists, the application defaults securely to a **Deterministic Fallback Model**, dynamically mapping variables cleanly into sentence-cased logic schemas to preserve demo reliability in offline settings.

---
*Built for Diagnostics Commercial AI Demo.*
