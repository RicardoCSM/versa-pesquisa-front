'use client'

import React from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string
  hidden?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  hidden
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        px-4
        py-2
        bg-[#F8F2E2]
        transition
        font-semibold
        ${hidden ? 'block sm:hidden' : 'block'}
      `}>
      {label}
    </div>
  )
}

export default MenuItem;