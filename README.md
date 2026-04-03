# 🛡️ Cybercrime Legal Expert System

> A browser-based expert system that identifies cybercrime situations and provides applicable Philippine law references and recommended actions.

![Expert System](https://img.shields.io/badge/Expert%20System-v1.0-00e5a0?style=flat-square)
![License](https://img.shields.io/badge/License-Academic-blue?style=flat-square)
![Laws](https://img.shields.io/badge/Laws-RA%2010175%20%7C%20RA%209775%20%7C%20RA%2010627%20%7C%20RA%2011930-3b82f6?style=flat-square)
![No Server](https://img.shields.io/badge/Client--Side-No%20Server%20Required-success?style=flat-square)

---

## 📌 Overview

The **Cybercrime Legal Expert System** is a rule-based AI system built for an **Expert Systems course** under an AI subject. It walks users through a 5-question diagnostic and fires matching IF-THEN rules from a Philippine cybercrime knowledge base — returning the most relevant legal classification, applicable laws, and a recommended course of action.

It runs **entirely client-side** — no backend, no server, no installation required.

---

## 🖥️ Demo

```
Open index.html → Answer 5 questions → Get legal classification + recommended action
```

---

## 📁 Project Structure

```
cybercrime-legal-expert-system/
├── index.html      # App shell and layout
├── style.css       # Dark-themed UI styles
├── rules.js        # Knowledge base: questions + 10 IF-THEN rules  ← load first
├── app.js          # Inference engine and UI controller             ← load second
└── README.md       # This file
```

---

## ⚙️ How It Works

### Inference Engine

The system uses a **forward-chaining inference engine**:

1. User answers 5 questions covering incident type, financial loss, evidence, reporting status, and urgency.
2. All 10 rules are evaluated simultaneously against the `answers` object.
3. Every rule whose `match()` condition returns `true` is collected ("fired").
4. The most severe rule becomes the **primary result** (`danger > warn > info > safe`).
5. Remaining fired rules appear as **additional findings**.

### Rule Structure

Each rule in `rules.js` follows this schema:

```js
{
  id:       "R01",            // Rule identifier
  match:    (a) => boolean,   // Condition — receives answers object
  severity: "danger",         // danger | warn | info | safe
  icon:     "🔴",
  title:    "...",
  laws:     ["RA 10175 §4(b)(8)", "..."],
  desc:     "Plain-language explanation",
  action:   "Recommended next steps"
}
```

---

## 📚 Knowledge Base — 10 Rules

| Rule | Trigger Condition | Severity | Applicable Law(s) |
|------|-------------------|----------|-------------------|
| R01  | Phishing + financial loss | 🔴 Danger | RA 10175 §4(b)(8), RPC Art. 315 |
| R02  | Phishing, no loss | 🔵 Info | RA 10175 §4(b)(8) |
| R03  | Unauthorized access / hacking | 🔴 Danger | RA 10175 §4(a)(1), §4(a)(3) |
| R04  | Online harassment (non-critical) | 🟡 Warn | RA 10175 §4(c)(3), RA 10627, RA 11313 |
| R05  | Active/critical online threat | 🔴 Danger | RA 10175 §4(c)(3), RPC Art. 282 |
| R06  | Online libel / cyber defamation | 🟡 Warn | RA 10175 §4(c)(4), RPC Art. 353–355 |
| R07  | Child sexual abuse material (CSAM) | 🔴 Danger | RA 9775, RA 11930, RA 7610 |
| R08  | No evidence collected | 🟡 Warn | RA 10175 |
| R09  | Critical incident, unreported | 🔴 Danger | RA 10175 |
| R10  | Reported + evidence preserved | ✅ Safe | RA 10175 |

---

## ⚖️ Applicable Philippine Laws

| Law | Full Title |
|-----|-----------|
| **RA 10175** | Cybercrime Prevention Act of 2012 |
| **RA 9775** | Anti-Child Pornography Act of 2009 |
| **RA 10627** | Anti-Bullying Act of 2013 |
| **RA 11313** | Safe Spaces Act (Bawal Bastos Law) |
| **RA 11930** | Anti-OSAEC Act |
| **RA 7610** | Special Protection of Children Against Abuse Act |
| **RPC Art. 315** | Estafa (Revised Penal Code) |
| **RPC Art. 282** | Grave Threats (Revised Penal Code) |
| **RPC Art. 353–355** | Libel (Revised Penal Code) |

---

## 🚀 Getting Started

No installation or server needed.

```bash
# Clone the repository
git clone https://github.com/your-username/cybercrime-legal-expert-system.git

# Open in browser
open index.html
# or just double-click index.html
```

> **Important:** `rules.js` must load before `app.js`. This is already configured correctly in `index.html`.

---

## 🎨 Tech Stack

- **HTML5** — structure
- **CSS3** — dark UI with CSS custom properties
- **Vanilla JavaScript** — inference engine, no frameworks
- **Google Fonts** — Syne + DM Mono

---

## ⚠️ Disclaimer

This system is for **academic purposes only**.  
It does **not** constitute actual legal advice.  
Always consult a licensed attorney for real legal matters.

---

## 📄 License

Academic project — Lyceum of the Philippines University (LPU Cavite)  
College of Computer Studies · Expert Systems / AI Subject
