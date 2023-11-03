'use client';

import { AiOutlineShareAlt } from "react-icons/ai"
import { BsQuestionCircle,} from "react-icons/bs";
import { FaUserCircle} from "react-icons/fa";
import { PiCaretDownBold } from "react-icons/pi";
import React, { useCallback, useEffect, useRef, useState } from "react";
import NavbarToggle from "./NavbarToggle";
import MenuItem from "./MenuItem";
import NavbarLink from "../links/NavbarLink";
import ProjectsDropdown from "../buttons/ProjectsDropdown";

interface AdminMenuProps {
    activeMenu: string
    onMenuChange: (menuName: string) => void
};

const AdminMenu: React.FC<AdminMenuProps> = ({ activeMenu, onMenuChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);
    const dropdownOpen = useCallback(() => {
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
        <div className="relative">
            <div className="flex flex-row items-center">
                <div className="hidden mx-3 w-full sm:grid gap-4 grid-cols-4">
                    <div className="col-span-3 border-x h-8 border-gray-500 flex items-center justify-around">
                        <div 
                        className={`flex items-center gap-2 cursor-pointer`}
                        aria-label="Projects" 
                        onClick={dropdownOpen}>
                            Projects
                            <PiCaretDownBold />
                        </div>
                        {isOpen && (
                            <ProjectsDropdown>
                                <MenuItem onClick={() => {}} label="Project 1" aria-label="Project 1"/>
                                <MenuItem onClick={() => {}} label="Project 2" aria-label="Project 2"/>
                            </ProjectsDropdown>
                        )}
                        <NavbarLink label='Create' aria-label='Create' activeMenu={activeMenu} onMenuChange={onMenuChange} />
                        <NavbarLink label='Integrations' aria-label='Integrations' activeMenu={activeMenu} onMenuChange={onMenuChange} />
                        <NavbarLink label='Results' aria-label='Results' activeMenu={activeMenu} onMenuChange={onMenuChange} />
                    </div>
                    <div className="flex items-center justify-around">
                        <AiOutlineShareAlt aria-label='Share' className="hover:shadow-sm text-gray-700" size={32}/>
                        <BsQuestionCircle aria-label='About' className="hover:shadow-md rounded-full text-gray-700" size={32}/>
                        <FaUserCircle aria-label='User' className="hover:shadow-md rounded-full text-gray-700" size={32}/>
                    </div>
                </div> 
                <NavbarToggle>
                    <MenuItem onClick={() => {}} label="About" aria-label="About"/>
                    <MenuItem onClick={() => {}} label="Log Out" aria-label="Log Out"/>
                </NavbarToggle>
            </div>
        </div>
    );
}

export default AdminMenu;