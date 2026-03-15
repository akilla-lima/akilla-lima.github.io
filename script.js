/* ================================================================
   AKILLA NATHAN — Portfolio v2 · script.js
   Features: i18n, WhatsApp bilingual links, cursor glow,
             scroll reveal, active nav, mobile menu, smooth scroll
   ================================================================ */

/* ── WhatsApp messages (bilingual) ───────────────────────────── */
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
    nav_skills:   "Skills",
    nav_projects: "Projects",
    nav_contact:  "Contact",

    hero_tag:   '"Group Product Manager"',
    hero_desc:  "Building scalable financial products at the intersection of technology, strategy &amp; data.",
    hero_cta1:  "Explore My Work",
    hero_wa:    "Talk on WhatsApp",

    chip1: "Payments Infrastructure",
    chip2: "Banking APIs",
    chip3: "Product Strategy",
    chip4: "Fintech Platforms",
    chip5: "AI &amp; Data",
    scroll_hint: "scroll",

    sec_about: "01 / about",
    about_h:   "From strategy<br/>to <em>execution.</em>",
    about_loc: "Brazil",
    about_p1:  "Product Manager with extensive experience in team leadership and delivering strategic solutions, particularly in the Financial and Big Data sectors. Passionate about technology and innovation, with a focus on building scalable and customer-centric products.",
    about_p2:  "Postgraduate in Finance, Product Management, and Software Engineering with strong experience in agile methodologies and Artificial Intelligence applied to product and project management.",
    stat1: "Years Fintech",
    stat2: "Companies",
    stat3: "Products",

    sec_exp: "02 / experience",
    exp_h:   "Career Path",
    present: "Present",
    badge_now: "Now",
    exp1: "Responsible for the strategy, development, and scaling of financial and payment products. Acting as a strategic partner to the CEO, leading product roadmap decisions for banking and payment solutions.",
    exp2: "Led financial product architecture, including credit bureau systems, payment cycles, and strategic financial solutions for the B2B segment.",
    exp3: "Worked on banking product strategy, payments infrastructure, roadmap planning, and cross-functional collaboration with security, CX, and engineering teams.",

    sec_skills: "03 / skills",
    skills_h:   "Expertise",
    sk1_t: "Payments Infrastructure",
    sk1_d: "End-to-end payment processing, acquiring, issuing, settlement &amp; reconciliation systems.",
    sk2_t: "Fintech Platforms",
    sk2_d: "Digital banking, credit, lending, and embedded finance products.",
    sk3_t: "Financial APIs",
    sk3_d: "PIX, Open Banking, BaaS integrations and open finance architecture.",
    sk4_t: "Product Strategy",
    sk4_d: "OKRs, discovery, roadmaps, business model design &amp; executive alignment.",
    sk5_t: "Agile Methodologies",
    sk5_d: "Scrum, Kanban, Shape Up, dual-track. Leading cross-functional teams at scale.",
    sk6_t: "AI &amp; Data Analytics",
    sk6_d: "AI applied to product management. SQL &amp; Python for data-driven decisions.",

    sec_proj:  "04 / projects",
    proj_h:    "Selected Work",
    pj1_cat:   "Wallet · Payments · PIX",
    pj1_d:     "End-to-end digital wallet with PIX, P2P transfers, and card issuance. Zero-to-production in under 6 months for thousands of Brazilian users.",
    pj2_cat:   "Infrastructure · APIs",
    pj2_d:     "Scalable payment processing layer with multi-acquirer support, real-time settlement, and automated reconciliation.",
    pj3_cat:   "Analytics · BI",
    pj3_d:     "Real-time financial analytics platform monitoring transaction volumes, churn, and revenue KPIs for product &amp; business teams.",
    live:     "Live",
    internal: "Internal",

    sec_contact: "05 / contact",
    ct_h:   "Open to new<br/><em>opportunities.</em>",
    ct_sub: "Whether you're a recruiter, founder, or product leader — let's connect and explore what we can build together.",
    wa_cta:       "Contact me on WhatsApp",
    wa_hint:      "Click to open conversation",
    wa_cta_short: "Chat on WhatsApp",
    wa_float_tip: "Talk to a recruiter",

    ft_role: "Group Product Manager · Brazil"
  },

  pt: {
    nav_about:    "Sobre",
    nav_exp:      "Experiência",
    nav_skills:   "Skills",
    nav_projects: "Projetos",
    nav_contact:  "Contato",

    hero_tag:   '"Group Product Manager"',
    hero_desc:  "Construindo produtos financeiros escaláveis na interseção entre tecnologia, estratégia &amp; dados.",
    hero_cta1:  "Ver Meu Trabalho",
    hero_wa:    "Falar no WhatsApp",

    chip1: "Infraestrutura de Pagamentos",
    chip2: "APIs Bancárias",
    chip3: "Estratégia de Produto",
    chip4: "Plataformas Fintech",
    chip5: "IA &amp; Dados",
    scroll_hint: "rolar",

    sec_about: "01 / sobre",
    about_h:   "Da estratégia<br/>à <em>execução.</em>",
    about_loc: "Brasil",
    about_p1:  "Product Manager com ampla experiência em liderança de equipes e entrega de soluções estratégicas, sobretudo nos setores Financeiro e Big Data. Apaixonado por tecnologia e inovação, com foco na criação de produtos escaláveis e centrados no cliente.",
    about_p2:  "Pós-graduado em Finanças, Gestão de Produtos e Engenharia de Software com experiência sólida em metodologias ágeis e Inteligência Artificial aplicadas à gestão de produtos e projetos.",
    stat1: "Anos em Fintech",
    stat2: "Empresas",
    stat3: "Produtos",

    sec_exp: "02 / experiência",
    exp_h:   "Trajetória Profissional",
    present: "Atual",
    badge_now: "Atual",
    exp1: "Responsável pela estratégia, desenvolvimento e escala de produtos financeiros e de pagamento. Atuando como parceiro estratégico do CEO e liderando decisões de roadmap para soluções de banking e pagamentos.",
    exp2: "Liderou a arquitetura de produtos financeiros, incluindo sistemas de bureau de crédito, ciclos de pagamento e soluções estratégicas para o segmento B2B.",
    exp3: "Atuou na estratégia de produtos bancários, infraestrutura de pagamentos, planejamento de roadmap e colaboração interfuncional com equipes de segurança, CX e engenharia.",

    sec_skills: "03 / habilidades",
    skills_h:   "Especialidades",
    sk1_t: "Infraestrutura de Pagamentos",
    sk1_d: "Processamento de pagamentos ponta a ponta, adquirência, emissão, liquidação &amp; conciliação.",
    sk2_t: "Plataformas Fintech",
    sk2_d: "Banking digital, crédito, empréstimos e produtos de embedded finance.",
    sk3_t: "APIs Financeiras",
    sk3_d: "PIX, Open Banking, integrações BaaS e arquitetura de open finance.",
    sk4_t: "Estratégia de Produto",
    sk4_d: "OKRs, discovery, roadmaps, design de modelo de negócio &amp; alinhamento executivo.",
    sk5_t: "Metodologias Ágeis",
    sk5_d: "Scrum, Kanban, Shape Up, dual-track. Liderando equipes multifuncionais em escala.",
    sk6_t: "IA &amp; Analytics de Dados",
    sk6_d: "IA aplicada à gestão de produtos. SQL &amp; Python para decisões orientadas por dados.",

    sec_proj:  "04 / projetos",
    proj_h:    "Trabalhos Selecionados",
    pj1_cat:   "Carteira · Pagamentos · PIX",
    pj1_d:     "Carteira digital completa com PIX, transferências P2P e emissão de cartão. Do zero à produção em menos de 6 meses para milhares de usuários no Brasil.",
    pj2_cat:   "Infraestrutura · APIs",
    pj2_d:     "Camada de processamento de pagamentos escalável com múltiplos adquirentes, liquidação em tempo real e conciliação automatizada.",
    pj3_cat:   "Analytics · BI",
    pj3_d:     "Plataforma de analytics financeiro em tempo real para monitoramento de volumes de transação, churn e KPIs de receita.",
    live:     "Ativo",
    internal: "Interno",

    sec_contact: "05 / contato",
    ct_h:   "Aberto a novas<br/><em>oportunidades.</em>",
    ct_sub: "Seja você recrutador, fundador ou líder de produto — vamos conversar e descobrir o que podemos construir juntos.",
    wa_cta:       "Fale comigo no WhatsApp",
    wa_hint:      "Clique para abrir a conversa",
    wa_cta_short: "Falar no WhatsApp",
    wa_float_tip: "Falar com recrutador",

    ft_role: "Group Product Manager · Brasil"
  }
};

