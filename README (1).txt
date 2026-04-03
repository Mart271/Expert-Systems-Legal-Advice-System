=========================================
   Cybercrime Legal Expert System
   Expert Systems Activity — AI Subject
   Lyceum of the Philippines University
   College of Computer Studies
=========================================

VERSION:  1.0
TOPIC:    Cybercrime Law (Philippine Context)
LAWS:     RA 10175 · RA 9775 · RA 10627 · RA 11313 · RA 11930 · RA 7610 · RPC

-----------------------------------------
 FILES
-----------------------------------------

  index.html    Main HTML structure and layout
  style.css     All visual styles and dark-theme UI
  rules.js      Knowledge base: questions + 10 IF-THEN rules  [LOAD FIRST]
  app.js        Inference engine and UI controller             [LOAD SECOND]
  README.txt    This file
  README.md     GitHub documentation

NOTE: rules.js MUST be loaded before app.js.
This load order is already set correctly in index.html.

-----------------------------------------
 HOW TO USE
-----------------------------------------

  1. Open index.html in any modern web browser.
  2. No server required — runs fully client-side.
  3. Answer each of the 5 questions by clicking an option.
  4. The inference engine evaluates all 10 rules simultaneously
     against your answers.
  5. The most severe matched rule becomes the primary result.
     Additional matched rules appear as secondary findings.
  6. The result screen shows:
       - Applicable Philippine laws
       - Plain-language explanation of the situation
       - Recommended action / next steps
       - All fired rule IDs (for transparency)
  7. Click "Start Over" to reset and run again.

-----------------------------------------
 QUESTIONS (q1 – q5)
-----------------------------------------

  q1 — Type of cybercrime situation
         phishing | hacking | harassment | libel | csam

  q2 — Financial loss or credential compromise?
         yes | no | na

  q3 — Evidence available?
         yes | partial | no

  q4 — Already reported to authorities?
         yes | no

  q5 — Urgency level?
         critical | serious | info

-----------------------------------------
 KNOWLEDGE BASE — 10 IF-THEN RULES
-----------------------------------------

  R01  IF q1=phishing AND q2=yes
       THEN Online Fraud / Phishing with Financial Loss
            → RA 10175 §4(b)(8), RPC Art. 315 (Estafa)
            [DANGER]

  R02  IF q1=phishing AND q2=no
       THEN Phishing Attempt — No Loss
            → RA 10175 §4(b)(8)
            [INFO]

  R03  IF q1=hacking
       THEN Unauthorized Access / Hacking
            → RA 10175 §4(a)(1), §4(a)(3)
            [DANGER]

  R04  IF q1=harassment AND q5 ≠ critical
       THEN Online Harassment / Cyberbullying
            → RA 10175 §4(c)(3), RA 10627, RA 11313
            [WARN]

  R05  IF q1=harassment AND q5=critical
       THEN Active Online Threat — Urgent
            → RA 10175 §4(c)(3), RPC Art. 282
            [DANGER]

  R06  IF q1=libel
       THEN Online Libel / Cyber Defamation
            → RA 10175 §4(c)(4), RPC Art. 353–355
            [WARN]

  R07  IF q1=csam
       THEN Child Sexual Abuse Material (CSAM)
            → RA 9775, RA 11930, RA 7610
            [DANGER]

  R08  IF q3=no AND q1 ≠ csam
       THEN No Evidence — Act Now to Preserve
            → RA 10175
            [WARN]

  R09  IF q4=no AND q5=critical
       THEN Critical Incident — Not Yet Reported
            → RA 10175
            [DANGER]

  R10  IF q4=yes AND q3=yes
       THEN Well Documented and Already Reported
            → RA 10175
            [SAFE]

-----------------------------------------
 INFERENCE ENGINE (app.js)
-----------------------------------------

  Strategy:   Forward chaining — evaluates ALL rules at once
  Conflict:   Most severe rule wins as primary result
              Priority: danger > warn > info > safe
  Fired rules: All matched rule IDs displayed for transparency
  Multi-match: Additional fired rules shown as secondary findings

-----------------------------------------
 SEVERITY LEVELS
-----------------------------------------

  DANGER  🔴  Immediate action required
  WARN    🟡  Action recommended
  INFO    🔵  Informational guidance
  SAFE    ✅  Positive / well-handled situation

-----------------------------------------
 APPLICABLE PHILIPPINE LAWS
-----------------------------------------

  RA 10175  Cybercrime Prevention Act of 2012
  RA 9775   Anti-Child Pornography Act of 2009
  RA 10627  Anti-Bullying Act of 2013
  RA 11313  Safe Spaces Act (Bawal Bastos Law)
  RA 11930  Anti-OSAEC Act
  RA 7610   Special Protection of Children Against Abuse Act
  RPC 315   Estafa (Revised Penal Code)
  RPC 282   Grave Threats (Revised Penal Code)
  RPC 353+  Libel (Revised Penal Code)

-----------------------------------------
 CONTACTS REFERENCED IN RESULTS
-----------------------------------------

  NBI Cybercrime Division : (02) 8523-8231
  PNP-ACG (Anti-Cybercrime Group) : (02) 8723-0401
  DOJ Cybercrime Office   : cybercrime.doj.gov.ph
  National Privacy Commission : privacy.gov.ph
  CSAM Reporting          : cybertipline.org
  Emergency              : 911

-----------------------------------------
 DISCLAIMER
-----------------------------------------

  This system is for ACADEMIC PURPOSES ONLY.
  It does NOT constitute actual legal advice.
  Always consult a licensed attorney for real legal matters.

=========================================
