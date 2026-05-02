const workflows = [
  {
    id: "voc",
    title: "AI Voice of Customer Decision Engine",
    status: ["hot", "mvp"],
    time: "3 hrs -> 30 min",
    summary: "Aggregate feedback into traceable themes, ranked opportunities, eval checks, and decision-ready product bets.",
    why: "This is the strongest first build because it touches the full AI product loop: ingestion, context, synthesis, evidence, scoring, trust, and impact.",
    outputs: ["Evidence-linked theme map", "Opportunity scorecard with confidence", "Eval criteria and product brief"],
  },
  {
    id: "interviews",
    title: "Research Synthesis Agent Team",
    status: ["hot", "mvp"],
    time: "7-10 hrs -> 15 min",
    summary: "Analyze transcripts with specialist agents for jobs, pain, objections, risk, and missing evidence.",
    why: "It proves you understand multi-agent workflow design without pretending autonomy is magic.",
    outputs: ["Top jobs-to-be-done", "Quote-backed insight clusters", "Open questions and eval failures"],
  },
  {
    id: "problem-prd",
    title: "Problem to AI Product Spec",
    status: ["hot", "mvp"],
    time: "3 hrs -> 20 min",
    summary: "Turn a validated problem into AI behavior, data needs, UX states, evals, risks, and sprint-ready scope.",
    why: "AI specs need more than requirements. They need behavior boundaries, context contracts, failure modes, and measurement.",
    outputs: ["Problem framing", "AI behavior contract", "Acceptance criteria, evals, and risks"],
  },
  {
    id: "hypothesis",
    title: "AI Impact Hypothesis Tester",
    status: ["hot"],
    time: "2 hrs -> 15 min",
    summary: "Connect AI usage to outcome metrics and generate competing explanations when impact is unclear.",
    why: "Modern AI PM portfolios should show measurement judgment, not just shiny model demos.",
    outputs: ["Hypothesis tree", "Evidence request list", "Ship, pause, tune, or rollback recommendation"],
  },
  {
    id: "competitive",
    title: "AI Competitive Intel Pack",
    status: ["hot"],
    time: "4 hrs -> 30 min",
    summary: "Compare competitors across AI workflows, data moat, trust controls, pricing, and product differentiation.",
    why: "Useful when the analysis ends with a product choice instead of a feature checklist.",
    outputs: ["AI positioning map", "Trust and feature deltas", "Strategic recommendation"],
  },
  {
    id: "review",
    title: "AI Launch Readiness Review",
    status: ["hot", "mvp"],
    time: "2 hrs -> 15 min",
    summary: "Run customer, engineering, legal, sales, security, executive, and contrarian reviews before launch.",
    why: "This shows stakeholder judgment, AI risk literacy, and pre-mortem thinking.",
    outputs: ["Consensus and tensions", "Launch blockers by function", "Questions to resolve before shipping"],
  },
  {
    id: "prd",
    title: "Standalone PRD Generator",
    status: ["stale"],
    time: "4-6 hrs -> 45 min",
    summary: "Create a structured PRD from a messy idea.",
    why: "Useful as a minor feature, weak as the product. It feels like a prompt wrapper unless grounded in evidence, context, and evals.",
    outputs: ["PRD document", "Goals and requirements", "Basic success metrics"],
  },
  {
    id: "swot",
    title: "SWOT / BCG Analyzer",
    status: ["stale"],
    time: "2-3 hrs -> 10 min",
    summary: "Generate classic strategy frameworks for a product or portfolio.",
    why: "These frameworks look outdated when they do not expose assumptions, uncertainty, source evidence, or decision impact.",
    outputs: ["Framework grid", "Strategic implications", "Follow-up questions"],
  },
  {
    id: "meeting",
    title: "Meeting Agenda and Notes",
    status: ["stale"],
    time: "20-30 min -> 5 min",
    summary: "Create agendas, decisions, and action items from meetings.",
    why: "This is table stakes AI productivity. Keep it as a supporting utility, not the flagship AI PM proof point.",
    outputs: ["Agenda", "Decision log", "Action items"],
  },
];

