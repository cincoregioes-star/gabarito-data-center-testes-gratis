const tracks = [
  {
    code: "OPS", title: "Operação e Monitoramento", category: "Operações", level: "Técnico • Entrada e atualização", accent: "cyan", price: "29,90",
    description: "Rotinas 24x7, alarmes, rondas, registros, escalonamento e resposta inicial a incidentes.",
    freeUrl: "simulados/operacao-monitoramento/",
    modules: ["Fundamentos de data center", "Operação em missão crítica", "Alarmes e escalonamento", "Rondas e procedimentos", "Incidentes e comunicação", "Segurança e continuidade"]
  },
  {
    code: "NOC", title: "NOC e Monitoramento de Infraestrutura", category: "Tecnologia", level: "Técnico/Superior • TI", accent: "violet", price: "29,90",
    description: "Disponibilidade, eventos, métricas, tickets, SLAs e diagnóstico de falhas em ambientes críticos.",
    freeUrl: "simulados/noc-monitoramento/",
    modules: ["Fundamentos de NOC", "Monitoramento e observabilidade", "Redes e protocolos", "Gestão de incidentes", "SLA, KPI e relatórios", "Cenários de troubleshooting"]
  },
  {
    code: "PWR", title: "Facilities Elétricas", category: "Infraestrutura", level: "Técnico/Superior • Elétrica", accent: "amber", price: "39,90",
    description: "UPS, geradores, quadros, distribuição, redundância, proteção e práticas seguras de intervenção.",
    freeUrl: "simulados/facilities-eletricas/",
    modules: ["Eletricidade aplicada", "UPS e bancos de baterias", "Geradores e transferência", "Quadros e distribuição", "Redundância e seletividade", "Medições e qualidade de energia", "NR-10 e segurança", "Falhas e contingência"]
  },
  {
    code: "HVAC", title: "Refrigeração e HVAC", category: "Infraestrutura", level: "Técnico/Superior • Mecânica", accent: "cyan", price: "39,90",
    description: "Climatização de precisão, fluxo de ar, chillers, CRAC/CRAH, eficiência e resposta térmica.",
    freeUrl: "simulados/refrigeracao-hvac/",
    modules: ["Termodinâmica aplicada", "Climatização de precisão", "CRAC, CRAH e chillers", "Fluxo de ar e corredores", "Umidade e qualidade ambiental", "Eficiência e PUE", "Alarmes e contingência térmica"]
  },
  {
    code: "BMS", title: "Automação, BMS e DCIM", category: "Tecnologia", level: "Técnico/Superior • Automação", accent: "lime", price: "39,90",
    description: "Sensores, supervisórios, lógicas de controle, integração de sistemas e gestão de capacidade.",
    freeUrl: "simulados/automacao-bms-dcim/",
    modules: ["Instrumentação e sensores", "CLP e lógica de controle", "BMS e supervisórios", "DCIM e capacidade", "Protocolos de automação", "Alarmes e tendências", "Diagnóstico integrado"]
  },
  {
    code: "NET", title: "Redes, Fibra e Conectividade", category: "Tecnologia", level: "Técnico/Superior • Redes", accent: "violet", price: "39,90",
    description: "Cabeamento estruturado, fibra óptica, switching, redundância, testes e organização física.",
    freeUrl: "simulados/redes-fibra-conectividade/",
    modules: ["Fundamentos de redes", "Cabeamento estruturado", "Fibra óptica e testes", "Switching e VLANs", "Roteamento e redundância", "Racks, patching e organização", "Troubleshooting de conectividade"]
  },
  {
    code: "MNT", title: "Manutenção e Confiabilidade", category: "Operações", level: "Técnico/Superior • O&M", accent: "lime", price: "29,90",
    description: "Planos preventivos, ordens de serviço, análise de falhas, indicadores e gestão de mudanças.",
    freeUrl: "simulados/manutencao-confiabilidade/",
    modules: ["Estratégias de manutenção", "Planejamento e ordens de serviço", "Análise de causa raiz", "Confiabilidade e disponibilidade", "MOP, SOP e EOP", "Mudanças e lições aprendidas"]
  },
  {
    code: "EHS", title: "Segurança, EHS e Qualidade", category: "Suporte", level: "Técnico/Superior • Compliance", accent: "amber", price: "19,90",
    description: "Riscos, permissões de trabalho, emergências, auditorias, controles e cultura de segurança.",
    freeUrl: "simulados/seguranca-ehs-qualidade/",
    modules: ["Riscos e controles críticos", "Permissão e trabalho seguro", "Emergências e evacuação", "Qualidade e auditorias", "Incidentes e conformidade"]
  },
  {
    code: "LOG", title: "Logística e Almoxarifado Técnico", category: "Suporte", level: "Médio/Técnico • Operacional", accent: "cyan", price: "19,90",
    description: "Recebimento, inventário, peças críticas, rastreabilidade, movimentação e suporte às equipes.",
    freeUrl: "simulados/logistica-almoxarifado/",
    modules: ["Rotinas de almoxarifado", "Inventário e rastreabilidade", "Peças e materiais críticos", "Recebimento e movimentação", "Segurança e documentação"]
  },
  {
    code: "PMO", title: "Planejamento, Compras e Administrativo", category: "Suporte", level: "Médio/Superior • Administrativo", accent: "violet", price: "19,90",
    description: "Cronogramas, contratos, compras técnicas, documentação, custos e apoio à operação e às obras.",
    freeUrl: "simulados/planejamento-compras-administrativo/",
    modules: ["Rotinas administrativas", "Planejamento e cronogramas", "Compras e contratos", "Custos e controles", "Documentação técnica"]
  },
  {
    code: "CXM", title: "Engenharia, Obras e Comissionamento", category: "Infraestrutura", level: "Superior • Engenharia", accent: "amber", price: "49,90",
    description: "Projetos, implantação, testes integrados, entrega técnica, documentação e gestão de riscos.",
    freeUrl: "simulados/engenharia-obras-comissionamento/",
    modules: ["Arquitetura de data centers", "Projetos elétricos", "Projetos mecânicos", "Automação e integração", "Planejamento de obras", "Qualidade e inspeções", "Comissionamento por níveis", "Testes integrados", "Documentação e handover", "Riscos e cenários críticos"]
  },
  {
    code: "LDR", title: "Liderança e Gestão de Operações", category: "Operações", level: "Superior • Coordenação/Gestão", accent: "lime", price: "49,90",
    description: "Pessoas, turnos, indicadores, clientes, capacidade, mudanças e decisões sob pressão.",
    freeUrl: "simulados/lideranca-gestao-operacoes/",
    modules: ["Gestão de operações críticas", "Liderança de equipes", "Turnos e cobertura operacional", "SLA, KPI e desempenho", "Clientes e comunicação executiva", "Capacidade e continuidade", "Mudanças e riscos", "Decisões em incidentes"]
  }
];

