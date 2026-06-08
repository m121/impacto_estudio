import { NextResponse } from "next/server"

import { MASTRA_AGENT_GENERATE_URL } from "@/lib/constants"
import type { ChatWidgetMessage } from "@/lib/types"

export const runtime = "nodejs"

function extractAgentText(data: unknown): string {
  if (!data || typeof data !== "object") return ""

  const record = data as Record<string, unknown>
  if (typeof record.text === "string" && record.text.trim()) {
    return record.text.trim()
  }
  if (typeof record.content === "string" && record.content.trim()) {
    return record.content.trim()
  }

  return ""
}

function upstreamErrorMessage(data: unknown, fallback: string): string {
  if (!data || typeof data !== "object") return fallback

  const record = data as Record<string, unknown>
  if (typeof record.error === "string" && record.error.trim()) {
    return record.error.trim()
  }

  return fallback
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages?: ChatWidgetMessage[] }
    const messages = Array.isArray(body.messages) ? body.messages : []

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    const apiKey = process.env.MASTRA_AGENT_API_KEY
    if (apiKey) {
      headers.Authorization = `Bearer ${apiKey}`
    }

    const upstream = await fetch(MASTRA_AGENT_GENERATE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ messages }),
    })

    const raw: unknown = await upstream.json().catch(() => null)

    if (!upstream.ok) {
      return NextResponse.json(
        {
          error: upstreamErrorMessage(
            raw,
            "El agente remoto no respondió correctamente.",
          ),
        },
        { status: upstream.status >= 400 ? upstream.status : 502 },
      )
    }

    const text = extractAgentText(raw)
    if (!text) {
      return NextResponse.json(
        { error: "Respuesta vacía del agente." },
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
