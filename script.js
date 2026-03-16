/* ================================================================
   AKILLA LIMA — Portfolio v3 · script.js
   Head of Product · Payments · Blockchain · Tokenization
   ================================================================ */

const WA_MESSAGES = {
  en: "Hello Akilla, I found your professional portfolio and would like to connect regarding an opportunity.",
  pt: "Olá Akilla, encontrei seu portfólio profissional e gostaria de conversar sobre uma oportunidade."
};
const WA_BASE = "https://wa.me/5561981250919";

/* ── Translations ─────────────────────────────────────────────── */
const T = {
  en: {
    nav_about:    "About",
    nav_exp:      "Experience",
    nav_market:   "Market",
    nav_skills:   "Skills",
    nav_projects: "Projects",
    nav_contact:  "Contact",

    hero_tag:  '"Head of Product · Payments"',
    hero_desc: "Shaping the future of payments through PIX, card schemes,<br class='br-desk'/> blockchain &amp; tokenization — data-driven, strategy-first.",
    hero_cta1: "Explore My Work",
    hero_wa:   "Talk on WhatsApp",
    chip1: "PIX &amp; Instant Payments",
    chip2: "Card Schemes",
    chip3: "Blockchain &amp; Tokenization",
    chip4: "Open Finance",
    chip5: "Data Strategy",
    scroll_hint: "scroll",

    sec_about: "01 / about",
    about_h:   "From strategy<br/>to <em>execution.</em>",
    about_loc: "Brazil",
    about_p1:  "Head of Product with 7+ years specializing in payments infrastructure, PIX arrangements, card schemes, and emerging technologies like blockchain and tokenization. A data-driven strategist who turns regulatory complexity into competitive products.",
    about_p2:  "Postgraduate in Finance, Product Management, and Software Engineering. Deep expertise in the BCB regulatory agenda — from PIX Automático to DREX — combined with strong command of agile methodologies and AI applied to product decision-making.",
    stat1: "Years in Fintech",
    stat2: "Payments Processed",
    stat3: "Products Launched",

    sec_exp: "02 / experience",
    exp_h:   "Career Path",
    present: "Present",
    badge_now: "Now",
    exp1: "Strategic partner to the CEO, leading the product vision for banking and payment solutions. Driving PIX arrangements, card issuing programs, and the company's tokenization roadmap aligned with BCB directives.",
    exp2: "Architected financial product suite including credit bureau integrations, payment cycles, and data-driven risk models. Led squad of 12 across product, tech, and data.",
    exp3: "Owned the roadmap for digital payment products at scale. Delivered PIX onboarding, card product iteration cycles, and real-time fraud prevention features in collaboration with security and engineering.",

    sec_market:  "03 / market intelligence",
    market_h:    "Brazilian Payments Market",
    market_sub:  "Key indicators shaping the competitive landscape I navigate every day.",
    mc1_l: "PIX Daily Transactions",
    mc1_t: "+34% YoY",
    mc2_l: "Card Transactions (BR)",
    mc2_t: "+18% YoY",
    mc3_l: "Open Finance Users",
    mc3_t: "+60% YoY",
    mc4_l: "DREX Pilot Participants",
    mc4_t: "Pilot Phase",
    mc5_l: "Fintechs Licensed (BCB)",
    mc5_t: "+12% YoY",
    mc6_l: "Tokenized Assets Forecast",
    mc6_t: "by 2030 (BCG)",
    mc_src: "Source: BCB 2024",
    bcb_title: "BCB Regulatory Roadmap · 2024–2026",
    bcb1: "Instant payment arrangement. 180M+ daily transactions.",
    bcb2: "Recurring and scheduled PIX. Replacing direct debit (TED/DOC).",
    bcb3: "Brazilian digital currency. Programmable money &amp; DvP settlement.",
    bcb4: "Foreign exchange via DLT. Cross-border settlement modernization.",
    bcb5_t: "Tokenization Layer",
    bcb5: "Asset tokenization on regulated infrastructure. Real estate, agro &amp; fixed income.",

    sec_skills: "04 / skills",
    skills_h:   "Expertise",
    sk1_t: "Payments Infrastructure",
    sk1_d: "PIX, TED, card acquiring &amp; issuing, settlement, reconciliation. Full-stack payment architecture.",
    sk2_t: "Card Schemes",
    sk2_d: "Visa, Mastercard, Elo. Issuing programs, chargeback, tokenization (MDES/VTS).",
    sk3_t: "Blockchain &amp; Tokenization",
    sk3_d: "DLT for financial assets, asset tokenization, smart contracts and programmable money infrastructure.",
    sk4_t: "Data-Driven Strategy",
    sk4_d: "OKRs, North Star metrics, SQL &amp; Python analytics, product experimentation at scale.",
    sk5_t: "Open Finance &amp; APIs",
    sk5_d: "Open Banking architecture, consent management, credit portability and data sharing regulated by BCB Phase 1–4.",
    sk7_t: "Embedded Finance &amp; BaaS",
    sk7_d: "Banking-as-a-Service platforms, white-label financial products, embedded credit and account-to-account flows for non-financial companies.",
    sk6_t: "Product Leadership &amp; AI",
    sk6_d: "Cross-functional leadership, AI applied to product discovery, roadmap &amp; prioritization frameworks.",

    sec_proj:  "05 / projects",
    proj_h:    "Selected Work",
    pj1_cat:   "Open Finance · BaaS · Embedded Finance",
    pj1_name:  "Open Finance Platform",
    pj1_d:     "End-to-end Open Finance platform enabling data sharing, credit portability and embedded financial services. Integrated with BCB's Open Banking APIs — connecting 10+ institutions and enabling R$1B+ in credit decisions powered by consented data.",
    pj2_cat:   "BCB Agenda · PIX Automático",
    pj2_d:     "Product strategy and implementation roadmap for scheduled/recurring PIX. Migrating subscription billing and utility payments from legacy direct debit to instant payment rails.",
    pj3_cat:   "CBDC · Blockchain · DLT",
    pj3_d:     "Building the product and technical architecture for DREX (Brazilian CBDC) settlement. Programmable money flows, DvP (delivery vs payment) and smart contract integrations.",
    pj4_cat:   "Infrastructure · Multi-Acquirer",
    pj4_d:     "Scalable multi-acquirer payment processing with real-time settlement, automated reconciliation and chargeback management. Processing R$2B+ annually.",
    pj5_cat:   "Analytics · Data Product",
    pj5_d:     "Real-time analytics platform consolidating transaction volumes, authorization rates, churn, LTV, and revenue KPIs. Built with SQL + Python pipelines feeding executive dashboards. Reduced reporting time by 80%.",
    live:     "Live",
    inprog:   "In Progress",
    internal: "Internal",

    sec_contact: "06 / contact",
    ct_h:   "Open to new<br/><em>opportunities.</em>",
    ct_sub: "Whether you're a recruiter, founder, or payment innovator — let's connect and build the future of finance together.",
    wa_cta:       "Contact me on WhatsApp",
    wa_hint:      "Click to open conversation",
    wa_cta_short: "Chat on WhatsApp",
    wa_float_tip: "Talk to a recruiter",
    ft_role: "Head of Product · Payments · Brazil"
  },

  pt: {
    nav_about:    "Sobre",
    nav_exp:      "Experiência",
    nav_market:   "Mercado",
    nav_skills:   "Skills",
    nav_projects: "Projetos",
    nav_contact:  "Contato",

    hero_tag:  '"Head de Produto · Pagamentos"',
    hero_desc: "Construindo o futuro dos pagamentos com PIX, arranjos de cartão,<br class='br-desk'/> blockchain &amp; tokenização — orientado a dados, estratégia primeiro.",
    hero_cta1: "Ver Meu Trabalho",
    hero_wa:   "Falar no WhatsApp",
    chip1: "PIX &amp; Pagamentos Instantâneos",
    chip2: "Arranjos de Cartão",
    chip3: "Blockchain &amp; Tokenização",
    chip4: "Open Finance",
    chip5: "Estratégia de Dados",
    scroll_hint: "rolar",

    sec_about: "01 / sobre",
    about_h:   "Da estratégia<br/>à <em>execução.</em>",
    about_loc: "Brasil",
    about_p1:  "Head de Produto com 7+ anos especializados em infraestrutura de pagamentos, arranjos PIX, arranjos de cartão e tecnologias emergentes como blockchain e tokenização. Estrategista orientado a dados que transforma complexidade regulatória em produtos competitivos.",
    about_p2:  "Pós-graduado em Finanças, Gestão de Produtos e Engenharia de Software. Expertise profunda na agenda regulatória do BCB — do PIX Automático ao DREX — aliada a metodologias ágeis e IA aplicada à tomada de decisão em produtos.",
    stat1: "Anos em Fintech",
    stat2: "Pagamentos Processados",
    stat3: "Produtos Lançados",

    sec_exp: "02 / experiência",
    exp_h:   "Trajetória Profissional",
    present: "Atual",
    badge_now: "Atual",
    exp1: "Parceiro estratégico do CEO, liderando a visão de produto para soluções de banking e pagamentos. Conduzindo arranjos PIX, programas de emissão de cartão e o roadmap de tokenização alinhado às diretrizes do BCB.",
    exp2: "Arquitetou suite de produtos financeiros incluindo integrações com bureau de crédito, ciclos de pagamento e modelos de risco orientados a dados. Liderou squad de 12 pessoas em produto, tecnologia e dados.",
    exp3: "Responsável pelo roadmap de produtos de pagamento digital em escala. Entregou onboarding PIX, ciclos de iteração de produtos de cartão e funcionalidades de prevenção a fraude em tempo real.",

    sec_market:  "03 / inteligência de mercado",
    market_h:    "Mercado Brasileiro de Pagamentos",
    market_sub:  "Indicadores-chave que moldam o cenário competitivo que navego todos os dias.",
    mc1_l: "Transações PIX/Dia",
    mc1_t: "+34% YoY",
    mc2_l: "Transações com Cartão (BR)",
    mc2_t: "+18% YoY",
    mc3_l: "Usuários Open Finance",
    mc3_t: "+60% YoY",
    mc4_l: "Participantes Piloto DREX",
    mc4_t: "Fase Piloto",
    mc5_l: "Fintechs Licenciadas (BCB)",
    mc5_t: "+12% YoY",
    mc6_l: "Forecast Ativos Tokenizados",
    mc6_t: "até 2030 (BCG)",
    mc_src: "Fonte: BCB 2024",
    bcb_title: "Agenda Regulatória BCB · 2024–2026",
    bcb1: "Arranjo de pagamento instantâneo. 180M+ transações por dia.",
    bcb2: "PIX recorrente e agendado. Substituição do débito automático (TED/DOC).",
    bcb3: "Moeda digital brasileira. Dinheiro programável &amp; liquidação DvP.",
    bcb4: "Câmbio via DLT. Modernização da liquidação cross-border.",
    bcb5_t: "Camada de Tokenização",
    bcb5: "Tokenização de ativos em infraestrutura regulada. Imóveis, agro &amp; renda fixa.",

    sec_skills: "04 / habilidades",
    skills_h:   "Especialidades",
    sk1_t: "Infraestrutura de Pagamentos",
    sk1_d: "PIX, TED, adquirência e emissão de cartão, liquidação, conciliação. Arquitetura completa de pagamentos.",
    sk2_t: "Arranjos de Cartão",
    sk2_d: "Visa, Mastercard, Elo. Programas de emissão, chargeback, tokenização (MDES/VTS).",
    sk3_t: "Blockchain &amp; Tokenização",
    sk3_d: "DLT para ativos financeiros, tokenização de ativos, contratos inteligentes e infraestrutura de dinheiro programável.",
    sk4_t: "Estratégia Orientada a Dados",
    sk4_d: "OKRs, métricas North Star, analytics com SQL &amp; Python, experimentação de produto em escala.",
    sk5_t: "Open Finance &amp; APIs",
    sk5_d: "Arquitetura Open Banking, gestão de consentimento, portabilidade de crédito e compartilhamento de dados regulado pelo BCB Fases 1–4.",
    sk7_t: "Embedded Finance &amp; BaaS",
    sk7_d: "Plataformas Banking-as-a-Service, produtos financeiros white-label, crédito embarcado e fluxos account-to-account para empresas não financeiras.",
    sk6_t: "Liderança de Produto &amp; IA",
    sk6_d: "Liderança multifuncional, IA aplicada à descoberta de produto, roadmap &amp; frameworks de priorização.",

    sec_proj:  "05 / projetos",
    proj_h:    "Trabalhos Selecionados",
    pj1_cat:   "Open Finance · BaaS · Embedded Finance",
    pj1_name:  "Plataforma Open Finance",
    pj1_d:     "Plataforma Open Finance completa habilitando compartilhamento de dados, portabilidade de crédito e serviços financeiros embarcados. Integrada às APIs Open Banking do BCB — conectando 10+ instituições e viabilizando R$1bi+ em decisões de crédito com dados consentidos.",
    pj2_cat:   "Agenda BCB · PIX Automático",
    pj2_d:     "Estratégia de produto e roadmap de implementação para PIX recorrente/agendado. Migração de assinaturas e pagamentos de utilidade do débito automático legado para trilhos de pagamento instantâneo.",
    pj3_cat:   "CBDC · Blockchain · DLT",
    pj3_d:     "Construção da arquitetura de produto e técnica para liquidação DREX (CBDC brasileiro). Fluxos de dinheiro programável, DvP (entrega versus pagamento) e integrações com contratos inteligentes.",
    pj4_cat:   "Infraestrutura · Multi-Adquirente",
    pj4_d:     "Processamento de pagamentos multi-adquirente escalável com liquidação em tempo real, conciliação automatizada e gestão de chargebacks. Processando R$2bi+ ao ano.",
    pj5_cat:   "Analytics · Produto de Dados",
    pj5_d:     "Plataforma de analytics em tempo real consolidando volumes de transação, taxas de autorização, churn, LTV e KPIs de receita. Pipelines SQL + Python alimentando dashboards executivos. Reduziu tempo de relatórios em 80%.",
    live:     "Ativo",
    inprog:   "Em Andamento",
    internal: "Interno",

    sec_contact: "06 / contato",
    ct_h:   "Aberto a novas<br/><em>oportunidades.</em>",
    ct_sub: "Seja você recrutador, fundador ou inovador em pagamentos — vamos conectar e construir o futuro das finanças juntos.",
    wa_cta:       "Fale comigo no WhatsApp",
    wa_hint:      "Clique para abrir a conversa",
    wa_cta_short: "Falar no WhatsApp",
    wa_float_tip: "Falar com recrutador",
    ft_role: "Head de Produto · Pagamentos · Brasil"
  }
};

