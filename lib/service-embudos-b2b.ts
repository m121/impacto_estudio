import type { EmbudosB2bLandingData } from "@/lib/types"

import { ILLUSTRATIONS, SITE_NAME } from "@/lib/constants"

export const EMBUDOS_B2B_SERVICE_PATH = "/servicios/embudos-b2b" as const

export const embudosB2bLandingData: EmbudosB2bLandingData = {
  path: EMBUDOS_B2B_SERVICE_PATH,
  metadataTitle:
    "Embudos de captación B2B · Adquisición predecible y reuniones cualificadas | Impacto Estudio",
  metadataDescription:
    "Sistemas de embudo B2B: captación por intención, cualificación con scoring, nutrición omnicanal e integración CRM (HubSpot, Pipedrive). Landing Next.js y dashboards de ROI.",
  metadataKeywords: [
    "embudo B2B",
    "funnel ventas empresa",
    "captación leads cualificados",
    "HubSpot Pipedrive",
    "intent data B2B",
    "lead scoring",
    "nutrición leads",
    "SDR automatización proceso comercial España",
    "impacto Estudio embudos",
  ],
  ogTitle: `Embudos de captación B2B · ${SITE_NAME}`,
  hero: {
    h1:
      "Sistemas de Adquisición B2B: De visitantes anónimos a reuniones cualificadas.",
    h2:
      "Diseñamos e implementamos embudos de ventas que filtran a los curiosos y agendan llamadas automáticas con los tomadores de decisión de tu sector.",
    primaryCtaLabel: "Auditar mi proceso de ventas",
    primaryCtaHref: "#cualificar",
    image: {
      src: ILLUSTRATIONS.orderStatus,
      alt:
        "Ilustración de embudo B2B con etapas de captación, cualificación y reuniones comerciales",
      width: 800,
      height: 600,
    },
  },
  problem: {
    title: "¿Dependes del boca a boca o del networking tradicional?",
    body:
      "Si tu facturación depende de referidos, no tienes un negocio, tienes una ruleta rusa. Los ciclos de venta largos, el seguimiento manual y los leads que \"se lo tienen que pensar\" están hundiendo tus márgenes.",
  },
  features: [
    {
      title: "Captación por Intención (Intent Data)",
      description:
        "Impactamos a tu cliente ideal justo cuando está buscando soluciones, no cuando está distraído.",
    },
    {
      title: "Cualificación Feroz",
      description:
        "Formularios dinámicos y scoring de leads. Si no tienen el presupuesto, no llegan a tu calendario.",
    },
    {
      title: "Nutrición Automatizada",
      description:
        "Secuencias omnicanal que educan al prospecto para que llegue a la reunión vendido, no a pedir información.",
    },
  ],
  deliverablesBento: [
    {
      title: "Páginas de aterrizaje de ultra-conversión (Next.js).",
      description:
        "Landings rápidas, medibles y alineadas al mensaje por campaña o segmento ICP.",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Integración nativa con tu CRM (HubSpot, Pipedrive).",
      description:
        "Sincronización de contactos, etapas y actividades sin doble trabajo en ventas.",
      className: "md:col-span-1",
    },
    {
      title: "Dashboards de atribución de ROI en tiempo real.",
      description:
        "De la primera visita al SQL: visibilidad para decidir presupuesto con datos, no con intuición.",
      className: "md:col-span-3",
    },
  ],
  proof: {
    title: "Prueba operativa: cómo validamos el sistema en 60–90 días",
    items: [
      "Línea base de CPL y tasa visita → reunión antes de tocar tráfico.",
      "Umbral documentado de ICP y handoff revisado junto a comercial.",
      "Cadencia quincenal de optimización con experimentos sobre mensaje y formulario.",
    ],
  },
  faqSectionEyebrow: "FAQ · GEO",
  faqSectionTitle: "Preguntas frecuentes sobre embudos B2B",
  faqSectionSubtitle:
    "Respuestas estructuradas para buscadores y asistentes (schema FAQPage).",
  faqItems: [
    {
      question: "¿Cuánto tarda en generar ROI un embudo B2B?",
      answer:
        "Generalmente entre 60 y 90 días mientras el algoritmo aprende y optimizamos el Coste por Lead.",
    },
    {
      question: "¿Necesito cambiar mi web actual?",
      answer:
        "No necesariamente. Podemos construir el embudo en un subdominio o directorio paralelo a tu web corporativa.",
    },
  ],
  schema: {
    name: "Embudos de captación y adquisición B2B",
    description:
      "Diseño e implementación de embudos de ventas B2B con captación por intención, cualificación (formularios dinámicos y scoring), nutrición omnicanal, landings Next.js, integración CRM y dashboards de atribución ROI.",
    serviceType:
      "Consultoría e implementación de embudos de ventas y sistemas de adquisición B2B",
  },
  bottomLead: {
    title: "Auditoría de tu proceso de ventas",
    description:
      "Describe tu ICP, CRM y volumen de leads: respondemos con alcance, enfoque del embudo y siguiente paso si hay encaje.",
  },
  stickyCtaLabel: "Auditar mi proceso de ventas",
}
