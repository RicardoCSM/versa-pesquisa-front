'use client'

import Link from "next/link";
import React from "react";

interface NavbarButtonProps {
  href: string;
  label: string
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  href,
  label,
}) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        hidden
        sm:block
      text-white
        text-sm
        py-3
        px-7
        rounded-full
        bg-[#1565C0]
        transition
        cursor-pointer
        hover:shadow-md
        ">
      {label}
    </Link>
  )
}

export default NavbarButton;