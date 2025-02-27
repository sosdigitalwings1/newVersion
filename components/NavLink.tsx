"use client";

import Link from "next/link";
import { FC } from "react";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isWhiteBackground?: boolean; // New prop to indicate background color
}

export const NavLink: FC<NavLinkProps> = ({ href, children, className = "", isWhiteBackground = false }) => (
  <Link
    href={href}
    className={`${isWhiteBackground ? "text-[#03224c] font-bold hover:text-blue-500 transition-colors duration-300" : "text-black"}
    font-custom group-hover:text-[#03224c] hover:text-blue-500 transition-colors duration-300 ${className}`}
  >
    {children}
  </Link>
);

export const TopBarLink: FC<NavLinkProps> = ({ href, children, isWhiteBackground }) => (
  <NavLink href={href} className="text-[13px] font-bold font-light" isWhiteBackground={isWhiteBackground}>
    {children}
  </NavLink>
);