import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

const Header = () => {
  return (
    <header className="bg-background shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          The Raeburn Group
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/industries" className="hover:text-primary">
            Industries
          </Link>
          <Link href="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/careers" className="hover:text-primary">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header