/* ── State ────────────────────────────────────────────────────── */
let lang = localStorage.getItem("akilla-lang") || "en";

function applyLang(l) {
  const t = T[l];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (t[k] !== undefined) el.innerHTML = t[k];
  });
  document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
  document.getElementById("langPT").classList.toggle("active", l === "pt");
  document.getElementById("langEN").classList.toggle("active", l === "en");
  updateWaLinks(l);
}

function buildWaUrl(l) {
  return WA_BASE + "?text=" + encodeURIComponent(WA_MESSAGES[l]);
}
function updateWaLinks(l) {
  document.querySelectorAll("[data-wa]").forEach(el => { el.href = buildWaUrl(l); });
  const f = document.getElementById("waFloat");
  if (f) f.href = buildWaUrl(l);
}

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "pt" : "en";
  localStorage.setItem("akilla-lang", lang);
  applyLang(lang);
});

/* ── Mobile menu ─────────────────────────────────────────────── */
const ham    = document.getElementById("hamburger");
const mobNav = document.getElementById("mobileNav");
ham.addEventListener("click", () => {
  const open = mobNav.classList.toggle("open");
  ham.classList.toggle("open", open);
  ham.setAttribute("aria-expanded", open);
  mobNav.setAttribute("aria-hidden", !open);
});
mobNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobNav.classList.remove("open");
    ham.classList.remove("open");
    ham.setAttribute("aria-expanded", "false");
  });
});