/* ── State ────────────────────────────────────────────────────── */
let lang = localStorage.getItem("akilla-lang") || "en";

/* ── Apply translations ──────────────────────────────────────── */
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

/* ── WhatsApp link updater ───────────────────────────────────── */
function buildWaUrl(l) {
  return WA_BASE + "?text=" + encodeURIComponent(WA_MESSAGES[l]);
}
function updateWaLinks(l) {
  document.querySelectorAll("[data-wa]").forEach(el => {
    el.href = buildWaUrl(l);
  });
  const floatBtn = document.getElementById("waFloat");
  if (floatBtn) floatBtn.href = buildWaUrl(l);
}

/* ── Language toggle ─────────────────────────────────────────── */
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "pt" : "en";
  localStorage.setItem("akilla-lang", lang);
  applyLang(lang);
});

/* ── Mobile menu ─────────────────────────────────────────────── */
const ham   = document.getElementById("hamburger");
const mobNav= document.getElementById("mobileNav");

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
let glowEnabled = window.innerWidth > 1024;
if (glowEnabled) {
  document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top  = e.clientY + "px";
  });
}

/* ── Header scroll ───────────────────────────────────────────── */
window.addEventListener("scroll", () => {
  document.getElementById("header").style.background =
    window.scrollY > 60
      ? "rgba(8,10,15,0.97)"
      : "rgba(8,10,15,0.82)";
}, { passive: true });

