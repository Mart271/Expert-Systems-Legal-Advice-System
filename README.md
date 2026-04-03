# 🛡️ Cybercrime Legal Advisor — Expert System

> A web-based expert system that provides legal guidance on cybercrime situations under Philippine law. Built with vanilla HTML, CSS, and JavaScript as part of an Artificial Intelligence course activity on Expert Systems.

---

## 📌 About the Project

This system simulates a **legal expert system** focused on cybercrime. It asks the user a series of questions, evaluates their answers against a set of IF-THEN rules, and provides:

- Identification of the likely cybercrime category
- Applicable Philippine laws and provisions
- Recommended legal actions and reporting steps
- A log of which rules fired during inference

> ⚠️ **Disclaimer:** This system is for **academic purposes only**. It does not constitute actual legal advice. Always consult a licensed attorney for real legal matters.

---

## 🖥️ Demo

Open `index.html` directly in any modern browser — no server or installation required.

---

## 📁 Project Structure

```
cybercrime-expert-system/
├── index.html   # HTML structure and layout
├── style.css    # All styles and dark theme
├── rules.js     # Knowledge base — questions and IF-THEN rules
├── app.js       # Inference engine and UI controller
└── README.md    # This file
```

---

## ⚙️ How It Works

### Expert System Architecture

| Component | File | Description |
|---|---|---|
| **User Interface** | `index.html` + `style.css` | Step-by-step question flow with progress tracker |
| **Knowledge Base** | `rules.js` | 8 IF-THEN rules + 5 questions |
| **Inference Engine** | `app.js` | Evaluates all rules, ranks by severity |

### Inference Flow

```
User answers question
        ↓
Answers stored in state object
        ↓
All 8 rules evaluated via match(answers)
        ↓
Matched rules ranked by severity: danger > warn > info
        ↓
Primary result + additional findings displayed
        ↓
Rules fired shown for transparency
```

---

## 📋 Knowledge Base — IF-THEN Rules

| Rule ID | Condition | Outcome | Applicable Law |
|---|---|---|---|
| R001 | Type = phishing AND financial loss = yes | Online Fraud / Phishing | RA 10175 §4(b)(8), RPC Art. 315 |
| R002 | Type = phishing AND financial loss = no | Phishing Attempt — No Loss | RA 10175 §4(b)(8) |
| R003 | Type = hacking | Unauthorized Access | RA 10175 §4(a)(1), §4(a)(3) |
| R004 | Type = harassment | Online Harassment / Cyberbullying | RA 10175 §4(c)(3), RA 10627, RA 11313 |
| R005 | Type = libel | Online Libel / Defamation | RA 10175 §4(c)(4), RPC Art. 353–355 |
| R006 | Type = csam | Child Sexual Abuse Material | RA 9775, RA 11930, RA 7610 |
| R007 | Evidence = none | Insufficient Evidence Warning | RA 10175 |
| R008 | Reported = no AND urgency = critical | Unreported Active Threat | RA 10175 |

---

## ⚖️ Applicable Laws

| Law | Title |
|---|---|
| **RA 10175** | Cybercrime Prevention Act of 2012 |
| **RA 9775** | Anti-Child Pornography Act of 2009 |
| **RA 10627** | Anti-Bullying Act of 2013 |
| **RA 11313** | Safe Spaces Act (Bawal Bastos Law) |
| **RA 11930** | Anti-OSAEC Act |
| **RA 7610** | Special Protection of Children Against Abuse Act |
| **RPC Art. 315** | Estafa (Fraud) |
| **RPC Art. 353–355** | Libel |

---

## 🚀 Getting Started

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/cybercrime-expert-system.git

# Navigate into the folder
cd cybercrime-expert-system

# Open in browser (no server needed)
open index.html
```

Or simply **download the ZIP** and open `index.html` in any browser.

### Requirements

- Any modern browser (Chrome, Firefox, Edge, Safari)
- No dependencies, no npm, no build tools

---

## 🧠 Expert System Concepts Demonstrated

- **Knowledge Base** — Structured IF-THEN rules encoding legal domain knowledge
- **Inference Engine** — Forward chaining: evaluates all rules and fires matches
- **Conflict Resolution** — Severity-based priority (danger > warn > info)
- **Explanation Facility** — "Rules Fired" section shows reasoning transparency
- **User Interface** — Step-by-step question flow with result explanation

---

## 👥 Group Members

| Name | Role |
|---|---|
| *(Member 1)* | Researcher — Laws and rule writing |
| *(Member 2)* | Developer — Inference engine (app.js) |
| *(Member 3)* | Designer — HTML/CSS interface |
| *(Member 4)* | Tester and Presenter |

---

## 📚 References

- Republic Act No. 10175 — [Official Gazette](https://www.officialgazette.gov.ph/2012/09/12/republic-act-no-10175/)
- Republic Act No. 9775 — [Chan Robles Law Library](https://www.chanrobles.com/republicactnumber9775.htm)
- Republic Act No. 11930 — [DICT](https://dict.gov.ph)
- NBI Cybercrime Division — [nbi.gov.ph](https://www.nbi.gov.ph)
- PNP Anti-Cybercrime Group — [acg.pnp.gov.ph](https://acg.pnp.gov.ph)
- National Privacy Commission — [privacy.gov.ph](https://www.privacy.gov.ph)

---

## 📄 License

This project was created for academic purposes under the **Artificial Intelligence** course. Not intended for commercial or professional legal use.
