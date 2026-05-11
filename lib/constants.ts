export const SITE_NAME = "Impacto Estudio"

export const SITE_DESCRIPTION =
  "Agencia española de marketing high-ticket: embudos B2B, automatización de ventas con IA y presencia digital orientada a captación de leads."

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.impactoestudio.online"

/** Logo de marca en Navbar / JSON-LD Organization. En `public/images/logo.png`. */
export const SITE_LOGO_PATH = "/images/logo.png"

/** Favicon e iconos del documento. En `public/favi.png`. */
export const SITE_FAVICON_PATH = "/images/logo.png"

/** Imagen Open Graph por defecto (URL absoluta para crawlers). */
export const DEFAULT_OG_IMAGE =
  process.env.NEXT_PUBLIC_OG_IMAGE_URL ??
  "/images/public.png"

export const OG_IMAGE_ALT =
  "Impacto Estudio — agencia de marketing B2B high-ticket con embudos e IA en España"

/** Hero above-the-fold (sustituir por `/images/hero-bg.jpg` en public cuando exista el asset). */
export const HERO_MAIN_IMAGE = {
  src:
    process.env.NEXT_PUBLIC_HERO_IMAGE_SRC ??
    "/images/dashboard.png",
  alt: "Dashboard de automatización de leads B2B con IA mostrando pipeline comercial, métricas de embudo y estado de oportunidades",
  width: 1200,
  height: 800,
} as const

export const TRUST_LOGOS = [
  {
    src: "https://placehold.co/160x48/0f172a/94a3b8/png?text=Next.js",
    alt: "Logo Next.js — framework frontend para aplicaciones web corporativas de alto rendimiento",
    width: 160,
    height: 48,
  },
  {
    src: "https://placehold.co/160x48/0f172a/94a3b8/png?text=OpenAI",
    alt: "Logo OpenAI — modelos de lenguaje para automatización comercial y asistentes B2B",
    width: 160,
    height: 48,
  },
  {
    src: "https://placehold.co/160x48/0f172a/94a3b8/png?text=HubSpot",
    alt: "Logo HubSpot CRM — integración con embudos de ventas y nurturing de leads",
    width: 160,
    height: 48,
  },
  {
    src: "https://placehold.co/160x48/0f172a/94a3b8/png?text=Vercel",
    alt: "Logo Vercel — despliegue edge y Core Web Vitals para landings B2B",
    width: 160,
    height: 48,
  },
  {
    src: "https://placehold.co/160x48/0f172a/94a3b8/png?text=Stripe",
    alt: "Logo Stripe — pagos y suscripciones en flujos de venta high-ticket",
    width: 160,
    height: 48,
  },
  {
    src: "https://placehold.co/160x48/0f172a/94a3b8/png?text=Make",
    alt: "Logo Make — automatización de workflows entre CRM, email y herramientas de ventas",
    width: 160,
    height: 48,
  },
] as const

export const HOME_PROBLEM_IMAGE = {
  src: "/images/metricas.png",
  alt: "Gráfico ilustrativo de métricas de generación de leads B2B estancadas sin tendencia de crecimiento de oportunidades calificadas",
  width: 960,
  height: 640,
} as const

export const HOME_FEATURE_BLOCKS = [
  {
    title: "Desarrollo Next.js ultrarrápido",
    description:
      "Sitios y landings en App Router con imágenes optimizadas y streaming: mejor LCP, más confianza percibida y más reuniones con decisores.",
    imageSrc:
      "/images/web.jpg",
    imageAlt:
      "Representación de aplicación web corporativa construida con Next.js mostrando métricas de rendimiento y experiencia fluida",
    wide: true,
    icon: "cpu",
    learnMoreHref: "/servicios/presencia-digital",
  },
  {
    title: "Cualificación con IA 24/7",
    description:
      "Asistentes que responden en contexto, filtran intención y alimentan el CRM sin quemar tiempo de ventas en leads fríos.",
    imageSrc:
      "/images/chatbot.png",
    imageAlt:
      "Captura conceptual de interfaz de chatbot de cualificación B2B integrado con datos de contacto y scoring",
    wide: false,
    icon: "bot",
    learnMoreHref: "/servicios/automatizacion-ia",
  },
  {
    title: "Embudos B2B medibles",
    description:
      "Arquitectura de funnel por etapa con KPIs claros: SQL, coste por reunión y velocidad hasta propuesta.",
    imageSrc:
      "/images/embudo.png",
    imageAlt:
      "Diagrama de embudo de ventas B2B con etapas de descubrimiento, cualificación y cierre comercial",
    wide: false,
    icon: "funnel",
    learnMoreHref: "/servicios/embudos-b2b",
  },
  {
    title: "Presencia que vende, no adorna",
    description:
      "Mensajes alineados a ticket medio y ciclo consultivo: autoridad, prueba social y CTAs que invitan al siguiente paso.",
    imageSrc:
      "/images/roi.png",
    imageAlt:
      "Mockup de página corporativa B2B con propuesta de valor clara y llamadas a la acción orientadas a conversión",
    wide: true,
    icon: "megaphone",
    learnMoreHref: "/servicios/presencia-digital",
  },
] as const

