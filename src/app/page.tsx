import Link from "next/link"
import { IndustryCard } from "./components/IndustryCard"

const industries = [
  { name: "E-commerce", icon: "shopping-cart" },
  { name: "Technology & Web3", icon: "cpu" },
  { name: "Recruitment & HR Solutions", icon: "users" },
  { name: "Publishing & Media", icon: "book-open" },
  { name: "Marketing & Branding", icon: "target" },
  { name: "Finance & Investments", icon: "dollar-sign" },
  { name: "Gaming & Entertainment", icon: "gamepad" },
  { name: "Education & Learning Platforms", icon: "graduation-cap" },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Innovation Across Industries</h1>
        <p className="text-xl mb-8">The Raeburn Group: A holding company managing a diverse portfolio of businesses.</p>
        <Link
          href="/industries"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Explore Our Industries
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At The Raeburn Group, we strive to empower innovative businesses across various industries, fostering growth
          and driving technological advancements to shape the future of commerce and technology.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Industries Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} name={industry.name} icon={industry.icon} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/industries" className="text-primary hover:underline">
            Learn More About Our Industries
          </Link>
        </div>
      </section>
    </div>
  )
}