const categories = ["Todos", "Operações", "Infraestrutura", "Tecnologia", "Suporte"];
const state = { category: "Todos", query: "" };
const grid = document.querySelector("#track-grid");
const count = document.querySelector("#track-count");
const filters = document.querySelector("#track-filters");
const search = document.querySelector("#track-search");
const empty = document.querySelector("#empty-state");

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderFilters() {
  filters.innerHTML = categories.map((category) => `
    <button class="filter-button${state.category === category ? " is-active" : ""}" type="button" data-category="${category}" aria-pressed="${state.category === category}">${category}</button>
  `).join("");

  filters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      renderFilters();
      renderTracks();
    });
  });
}

function cardTemplate(track) {
  const total = track.modules.length * 20;
  const moduleItems = track.modules.map((module) => `<li><span>${module}</span><strong>20 q.</strong></li>`).join("");
  const freeButton = track.freeUrl
    ? `<a class="button button--primary track-free-link" href="${track.freeUrl}">Iniciar teste grátis <span aria-hidden="true">→</span></a>`
    : "";
  return `
    <article class="track-card track-card--${track.accent}">
      <div class="track-card__top"><span class="track-code">${track.code}</span><span class="track-category">${track.category}</span></div>
      <p class="track-level">${track.level}</p>
      <h3>${track.title}</h3>
      <p class="track-description">${track.description}</p>
      <div class="free-plan"><span class="free-plan__badge">GRÁTIS</span><strong>2 módulos • 10 questões</strong><small>Fundamentos da função + situações práticas</small></div>
      ${freeButton}
      <details class="module-details"><summary>Ver estrutura premium <span aria-hidden="true">＋</span></summary><ol>${moduleItems}</ol></details>
      <div class="track-card__footer"><div><small>Premium completo</small><strong>R$ ${track.price}</strong></div><div class="question-count"><strong>${total}</strong><span>questões</span></div></div>
    </article>
  `;
}

function renderTracks() {
  const query = normalize(state.query.trim());
  const visible = tracks.filter((track) => {
    const matchesCategory = state.category === "Todos" || track.category === state.category;
    const content = normalize([track.title, track.category, track.level, track.description, ...track.modules].join(" "));
    return matchesCategory && (!query || content.includes(query));
  });

  grid.innerHTML = visible.map(cardTemplate).join("");
  count.textContent = `${visible.length} ${visible.length === 1 ? "trilha encontrada" : "trilhas encontradas"}`;
  empty.hidden = visible.length !== 0;
  grid.hidden = visible.length === 0;
}

search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderTracks();
});

document.querySelector("#clear-filters").addEventListener("click", () => {
  state.category = "Todos";
  state.query = "";
  search.value = "";
  renderFilters();
  renderTracks();
});

renderFilters();
renderTracks();
