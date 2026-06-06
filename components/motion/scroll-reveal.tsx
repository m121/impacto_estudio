"use client"

import { motion, useReducedMotion } from "framer-motion"

import {
  MOTION_DURATION,
  MOTION_EASE,
  MOTION_VIEWPORT,
} from "@/lib/motion"
import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 20,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={MOTION_VIEWPORT}
      transition={{ duration: MOTION_DURATION, delay, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  )
}

type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 16,
}: FadeInProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: MOTION_DURATION, delay, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  )
}
