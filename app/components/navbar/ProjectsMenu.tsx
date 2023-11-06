'use client';

import React, { useCallback, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import ProjectsDropdown from "../buttons/ProjectsDropdown";
import MenuItem from "./MenuItem";

const AdminDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    return (
        <>
            <div
                className={`flex items-center gap-2 cursor-pointer`}
                aria-label="Projects"
                onClick={dropdownOpen}>
                Projects
                <PiCaretDownBold />
            </div>
            {isOpen && (
                <ProjectsDropdown>
                    <MenuItem onClick={() => { }} label="Project 1" aria-label="Project 1" />
                    <MenuItem onClick={() => { }} label="Project 2" aria-label="Project 2" />
                </ProjectsDropdown>
            )}
        </>
    )
}

export default AdminDropdown;