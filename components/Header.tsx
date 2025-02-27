"use client"

import { type FC, useEffect, useState, useCallback } from "react"
import { Search, MapPin, User, ShoppingBag, ChevronDown, X, Menu, Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const mainNavItems = [
  { name: "MASTER", href: "#" },
  { name: "CONQUEST", href: "#" },
  { name: "SPIRIT", href: "#", isNew: true },
  { name: "ELEGANCE", href: "#" },
  { name: "HERITAGE", href: "#" },
]

export const Header: FC = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [bgColor, setBgColor] = useState("bg-black")
  const [textColor, setTextColor] = useState("text-white")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // for the sign-up and sign-in part 
  const handleProfileClick = () => {
    if (isClient) {
      const isRegistered = localStorage.getItem("userToken")
      if (isRegistered) {
        router.push("/profile")
      } else {
        router.push("/register")
      }
    }
  }
  // controlling the header (+ scrolling effect ) : 
  const controlHeader = () => {
    if (typeof window !== "undefined") {
      const heroSectionHeight = window.innerHeight - 108;
      const currentScroll = window.scrollY;
      if (currentScroll < lastScrollY) {
        // Scrolling up
        setShowHeader(true);
        if (currentScroll < heroSectionHeight) {
          // If in the hero section
          setBgColor("bg-black"); // Changed to a darker shade for better contrast
          setTextColor("text-white");
        } else {
          // Scrolling past hero section
          setBgColor("bg-black"); // Changed to a darker shade for better contrast
          setTextColor("text-white");
        }
      } else {
        // Scrolling down
        setShowHeader(false);
        if (currentScroll < heroSectionHeight) {
          // If still in the hero section
          setBgColor("bg-black"); // Changed to a darker shade for better contrast
          setTextColor("text-white");
        } else {
          // Scrolling past the hero section
          setBgColor("bg-black"); // Changed to a darker shade for better contrast
          setTextColor("text-white");
        }
      }
      setLastScrollY(currentScroll);
    }
  };
  // 
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => window.removeEventListener("scroll", controlHeader);
    }
  }, [lastScrollY, controlHeader]); // Added controlHeader to dependencies

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${bgColor} ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Search Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-transform duration-500 ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-[92px] border-b border-white/10">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full text-lg sm:text-2xl bg-transparent border-none outline-none placeholder-gray-400 text-white"
              autoFocus={isSearchOpen}
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[46px] text-white">
          <div className="hidden sm:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-[13px] font-light group-hover:opacity-70 transition-opacity">
                Morocco
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <Link href="#" className="text-[13px] font-light hover:opacity-70 transition-opacity">
              Service client
            </Link>
            <Link href="#" className="text-[13px] font-light hover:opacity-70 transition-opacity">
              Notre Univers
            </Link>
          </div>

          <div className="flex items-center space-x-6 ml-auto">
            <Link href="#" className="hidden sm:block text-[13px] font-light hover:opacity-70 transition-opacity">
              Trouvez votre SOS
            </Link>
            <div className="flex items-center space-x-6">
              <button onClick={() => setIsSearchOpen(true)} className="hover:opacity-70 transition-opacity">
                <Search className="w-[18px] h-[18px]" />
              </button>
              <Link href="/favorites" className="hover:opacity-70 transition-opacity">
                <Heart className="w-[18px] h-[18px]" />
              </Link>
              {/* <button className="hover:opacity-70 transition-opacity">
                <MapPin className="w-[18px] h-[18px]" />
              </button> */}
              <button onClick={handleProfileClick} className="hover:opacity-70 transition-opacity">
                <User className="w-[18px] h-[18px]" />
              </button>
              <button className="relative hover:opacity-70 transition-opacity">
                <ShoppingBag className="w-[18px] h-[18px]" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] rounded-full w-[16px] h-[16px] flex items-center justify-center">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-white/10">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between md:justify-center relative">
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <img src="/assets/LogoWhite.png" alt="SOS" className="h-[35px] w-auto" />
            </Link>
            <nav className="hidden md:flex justify-center space-x-16 w-full">
              {mainNavItems.map((item, index) => {
                const isCenter = index === Math.floor(mainNavItems.length / 2)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-[13px] tracking-[1.5px] hover:opacity-70 transition-opacity text-white ${
                      isCenter ? "opacity-0 pointer-events-none" : ""
                    }`}
                  >
                    {item.name}
                    {item.isNew && (
                      <span className="absolute -top-3 -right-3 text-[10px] text-white bg-red-500 px-1.5 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </Link>
                )
              })}
            </nav>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 bottom-0 w-64 bg-gray-900 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="mt-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-white hover:text-gray-300 transition-colors"
                >
                  {item.name}
                  {item.isNew && (
                    <span className="ml-2 text-[10px] text-white bg-red-500 px-1.5 py-0.5 rounded-full">NEW</span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

