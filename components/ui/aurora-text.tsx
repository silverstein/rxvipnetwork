"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { ReactNode } from "react"

interface AuroraTextProps {
  children: ReactNode
  className?: string
  duration?: number
}

export function AuroraText({
  children,
  className,
  duration = 2,
}: AuroraTextProps) {
  return (
    <motion.span
      className={cn(
        "relative inline-block",
        "bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500",
        "bg-clip-text text-transparent",
        "bg-[length:200%_auto]",
        className
      )}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  )
}