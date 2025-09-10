"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
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
  shimmerWidth = "200px",
  duration = 2,
  delay = 0,
}: AuroraTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ 
          backgroundPosition: "-200% center",
        }}
        animate={{ 
          backgroundPosition: "200% center",
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          delay: delay,
        }}
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            transparent 30%,
            rgba(251, 191, 36, 0.3) 40%,
            rgba(251, 191, 36, 0.4) 50%,
            rgba(251, 191, 36, 0.3) 60%,
            transparent 70%,
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