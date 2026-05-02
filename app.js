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

const grid = document.querySelector("#workflow-grid");
const panel = document.querySelector("#detail-panel");
const filters = document.querySelectorAll(".filter");
let selectedId = "voc";
let activeFilter = "all";

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

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    renderGrid();
    renderPanel();
  });
});

renderGrid();
renderPanel();
