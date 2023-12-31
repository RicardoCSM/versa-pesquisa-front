'use client';

import React, { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { FaUserCircle } from "react-icons/fa";
import ProfileDropdown from "../buttons/ProfileDropdown";
import authService from "@/app/services/auth.service";

interface ProfileMenuProps {
    profileAction: () => void
};

const AdminDropdown: React.FC<ProfileMenuProps> = ({ profileAction }) => {
    const [isOpen, setIsOpen] = useState(false);

    const profileMenuOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    const handleLogout =  () => {
        authService.logout();
    };

    return (
        <>
            <div
                onClick={profileMenuOpen}
                aria-label="Profile Menu">
                <FaUserCircle aria-label='User' className="cursor-pointer hover:shadow-md rounded-full text-gray-700" size={32} />
            </div>
            {isOpen && (
                <ProfileDropdown>
                    {/* <MenuItem onClick={profileAction} label="Profile" aria-label="Profile" /> */}
                    <MenuItem onClick={handleLogout} label="Log Out" aria-label="Log Out" />
                </ProfileDropdown>
            )}
        </>
    )
}

export default AdminDropdown;