'use client';

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ToggleDropdown from "../buttons/ToggleDropdown";

interface ToggleProps {
    children: React.ReactNode;
}

const NavbarToggle: React.FC<ToggleProps> = ({
    children
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    return (
        <>
            <div
                onClick={toggleOpen}
                aria-label="Toggle"
                className="
                    md:hidden
                    p-[10px]
                    border-[1px]
                     border-gray-400
                    ms-auto
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition">
                <AiOutlineMenu />
            </div>

            {isOpen && (
                <ToggleDropdown>
                    {children}
                </ToggleDropdown>
            )}
        </>
    )
}

export default NavbarToggle;