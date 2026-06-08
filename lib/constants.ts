export const SITE_NAME = "Impacto Estudio"

/** Colores de marca Impacto Estudio */
export const BRAND_PINK = "#F84677"
export const BRAND_CYAN = "#00C1D5"

/** Offset para anchor links con navbar sticky (`scroll-padding-top`). */
export const SCROLL_PADDING_TOP = "5.5rem"

/** Ilustraciones unDraw en `public/images/illustrations/`. */
export const ILLUSTRATIONS = {
  aiAnswers: "/images/illustrations/undraw_ai-answers_uxgx.png",
  approve: "/images/illustrations/undraw_approve_4ahx.png",
  booking: "/images/illustrations/undraw_booking_8vl5.png",
  color: "/images/illustrations/color.png",
  controlPanel: "/images/illustrations/undraw_control-panel_s0j2.png",
  designTools: "/images/illustrations/undraw_design-tools_wgpz.png",
  designer: "/images/illustrations/undraw_designer_efwz.png",
  financeGuy: "/images/illustrations/undraw_finance-guy-avatar_vhop.png",
  goingDown: "/images/illustrations/undraw_going-downwards_wb62.png",
  llm: "/images/illustrations/undraw_large-language-models_m4no.png",
  onlineStats: "/images/illustrations/undraw_online-stats_d57c.png",
  orderStatus: "/images/illustrations/undraw_order-status_swsl.png",
  reviewingDesign: "/images/illustrations/undraw_reviewing-design_payz.png",
  reviews: "/images/illustrations/undraw_reviews_bmgj.png",
  socialMedia: "/images/illustrations/undraw_social-media-profile_hjh9.png",
  webDeveloper: "/images/illustrations/undraw_web-developer_gxaa.png",
  webDevelopment: "/images/illustrations/undraw_web-development_f0tp.png",
  websiteVisitors: "/images/illustrations/undraw_website-visitors_qy9c.png",
} as const

export const SITE_DESCRIPTION =
  "Agencia B2B en España: vende más con embudos medibles, automatización comercial con IA y presencia digital que renueva tu marca y convierte tráfico en oportunidades."

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.impactoestudio.online"

/** Logo de marca en Navbar / JSON-LD Organization. En `public/images/logo.png`. */
export const SITE_LOGO_PATH = "/images/logo.png"

/** Favicon de marca — `public/images/favi.png`, servido vía `src/app/icon.png`. */
export const SITE_FAVICON_PATH = "/icon.png"

/** Imagen Open Graph por defecto (URL absoluta para crawlers). */
export const DEFAULT_OG_IMAGE =
  process.env.NEXT_PUBLIC_OG_IMAGE_URL ??
  "/images/public.png"

export const OG_IMAGE_ALT =
  "Impacto Estudio — agencia B2B de crecimiento comercial, embudos, IA y presencia digital en España"

/** Hero above-the-fold (sustituir por `/images/hero-bg.jpg` en public cuando exista el asset). */
export const HERO_MAIN_IMAGE = {
  src:
    process.env.NEXT_PUBLIC_HERO_IMAGE_SRC ??
    ILLUSTRATIONS.onlineStats,
  alt: "Ilustración de estadísticas online y métricas de crecimiento comercial B2B",
  width: 800,
  height: 600,
} as const

export const HERO_PILLS = [
  "Embudos B2B",
  "IA multicanal",
  "Presencia digital",
] as const

export const TRUST_LOGOS = [
  {
    src: "/images/nextjs-logo.svg",
    alt: "Logo Next.js — framework frontend para aplicaciones web corporativas de alto rendimiento",
    width: 197,
    height: 40,
  },
  {
    src: "/images/openai-logo.svg",
    alt: "Logo OpenAI — modelos de lenguaje para automatización comercial y asistentes B2B",
    width: 148,
    height: 40,
  },
  {
    src: "/images/brevo-logo.svg",
    alt: "Logo Brevo CRM — email marketing, automatización y CRM para nurturing de leads B2B",
    width: 137,
    height: 40,
  },
  {
    src: "/images/kommo-logo.png",
    alt: "Logo Kommo CRM — gestión comercial, pipelines y seguimiento de oportunidades B2B",
    width: 188,
    height: 40,
  },
  {
    src: "/images/vercel-logo.svg",
    alt: "Logo Vercel — despliegue edge y Core Web Vitals para landings B2B",
    width: 175,
    height: 40,
  },
] as const

