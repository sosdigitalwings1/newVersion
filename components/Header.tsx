"use client";

import { FC, useEffect, useState } from "react";
import { Search, MapPin, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

const mainNavItems = [
  { name: "MASTER", href: "#" },
  { name: "CONQUEST", href: "#" },
  { name: "SPIRIT", href: "#", isNew: true },
  { name: "ELEGANCE", href: "#" },
  { name: "HERITAGE", href: "#" }
];

export const Header: FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const controlHeader = () => {
    const heroSectionHeight = window.innerHeight - 108;
    const currentScroll = window.scrollY;
if (window.scrollY < lastScrollY) {
      // Scrolling up
      setShowHeader(true);
      if (window.scrollY < heroSectionHeight) {
        // If in the hero section
        setBgColor("bg-transparent"); // Keep transparent
        setTextColor("text-white"); // Keep text white
      } else {
        // Scrolling past hero section
        setBgColor("bg-white"); // Change to white background
        setTextColor("text-black"); // Change text color
      }
    } else {
      // Scrolling down
      setShowHeader(false);
      if (window.scrollY < heroSectionHeight) {
        // If still in the hero section
        setBgColor("bg-transparent"); // Keep transparent when scrolling down
        setTextColor("text-white"); // Keep text white
      } else {
        // Scrolling past the hero section
        setBgColor("bg-white"); // Change to white background
        setTextColor("text-black"); // Change text color
      }
    }
    setLastScrollY(window.scrollY);

    // if (currentScroll > heroSectionHeight / 2) {
    //   setBgColor("bg-white");
    //   setTextColor("text-black");
    // } else {
    //   setBgColor("bg-transparent");
    //   setTextColor("text-white");
    // }

    // setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${bgColor} ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Search Overlay */}
      <div
        className={`absolute inset-0 bg-white transition-transform duration-500 ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-8 h-full">
          <div className="flex items-center justify-between h-[92px] border-b">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full text-2xl bg-transparent border-none outline-none placeholder-gray-400"
              autoFocus={isSearchOpen}
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className={`border-b ${bgColor === "bg-transparent" ? "border-white/10" : "border-gray-100"}`}>
        <div className={`max-w-[1920px] mx-auto px-8 flex justify-between items-center h-[46px] ${textColor}`}>
          <div className="flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-[13px] font-light group-hover:opacity-70 transition-opacity">
                Morocco
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <a href="#" className="text-[13px] font-light hover:opacity-70 transition-opacity">
              Service client
            </a>
            <a href="#" className="text-[13px] font-light hover:opacity-70 transition-opacity">
              Notre Univers
            </a>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#" className="text-[13px] font-light hover:opacity-70 transition-opacity">
              Trouvez votre SOS
            </a>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="hover:opacity-70 transition-opacity"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <button className="hover:opacity-70 transition-opacity">
                <MapPin className="w-[18px] h-[18px]" />
              </button>
              <button className="hover:opacity-70 transition-opacity">
                <User className="w-[18px] h-[18px]" />
              </button>
              <button className="relative hover:opacity-70 transition-opacity">
                <ShoppingBag className="w-[18px] h-[18px]" />
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] rounded-full w-[16px] h-[16px] flex items-center justify-center">
                  1
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`border-b ${bgColor === "bg-transparent" ? "border-white/10" : "border-gray-100"}`}>
        <div className="max-w-[1920px] mx-auto px-8 py-5">
          <div className="flex flex-col items-center">
            <a href="/" className="mb-6 relative">
              <img
                src={bgColor === "bg-white" ? "/assets/LogoBlack.png" : "/assets/LogoWhite.png"}
                alt="SOS"
                className="h-[35px] w-auto transition-opacity duration-300"
              />
            </a>
            <nav className="flex justify-center space-x-16">
              {mainNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-[13px] tracking-[1.5px] hover:opacity-70 transition-opacity ${textColor}`}
                >
                  {item.name}
                  {item.isNew && (
                    <span className="absolute -top-3 -right-3 text-[10px] text-white bg-red-500 px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};