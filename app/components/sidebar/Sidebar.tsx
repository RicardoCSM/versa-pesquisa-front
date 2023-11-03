'use client';

import { FaUser } from "react-icons/fa";
import SidebarMenuItem from "./SidebarMenuItem";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useMediaQuery } from '@react-hook/media-query';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
}) => {
    const isSmallScreen = useMediaQuery("(max-width: 768px)");
    
    const [sidebarOpen, setSidebarOpen] = useState(!isSmallScreen);

    useEffect(() => {
        setSidebarOpen(!isSmallScreen);
    }, [isSmallScreen]);

    const toggleSidebar = () => {
        setSidebarOpen((value) => !value);
    };

    return (
        <div>
            <HiOutlineMenuAlt2
                onClick={toggleSidebar}
                size={32}
                className={`text-gray-500 mx-auto my-3 md:hidden ${sidebarOpen ? 'hidden' : 'flex transition-opacity duration-500'}`}
            />
            <div className={`w-full md:w-[238px] transition-transform duration-500 ${sidebarOpen ? 'sm:translate-x-0  md:h-screen' : '-translate-x-full hidden'} border-r border-b md:border-b-0 border-gray-500`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#F8F2E2]">
                    <ul className="space-y-6 mt-8 font-medium">
                        {children}
                        <AiOutlineCloseCircle
                            onClick={toggleSidebar}
                            size={32}
                            className="text-gray-500 m-auto flex md:hidden"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;