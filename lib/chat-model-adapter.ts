import type { ChatModelAdapter, ThreadMessage } from "@assistant-ui/react"

import { CHAT_API_PATH } from "@/lib/constants"
import type { ChatWidgetMessage } from "@/lib/types"

function toApiMessages(
  messages: readonly ThreadMessage[],
): ChatWidgetMessage[] {
  return messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .map((message) => ({
      role: message.role as "user" | "assistant",
      content: message.content
        .filter((part) => part.type === "text")
        .map((part) => part.text)
        .join("\n")
        .trim(),
    }))
    .filter((message) => message.content.length > 0)
}

export const impactoChatModelAdapter: ChatModelAdapter = {
  async run({ messages, abortSignal }) {
    const response = await fetch(CHAT_API_PATH, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: toApiMessages(messages) }),
      signal: abortSignal,
    })

    const raw: unknown = await response.json().catch(() => null)

    if (!response.ok) {
      const error =
        raw &&
        typeof raw === "object" &&
        "error" in raw &&
        typeof (raw as { error?: unknown }).error === "string"
          ? (raw as { error: string }).error
          : "No se pudo contactar al agente."

      throw new Error(error)
    }

    const content =
      raw &&
      typeof raw === "object" &&
      "content" in raw &&
      typeof (raw as { content?: unknown }).content === "string"
        ? (raw as { content: string }).content
        : ""

    if (!content.trim()) {
      throw new Error("Respuesta vacía del agente.")
    }

    return {
      content: [{ type: "text", text: content }],
      status: { type: "complete", reason: "stop" },
    }
  },
}