export const HOME_PROBLEM_IMAGE = {
  src: ILLUSTRATIONS.goingDown,
  alt: "Ilustración de métricas de captación B2B en descenso sin tendencia de oportunidades cualificadas",
  width: 800,
  height: 600,
} as const

export const HOME_PROBLEM_SIGNALS = [
  "Embudo difuso sin KPIs por etapa",
  "Presencia digital que no transmite autoridad",
  "Ventas persiguiendo leads sin scoring",
] as const

export const HOME_FEATURE_BLOCKS = [
  {
    title: "Automatización comercial con IA",
    description:
      "Vende por WhatsApp, Instagram, web chat y más con agentes conectados a tu CRM. Cualificación, seguimiento y handoff a ventas cuando hay intención real.",
    imageSrc: ILLUSTRATIONS.aiAnswers,
    imageAlt:
      "Ilustración de asistente con IA respondiendo consultas comerciales en canales digitales",
    wide: true,
    icon: "bot",
    learnMoreHref: "/servicios/automatizacion-ia",
  },
  {
    title: "Embudos B2B medibles",
    description:
      "De visitante anónimo a reunión cualificada: captación por intención, scoring, nurturing y KPIs por etapa del pipeline.",
    imageSrc: ILLUSTRATIONS.websiteVisitors,
    imageAlt:
      "Ilustración de visitantes web convirtiéndose en oportunidades del embudo B2B",
    wide: false,
    icon: "funnel",
    learnMoreHref: "/servicios/embudos-b2b",
  },
  {
    title: "Presencia digital que vende",
    description:
      "Renueva tu marca y tu web con Next.js: autoridad percibida, Core Web Vitals y mensajes alineados a decisores de alto ticket.",
    imageSrc: ILLUSTRATIONS.reviewingDesign,
    imageAlt:
      "Ilustración de revisión de diseño corporativo y marca digital orientada a conversión",
    wide: false,
    icon: "cpu",
    learnMoreHref: "/servicios/presencia-digital",
  },
  {
    title: "Resultados que dirección puede auditar",
    description:
      "SQL, coste por oportunidad, velocidad hasta propuesta y pipeline por canal. Sin vanity metrics: lo que importa al comité comercial.",
    imageSrc: ILLUSTRATIONS.controlPanel,
    imageAlt:
      "Ilustración de panel de control con KPIs comerciales, embudo y rendimiento por canal",
    wide: true,
    icon: "megaphone",
    learnMoreHref: "/servicios/embudos-b2b",
  },
] as const

export const HOME_METHODOLOGY_STEPS = [
  {
    step: 1,
    title: "Auditoría de marca y embudo",
    description:
      "Revisamos presencia digital, canales de captación, CRM y mensajes frente a tu ICP. Salida: mapa de fugas, prioridades y KPIs base.",
    cycleLabel: "Diagnosticar",
  },
  {
    step: 2,
    title: "Diseño e implementación",
    description:
      "Ejecutamos el mix acordado — web, embudo, IA multicanal o combinación — con entregables por sprint, integraciones y QA.",
    cycleLabel: "Ejecutar",
  },
  {
    step: 3,
    title: "Escalamiento y optimización",
    description:
      "Iteramos según datos: A/B en landings, secuencias comerciales, prompts de IA y reporting ejecutivo para dirección.",
    cycleLabel: "Optimizar",
  },
] as const

