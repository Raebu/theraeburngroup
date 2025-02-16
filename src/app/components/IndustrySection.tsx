"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  type LucideIcon,
  ShoppingCart,
  Cpu,
  Users,
  BookOpen,
  Target,
  DollarSign,
  Gamepad,
  GraduationCap,
} from "lucide-react"

const iconMap: { [key: string]: LucideIcon } = {
  "shopping-cart": ShoppingCart,
  cpu: Cpu,
  users: Users,
  "book-open": BookOpen,
  target: Target,
  "dollar-sign": DollarSign,
  gamepad: Gamepad,
  "graduation-cap": GraduationCap,
}

interface IndustrySectionProps {
  name: string
  icon: string
  description: string
}

export function IndustrySection({ name, icon, description }: IndustrySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = iconMap[icon] || ShoppingCart

  return (
    <motion.div
      className="bg-muted p-6 rounded-lg shadow-md cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 mr-4 text-primary" />
        <h2 className="text-2xl font-semibold">{name}</h2>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-lg">{description}</p>
      </motion.div>
    </motion.div>
  )
}

