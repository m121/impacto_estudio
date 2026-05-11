import {
  Card,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ContactFormFallback() {
  return (
    <Card className="border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <CardHeader>
        <Skeleton className="h-7 w-48 bg-slate-700/40" />
        <Skeleton className="mt-2 h-4 w-full max-w-md bg-slate-700/40" />
      </CardHeader>
      <div className="space-y-4 px-4 pb-4">
        <Skeleton className="h-16 w-full bg-slate-700/40" />
        <Skeleton className="h-16 w-full bg-slate-700/40" />
        <Skeleton className="h-16 w-full bg-slate-700/40" />
        <Skeleton className="h-10 w-32 bg-slate-700/40" />
      </div>
    </Card>
  )
}
