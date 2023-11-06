'use client';

import { AiOutlineShareAlt } from "react-icons/ai"
import { BsQuestionCircle,} from "react-icons/bs";
import { FaUserCircle} from "react-icons/fa";
import React, { useCallback, useState } from "react";
import NavbarToggle from "./NavbarToggle";
import MenuItem from "./MenuItem";
import NavbarLink from "../links/NavbarLink";
import ProjectsMenu from "./ProjectsMenu";
import ProfileMenu from "./ProfileMenu";

interface AdminMenuProps {
    activeMenu: string
    onMenuChange: (menuName: string) => void
};

const AdminMenu: React.FC<AdminMenuProps> = ({ activeMenu, onMenuChange }) => {
    return (
        <div className="relative">
            <div className="flex flex-row items-center">
                <div className="mx-3 hidden w-full md:grid gap-4 grid-cols-4">
                    <div className="col-span-3 border-x h-8 border-gray-500 flex items-center justify-around">
                        <ProjectsMenu />
                        <NavbarLink label='Create' aria-label='Create' activeMenu={activeMenu} onMenuChange={onMenuChange} />
                        <NavbarLink label='Integrations' aria-label='Integrations' activeMenu={activeMenu} onMenuChange={onMenuChange} />
                        <NavbarLink label='Results' aria-label='Results' activeMenu={activeMenu} onMenuChange={onMenuChange} />
                    </div>
                    <div className="hidden md:flex items-center justify-around">
                        <AiOutlineShareAlt 
                            onClick={() => onMenuChange('share')}
                            aria-label='Share' className="cursor-pointer hover:shadow-sm text-gray-700" size={32}/>
                        <BsQuestionCircle 
                            onClick={() => window.location.href = '/about'}
                            aria-label='About' className="cursor-pointer hover:shadow-md rounded-full text-gray-700" size={32}/>
                        <ProfileMenu profileAction={() => onMenuChange('profile')}/>
                    </div>
                </div>
                <div className="flex w-full justify-center md:hidden">
                    <ProjectsMenu />
                </div> 
                <NavbarToggle>
                    <MenuItem onClick={() => onMenuChange('create')} label="Create" aria-label="Create"/>
                    <MenuItem onClick={() => onMenuChange('integrations')} label="Integrations" aria-label="Integrations"/>
                    <MenuItem onClick={() => onMenuChange('results')} label="Results" aria-label="Results"/>
                    <hr />
                    <MenuItem onClick={() => onMenuChange('share')} label="Share" aria-label="Share"/>
                    <MenuItem onClick={() => window.location.href = '/about'} label="About" aria-label="About"/>
                    <MenuItem onClick={() => onMenuChange('profile')} label="Profile" aria-label="Profile"/>
                    <MenuItem onClick={() => {}} label="Log Out" aria-label="Log Out"/>
                </NavbarToggle>
            </div>
        </div>
    );
}

export default AdminMenu;