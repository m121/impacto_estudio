"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, MessageCircle, Send, X } from "lucide-react"

import type { ChatWidgetMessage } from "@/lib/types"
import { cn } from "@/lib/utils"

const DEFAULT_ASSISTANT_MESSAGE =
  "Hola, soy el asistente IA de Impacto Estudio. ¿En qué puedo ayudarte a escalar tus ventas?"

function extractAssistantReply(data: unknown): string | null {
  if (!data || typeof data !== "object") return null
  const o = data as Record<string, unknown>
  if (typeof o.content === "string") return o.content
  if (typeof o.message === "string") return o.message
  if (typeof o.text === "string") return o.text
  if (o.message && typeof o.message === "object") {
    const inner = o.message as Record<string, unknown>
    if (typeof inner.content === "string") return inner.content
  }
  const messages = o.messages
  if (Array.isArray(messages) && messages.length > 0) {
    const last = messages[messages.length - 1] as Record<string, unknown>
    if (last && typeof last.content === "string") return last.content
  }
  return null
}

function TypingDots() {
  return (
    <div
      className="flex items-center gap-1.5 px-1 py-2"
      role="status"
      aria-label="Cargando respuesta"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-2 shrink-0 rounded-full bg-[#00C1D5]"
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 0.55,
            repeat: Infinity,
            repeatType: "loop",
            delay: i * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function ChatWidget() {
  const [open, setOpen] = React.useState(false)
  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [messages, setMessages] = React.useState<ChatWidgetMessage[]>(() => [
    { role: "assistant", content: DEFAULT_ASSISTANT_MESSAGE },
  ])

  const endRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages, isLoading, open])

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: ChatWidgetMessage = { role: "user", content: trimmed }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      })

      const raw: unknown = await res.json().catch(() => null)

      if (!res.ok) {
        throw new Error(
          typeof raw === "object" &&
            raw &&
            "error" in raw &&
            typeof (raw as { error?: unknown }).error === "string"
            ? (raw as { error: string }).error
            : "Error al contactar el servidor.",
        )
      }

      const reply =
        extractAssistantReply(raw) ??
        "No he podido leer la respuesta del servidor. Revisa el endpoint."

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ])
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "No se pudo completar la solicitud. Inténtalo de nuevo."
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: msg,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="chat-panel"
            role="dialog"
            id="chat-panel"
            aria-modal="true"
            aria-label="Chat con Impacto Estudio"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className={cn(
              "flex max-h-[min(70vh,32rem)] w-[min(100vw-2rem,22rem)] flex-col overflow-hidden",
              "rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/50",
            )}
          >
            <header className="flex shrink-0 items-center justify-between gap-2 border-b border-slate-800 px-3 py-2.5">
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[#00C1D5]">
                  <Bot className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-100">
                    Asistente Impacto
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    IA · Ventas B2B
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-900 hover:text-[#00C1D5]"
                aria-label="Cerrar chat"
              >
                <X className="size-5" aria-hidden />
              </button>
            </header>

            <div className="flex min-h-0 flex-1 flex-col">
              <div
                className="min-h-0 flex-1 space-y-3 overflow-y-auto px-3 py-3"
                style={{ maxHeight: "min(50vh, 22rem)" }}
              >
                {messages.map((m, i) => (
                  <div
                    key={`${m.role}-${i}-${m.content.slice(0, 24)}`}
                    className={cn(
                      "flex w-full",
                      m.role === "user" ? "justify-end" : "justify-start",
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed break-words",
                        m.role === "user"
                          ? "bg-[#F84677] text-white"
                          : "border border-slate-700 bg-slate-800 text-slate-200",
                      )}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {isLoading ? (
                  <div className="flex justify-start">
                    <div className="rounded-2xl border border-slate-700 bg-slate-800 px-3 py-1">
                      <TypingDots />
                    </div>
                  </div>
                ) : null}
                <div ref={endRef} />
              </div>

              <form
                onSubmit={handleSend}
                className="shrink-0 border-t border-slate-800 p-2"
              >
                <div className="flex items-end gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-2 py-1.5 focus-within:border-slate-700">
                  <label htmlFor="chat-widget-input" className="sr-only">
                    Escribe tu mensaje
                  </label>
                  <textarea
                    id="chat-widget-input"
                    rows={1}
                    value={input}
                    disabled={isLoading}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        void handleSend()
                      }
                    }}
                    placeholder="Escribe un mensaje…"
                    className="max-h-28 min-h-8 flex-1 resize-none bg-transparent py-2 text-sm text-slate-100 placeholder:text-slate-600 outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="mb-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg text-[#00C1D5] transition enabled:hover:bg-slate-800 disabled:opacity-40"
                    aria-label="Enviar mensaje"
                  >
                    <Send className="size-5" aria-hidden />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        layout
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={open ? "chat-panel" : undefined}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#F84677] text-white shadow-lg shadow-[#F84677]/35 hover:brightness-110"
      >
        {open ? (
          <X className="size-6" aria-hidden />
        ) : (
          <MessageCircle className="size-6" aria-hidden />
        )}
      </motion.button>
    </div>
  )
}
