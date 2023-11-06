'use client';

import React, { useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import AdminMenu from "./AdminMenu";

interface AdminNavbarProps {
    activeMenu: string
    onMenuChange: (menuName: string) => void
};

const AdminNavbar: React.FC<AdminNavbarProps> = ({activeMenu, onMenuChange }) => {

    return (
        <div className="w-full bg-[#F8F2E2] z-50 border-b border-gray-500 md:fixed">
            <div className="py-4">
                <Container>
                    <div className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                      ">
                        <div className="flex-grow-0 mr-3">
                            <Logo onClick={() => onMenuChange('home')}/>
                        </div>
                        <div className="flex-grow">
                            <AdminMenu activeMenu={activeMenu} onMenuChange={onMenuChange} />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AdminNavbar;