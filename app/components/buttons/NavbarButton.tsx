'use client'

import Link from "next/link";
import React from "react";

interface NavbarButtonProps {
  onClick: () => void
  label: string
}

const NavbarButton: React.FC<NavbarButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <div
      onClick={onClick}
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
    </div>
  )
}

export default NavbarButton;