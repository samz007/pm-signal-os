const workflows = [
  {
    id: "voc",
    title: "Voice of Customer Analysis",
    status: ["hot", "mvp"],
    time: "3 hrs -> 30 min",
    summary: "Aggregate 100+ feedback items into themes, jobs, objections, and ranked opportunities.",
    why: "This is the strongest first build because it creates evidence every downstream workflow can reuse.",
    outputs: ["Theme map with source snippets", "Opportunity scorecard", "Product brief with assumptions"],
  },
  {
    id: "interviews",
    title: "Batch Interview Synthesis",
    status: ["hot", "mvp"],
    time: "7-10 hrs -> 15 min",
    summary: "Analyze multiple research transcripts in parallel and extract patterns with evidence trails.",
    why: "It proves agentic workflow design and gives the portfolio a research-heavy PM signal.",
    outputs: ["Top jobs-to-be-done", "Quote-backed insight clusters", "Recommended discovery questions"],
  },
  {
    id: "problem-prd",
    title: "Problem to PRD",
    status: ["hot", "mvp"],
    time: "3 hrs -> 20 min",
    summary: "Turn a validated problem into opportunity framing, PRD, risk review, and sprint-ready stories.",
    why: "PRDs are still useful when they are generated from evidence rather than from a blank prompt.",
    outputs: ["Problem framing", "MVP scope and non-goals", "Acceptance criteria and risks"],
  },
  {
    id: "hypothesis",
    title: "Metrics Drop Hypothesis Tester",
    status: ["hot"],
    time: "2 hrs -> 15 min",
    summary: "Debug a metric drop by generating competing hypotheses, evidence needs, and next actions.",
    why: "Modern PM portfolios should show data reasoning, not just communication artifacts.",
    outputs: ["Hypothesis tree", "Evidence request list", "Ship, pause, or investigate recommendation"],
  },
  {
    id: "competitive",
    title: "Competitive Intel Pack",
    status: ["hot"],
    time: "4 hrs -> 30 min",
    summary: "Compare competitors across positioning, pricing, gaps, and strategic threats.",
    why: "Useful for portfolios when the analysis ends with a product choice instead of a feature checklist.",
    outputs: ["Positioning map", "Feature and pricing deltas", "Strategic recommendation"],
  },
  {
    id: "review",
    title: "Multi-Perspective Review",
    status: ["hot", "mvp"],
    time: "2 hrs -> 15 min",
    summary: "Run customer, engineering, executive, sales, legal, and contrarian reviews on a proposal.",
    why: "This is a crisp way to show stakeholder judgment and pre-mortem thinking.",
    outputs: ["Consensus and tensions", "Blockers by function", "Questions to resolve before shipping"],
  },
  {
    id: "prd",
    title: "Standalone PRD Generator",
    status: ["stale"],
    time: "4-6 hrs -> 45 min",
    summary: "Create a structured PRD from a messy idea.",
    why: "Useful as a feature, weak as a product. It feels like a prompt wrapper unless grounded in user signal.",
    outputs: ["PRD document", "Goals and requirements", "Basic success metrics"],
  },
  {
    id: "swot",
    title: "SWOT / BCG Analyzer",
    status: ["stale"],
    time: "2-3 hrs -> 10 min",
    summary: "Generate classic strategy frameworks for a product or portfolio.",
    why: "These frameworks can look outdated when they do not expose assumptions or connect to live data.",
    outputs: ["Framework grid", "Strategic implications", "Follow-up questions"],
  },
  {
    id: "meeting",
    title: "Meeting Agenda and Notes",
    status: ["stale"],
    time: "20-30 min -> 5 min",
    summary: "Create agendas, decisions, and action items from meetings.",
    why: "This is table stakes productivity tooling. Keep it as a supporting utility, not the flagship.",
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

const grid = document.querySelector("#workflow-grid");
const panel = document.querySelector("#detail-panel");
const filters = document.querySelectorAll("[data-filter]");
const trendGrid = document.querySelector("#trend-grid");
const trendPanel = document.querySelector("#trend-detail");
const trendFilters = document.querySelectorAll("[data-trend-filter]");
let selectedId = "voc";
let activeFilter = "all";
let selectedTrendId = "agentic-pm";
let activeTrendFilter = "all";

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
