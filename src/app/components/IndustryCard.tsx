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

interface IndustryCardProps {
  name: string
  icon: string
}

export function IndustryCard({ name, icon }: IndustryCardProps) {
  const Icon = iconMap[icon] || ShoppingCart

  return (
    <div className="bg-muted p-6 rounded-lg shadow-md transition-transform hover:scale-105">
      <Icon className="w-12 h-12 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
    </div>
  )
}

