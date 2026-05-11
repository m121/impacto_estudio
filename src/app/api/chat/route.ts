import { readFile } from "node:fs/promises"
import path from "node:path"

import { Agent } from "@mastra/core/agent"
import type { MessageListInput } from "@mastra/core/agent/message-list"
import { Mastra } from "@mastra/core/mastra"
import { NextResponse } from "next/server"

import type { ChatWidgetMessage } from "@/lib/types"

export const runtime = "nodejs"

const AGENT_NAME = "impactoSales" as const

const KNOWLEDGE_RELATIVE = path.join("src", "data", "impacto-estudio-info.md")

/** Modelo OpenAI (ChatGPT API). Configura `OPENAI_API_KEY` en el entorno. */
const OPENAI_MODEL = "openai/gpt-4o-mini" as const

let knowledgeText: string | null = null
let mastraSingleton: Mastra | null = null

function knowledgeFilePath() {
  return path.join(process.cwd(), KNOWLEDGE_RELATIVE)
}

async function loadKnowledge(): Promise<string> {
  if (knowledgeText) return knowledgeText
  knowledgeText = await readFile(knowledgeFilePath(), "utf-8")
  return knowledgeText
}

function buildSystemInstructions(document: string) {
  return `Eres un asistente de ventas corporativo para Impacto Estudio.

Usa ESTRICTAMENTE la información del documento adjunto para hablar de la agencia, servicios, límites y condiciones. Si el usuario pregunta algo no cubierto en el documento, indícalo con claridad y ofrece pasar el caso a un humano o recoger email para seguimiento.

Sé conciso, directo al grano y mantén un tono profesional B2B.

Nunca inventes precios, plazos ni garantías que no estén explícitos en el documento. Para orientación comercial, intenta guiar al usuario a dejar su **email corporativo** y a solicitar la **auditoría gratuita** cuando encaje.

--- DOCUMENTO DE CONTEXTO ---
${document}
--- FIN DOCUMENTO ---`
}

function getMastra(document: string): Mastra {
  if (mastraSingleton) return mastraSingleton

  const impactoSales = new Agent({
    name: "impacto-sales",
    instructions: buildSystemInstructions(document),
    model: OPENAI_MODEL,
  })

  mastraSingleton = new Mastra({
    agents: {
      [AGENT_NAME]: impactoSales,
    },
  })

  return mastraSingleton
}

function extractText(result: unknown): string {
  if (result && typeof result === "object" && "text" in result) {
    const t = (result as { text?: unknown }).text
    if (typeof t === "string" && t.length > 0) return t
  }
  return ""
}

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Falta OPENAI_API_KEY en el entorno. Configura la clave de OpenAI para el modelo ChatGPT.",
        },
        { status: 503 },
      )
    }

    const body = (await req.json()) as { messages?: ChatWidgetMessage[] }
    const messages = Array.isArray(body.messages) ? body.messages : []

    const knowledge = await loadKnowledge()
    const mastra = getMastra(knowledge)
    const agent = mastra.getAgent(AGENT_NAME)

    const result = await agent.generate(messages as MessageListInput)
    const text = extractText(result).trim()

    if (!text) {
      return NextResponse.json(
        { error: "Respuesta vacía del modelo." },
        { status: 502 },
      )
    }

    return NextResponse.json({ content: text })
  } catch (err) {
    console.error("[api/chat]", err)
    return NextResponse.json(
      { error: "No se pudo procesar el mensaje. Inténtalo de nuevo." },
      { status: 500 },
    )
  }
}
