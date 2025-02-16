import Link from "next/link"

const companies = [
  { name: "Ageless Narrators", url: "agelessnarrators.com", description: "Platform for senior storytellers" },
  { name: "Bookworm HQ", url: "bookwormhq.com", description: "Online bookstore and reading community" },
  { name: "Caring Crew Co", url: "caringcrewco.com", description: "Healthcare staffing solutions" },
  { name: "Commission Only Hub", url: "commissiononlyhub.com", description: "Commission-based job listings" },
  { name: "Cute and Cozy Corner", url: "cuteandcozycorner.com", description: "Home decor and lifestyle products" },
  { name: "EmerTech Group", url: "emertechgroup.com", description: "Emerging technology solutions" },
  { name: "FIFA Femmes", url: "fifafemmes.com", description: "Women's football news and community" },
  { name: "Kid Central Store", url: "kidcentralstore.com", description: "Children's clothing and accessories" },
  {
    name: "Leading Commission Jobs",
    url: "leadingcommissionjobs.com",
    description: "Premium commission-based job board",
  },
  { name: "Little Legend Shop", url: "littlelegendshop.com", description: "Children's educational toys and games" },
  // Add more companies here...
]

export default function OurCompanies() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Companies</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <div key={company.url} className="bg-muted p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{company.name}</h2>
            <p className="mb-4">{company.description}</p>
            <Link
              href={`https://${company.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit Website
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

