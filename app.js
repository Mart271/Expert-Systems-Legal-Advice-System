/* =========================================
   Cybercrime Legal Expert System
   app.js — Inference Engine & UI Controller
   ========================================= */

/* ----- State ----- */
let answers = {};
let currentStep = 0;
const TOTAL_STEPS = questions.length;

/* ----- Inference Engine ----- */

/**
 * Runs all rules against the current answers object.
 * Returns every rule whose match() returns true.
 */
function runInferenceEngine() {
  return rules.filter(rule => rule.match(answers));
}

/**
 * From matched rules, picks the most severe as the primary result.
 * Priority: danger > warn > info > safe
 */
function getPrimaryRule(matched) {
  const priority = { danger: 3, warn: 2, info: 1, safe: 0 };
  return matched.sort((a, b) => (priority[b.severity] || 0) - (priority[a.severity] || 0))[0];
}

/* ----- Progress Bar ----- */

function renderProgress() {
  const container = document.getElementById('progress');
  let html = '';

  for (let i = 0; i < TOTAL_STEPS; i++) {
    let dotClass = '';
    let content = i + 1;

    if (i < currentStep) {
      dotClass = 'done';
      content = '✓';
    } else if (i === currentStep) {
      dotClass = 'active';
    }

    html += `<div class="step-dot ${dotClass}">${content}</div>`;

    if (i < TOTAL_STEPS - 1) {
      const lineClass = i < currentStep ? 'done' : '';
      html += `<div class="step-line ${lineClass}"></div>`;
    }
  }

  container.innerHTML = html;
}

/* ----- Question View ----- */

function renderQuestion(index) {
  const q = questions[index];
  const optKeys = ['A', 'B', 'C', 'D', 'E'];

  const optionsHtml = q.options.map((opt, i) => `
    <button class="option-btn" onclick="handleAnswer('${q.id}', '${opt.value}')">
      <span class="opt-key">${optKeys[i]}</span>
      ${opt.label}
    </button>
  `).join('');

  document.getElementById('main').innerHTML = `
    <div class="card fade-in">
      <div class="question-label">QUESTION ${index + 1} OF ${TOTAL_STEPS}</div>
      <div class="question-text">${q.text}</div>
      <div class="options">${optionsHtml}</div>
    </div>
  `;
}

/* ----- Result View ----- */

function renderResult() {
  const matched = runInferenceEngine();

  if (matched.length === 0) {
    renderNoFinding();
    return;
  }

  const primary = getPrimaryRule(matched);
  const additional = matched.filter(r => r.id !== primary.id);

  const answerLogHtml = Object.entries(answers)
    .map(([k, v]) => `<span class="answer-chip">${k.toUpperCase()}: ${v}</span>`)
    .join('');

  const lawsHtml = primary.laws
    .map(l => `<span class="law-tag">⚖ ${l}</span>`)
    .join('');

  const additionalHtml = buildAdditionalHtml(additional);
  const firedHtml = buildFiredRulesHtml(matched);

  document.getElementById('main').innerHTML = `
    <div class="result-card fade-in">

      <div class="answers-log">${answerLogHtml}</div>

      <div class="result-icon ${primary.severity}">${primary.icon}</div>
      <div class="result-title ${primary.severity}">${primary.title}</div>

      <div style="margin-bottom: 12px;">${lawsHtml}</div>

      <div class="result-desc">${primary.desc}</div>

      <div class="action-box">
        <div class="action-box-label">RECOMMENDED ACTION</div>
        <p>${primary.action}</p>
      </div>

      ${additionalHtml}
      ${firedHtml}

      <button class="restart-btn" onclick="restart()">↺ Start Over</button>
    </div>
  `;
}

function renderNoFinding() {
  document.getElementById('main').innerHTML = `
    <div class="result-card fade-in">
      <div class="result-icon safe">✓</div>
      <div class="result-title safe">No Cybercrime Indicators Detected</div>
      <div class="result-desc">
        Based on your answers, no specific cybercrime patterns were detected.
        Stay vigilant and practice good cybersecurity habits.
      </div>
      <button class="restart-btn" onclick="restart()">↺ Start Over</button>
    </div>
  `;
}

function buildAdditionalHtml(additional) {
  if (additional.length === 0) return '';

  const items = additional.map(r => `
    <div class="additional-item">
      <div class="additional-item-title">${r.icon} ${r.title}</div>
      <div class="additional-item-action">${r.action}</div>
    </div>
  `).join('');

  return `
    <div class="additional-findings">
      <div class="additional-label">ADDITIONAL FINDINGS</div>
      ${items}
    </div>
  `;
}

function buildFiredRulesHtml(matched) {
  const chips = matched
    .map(r => `<span class="rule-chip">▶ ${r.id}</span>`)
    .join('');

  return `
    <div class="fired-rules">
      <div class="fired-label">RULES FIRED</div>
      ${chips}
    </div>
  `;
}

/* ----- Event Handlers ----- */

function handleAnswer(questionId, value) {
  answers[questionId] = value;
  currentStep++;
  renderProgress();

  if (currentStep >= TOTAL_STEPS) {
    renderResult();
  } else {
    renderQuestion(currentStep);
  }
}

function restart() {
  answers = {};
  currentStep = 0;
  renderProgress();
  renderQuestion(0);
}

/* ----- Init ----- */
renderProgress();
renderQuestion(0);