"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { ReactNode } from "react"

interface AuroraTextProps {
  children: ReactNode
  className?: string
  shimmerWidth?: string
  duration?: number
  delay?: number
}

export function AuroraText({
  children,
  className = "",
  shimmerWidth = "100px",
  duration = 2,
  delay = 0,
}: AuroraTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ 
          backgroundPosition: "-100px center",
        }}
        animate={{ 
          backgroundPosition: "calc(100% + 100px) center",
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          delay: delay,
          repeatDelay: 1,
        }}
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            transparent 40%,
            rgba(251, 191, 36, 0.3) 45%,
            rgba(251, 191, 36, 0.4) 50%,
            rgba(251, 191, 36, 0.3) 55%,
            transparent 60%,
            transparent
          )`,
          backgroundSize: `${shimmerWidth} 100%`,
        }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ 
          opacity: 0,
        }}
        animate={{ 
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          repeat: Infinity,
          delay: delay,
        }}
        style={{
          background: `radial-gradient(
            circle at center,
            rgba(251, 191, 36, 0.2),
            transparent 70%
          )`,
        }}
      />
    </span>
  )
}