export const HOME_METHODOLOGY_STEPS = [
  {
    step: 1,
    title: "Auditoría y diagnóstico",
    description:
      "Analizamos embudo actual, datos del CRM, velocidad web y mensajes frente a tu cuenta objetivo. Salida: mapa de fugas y prioridades.",
  },
  {
    step: 2,
    title: "Diseño y desarrollo",
    description:
      "Implementamos web o landing en Next.js, contenidos y automatizaciones (IA + integraciones) con entregables por sprint y QA.",
  },
  {
    step: 3,
    title: "Escalamiento y optimización",
    description:
      "Iteramos según datos: A/B en páginas clave, prompts y secuencias de seguimiento, reporting ejecutivo para dirección comercial.",
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
      "Gráfico comparativo antes y después del número de reuniones SQL cualificadas tras implementar embudo B2B",
  },
  {
    quote:
      "La IA como filtro inicial nos liberó a ventas para cerrar. La web nueva en Next.js mejoró la confianza desde el primer clic.",
    name: "Marc Iglesias",
    role: "CEO · Consultora industrial",
    avatarSrc: "https://placehold.co/96x96/475569/ffffff/png?text=MI",
    avatarAlt:
      "Retrato profesional estilizado de Marc Iglesias, CEO testimonio automatización comercial",
    roiSrc:
      "https://placehold.co/400x120/f1f5f9/334155/png?text=Pipeline+%2B38%25",
    roiAlt:
      "Indicador de evolución positiva del pipeline comercial tras proyecto de automatización con IA",
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
      "Comparativa de coste por reunión comercial antes y después del rediseño del embudo",
  },
] as const

export const HOME_FAQ_ITEMS = [
  {
    question: "¿Cuánto tarda en implementarse un sistema de IA para cualificación?",
    answer:
      "Un primer flujo en producción suele estar entre 3 y 8 semanas según integraciones (CRM, email, calendario) y volumen de contenidos. Empezamos por un piloto acotado para validar tono y calidad de leads antes de escalar.",
  },
  {
    question: "¿Por qué Next.js para una web o landing B2B?",
    answer:
      "Next.js (App Router) combina renderizado híbrido, imágenes optimizadas con next/image y rutas claras para SEO/GEO. Para compradores B2B, la velocidad percibida y la estabilidad aumentan confianza y reducen abandono en páginas largas.",
  },
  {
    question: "¿Trabajáis solo con empresas en España?",
    answer:
      "Nuestro foco operativo y fiscal es España y Latinoamérica hispanohablante con equipos comerciales locales. Valoramos proyectos internacionales cuando el ICP y el proceso de venta están alineados.",
  },
  {
    question: "¿Qué incluye la auditoría inicial?",
    answer:
      "Revisión del embudo actual, mensajes y activos digitales, velocidad web y puntos de fuga en captación; entregamos un informe priorizado con impacto estimado y un roadmap en tres fases.",
  },
  {
    question: "¿Cómo medimos el ROI de un embudo B2B?",
    answer:
      "Definimos KPIs conjuntos: reuniones cualificadas, tasa de respuesta, coste por SQL y velocidad hasta propuesta. Centralizamos datos en dashboards ejecutivos para tomar decisiones basadas en cohortes, no en vanity metrics.",
  },
]

/** Keywords orientativas para la home (GEO + SERP locales). */
export const HOME_METADATA_KEYWORDS = [
  "ventas B2B",
  "embudos B2B",
  "automatización IA",
  "presencia digital B2B",
  "agencia marketing high-ticket España",
  "lead generation empresas",
  "Next.js B2B",
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
  { href: "/servicios/presencia-digital", label: "Presencia digital" },
  { href: "/servicios/embudos-b2b", label: "Embudos B2B" },
  { href: "/servicios/automatizacion-ia", label: "Automatización IA" },
] as const

export const SERVICE_CARDS = [
  {
    href: "/servicios/presencia-digital",
    title: "Presencia digital",
    description:
      "Marca, web y contenidos corporativos pensados para decisores B2B y confianza de alto valor.",
    imageSrc:
      "/images/marca.png",
    imageAlt:
      "Ilustración de identidad digital corporativa y página web orientada a decisores B2B",
  },
  {
    href: "/servicios/embudos-b2b",
    title: "Embudos B2B",
    description:
      "Funnels medibles: captación cualificada, nurturing y reuniones con perfil ideal.",
    imageSrc:
      "/images/embudo_ventas.png",
    imageAlt:
      "Representación visual de embudo de ventas B2B con etapas de cualificación y conversión",
  },
  {
    href: "/servicios/automatizacion-ia",
    title: "Automatización con IA",
    description:
      "SDR y seguimiento inteligente para escalar conversaciones sin perder el tono humano.",
    imageSrc:
      "/images/crm.png",
    imageAlt:
      "Mockup de automatización comercial con IA integrada en CRM y seguimiento de oportunidades",
  },
] as const

export const OBJECTIVE_OPTIONS = [
  {
    value: "automatizar-ventas",
    label: "Automatizar ventas / SDR con IA",
  },
  {
    value: "embudos-b2b",
    label: "Diseñar o escalar embudos B2B",
  },
  {
    value: "presencia-digital",
    label: "Mejorar presencia digital / marca",
  },
  { value: "lead-gen", label: "Captación de leads cualificados" },
  { value: "otro", label: "Otro / varios objetivos" },
] as const

export const BUDGET_OPTIONS = [
  { value: "lt1k", label: "Menos de 1.000 € / mes" },
  { value: "1k-3k", label: "Entre 1.000 € y 3.000 € / mes" },
  { value: "gt3k", label: "Más de 3.000 € / mes" },
] as const