const trends = [
  {
    id: "agentic-pm",
    title: "Agentic PM workflows move from novelty to operating layer",
    category: "ai",
    score: 94,
    source: "Forrester, Gartner, Institute of AI PM",
    signal:
      "GenAI is now expected inside product work, while task-specific agents are becoming a mainstream enterprise app pattern.",
    audience: "Product leaders and senior PMs trying to move beyond one-off chat prompts.",
    serve:
      "Weekly agent workflow tear-downs: where to use an agent, what it should access, where humans approve, and which KPI it should move.",
    easyStart: "Build a public Agent Workflow Canvas with examples for VoC, roadmap review, and metric diagnosis.",
    risk: "Avoid overclaiming autonomy. The valuable angle is governed workflows with clear handoffs.",
    link: "https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025",
  },
  {
    id: "feedback-firehose",
    title: "Customer feedback synthesis becomes the highest-utility PM AI use case",
    category: "ops",
    score: 91,
    source: "Forrester and PM tooling trend coverage",
    signal:
      "Product teams are using AI to identify opportunities, analyze data, and translate fragmented customer signal into product work.",
    audience: "PMs drowning in support tickets, call notes, reviews, Slack requests, and sales feedback.",
    serve:
      "A Voice of Customer digest: top pain themes, sample quotes, revenue relevance, and recommended next discovery question.",
    easyStart: "Let users paste 20 feedback snippets and get a theme map plus a scored opportunity list.",
    risk: "The output must cite evidence snippets. Otherwise it becomes another generic prioritization toy.",
    link: "https://www.forrester.com/report/product-management-in-2026-genai-use-across-the-product-development-process/RES193231",
  },
  {
    id: "ai-roi",
    title: "AI features are judged by outcome metrics, not adoption theater",
    category: "ai",
    score: 88,
    source: "Institute of AI PM, Forrester",
    signal:
      "The market has shifted from experimenting with AI buttons to proving impact on support load, time-to-value, conversion, and retention.",
    audience: "PMs who need to defend AI roadmap investment to executives and finance partners.",
    serve:
      "An AI ROI scorecard that converts a feature idea into hypothesis, metric, baseline, guardrail, and measurement plan.",
    easyStart: "Publish a calculator for support deflection, onboarding lift, or research hours saved.",
    risk: "Do not promise hard ROI without baseline data. Frame outputs as assumptions and experiment plans.",
    link: "https://www.institutepm.com/knowledge-hub/ai-product-management-2026",
  },
  {
    id: "pm-builder",
    title: "PMs are becoming prototype builders, not just spec writers",
    category: "career",
    score: 84,
    source: "Recent industry reporting on AI-assisted prototyping",
    signal:
      "AI coding tools are making it realistic for PMs to create interactive prototypes and sharper product demos before engineering handoff.",
    audience: "Ambitious PMs building portfolio projects or trying to communicate product intent faster.",
    serve:
      "Prototype briefs: one problem, one user flow, one working demo, one engineering handoff checklist.",
    easyStart: "Offer a PM prototype challenge every week with a small dataset and suggested acceptance criteria.",
    risk: "Position prototypes as learning artifacts, not production engineering replacements.",
    link: "https://www.businessinsider.com/product-manager-ai-builder-prototypes-cursor-engineer-clear-expectations-2026-4",
  },
  {
    id: "agent-governance",
    title: "Agent governance becomes a product requirement, not a security footnote",
    category: "ops",
    score: 82,
    source: "Enterprise security and agent adoption coverage",
    signal:
      "Companies are adopting AI agents faster than their identity, permissions, and audit models can safely support.",
    audience: "B2B PMs building AI features for regulated, enterprise, or admin-heavy products.",
    serve:
      "A governance checklist for agent permissions, approval points, logs, data boundaries, and rollback behavior.",
    easyStart: "Create an Agent Readiness Review that scores a product concept across trust and control dimensions.",
    risk: "Keep the language practical. PMs need product controls, not abstract security panic.",
    link: "https://www.itpro.com/security/enterprises-are-adopting-agents-faster-than-they-can-secure-and-govern-them-experts-warn-its-a-disaster-waiting-to-happen",
  },
  {
    id: "structured-discovery",
    title: "AI discovery rewards structured, trusted product data",
    category: "ops",
    score: 78,
    source: "AI discovery and product data coverage",
    signal:
      "AI-mediated discovery makes structured data, reviews, and trust signals more important because products are increasingly explained by AI systems.",
    audience: "PMs working on marketplaces, ecommerce, PLG onboarding, docs, or knowledge-heavy products.",
    serve:
      "A product data audit: what AI systems can understand, what they misread, and which trust signals are missing.",
    easyStart: "Build a checklist for AI-readable product pages, help docs, reviews, and comparison content.",
    risk: "This is less PM-ops specific, so package it for PMs who own discovery and activation.",
    link: "https://www.techradar.com/pro/ai-is-redefining-product-discovery-making-structured-data-and-trust-critical-for-visibility",
  },
];

