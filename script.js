const tracks = [
  {
    code: "OPS", title: "Operação e Monitoramento", category: "Operações", level: "Técnico • Entrada e atualização", accent: "cyan", price: "29,90",
    description: "Rotinas 24x7, alarmes, rondas, registros, escalonamento e resposta inicial a incidentes.",
    freeUrl: "simulados/operacao-monitoramento/index.html", premiumUrl: "https://pay.kiwify.com.br/xy013Ic",
    modules: ["Fundamentos de data center", "Operação em missão crítica", "Alarmes e escalonamento", "Rondas e procedimentos", "Incidentes e comunicação", "Segurança e continuidade"]
  },
  {
    code: "NOC", title: "NOC e Monitoramento de Infraestrutura", category: "Tecnologia", level: "Técnico/Superior • TI", accent: "violet", price: "29,90",
    description: "Disponibilidade, eventos, métricas, tickets, SLAs e diagnóstico de falhas em ambientes críticos.",
    freeUrl: "simulados/noc-monitoramento/index.html", premiumUrl: "https://pay.kiwify.com.br/KBO2Dig",
    modules: ["Fundamentos de NOC", "Monitoramento e observabilidade", "Redes e protocolos", "Gestão de incidentes", "SLA, KPI e relatórios", "Cenários de troubleshooting"]
  },
  {
    code: "PWR", title: "Facilities Elétricas", category: "Infraestrutura", level: "Técnico/Superior • Elétrica", accent: "amber", price: "39,90",
    description: "UPS, geradores, quadros, distribuição, redundância, proteção e práticas seguras de intervenção.",
    freeUrl: "simulados/facilities-eletricas/index.html", premiumUrl: "https://pay.kiwify.com.br/9d9MtZo",
    modules: ["Eletricidade aplicada", "UPS e bancos de baterias", "Geradores e transferência", "Quadros e distribuição", "Redundância e seletividade", "Medições e qualidade de energia", "NR-10 e segurança", "Falhas e contingência"]
  },
  {
    code: "HVAC", title: "Refrigeração e HVAC", category: "Infraestrutura", level: "Técnico/Superior • Mecânica", accent: "cyan", price: "39,90",
    description: "Climatização de precisão, fluxo de ar, chillers, CRAC/CRAH, eficiência e resposta térmica.",
    freeUrl: "simulados/refrigeracao-hvac/index.html", premiumUrl: "https://pay.kiwify.com.br/UFDnAPN",
    modules: ["Termodinâmica aplicada", "Climatização de precisão", "CRAC, CRAH e chillers", "Fluxo de ar e corredores", "Umidade e qualidade ambiental", "Eficiência e PUE", "Alarmes e contingência térmica"]
  },
  {
    code: "BMS", title: "Automação, BMS e DCIM", category: "Tecnologia", level: "Técnico/Superior • Automação", accent: "lime", price: "39,90",
    description: "Sensores, supervisórios, lógicas de controle, integração de sistemas e gestão de capacidade.",
    freeUrl: "simulados/automacao-bms-dcim/index.html", premiumUrl: "https://pay.kiwify.com.br/AcoiCiX",
    modules: ["Instrumentação e sensores", "CLP e lógica de controle", "BMS e supervisórios", "DCIM e capacidade", "Protocolos de automação", "Alarmes e tendências", "Diagnóstico integrado"]
  },
  {
    code: "NET", title: "Redes, Fibra e Conectividade", category: "Tecnologia", level: "Técnico/Superior • Redes", accent: "violet", price: "39,90",
    description: "Cabeamento estruturado, fibra óptica, switching, redundância, testes e organização física.",
    freeUrl: "simulados/redes-fibra-conectividade/index.html", premiumUrl: "https://pay.kiwify.com.br/Nkyl2pO",
    modules: ["Fundamentos de redes", "Cabeamento estruturado", "Fibra óptica e testes", "Switching e VLANs", "Roteamento e redundância", "Racks, patching e organização", "Troubleshooting de conectividade"]
  },
  {
    code: "MNT", title: "Manutenção e Confiabilidade", category: "Operações", level: "Técnico/Superior • O&M", accent: "lime", price: "29,90",
    description: "Planos preventivos, ordens de serviço, análise de falhas, indicadores e gestão de mudanças.",
    freeUrl: "simulados/manutencao-confiabilidade/index.html", premiumUrl: "https://pay.kiwify.com.br/A4ceknE",
    modules: ["Estratégias de manutenção", "Planejamento e ordens de serviço", "Análise de causa raiz", "Confiabilidade e disponibilidade", "MOP, SOP e EOP", "Mudanças e lições aprendidas"]
  },
  {
    code: "EHS", title: "Segurança, EHS e Qualidade", category: "Suporte", level: "Técnico/Superior • Compliance", accent: "amber", price: "19,90",
    description: "Riscos, permissões de trabalho, emergências, auditorias, controles e cultura de segurança.",
    freeUrl: "simulados/seguranca-ehs-qualidade/index.html", premiumUrl: "https://pay.kiwify.com.br/zhustgq",
    modules: ["Riscos e controles críticos", "Permissão e trabalho seguro", "Emergências e evacuação", "Qualidade e auditorias", "Incidentes e conformidade"]
  },
  {
    code: "LOG", title: "Logística e Almoxarifado Técnico", category: "Suporte", level: "Médio/Técnico • Operacional", accent: "cyan", price: "19,90",
    description: "Recebimento, inventário, peças críticas, rastreabilidade, movimentação e suporte às equipes.",
    freeUrl: "simulados/logistica-almoxarifado/index.html", premiumUrl: "https://pay.kiwify.com.br/yBQxkYM",
    modules: ["Rotinas de almoxarifado", "Inventário e rastreabilidade", "Peças e materiais críticos", "Recebimento e movimentação", "Segurança e documentação"]
  },
  {
    code: "PMO", title: "Planejamento, Compras e Administrativo", category: "Suporte", level: "Médio/Superior • Administrativo", accent: "violet", price: "19,90",
    description: "Cronogramas, contratos, compras técnicas, documentação, custos e apoio à operação e às obras.",
    freeUrl: "simulados/planejamento-compras-administrativo/index.html", premiumUrl: "https://pay.kiwify.com.br/mELa54y",
    modules: ["Rotinas administrativas", "Planejamento e cronogramas", "Compras e contratos", "Custos e controles", "Documentação técnica"]
  },
  {
    code: "CXM", title: "Engenharia, Obras e Comissionamento", category: "Infraestrutura", level: "Superior • Engenharia", accent: "amber", price: "49,90",
    description: "Projetos, implantação, testes integrados, entrega técnica, documentação e gestão de riscos.",
    freeUrl: "simulados/engenharia-obras-comissionamento/index.html", premiumUrl: "https://pay.kiwify.com.br/QNAgRe8",
    modules: ["Arquitetura de data centers", "Projetos elétricos", "Projetos mecânicos", "Automação e integração", "Planejamento de obras", "Qualidade e inspeções", "Comissionamento por níveis", "Testes integrados", "Documentação e handover", "Riscos e cenários críticos"]
  },
  {
    code: "LDR", title: "Liderança e Gestão de Operações", category: "Operações", level: "Superior • Coordenação/Gestão", accent: "lime", price: "49,90",
    description: "Pessoas, turnos, indicadores, clientes, capacidade, mudanças e decisões sob pressão.",
    freeUrl: "simulados/lideranca-gestao-operacoes/index.html", premiumUrl: "https://pay.kiwify.com.br/9entGbh",
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

function checkoutUrl(track) {
  const url = new URL(track.premiumUrl);
  url.searchParams.set("src", "site-gabarito-data-center");
  url.searchParams.set("utm_source", "gabarito-data-center");
  url.searchParams.set("utm_medium", "site");
  url.searchParams.set("utm_campaign", "catalogo-premium-2026");
  url.searchParams.set("utm_content", track.code.toLowerCase());
  return url.toString();
}

function sendMetaEvent(method, eventName, parameters) {
  if (typeof window.fbq !== "function") return;
  window.fbq(method, eventName, parameters);
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
    ? `<a class="button button--primary track-free-link" href="${track.freeUrl}" data-track-code="${track.code}" data-track-title="${track.title}">Iniciar teste grátis <span aria-hidden="true">→</span></a>`
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
      <a class="button button--premium track-premium-link" href="${checkoutUrl(track)}" target="_blank" rel="noreferrer" data-track-code="${track.code}" data-track-title="${track.title}" data-track-category="${track.category}" data-track-price="${track.price.replace(",", ".")}" aria-label="Comprar ${track.title} Premium na Kiwify">Comprar Premium na Kiwify <span aria-hidden="true">↗</span></a>
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

grid.addEventListener("click", (event) => {
  const freeLink = event.target.closest(".track-free-link");
  if (freeLink) {
    sendMetaEvent("trackCustom", "FreeTestStart", {
      content_id: freeLink.dataset.trackCode,
      content_name: freeLink.dataset.trackTitle
    });
    return;
  }

  const premiumLink = event.target.closest(".track-premium-link");
  if (premiumLink) {
    sendMetaEvent("track", "ViewContent", {
      content_ids: [premiumLink.dataset.trackCode],
      content_name: premiumLink.dataset.trackTitle,
      content_category: premiumLink.dataset.trackCategory,
      content_type: "product",
      currency: "BRL",
      value: Number(premiumLink.dataset.trackPrice)
    });
  }
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