export const HOME_TESTIMONIALS = [
  {
    quote:
      "Pasamos de formularios muertos a reuniones con perfil financiero en menos de 45 días. El embudo quedó por fin en datos, no en opiniones.",
    name: "Elena Vázquez",
    role: "Directora Comercial · SaaS financiero",
    avatarSrc: "https://placehold.co/96x96/475569/ffffff/png?text=EV",
    avatarAlt:
      "Retrato profesional estilizado de Elena Vázquez, directora comercial testimonio Impacto Estudio",
    roiSrc:
      "https://placehold.co/400x120/f1f5f9/334155/png?text=Antes+vs+Después+SQL",
    roiAlt:
      "Gráfico comparativo antes y después del número de reuniones SQL cualificadas tras proyecto con Impacto Estudio",
  },
  {
    quote:
      "Renovaron nuestra web y conectaron IA en varios canales al CRM. Ventas cierra; el sistema filtra. Pipeline +38% en el primer trimestre.",
    name: "Marc Iglesias",
    role: "CEO · Consultora industrial",
    avatarSrc: "https://placehold.co/96x96/475569/ffffff/png?text=MI",
    avatarAlt:
      "Retrato profesional estilizado de Marc Iglesias, CEO testimonio Impacto Estudio",
    roiSrc:
      "https://placehold.co/400x120/f1f5f9/334155/png?text=Pipeline+%2B38%25",
    roiAlt:
      "Indicador de evolución positiva del pipeline comercial tras proyecto integral de crecimiento B2B",
  },
  {
    quote:
      "Por fin una agencia que habla en MRR y reuniones, no solo en tráfico. La metodología de tres fases fue clara para el consejo.",
    name: "Laura Méndez",
    role: "CMO · Servicios B2B",
    avatarSrc: "https://placehold.co/96x96/475569/ffffff/png?text=LM",
    avatarAlt:
      "Retrato profesional estilizado de Laura Méndez, CMO testimonio marketing high-ticket",
    roiSrc:
      "https://placehold.co/400x120/f1f5f9/334155/png?text=Coste%2Freuni%C3%B3n+-22%25",
    roiAlt:
      "Comparativa de coste por reunión comercial antes y después del rediseño del embudo y presencia digital",
  },
] as const

export const HOME_FAQ_ITEMS = [
  {
    question: "¿Qué servicios ofrece Impacto Estudio?",
    answer:
      "Tres líneas complementarias: automatización comercial con IA (multicanal + CRM), embudos B2B medibles y presencia digital corporativa en Next.js. Muchos clientes combinan web + embudo + IA en un roadmap por fases.",
  },
  {
    question: "¿Trabajáis solo con empresas en España?",
    answer:
      "Nuestro foco operativo es España y Latinoamérica hispanohablante con equipos comerciales locales. Valoramos proyectos internacionales cuando el ICP y el proceso de venta están alineados.",
  },
  {
    question: "¿Qué incluye la auditoría inicial?",
    answer:
      "Revisión de embudo, presencia digital, canales de captación, CRM y mensajes frente a tu cuenta objetivo. Entregamos informe priorizado con impacto estimado y propuesta de siguiente fase.",
  },
  {
    question: "¿Cuánto tarda un proyecto típico?",
    answer:
      "Depende del alcance: un piloto de IA multicanal suele estar en 3–6 semanas; un embudo completo o rebranding web puede ir de 6 a 12 semanas. Siempre empezamos con un alcance acotado y escalamos con datos.",
  },
  {
    question: "¿Cómo medimos el ROI?",
    answer:
      "Definimos KPIs conjuntos según servicios contratados: SQL, coste por oportunidad, tasa de respuesta, velocidad hasta propuesta, conversión por etapa y pipeline atribuido. Reporting ejecutivo, no vanity metrics.",
  },
]

/** Keywords orientativas para la home (GEO + SERP locales). */
export const HOME_METADATA_KEYWORDS = [
  "agencia marketing B2B España",
  "presencia digital B2B",
  "embudos B2B",
  "automatización ventas IA",
  "crecimiento comercial B2B",
  "renovar web corporativa",
  "lead generation empresas",
  "impacto Estudio",
] as const

export const FORMSPREE_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? ""

export function getFormspreeEndpoint(): string | null {
  return FORMSPREE_FORM_ID
    ? `https://formspree.io/f/${FORMSPREE_FORM_ID}`
    : null
}

export const NAV_LINKS = [
  { href: "/servicios/automatizacion-ia", label: "Automatización IA" },
  { href: "/servicios/embudos-b2b", label: "Embudos B2B" },
  { href: "/servicios/presencia-digital", label: "Presencia digital" },
] as const