const sampleFeedback = `Support: Enterprise admins keep asking why AI summaries cannot show the exact source tickets behind each recommendation.
Sales: Two prospects said they like the roadmap assistant, but legal needs audit logs before they can approve an AI workflow.
Customer call: Our PM team spends Fridays copying notes from Gong, Intercom, and Slack into a spreadsheet before planning.
NPS comment: The tool is useful, but I do not trust the priority score unless I can see which customers asked for the thing.
Win/loss note: We lost to a competitor because they had Salesforce sync and a cleaner executive weekly digest.
Research interview: I want the system to tell me which feedback is new this week versus the same old complaints.
CS note: Expansion account asked for an AI ROI dashboard tied to support deflection and onboarding time saved.
Product ops: We need a repeatable way to convert messy customer signal into a roadmap memo before Monday planning.`;

const themeDefinitions = [
  {
    id: "trust",
    label: "Trust and evidence",
    keywords: ["trust", "source", "evidence", "audit", "legal", "approve", "logs", "exact"],
    bet: "Make every AI recommendation traceable to source evidence and confidence.",
    experiment: "Add source-linked recommendations for one feedback channel, then evaluate citation accuracy and stakeholder acceptance.",
  },
  {
    id: "integration",
    label: "Workflow integrations",
    keywords: ["salesforce", "gong", "intercom", "slack", "sync", "spreadsheet", "copying", "channel"],
    bet: "Start with one high-friction context bundle instead of a broad connector marketplace.",
    experiment: "Ship CSV plus one source import, then measure context completeness, setup completion, and weekly reuse.",
  },
  {
    id: "executive",
    label: "Executive communication",
    keywords: ["executive", "weekly", "digest", "memo", "planning", "roadmap", "monday"],
    bet: "Package insights into a recurring planning memo with assumptions, evidence, and decision options.",
    experiment: "Generate a Monday roadmap memo for five PMs and collect usefulness, trust, and edit-distance ratings.",
  },
  {
    id: "roi",
    label: "AI ROI measurement",
    keywords: ["roi", "support", "deflection", "onboarding", "time saved", "dashboard", "expansion"],
    bet: "Attach AI workflows to concrete business metrics and guardrails.",
    experiment: "Create an ROI worksheet for support deflection, onboarding time-to-value, quality, latency, and cost.",
  },
  {
    id: "novelty",
    label: "Freshness and prioritization",
    keywords: ["new", "priority", "prioritize", "score", "competitor", "lost", "asked", "complaints"],
    bet: "Separate recurring noise from fresh signal before prioritizing.",
    experiment: "Tag feedback as new, repeated, or strategic and evaluate whether roadmap meetings reach decisions faster.",
  },
];

const grid = document.querySelector("#workflow-grid");
const panel = document.querySelector("#detail-panel");
const filters = document.querySelectorAll("[data-filter]");
const trendGrid = document.querySelector("#trend-grid");
const trendPanel = document.querySelector("#trend-detail");
const trendFilters = document.querySelectorAll("[data-trend-filter]");
const feedbackInput = document.querySelector("#feedback-input");
const feedbackOutput = document.querySelector("#feedback-output");
const analyzeFeedbackButton = document.querySelector("#analyze-feedback");
const loadSampleButton = document.querySelector("#load-sample");
let selectedId = "voc";
let activeFilter = "all";
let selectedTrendId = "agentic-pm";
let activeTrendFilter = "all";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function labelFor(status) {
  if (status === "hot") return "Trending";
  if (status === "mvp") return "MVP core";
  return "Commoditized";
}

