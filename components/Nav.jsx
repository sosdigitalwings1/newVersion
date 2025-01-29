

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#services" },
  { name: "work", path: "#work" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-center space-x-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`text-sm font-bold transition-colors hover:text-primary ${
            pathname === link.path
              ? "text-primary"
              : "text-muted-foreground"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav