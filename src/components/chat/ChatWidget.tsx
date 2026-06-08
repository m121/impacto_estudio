"use client"

import {
  AssistantRuntimeProvider,
  useLocalRuntime,
} from "@assistant-ui/react"

import { AssistantModal } from "@/components/assistant-modal"
import { impactoChatModelAdapter } from "@/lib/chat-model-adapter"

function ChatAssistantRuntime({ children }: { children: React.ReactNode }) {
  const runtime = useLocalRuntime(impactoChatModelAdapter)

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  )
}

export function ChatWidget() {
  return (
    <ChatAssistantRuntime>
      <AssistantModal />
    </ChatAssistantRuntime>
  )
}