/* ── Cursor glow ─────────────────────────────────────────────── */
const glow = document.getElementById("cursorGlow");
if (window.innerWidth > 1024) {
  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top  = e.clientY + "px";
  });
}

/* ── Header scroll ───────────────────────────────────────────── */
window.addEventListener("scroll", () => {
  document.getElementById("header").style.background =
    window.scrollY > 60 ? "rgba(8,10,15,0.97)" : "rgba(8,10,15,0.82)";
}, { passive: true });

/* ── Scroll reveal ───────────────────────────────────────────── */
function initReveal() {
  const targets = document.querySelectorAll(
    ".ei-card, .sk-card, .pj-card, .metric-card, .bcb-item, " +
    ".about-headline, .about-content, " +
    ".ct-left, .ct-right, .s-label, .s-title, .market-sub"
  );
  targets.forEach(el => el.classList.add("fade-in"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(el => io.observe(el));
}

/* ── Active nav ──────────────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links    = document.querySelectorAll(".nav-links a, .mobile-nav a:not(.mob-wa)");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => {
          a.style.color = a.getAttribute("href") === "#" + e.target.id ? "var(--au)" : "";
        });
      }
    });
  }, { rootMargin: "-35% 0px -60% 0px" });
  sections.forEach(s => io.observe(s));
}

/* ── Smooth scroll ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" });
  });
});

/* ── WA float: show after scroll ────────────────────────────── */
const waFloat = document.getElementById("waFloat");
waFloat.style.opacity = "0";
waFloat.style.transition = "opacity 0.4s, transform 0.28s, box-shadow 0.28s";
window.addEventListener("scroll", () => {
  waFloat.style.opacity = window.scrollY > 300 ? "1" : "0";
  waFloat.style.pointerEvents = window.scrollY > 300 ? "auto" : "none";
}, { passive: true });

/* ── Animate metric bars on scroll ──────────────────────────── */
function initMetricBars() {
  const bars = document.querySelectorAll(".mc-fill");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = "running";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => {
    b.style.animationPlayState = "paused";
    io.observe(b);
  });
}

/* ── Counter animation for stats ────────────────────────────── */
function animateCounters() {
  document.querySelectorAll(".stat-n").forEach(el => {
    const text = el.textContent.trim();
    const match = text.match(/^([\d,.]+)/);
    if (!match) return;
    const target = parseFloat(match[1].replace(/[,.]/g, ''));
    if (isNaN(target) || target > 999) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);
      el.innerHTML = el.innerHTML.replace(/^\d+/, current);
      if (progress < 1) requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el.closest(".stat") || el);
  });
}

/* ── Init ─────────────────────────────────────────────────────── */
(function init() {
  applyLang(lang);
  initReveal();
  initActiveNav();
  initMetricBars();
  animateCounters();
})();
