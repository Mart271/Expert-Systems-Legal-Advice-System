/* =========================================
   Cybercrime Legal Expert System
   rules.js — Knowledge Base (10 Rules)
   ========================================= */

const questions = [
  {
    id: "q1",
    text: "What type of cybercrime situation are you dealing with?",
    options: [
      { label: "I received a suspicious message asking for money or personal info", value: "phishing" },
      { label: "Someone accessed my account or device without permission", value: "hacking" },
      { label: "I am being harassed, bullied, or threatened online", value: "harassment" },
      { label: "Someone is spreading false statements about me online", value: "libel" },
      { label: "I encountered inappropriate content involving minors", value: "csam" }
    ]
  },
  {
    id: "q2",
    text: "Did you suffer financial loss or share sensitive personal information?",
    options: [
      { label: "Yes — I lost money or gave out credentials / banking details", value: "yes" },
      { label: "No — I caught it in time and did not engage", value: "no" },
      { label: "Not applicable to my situation", value: "na" }
    ]
  },
  {
    id: "q3",
    text: "Do you have evidence of the incident?",
    options: [
      { label: "Yes — I have screenshots, messages, or transaction records", value: "yes" },
      { label: "Partial — some evidence but not complete", value: "partial" },
      { label: "No — I have no documentation at all", value: "no" }
    ]
  },
  {
    id: "q4",
    text: "Has the incident been reported to any authority yet?",
    options: [
      { label: "Yes — already reported to NBI, PNP, or another authority", value: "yes" },
      { label: "No — not yet reported", value: "no" }
    ]
  },
  {
    id: "q5",
    text: "How urgent is your situation right now?",
    options: [
      { label: "Critical — there is an ongoing threat or active breach", value: "critical" },
      { label: "Serious — the incident already happened, I need guidance", value: "serious" },
      { label: "Informational — I just want to understand my legal options", value: "info" }
    ]
  }
];

