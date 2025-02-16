import { IndustrySection } from "../components/IndustrySection"

const industries = [
  {
    name: "E-commerce",
    icon: "shopping-cart",
    description:
      "Our e-commerce ventures span various niches, from niche marketplaces to innovative D2C brands, leveraging cutting-edge technologies to deliver seamless online shopping experiences.",
  },
  {
    name: "Technology & Web3",
    icon: "cpu",
    description:
      "We're at the forefront of technological innovation, with investments in blockchain, AI, and other emerging technologies that are shaping the future of the digital landscape.",
  },
  {
    name: "Recruitment & HR Solutions",
    icon: "users",
    description:
      "Our HR tech companies are revolutionizing the way businesses attract, manage, and retain talent, with solutions ranging from AI-powered recruitment platforms to comprehensive HR management systems.",
  },
  {
    name: "Publishing & Media",
    icon: "book-open",
    description:
      "From digital publishing platforms to innovative content creation tools, we're invested in the future of media and how information is shared and consumed in the digital age.",
  },
  {
    name: "Marketing & Branding",
    icon: "target",
    description:
      "Our marketing technology companies provide cutting-edge solutions for digital marketing, brand management, and customer engagement, helping businesses thrive in the attention economy.",
  },
  {
    name: "Finance & Investments",
    icon: "dollar-sign",
    description:
      "We're invested in fintech innovations that are democratizing access to financial services, from personal finance management tools to alternative investment platforms.",
  },
  {
    name: "Gaming & Entertainment",
    icon: "gamepad",
    description:
      "Our gaming and entertainment portfolio includes innovative game development studios, streaming platforms, and interactive entertainment experiences that push the boundaries of digital engagement.",
  },
  {
    name: "Education & Learning Platforms",
    icon: "graduation-cap",
    description:
      "We're committed to the future of education, with investments in e-learning platforms, EdTech solutions, and tools that make quality education more accessible and engaging for learners of all ages.",
  },
]

export default function Industries() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Industries</h1>
      <p className="text-xl mb-12">
        The Raeburn Group operates across a diverse range of industries, leveraging technology and innovation to drive
        growth and create value. Explore our key sectors below:
      </p>
      <div className="space-y-16">
        {industries.map((industry) => (
          <IndustrySection key={industry.name} {...industry} />
        ))}
      </div>
    </div>
  )
}

