"use client"

import React from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactElement
  title: string
  description: string
  items?: string[]
  className?: string
}

export default function FeatureCard({ icon, title, description, items, className }: FeatureCardProps) {
  return (
    <motion.div
      className={`bg-white/60 backdrop-blur-xl border border-neutral-200/70 rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-soft-md transition-all duration-300 transform hover:-translate-y-1.5 group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center text-burgundy-dark mb-4 md:mb-5">
        <div className="p-3 bg-burgundy-extralight rounded-xl mr-4 group-hover:bg-burgundy-dark transition-colors duration-300 w-10 h-10 md:w-12 md:h-12 text-burgundy-dark group-hover:text-white flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-neutral-800 tracking-tight">{title}</h3>
      </div>
      <p className="text-neutral-600 text-sm md:text-base mb-4 leading-relaxed">{description}</p>
      {items && items.length > 0 && (
        <ul className="space-y-2 text-sm text-neutral-500 list-disc list-inside pl-1">
          {items.map((item, index) => (
            <li key={index} className="leading-snug">
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