/* -------------------------------------------------------------------
   10 IF-THEN Rules
   Each rule:
     id       — rule identifier
     match(a) — receives answers object; returns true or false
     severity — "danger" | "warn" | "info" | "safe"
     icon     — emoji for the result screen
     title    — result headline
     laws     — applicable Philippine laws
     desc     — plain-language explanation
     action   — recommended next steps
------------------------------------------------------------------- */
const rules = [

  /* R01 — Phishing with financial loss */
  {
    id: "R01",
    match: (a) => a.q1 === "phishing" && a.q2 === "yes",
    severity: "danger",
    icon: "🔴",
    title: "Online Fraud / Phishing with Financial Loss",
    laws: ["RA 10175 §4(b)(8)", "RPC Art. 315 (Estafa)"],
    desc: "You lost money or credentials through a phishing attack. This constitutes computer-related fraud under RA 10175, punishable by up to 12 years imprisonment and fines up to ₱500,000.",
    action: "Call your bank immediately to freeze transactions. File a complaint with the NBI Cybercrime Division: (02) 8523-8231 or PNP-ACG: (02) 8723-0401. Preserve all messages and transaction records as evidence."
  },

  /* R02 — Phishing, no loss */
  {
    id: "R02",
    match: (a) => a.q1 === "phishing" && a.q2 === "no",
    severity: "info",
    icon: "🔵",
    title: "Phishing Attempt — No Loss",
    laws: ["RA 10175 §4(b)(8)"],
    desc: "You identified and avoided a phishing attempt. No financial harm occurred, but reporting helps authorities track criminal patterns and protect others from the same scheme.",
    action: "Report the attempt to PNP-ACG via their online portal. Block and report the sender on the platform used. No formal legal filing is required, but a report is encouraged."
  },

  /* R03 — Unauthorized access / hacking */
  {
    id: "R03",
    match: (a) => a.q1 === "hacking",
    severity: "danger",
    icon: "🔴",
    title: "Unauthorized Access / Hacking",
    laws: ["RA 10175 §4(a)(1)", "RA 10175 §4(a)(3)"],
    desc: "Unauthorized access to a computer system is a criminal offense under RA 10175, punishable by 6 to 12 years imprisonment. If personal data was stolen, the Data Privacy Act (RA 10173) may also apply.",
    action: "Immediately change all passwords and enable two-factor authentication. Report to the NBI Cybercrime Division. If personal data was breached, notify the National Privacy Commission (privacy.gov.ph) within 72 hours."
  },

  /* R04 — Online harassment (non-critical) */
  {
    id: "R04",
    match: (a) => a.q1 === "harassment" && a.q5 !== "critical",
    severity: "warn",
    icon: "🟡",
    title: "Online Harassment / Cyberbullying",
    laws: ["RA 10175 §4(c)(3)", "RA 10627 (Anti-Bullying Act)", "RA 11313 (Safe Spaces Act)"],
    desc: "Online harassment and cyberstalking are punishable under RA 10175. The Safe Spaces Act (RA 11313) covers gender-based online harassment. If school-related, RA 10627 applies and the school must act within 3 days.",
    action: "Document all incidents with screenshots and timestamps before blocking the offender. File a complaint with PNP-ACG. If school-related, report to the guidance office under RA 10627."
  },

  /* R05 — Active / critical threat */
  {
    id: "R05",
    match: (a) => a.q1 === "harassment" && a.q5 === "critical",
    severity: "danger",
    icon: "🔴",
    title: "Active Online Threat — Urgent",
    laws: ["RA 10175 §4(c)(3)", "RPC Art. 282 (Grave Threats)"],
    desc: "An active threat is both a cybercrime under RA 10175 and a grave threat under the Revised Penal Code. Your physical safety is the immediate priority.",
    action: "If you feel in immediate danger, call 911. For the cyber aspect, call PNP-ACG: (02) 8723-0401. Screenshot all threats immediately. You may apply for a Protection Order through your local Regional Trial Court."
  },

  /* R06 — Online libel */
  {
    id: "R06",
    match: (a) => a.q1 === "libel",
    severity: "warn",
    icon: "🟡",
    title: "Online Libel / Cyber Defamation",
    laws: ["RA 10175 §4(c)(4)", "RPC Art. 353–355"],
    desc: "Online libel under RA 10175 carries heavier penalties than traditional libel: imprisonment of 6 years and 1 day to 12 years. The statement must be false, published online, and must clearly identify you.",
    action: "Preserve all evidence — screenshot the content with its URL and date visible. Consult a lawyer to assess whether the statement qualifies as libel. File a complaint with the NBI or the Prosecutor's Office."
  },

  /* R07 — CSAM */
  {
    id: "R07",
    match: (a) => a.q1 === "csam",
    severity: "danger",
    icon: "🔴",
    title: "Child Sexual Abuse Material (CSAM)",
    laws: ["RA 9775 (Anti-CSAM Act)", "RA 11930 (OSAEC Act)", "RA 7610"],
    desc: "Possession, distribution, or production of CSAM is a serious crime under RA 9775 and RA 11930, with penalties up to reclusion perpetua. Anyone who encounters such material has a legal duty to report.",
    action: "Do NOT share, download, or interact with the material. Report immediately to the NBI Cybercrime Division, PNP-ACG, or cybertipline.org. Witness reporters are protected by law and may report anonymously."
  },

  /* R08 — No evidence warning */
  {
    id: "R08",
    match: (a) => a.q3 === "no" && a.q1 !== "csam",
    severity: "warn",
    icon: "🟡",
    title: "No Evidence — Act Now to Preserve",
    laws: ["RA 10175"],
    desc: "Lack of documentation significantly weakens any legal complaint. Online content can be deleted at any time. Authorities may still investigate based on testimony, but evidence is critical.",
    action: "Act immediately: take screenshots of all related content, save chat logs, and write down everything you remember with exact dates and times. Request platform logs from your service provider if possible."
  },

  /* R09 — Unreported critical incident */
  {
    id: "R09",
    match: (a) => a.q4 === "no" && a.q5 === "critical",
    severity: "danger",
    icon: "🔴",
    title: "Critical Incident — Not Yet Reported",
    laws: ["RA 10175"],
    desc: "Your situation is critical and has not yet been reported. Every hour of delay reduces the chance of catching the perpetrator and recovering any losses.",
    action: "Report NOW — NBI Cybercrime Division: (02) 8523-8231 · PNP-ACG: (02) 8723-0401 · Online: cybercrime.doj.gov.ph. Do not wait."
  },

  /* R10 — Reported with evidence (positive outcome) */
  {
    id: "R10",
    match: (a) => a.q4 === "yes" && a.q3 === "yes",
    severity: "safe",
    icon: "✅",
    title: "Well Documented and Already Reported",
    laws: ["RA 10175"],
    desc: "You have already reported the incident and have evidence preserved. You are in the strongest possible position for a successful legal complaint.",
    action: "Continue cooperating with investigators. Keep copies of all evidence in multiple locations. Follow up with the agency you reported to every 2–3 weeks. Consider consulting a private lawyer to pursue civil damages alongside the criminal case."
  }

];