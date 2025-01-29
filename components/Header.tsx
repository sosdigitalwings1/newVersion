"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { Search, MapPin, User, ShoppingBag, ChevronDown } from "lucide-react";
import Image from "next/image";
import { NavLink, TopBarLink } from "./NavLink";

const mainNavItems = ["MASTER", "CONQUEST", "SPIRIT", "ELEGANCE", "HERITAGE"];

export const Header: FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("bg-transparent"); // Start with transparent background
  const [textColor, setTextColor] = useState("text-white");

  const controlHeader = () => {
    const heroSectionHeight = 800; // Adjust this based on your hero section height

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
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${bgColor} ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className={`max-w-[1920px] mx-auto px-8 flex justify-between items-center h-[46px] ${textColor}`}>
          <div className="flex items-center space-x-8">
            <div className="relative group">
              <button
                aria-label="Change country"
                className={`flex items-center text-[13px] font-light ${textColor} group-hover:text-black transition-colors duration-300`}
              >
                Canada
                <ChevronDown className={`w-4 h-4 ml-1 ${textColor} group-hover:text-black transition-colors duration-300`} />
              </button>
            </div>
            <TopBarLink href="#" className={textColor} isWhiteBackground={bgColor === "bg-white"}>
              Service client
            </TopBarLink>
            <TopBarLink href="#" className={textColor} isWhiteBackground={bgColor === "bg-white"}>
              Notre Univers
            </TopBarLink>
            </div>

          <div className="flex items-center space-x-8">
            <TopBarLink href="#" className={textColor}>Trouvez votre SOS</TopBarLink>
            <div className="flex items-center space-x-6">
              <Search
                aria-label="Search"
                className={`w-[18px] h-[18px] cursor-pointer ${textColor} group-hover:text-black transition-colors duration-300`}
              />
              <MapPin
                aria-label="Find a store"
                className={`w-[18px] h-[18px] cursor-pointer ${textColor} group-hover:text-black transition-colors duration-300`}
              />
              <User
                aria-label="User account"
                className={`w-[18px] h-[18px] cursor-pointer ${textColor} group-hover:text-black transition-colors duration-300`}
              />
              <div className="relative">
                <ShoppingBag
                  aria-label="Shopping bag"
                  className={`w-[18px] h-[18px] cursor-pointer ${textColor} group-hover:text-black transition-colors duration-300`}
                />
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[10px] rounded-full w-[16px] h-[16px] flex items-center justify-center">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Navigation */}
      <div className="border-b border-gray-100">
        <div className={`max-w-[1920px] mx-auto px-8 py-5 ${bgColor}`}>
          <div className="flex flex-col items-center">
            <Link href="/" className="mb-6">
            <Image
                src={bgColor === "bg-white" ? "/assets/LogoBlack.png" : "/assets/LogoWhite.png"}
                alt="Sos"
                width={200}
                height={75}
                className={`h-[35px] w-auto transition-opacity duration-300`}
                priority
              />
            </Link>
            <nav className="flex justify-center space-x-16">
  {mainNavItems.map((item) => (
    <NavLink
      key={item}
      href="#"
      className={`text-[13px] tracking-[1.5px]`}
      isWhiteBackground={bgColor === "bg-white"} // Pass the prop based on background color
    >
      {item}
    </NavLink>
  ))}
</nav>
          </div>
        </div>
      </div>
    </header>
  );
};