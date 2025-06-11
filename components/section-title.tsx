"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <motion.div
      className={`text-center mb-16 md:mb-20 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {subtitle && (
        <p className="text-burgundy-dark font-semibold text-sm md:text-base uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-neutral-800 leading-tight">{title}</h2>
    </motion.div>
  )
}
