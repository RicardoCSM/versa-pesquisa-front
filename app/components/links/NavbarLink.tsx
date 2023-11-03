'use client'

import React from "react";

interface NavbarLinkProps {
    activeMenu: string
    onMenuChange: (menuName: string) => void
    label: string
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  activeMenu,
  onMenuChange,
  label,
}) => {
  const isActive = activeMenu === label.toLowerCase();
  return (
    <a 
      className={`flex items-center gap-2 cursor-pointer ${isActive ? 'text-[#1565C0]' : ''}`} 
      onClick={() => onMenuChange(label.toLowerCase())}>
            {label}
      </a>
  )
}

export default NavbarLink;