function visibleWorkflows() {
  if (activeFilter === "all") return workflows;
  return workflows.filter((workflow) => workflow.status.includes(activeFilter));
}

function renderGrid() {
  const visible = visibleWorkflows();
  if (!visible.some((workflow) => workflow.id === selectedId)) {
    selectedId = visible[0]?.id || workflows[0].id;
  }

  grid.innerHTML = visible
    .map(
      (workflow) => `
        <button class="workflow-card ${workflow.id === selectedId ? "active" : ""}" type="button" data-id="${workflow.id}">
          <span class="meta">
            ${workflow.status.map((status) => `<span class="pill ${status}">${labelFor(status)}</span>`).join("")}
            <span class="pill">${workflow.time}</span>
          </span>
          <h3>${workflow.title}</h3>
          <p>${workflow.summary}</p>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".workflow-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      renderGrid();
      renderPanel();
    });
  });
}

function renderPanel() {
  const workflow = workflows.find((item) => item.id === selectedId) || workflows[0];
  panel.innerHTML = `
    <span class="tag">Selected workflow</span>
    <h3>${workflow.title}</h3>
    <p>${workflow.why}</p>
    <h3>Expected outputs</h3>
    <ul>
      ${workflow.outputs.map((output) => `<li>${output}</li>`).join("")}
    </ul>
  `;
}

function categoryLabel(category) {
  if (category === "ai") return "AI PM";
  if (category === "ops") return "Product ops";
  return "PM career";
}

function visibleTrends() {
  if (activeTrendFilter === "all") return trends;
  return trends.filter((trend) => trend.category === activeTrendFilter);
}

function renderTrendGrid() {
  if (!trendGrid) return;
  const visible = visibleTrends();
  if (!visible.some((trend) => trend.id === selectedTrendId)) {
    selectedTrendId = visible[0]?.id || trends[0].id;
  }

  trendGrid.innerHTML = visible
    .map(
      (trend) => `
        <button class="trend-card ${trend.id === selectedTrendId ? "active" : ""}" type="button" data-trend-id="${trend.id}">
          <header>
            <span>
              <span class="pill ${trend.category === "ai" ? "hot" : trend.category === "ops" ? "mvp" : "stale"}">${categoryLabel(trend.category)}</span>
            </span>
            <span class="score" aria-label="Opportunity score ${trend.score}">${trend.score}</span>
          </header>
          <h3>${trend.title}</h3>
          <p>${trend.signal}</p>
          <span class="source">${trend.source}</span>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll("[data-trend-id]").forEach((card) => {
    card.addEventListener("click", () => {
      selectedTrendId = card.dataset.trendId;
      renderTrendGrid();
      renderTrendPanel();
    });
  });
}

function renderTrendPanel() {
  if (!trendPanel) return;
  const trend = trends.find((item) => item.id === selectedTrendId) || trends[0];
  trendPanel.innerHTML = `
    <span class="tag">What to serve</span>
    <h3>${trend.title}</h3>
    <p>${trend.serve}</p>
    <dl>
      <div>
        <dt>Audience</dt>
        <dd>${trend.audience}</dd>
      </div>
      <div>
        <dt>Easy first product</dt>
        <dd>${trend.easyStart}</dd>
      </div>
      <div>
        <dt>Product risk</dt>
        <dd>${trend.risk}</dd>
      </div>
    </dl>
    <a href="${trend.link}" target="_blank" rel="noreferrer">Read source</a>
  `;
}

function splitFeedback(raw) {
  return raw
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function scoreThemes(lines) {
  const normalizedLines = lines.map((line) => line.toLowerCase());
  return themeDefinitions
    .map((theme) => {
      const matches = normalizedLines
        .map((line, index) => {
          const hits = theme.keywords.filter((keyword) => line.includes(keyword)).length;
          return hits ? { line: lines[index], hits } : null;
        })
        .filter(Boolean);
      const score = matches.reduce((total, match) => total + match.hits, 0) + matches.length * 2;
      return { ...theme, matches, score };
    })
    .filter((theme) => theme.score > 0)
    .sort((a, b) => b.score - a.score);
}

function renderEmptyWorkbench() {
  if (!feedbackOutput) return;
  feedbackOutput.innerHTML = `
    <span class="tag">AI PM readout</span>
    <h3>Turn raw signal into an AI product decision artifact.</h3>
    <p>Use the sample or paste customer notes, support snippets, sales objections, interview quotes, app reviews, or roadmap requests.</p>
    <ul class="brief-list">
      <li><strong>Best for</strong><span class="evidence">Finding themes, proving demand, and deciding the next product bet.</span></li>
      <li><strong>What it returns</strong><span class="evidence">Opportunity themes, evidence snippets, a recommended bet, eval ideas, and a small experiment.</span></li>
    </ul>
  `;
}

function analyzeFeedback() {
  if (!feedbackInput || !feedbackOutput) return;
  const lines = splitFeedback(feedbackInput.value);
  if (!lines.length) {
    renderEmptyWorkbench();
    return;
  }

  const themes = scoreThemes(lines);
  const topTheme = themes[0] || {
    label: "Unclassified signal",
    bet: "Collect more specific evidence before committing roadmap capacity.",
    experiment: "Run five follow-up interviews to clarify the underlying job and urgency.",
    matches: [],
  };
  const evidenceCount = themes.reduce((total, theme) => total + theme.matches.length, 0);
  const confidence = Math.min(95, 45 + evidenceCount * 6 + themes.length * 5);
  const strongestQuote = topTheme.matches[0]?.line || lines[0];

  feedbackOutput.innerHTML = `
    <span class="tag">AI PM readout</span>
    <div class="output-kpis">
      <div class="summary-tile"><strong>${lines.length}</strong><span>signal items</span></div>
      <div class="summary-tile"><strong>${themes.length}</strong><span>themes found</span></div>
      <div class="summary-tile"><strong>${confidence}%</strong><span>directional confidence</span></div>
    </div>
    <h3>Top opportunity themes</h3>
    <ul class="theme-list">
      ${
        themes
          .slice(0, 4)
          .map(
            (theme) => `
              <li>
                <strong>${escapeHtml(theme.label)} · ${theme.matches.length} evidence items</strong>
                <span class="evidence">${escapeHtml(theme.matches[0]?.line || "No representative quote available.")}</span>
              </li>
            `,
          )
          .join("") || `<li><strong>No strong theme yet</strong><span class="evidence">Add more specific customer language or load the sample.</span></li>`
      }
    </ul>
    <h3>Recommended product bet</h3>
    <ul class="brief-list">
      <li><strong>AI product bet</strong><span class="evidence">${escapeHtml(topTheme.bet)}</span></li>
      <li><strong>Why now</strong><span class="evidence">The strongest signal is “${escapeHtml(strongestQuote)}” and it connects to ${escapeHtml(topTheme.label.toLowerCase())}.</span></li>
      <li><strong>Next experiment</strong><span class="evidence">${escapeHtml(topTheme.experiment)}</span></li>
      <li><strong>Eval to add</strong><span class="evidence">Check evidence citation accuracy, unsupported recommendation rate, duplicate clustering quality, and whether PMs edit the output before sharing.</span></li>
      <li><strong>Decision rule</strong><span class="evidence">Promote to roadmap only if at least three distinct customer/account sources repeat this pain and one measurable business metric plus one quality guardrail are identified.</span></li>
    </ul>
  `;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    renderGrid();
    renderPanel();
  });
});

trendFilters.forEach((button) => {
  button.addEventListener("click", () => {
    activeTrendFilter = button.dataset.trendFilter;
    trendFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderTrendGrid();
    renderTrendPanel();
  });
});

renderGrid();
renderPanel();
renderTrendGrid();
renderTrendPanel();

if (feedbackInput) {
  feedbackInput.value = sampleFeedback;
  analyzeFeedback();
}

analyzeFeedbackButton?.addEventListener("click", analyzeFeedback);
loadSampleButton?.addEventListener("click", () => {
  if (!feedbackInput) return;
  feedbackInput.value = sampleFeedback;
  analyzeFeedback();
});