/** Perfiles y canales oficiales de Impacto Estudio. */
export const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575604136601",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@Impacto.estudio.espa%C3%B1a",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=34613452066&text&type=phone_number&app_absent=0",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/impacto.estudio.es",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/esteban-roa-vergara/",
  },
] as const

/** Opiniones en Google Business (enlace externo). */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Impacto+Estudio+%7C+Marketing+y+Dise%C3%B1o+%7C+Estrategia+opiniones&hl=es"

/** URLs para schema.org `sameAs` (perfiles públicos de marca). */
export const ORGANIZATION_SAME_AS = SOCIAL_LINKS.filter(
  (link) => link.id !== "whatsapp",
).map((link) => link.href)

/** Agente Mastra remoto (`vendedor-agent`) para el chat del sitio. */
export const MASTRA_AGENT_GENERATE_URL =
  process.env.MASTRA_AGENT_GENERATE_URL ??
  "https://whatsapp.server.mastra.cloud/api/agents/vendedor-agent/generate"

export const CHAT_API_PATH = "/api/chat"

export const CHAT_WELCOME_TITLE = "Asistente Impacto Estudio"

export const CHAT_WELCOME_SUBTITLE =
  "¿En qué puedo ayudarte a escalar tus ventas B2B?"

export const CHAT_WELCOME_SUGGESTIONS = [
  {
    title: "Servicios de la agencia",
    description: "Embudos, IA y presencia digital",
    prompt: "¿Qué servicios ofrece Impacto Estudio?",
  },
  {
    title: "Automatización con IA",
    description: "Agentes conectados a tu CRM",
    prompt: "Cuéntame sobre automatización comercial con IA",
  },
  {
    title: "Agendar reunión",
    description: "Hablar con el equipo",
    prompt: "Quiero agendar una reunión para conocer más",
  },
  {
    title: "Presencia digital",
    description: "Web y landings que convierten",
    prompt: "¿Cómo mejoran la presencia digital de mi empresa?",
  },
] as const satisfies readonly import("@/lib/types").ChatWelcomeSuggestion[]

export const SERVICE_CARDS = [
  {
    href: "/servicios/automatizacion-ia",
    title: "Automatización comercial con IA",
    description:
      "Vende por WhatsApp, Instagram, web chat y más. IA conectada a tu CRM para cualificar, hacer seguimiento y escalar conversaciones.",
    imageSrc: ILLUSTRATIONS.llm,
    imageAlt:
      "Ilustración de modelos de lenguaje aplicados a automatización comercial multicanal",
    icon: "bot",
    phase: "Captar y cualificar",
  },
  {
    href: "/servicios/embudos-b2b",
    title: "Embudos B2B",
    description:
      "Funnels medibles: captación cualificada, nurturing y reuniones con perfil ideal. KPIs por etapa del pipeline.",
    imageSrc: ILLUSTRATIONS.booking,
    imageAlt:
      "Ilustración de agendamiento de reuniones comerciales cualificadas en embudo B2B",
    icon: "funnel",
    phase: "Convertir con datos",
  },
  {
    href: "/servicios/presencia-digital",
    title: "Presencia digital",
    description:
      "Renueva tu marca y tu web corporativa: autoridad, velocidad y mensajes que convierten tráfico en oportunidades.",
    imageSrc: ILLUSTRATIONS.designTools,
    imageAlt:
      "Ilustración de herramientas de diseño e identidad digital corporativa B2B",
    icon: "megaphone",
    phase: "Consolidar la marca",
  },
] as const

export const OBJECTIVE_OPTIONS = [
  {
    value: "automatizar-ventas",
    label: "Automatizar ventas con IA (multicanal)",
  },
  {
    value: "embudos-b2b",
    label: "Diseñar o escalar embudos B2B",
  },
  {
    value: "presencia-digital",
    label: "Renovar presencia digital / marca",
  },
  { value: "lead-gen", label: "Vender más / captación cualificada" },
  { value: "otro", label: "Otro / varios objetivos" },
] as const

export const BUDGET_OPTIONS = [
  { value: "lt1k", label: "Menos de 1.000 € / mes" },
  { value: "1k-3k", label: "Entre 1.000 € y 3.000 € / mes" },
  { value: "gt3k", label: "Más de 3.000 € / mes" },
] as const
