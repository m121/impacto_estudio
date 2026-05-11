import type { ServiceLandingContent } from "@/lib/types"

import { SITE_NAME } from "@/lib/constants"

/** Landing completa: automatización comercial con IA (template referencia). */
export const AUTOMATIZACION_IA_SERVICE_PATH =
  "/servicios/automatizacion-ia" as const

export const automatizacionIaLandingContent: ServiceLandingContent = {
  path: AUTOMATIZACION_IA_SERVICE_PATH,
  metadataTitle:
    "Automatización de Ventas B2B con IA · Implementación y auditoría | Impacto Estudio",
  metadataDescription:
    "Automatización de ventas con IA para empresas B2B en España: cualificación 24/7, integración CRM (HubSpot y similares), despliegue en 4–10 semanas y soporte. Solicita auditoría de proceso.",
  metadataKeywords: [
    "automación ventas IA",
    "inteligencia artificial B2B",
    "chatbot cualificación CRM",
    "SDR con IA España",
    "integración HubSpot IA",
    "modelos de lenguaje comerciales",
    "handoff automatizado ventas",
    "impacto Estudio automatización",
  ],
  ogTitle: `Automatización de ventas con IA B2B · ${SITE_NAME}`,
  hero: {
    h1: "Automatización de ventas con inteligencia artificial para B2B",
    h2DirectAnswer:
      "Es un sistema que cualifica y nutre leads con modelos de lenguaje y reglas de negocio conectadas a tu CRM: responde en menos de 90 segundos en horario extendido, enruta solo reuniones con perfil encaje ≥70 % según tu ICP y reduce un 35 % el tiempo de SDR en tareas repetitivas en clientes benchmark internos (piloto 90 días, sector SaaS y servicios).",
    image: {
      src: "/images/auto.png",
      alt: "Mockup de interfaz de automatización de ventas B2B con IA mostrando panel de conversaciones cualificadas, estado del CRM y alertas de handoff a comercial",
      width: 1200,
      height: 800,
    },
    primaryCtaLabel: "Auditoría de mi proceso",
    primaryCtaHref: "#cualificar",
  },
  painPoints: [
    {
      icon: "clock",
      title: "Leads fríos que diluyen a tu equipo",
      description:
        "Ventas contesta correos genéricos mientras los decisores calientes enfrían: sin scoring ni priorización pierdes un 22 % de velocidad media hasta primera reunión (benchmark interno 2025).",
    },
    {
      icon: "trending-down",
      title: "Baja conversión visita → reunión",
      description:
        "Formularios estáticos capturan intención débil: menos del 3 % de visitas B2B medianas solicitan demo sin un diálogo guiado que clasifique presupuesto y rol decisor.",
    },
    {
      icon: "users",
      title: "Tiempo robado a AE en cualificación manual",
      description:
        "Los account executives dedican hasta 12 h/semana a filtros que un flujo híbrido IA + reglas podría resolver sin sacrificar tono humano ni compliance.",
    },
  ],
  solutionRows: [
    {
      title: "Flujos de cualificación con contexto de cuenta",
      body:
        "Entrenamos prompts y herramientas sobre tu propuesta de valor, objeciones y datos CRM para que cada respuesta cite políticas vigentes (precios orientativos, SLA, compliance RGPD). Handoff automático cuando el lead cumple 4 de 5 criterios ICP.",
      statLabel: "Tiempo de primera respuesta",
      statValue: "Menos de 90 s",
      imageSrc:
        "/images/prompt.png",
      imageAlt:
        "Esquema de flujo de trabajo de cualificación de leads B2B con IA mostrando ramas de decisión y sincronización con CRM",
      imageRight: true,
    },
    {
      title: "Integraciones nativas con tu stack comercial",
      body:
        "HubSpot, Salesforce, Pipedrive y herramientas MA mediante APIs y webhooks: cada conversión crea o actualiza deal stage, owner y campos personalizados sin doble entrada manual.",
      statLabel: "Integraciones activas por proyecto (media)",
      statValue: "7 sistemas",
      imageSrc:
        "/images/ventas.png",
      imageAlt:
        "Diagrama de integración entre asistente IA de ventas y CRM HubSpot con sincronización bidireccional de contactos y actividades",
      imageRight: false,
    },
    {
      title: "Observabilidad y mejora continua",
      body:
        "Dashboard con tasas de abandono por paso, motivos de descarte y cohortes por sector. Reentrenamos mensajes cada 14 días según feedback de ventas y etiquetado de oportunidades ganadas/perdidas.",
      statLabel: "Iteraciones de mejora programadas",
      statValue: "Cada 14 días",
      imageSrc:
        "/images/dashboard_aut.png",
      imageAlt:
        "Captura conceptual de panel analítico de conversaciones automatizadas B2B con métricas de calificación y ROI por canal",
      imageRight: true,
    },
  ],
  deliverables: [
    {
      title: "Playbook de conversación y políticas",
      description:
        "Guion maestro con tono de marca, límites legales y escalado a humano.",
      wide: true,
    },
    {
      title: "Asistente entrenado + entorno de staging",
      description:
        "Modelo alineado a tus docs más entorno de pruebas antes de producción.",
      wide: false,
    },
    {
      title: "Conectores CRM y automatización",
      description:
        "Webhooks, campos personalizados y alertas a Slack o Teams.",
      wide: false,
    },
    {
      title: "Soporte mensual y SLA de cambios",
      description:
        "Ventana de cambios menores en 48 h laborables y revisión trimestral.",
      wide: false,
    },
    {
      title: "Informe ejecutivo de adopción",
      description:
        "SQL generados, coste por reunión cualificada y ahorro horas SDR.",
      wide: true,
    },
  ],
  useCases: [
    {
      sector: "Software B2B y SaaS",
      headline: "Demo requests cualificados por tamaño de equipo",
      body:
        "Filtramos empresas pequeñas frente a enterprise, enriquecemos con datos firmográficos y solo agendamos cuando hay presupuesto declarado o uso crítico identificado.",
    },
    {
      sector: "Clínicas y salud privada",
      headline: "Triaje administrativo con cumplimiento RGPD",
      body:
        "Flujos sin diagnóstico médico automatizado: agenda visitas, FAQs administrativas y detección de idioma con handoff inmediato a recepción.",
    },
    {
      sector: "Servicios profesionales",
      headline: "Consultoras y estudios legales",
      body:
        "Priorizamos briefings por tipo de proyecto y jurisdicción; reducimos spam de formularios genéricos integrando firma electrónica cuando procede.",
    },
  ],
  faqSectionEyebrow: "FAQ del servicio",
  faqSectionTitle: "Preguntas de compra sobre automatización B2B con IA",
  faqSectionSubtitle:
    "Respuestas pensadas para equipos que comparan proveedores y necesitan integración real con ventas.",
  faqItems: [
    {
      question: "¿Se integra el chatbot con mi CRM actual?",
      answer:
        "Sí. Implementamos contra HubSpot, Salesforce, Pipedrive y stacks híbridos vía API REST y webhooks. Si tu CRM es menos común, valoramos conector personalizado en la fase de auditoría (presupuesto aparte si requiere middleware dedicado).",
    },
    {
      question: "¿Cuánto tiempo toma el despliegue en producción?",
      answer:
        "Un piloto cerrado suele estar entre 4 y 10 semanas: 2 semanas de auditoría y diseño, 3–5 de integración y entrenamiento del modelo, 1–2 de UAT con tu equipo comercial y go-live gradual por cohortes.",
    },
    {
      question: "¿Qué modelos de IA utilizáis y quién es responsable del dato?",
      answer:
        "Combinamos modelos cloud líderes (por ejemplo familia GPT-4 o equivalentes) con opciones on-prem o VPC si tu política lo exige. Los datos de conversación se procesan según acuerdo de tratamiento (RGPD); por defecto no entrenamos modelos públicos con vuestra información sin cláusula específica.",
    },
    {
      question: "¿Cómo garantizáis que la IA no prometa lo que ventas no puede cumplir?",
      answer:
        "Definimos políticas de respuesta y límites explícitos en el sistema (guardrails), revisión humana en staging y muestreo aleatorio semanal de conversaciones en las primeras 8 semanas post lanzamiento.",
    },
    {
      question: "¿Qué necesitamos enviar para la auditoría inicial?",
      answer:
        "Ejemplos de leads típicos, grabaciones anonimizadas o transcripts de objeciones, exportación parcial de campos CRM, documentación de propuesta de valor y SLA internos de respuesta comercial.",
    },
  ],
  schema: {
    name: "Automatización de ventas con inteligencia artificial para empresas B2B",
    description:
      "Servicio de diseño, integración y operación de flujos comerciales asistidos por IA con conexión a CRM, cualificación de leads y reporting ejecutivo para equipos B2B en España.",
    serviceType:
      "Consultoría e implementación de automatización comercial conversacional con IA",
  },
  bottomLead: {
    title: "Auditoría de proceso sin compromiso",
    description:
      "Completa el formulario con tu CRM y volumen mensual de leads: te respondemos con hipótesis de impacto, alcance y siguiente reunión técnica si hay encaje.",
  },
  stickyCtaLabel: "Pedir auditoría",
}
