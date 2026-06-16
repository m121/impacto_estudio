"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as React from "react"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  BUDGET_OPTIONS,
  getFormspreeEndpoint,
  OBJECTIVE_OPTIONS,
} from "@/lib/constants"
import { contactLeadSchema, type ContactLeadValues } from "@/lib/types"

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  )
  const endpoint = getFormspreeEndpoint()

  const form = useForm<ContactLeadValues>({
    resolver: zodResolver(contactLeadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      website: "",
      objective: "",
      budget: "",
    },
  })

  async function onSubmit(values: ContactLeadValues) {
    setStatus("idle")
    if (!endpoint) {
      form.setError("root", {
        message:
          " Error al enviar el formulario. Por favor, inténtalo de nuevo.",
      })
      setStatus("error")
      return
    }

    const payload = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      website: values.website || "(no indicada)",
      objective: values.objective,
      budget: values.budget,
      _subject: `Lead B2B — ${values.name}`,
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string
        } | null
        throw new Error(data?.error ?? "No se pudo enviar el formulario.")
      }

      form.reset()
      setStatus("success")
    } catch (e) {
      setStatus("error")
      form.setError("root", {
        message:
          e instanceof Error
            ? e.message
            : "Error de red. Inténtalo de nuevo en unos minutos.",
      })
    }
  }

  const pending = form.formState.isSubmitting

  return (
    <Card
      className="border-slate-200 scroll-mt-24 dark:border-slate-800"
    >
      <CardHeader>
        <CardTitle className="font-heading text-xl text-slate-900 dark:text-slate-50">
          Cualificación B2B
        </CardTitle>
        <CardDescription>
          Respuesta habitual en 1–2 días laborables. Campos orientados a
          proyectos high-ticket.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nombre y apellidos"
                      autoComplete="name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

              <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="555 555 555"
                      autoComplete="tel"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Web actual</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://…"
                      inputMode="url"
                      autoComplete="url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="objective"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Objetivo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || undefined}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {OBJECTIVE_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Presupuesto mensual orientativo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || undefined}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {BUDGET_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.formState.errors.root ? (
              <p className="text-destructive text-sm" role="alert">
                {form.formState.errors.root.message}
              </p>
            ) : null}

            {status === "success" ? (
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Recibido. Te contactaremos en breve.
              </p>
            ) : null}

            <Button
              type="submit"
              className="w-full shadow-md shadow-brand-pink/25 transition hover:scale-[1.01] hover:brightness-110 sm:w-auto"
              disabled={pending}
              aria-busy={pending}
            >
              {pending ? "Enviando…" : "Enviar solicitud"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
