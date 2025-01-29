

"use client"

import { Sheet, SheetContent, SheetTrigger } from 'components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import { ThemeToggle } from './theme-toggle'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '#services',
  },
  {
    name: 'work',
    path: '#work',
  },
  {
    name: 'about',
    path: '#about',
  },
  {
    name: 'contact',
    path: '#contact',
  }
]

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center hover:opacity-75 transition-opacity">
        <CiMenuFries className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-white dark:bg-black">
        <div className="mt-32 mb-40 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              SOS Digital wings<span className="text-primary">.</span>
            </h1>
          </Link>
        </div>
        <div className="mt-auto mb-8 flex justify-center">
          <ThemeToggle />
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = link.path === pathname
            return (
              <Link
                href={link.path}
                key={index}
                className={`text-xl capitalize transition-colors hover:text-primary ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav