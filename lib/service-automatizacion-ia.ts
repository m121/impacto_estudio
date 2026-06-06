import type { ServiceLandingContent } from "@/lib/types"

import { ILLUSTRATIONS, SITE_NAME } from "@/lib/constants"

/** Landing: automatización comercial multicanal con IA + CRM. */
export const AUTOMATIZACION_IA_SERVICE_PATH =
  "/servicios/automatizacion-ia" as const

export const automatizacionIaLandingContent: ServiceLandingContent = {
  path: AUTOMATIZACION_IA_SERVICE_PATH,
  metadataTitle:
    "Automatización comercial con IA multicanal + CRM · Impacto Estudio",
  metadataDescription:
    "Vende por WhatsApp, Instagram, web chat, email y más con IA conectada a tu CRM (Kommo, Brevo, HubSpot…). Cualificación 24/7, handoff a ventas y KPIs de respuesta, SQL y cierre.",
  metadataKeywords: [
    "IA multicanal ventas",
    "automatización comercial IA",
    "WhatsApp Business CRM",
    "Instagram DM ventas B2B",
    "web chat IA CRM",
    "Kommo integración IA",
    "Brevo chatbot ventas",
    "cerrar ventas con IA España",
  ],
  ogTitle: `IA multicanal + CRM para vender más · ${SITE_NAME}`,
  hero: {
    h1: "Vende por WhatsApp, Instagram, web chat y más con IA conectada a tu CRM",
    h2DirectAnswer:
      "Es un agente comercial con IA que opera en los canales donde ya te escriben tus clientes — WhatsApp, Instagram DM, web chat, email u otros — y sincroniza cada interacción con el CRM que elijas (Kommo, Brevo, HubSpot, Pipedrive…). Responde en segundos, cualifica según tu ICP, hace seguimiento automático y alerta a ventas cuando hay intención de compra para que cierres con contexto completo.",
    image: {
      src: ILLUSTRATIONS.aiAnswers,
      alt: "Ilustración de agente comercial con IA respondiendo en WhatsApp, web chat e Instagram sincronizado con CRM",
      width: 800,
      height: 600,
    },
    primaryCtaLabel: "Auditoría multicanal + CRM",
    primaryCtaHref: "#cualificar",
  },
  kpiSection: {
    eyebrow: "KPIs del servicio",
    title: "Métricas de venta por canal, no vanity metrics",
    subtitle:
      "Cada conversación — venga de WhatsApp, Instagram, web o email — queda trazada en tu CRM para medir respuesta, cualificación y cierre.",
    items: [
      {
        value: "< 60 s",
        label: "Tiempo de primera respuesta",
        description:
          "La IA contesta al instante en cualquier canal conectado, antes de que el lead enfríe o elija a la competencia.",
      },
      {
        value: "+40%",
        label: "Tasa de respuesta en conversaciones",
        description:
          "Seguimiento automático con contexto del CRM: más diálogos activos y menos oportunidades abandonadas.",
      },
      {
        value: "24/7",
        label: "Cualificación fuera de horario",
        description:
          "Filtra presupuesto, urgencia y encaje ICP mientras tu equipo comercial descansa o cierra reuniones.",
      },
      {
        value: "100%",
        label: "Trazabilidad en tu CRM",
        description:
          "Cada mensaje, etiqueta y cambio de etapa queda en el CRM que elijas, sin doble entrada manual.",
      },
      {
        value: "−35%",
        label: "Tiempo en tareas repetitivas",
        description:
          "Ventas deja de responder lo mismo: la IA gestiona FAQs y objeciones frecuentes en todos los canales.",
      },
      {
        value: "SQL → cierre",
        label: "Pipeline medible por canal",
        description:
          "Dashboards con coste por oportunidad, tasa de conversión a reunión y cierre atribuido a WhatsApp, web, Instagram, etc.",
      },
    ],
  },
  painPoints: [
    {
      icon: "clock",
      title: "Conversaciones que se pierden entre canales",
      description:
        "WhatsApp en un móvil, Instagram en otro, formulario web sin respuesta. Sin un sistema unificado, los leads se enfrían y ventas no ve el contexto completo.",
    },
    {
      icon: "trending-down",
      title: "Canales desconectados del CRM",
      description:
        "Si el historial no vive en tu CRM, no hay scoring, no hay seguimiento automático y dirección no puede medir tasa de respuesta ni conversión a cierre por canal.",
    },
    {
      icon: "users",
      title: "Comerciales saturados en todos los frentes",
      description:
        "Tu equipo repite las mismas respuestas en WhatsApp, email y chat web. Sin filtro IA, el coste por venta sube y el pipeline avanza lento.",
    },
  ],
  solutionRows: [
    {
      title: "Un agente IA, todos tus canales de venta",
      body:
        "WhatsApp Business API, Instagram DM, web chat, email y más desde un solo cerebro comercial entrenado con tu propuesta, objeciones y políticas. Mismo tono, mismas reglas, seguimiento automático si el lead deja de contestar en cualquier canal.",
      statLabel: "Tiempo de primera respuesta",
      statValue: "Menos de 60 s",
      imageSrc: ILLUSTRATIONS.socialMedia,
      imageAlt:
        "Ilustración de perfiles en redes y mensajería: agente IA en canales de venta multicanal",
      imageRight: true,
    },
    {
      title: "Tu CRM de preferencia, sincronizado en tiempo real",
      body:
        "Kommo, Brevo, HubSpot, Pipedrive u otro stack vía API y webhooks. Cada mensaje crea o actualiza contacto, deal stage, etiquetas y owner. Ventas ve el historial multicanal antes de llamar.",
      statLabel: "Integraciones por proyecto (media)",
      statValue: "5–7 sistemas",
      imageSrc: ILLUSTRATIONS.approve,
      imageAlt:
        "Ilustración de aprobación y handoff comercial entre IA y equipo de ventas en el CRM",
      imageRight: false,
    },
    {
      title: "Handoff inteligente y mejora continua",
      body:
        "Alertas cuando hay presupuesto, urgencia o solicitud de propuesta — en el canal que sea. Dashboard por canal con tasas de abandono, motivos de descarte y cohortes. Iteramos cada 14 días según conversaciones ganadas y perdidas.",
      statLabel: "Ciclo de optimización",
      statValue: "Cada 14 días",
      imageSrc: ILLUSTRATIONS.controlPanel,
      imageAlt:
        "Ilustración de panel de control con KPIs comerciales por canal y optimización continua",
      imageRight: true,
    },
  ],
  deliverables: [
    {
      title: "Playbook multicanal + objeciones",
      description:
        "Guion maestro para WhatsApp, Instagram, web chat y email: tono, límites legales y cuándo escalar a humano.",
      wide: true,
    },
    {
      title: "Agente IA + entorno de staging",
      description:
        "Modelo alineado a tus docs y canales activos. Validación con tu equipo comercial antes de producción.",
      wide: false,
    },
    {
      title: "Conectores CRM y alertas de handoff",
      description:
        "Integración con el CRM que elijas. Alertas a Slack, Teams o WhatsApp interno cuando hay intención de compra.",
      wide: false,
    },
    {
      title: "Secuencias de seguimiento por canal",
      description:
        "Reactivación de chats abandonados, recordatorios y nurturing según etapa del pipeline y canal de origen.",
      wide: false,
    },
    {
      title: "Dashboard de KPIs por canal",
      description:
        "Respuesta, SQL, coste por oportunidad, velocidad hasta cierre y revenue atribuido a WhatsApp, web, Instagram, etc.",
      wide: true,
    },
  ],
  useCases: [
    {
      sector: "Software B2B y SaaS",
      headline: "Demos cualificadas desde WhatsApp o web chat",
      body:
        "Filtramos tamaño de empresa y presupuesto en el canal que el lead elija. Solo agendamos demo cuando hay encaje ICP.",
    },
    {
      sector: "E-commerce y retail B2B",
      headline: "Atención comercial en Instagram y WhatsApp",
      body:
        "Catálogo, stock orientativo y escalado a comercial cuando hay pedido recurrente o volumen mayorista.",
    },
    {
      sector: "Servicios profesionales",
      headline: "Consultoras, clínicas e inmobiliarias",
      body:
        "Triaje administrativo, FAQs y handoff inmediato cuando hay intención de reservar, contratar o solicitar propuesta.",
    },
  ],
  faqSectionEyebrow: "FAQ del servicio",
  faqSectionTitle: "Preguntas sobre IA multicanal y CRM",
  faqSectionSubtitle:
    "Respuestas para equipos que quieren vender en varios canales con un solo sistema conectado al CRM.",
  faqItems: [
    {
      question: "¿Qué canales soportáis además de WhatsApp?",
      answer:
        "WhatsApp Business API, Instagram DM, web chat embebido, email y otros canales según tu stack. En auditoría definimos prioridad por volumen e intención de compra.",
    },
    {
      question: "¿Se conecta con mi CRM actual?",
      answer:
        "Sí. Kommo, Brevo, HubSpot, Pipedrive y stacks híbridos vía API REST y webhooks. Si tu CRM es menos común, valoramos conector personalizado en auditoría.",
    },
    {
      question: "¿Cuánto tarda el piloto multicanal?",
      answer:
        "Entre 3 y 6 semanas según canales e integraciones: auditoría (1 semana), configuración CRM + canales (2–3 semanas), entrenamiento y go-live gradual.",
    },
    {
      question: "¿La IA cierra sola o pasa a un humano?",
      answer:
        "Cualifica, responde y hace seguimiento en todos los canales; el cierre lo hace tu comercial cuando hay señales claras de intención. Handoff configurable por canal y reglas de negocio.",
    },
    {
      question: "¿Qué KPIs reportáis por canal?",
      answer:
        "Tiempo de primera respuesta, tasa de respuesta, SQL, coste por oportunidad, velocidad hasta reunión/propuesta, tasa de cierre y pipeline generado — desglosado por WhatsApp, web, Instagram, email, etc.",
    },
  ],
  schema: {
    name: "Automatización comercial multicanal con IA e integración CRM",
    description:
      "Implementación de agente comercial con IA en WhatsApp, Instagram, web chat y otros canales, conectado al CRM del cliente, con cualificación, handoff a ventas y reporting de KPIs por canal.",
    serviceType:
      "Consultoría e implementación de IA comercial conversacional multicanal con CRM",
  },
  bottomLead: {
    title: "Auditoría multicanal + CRM sin compromiso",
    description:
      "Indica canales activos, CRM y volumen de conversaciones: respondemos con hipótesis de KPIs, alcance del piloto y siguiente reunión si hay encaje.",
  },
  stickyCtaLabel: "Auditoría multicanal",
}
