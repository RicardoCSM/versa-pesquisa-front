'use client';

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ToggleDropdown from "../buttons/ToggleDropdown";

interface ToggleProps {
    children: React.ReactNode;
}

const NavbarToggle: React.FC<ToggleProps> = ({
    children
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (node.current?.contains(e.target as Node)) {
                return;
            }
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [node]);

    return (
        <>
            <div
                onClick={toggleOpen}
                aria-label="Toggle"
                className="
                    sm:hidden
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