/* ── Scroll reveal ───────────────────────────────────────────── */
function initReveal() {
  const targets = document.querySelectorAll(
    ".ei-card, .sk-card, .pj-card, " +
    ".about-headline, .about-content, " +
    ".ct-left, .ct-right, " +
    ".s-label, .s-title"
  );
  targets.forEach(el => el.classList.add("fade-in"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  targets.forEach(el => io.observe(el));
}

/* ── Active nav link ─────────────────────────────────────────── */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links    = document.querySelectorAll(".nav-links a, .mobile-nav a:not(.mob-wa)");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => {
          const active = a.getAttribute("href") === "#" + e.target.id;
          a.style.color = active ? "var(--au)" : "";
        });
      }
    });
  }, { rootMargin: "-35% 0px -60% 0px" });
  sections.forEach(s => io.observe(s));
}

/* ── Smooth scroll with nav offset ──────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

/* ── WhatsApp float: show after scroll ───────────────────────── */
const waFloat = document.getElementById("waFloat");
window.addEventListener("scroll", () => {
  waFloat.style.opacity = window.scrollY > 300 ? "1" : "0";
  waFloat.style.pointerEvents = window.scrollY > 300 ? "auto" : "none";
}, { passive: true });
waFloat.style.opacity = "0";
waFloat.style.transition = "opacity 0.4s, transform 0.28s, box-shadow 0.28s";

/* ── Init ─────────────────────────────────────────────────────── */
(function init() {
  applyLang(lang);
  initReveal();
  initActiveNav();
})();
