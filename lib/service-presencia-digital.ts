import type { PresenciaDigitalLandingData } from "@/lib/types"

import { SITE_NAME } from "@/lib/constants"

export const PRESENCIA_DIGITAL_SERVICE_PATH =
  "/servicios/presencia-digital" as const

export const presenciaDigitalLandingData: PresenciaDigitalLandingData = {
  path: PRESENCIA_DIGITAL_SERVICE_PATH,
  metadataTitle:
    "Presencia digital y branding B2B high-ticket · Autoridad y Next.js | Impacto Estudio",
  metadataDescription:
    "Rediseño corporativo, identidad de autoridad, desarrollo UI/UX en Next.js, Core Web Vitals y optimización GEO/SEO para marcas B2B de alto ticket.",
  metadataKeywords: [
    "presencia digital B2B",
    "branding high-ticket",
    "sitio corporativo Next.js",
    "identidad corporativa España",
    "UI UX B2B",
    "GEO SEO empresas",
    "marketing B2B",
    "landing corporativa rendimiento web",
    "impacto Estudio presencia digital",
  ],
  ogTitle: `Presencia digital high-ticket · ${SITE_NAME}`,
  hero: {
    h1:
      "Presencia Digital High-Ticket: Tu marca debe verse tan cara como el servicio que vendes.",
    h2:
      "Creación, consolidación y optimización de marcas corporativas. Eliminamos la fricción de precio proyectando una autoridad indiscutible desde el primer segundo.",
    primaryCtaLabel: "Elevar mi autoridad digital",
    primaryCtaHref: "#cualificar",
    image: {
      src:
        "/images/diseno_marca.png",
      alt:
        "Mockup de manual de marca corporativo y UI kit premium en entorno oscuro",
      width: 1200,
      height: 800,
    },
  },
  problem: {
    title:
      "Tu competencia cierra las ventas porque parecen mejores, aunque no lo sean.",
    body:
      "Una identidad visual obsoleta o una web lenta genera desconfianza inconsciente. Cuando un cliente B2B investiga a tu empresa, si la interfaz parece del 2015, automáticamente asumen que tus soluciones también lo son. El mal diseño te hace competir por precio.",
  },
  solutionRows: [
    {
      title: "Identidad Visual de Autoridad",
      body:
        "Paletas de color, tipografías y sistemas de diseño pensados para transmitir lujo corporativo y fiabilidad.",
      imageSrc:
        "/images/sistema.png",
      imageAlt:
        "Representación de sistema de identidad visual corporativa con tipografía y paleta en fondo oscuro",
      imageSide: "right",
    },
    {
      title: "Desarrollo UI/UX de Alto Rendimiento",
      body:
        "No usamos plantillas lentas. Programamos en Next.js para que tu web cargue instantáneamente y la experiencia de usuario sea premium.",
      imageSrc:
        "/images/ux.png",
      imageAlt:
        "Interfaz web corporativa minimalista que ilustra experiencia de usuario premium",
      imageSide: "left",
    },
    {
      title: "Optimización GEO y SEO",
      body:
        "Una marca bonita no sirve si las Inteligencias Artificiales y Google no entienden qué haces. Estructuramos tu presencia para dominar la búsqueda generativa.",
      imageSrc:
        "/images/seo.png",
      imageAlt:
        "Esquema conceptual de estructura de contenido y datos estructurados para SEO y búsqueda generativa",
      imageSide: "right",
    },
  ],
  deliverablesList: [
    "Manual de Identidad Visual Corporativa.",
    "Desarrollo Web Headless (Frontend ultrarrápido).",
    "Optimización de Core Web Vitals y Schema Markup.",
  ],
  proof: {
    title: "Prueba: señales que las cuentas B2B interpretan al instante",
    items: [
      "Coherencia visual y tipográfica en cada punto de contacto digital.",
      "Rendimiento medible (Core Web Vitals) alineado a expectativas enterprise.",
      "Marcado semántico y datos estructurados legibles para buscadores e IA.",
    ],
  },
  faqSectionEyebrow: "FAQ · GEO",
  faqSectionTitle: "Preguntas frecuentes sobre presencia digital B2B",
  faqSectionSubtitle:
    "Respuestas claras para compradores y para motores generativos (FAQPage).",
  faqItems: [
    {
      question: "¿Por qué el diseño UI/UX afecta a mis ventas B2B?",
      answer:
        "El 75% de los compradores B2B juzgan la credibilidad de una empresa basándose en su diseño web. Una UI pulida reduce la percepción de riesgo al comprar servicios de alto valor.",
    },
    {
      question: "¿Qué diferencia hay entre Branding y Presencia Digital?",
      answer:
        "El branding es cómo te ves y qué transmites; la presencia digital es cómo esa marca opera, convierte y se posiciona tecnológicamente en el mercado.",
    },
  ],
  schema: {
    name: "Presencia digital, branding corporativo y desarrollo web B2B",
    description:
      "Creación y optimización de identidad visual corporativa, desarrollo web en Next.js, experiencia premium, Core Web Vitals y optimización GEO/SEO con schema markup.",
    serviceType:
      "Consultoría de marca corporativa B2B, diseño UI/UX y desarrollo frontend high-performance",
  },
  bottomLead: {
    title: "Elevar tu autoridad digital",
    description:
      "Cuéntanos tu sector y ticket medio: valoramos rebranding o web corporativa Next.js con foco en confianza y posicionamiento generativo.",
  },
  stickyCtaLabel: "Elevar mi autoridad digital",
}
