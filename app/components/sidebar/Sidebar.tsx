'use client';

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
        <div className={`md:border-none ${!sidebarOpen ? 'border-b border-gray-500' : ''}`}>
            <HiOutlineMenuAlt2
                onClick={toggleSidebar}
                size={32}
                className={`text-gray-500 mx-auto my-3 md:hidden cursor-pointer ${sidebarOpen ? 'hidden' : 'flex'}`}
            />
            <div className={`w-full md:fixed md:w-[238px] ${sidebarOpen ? 'md:h-screen' : 'hidden'} md:border-r border-b md:border-b-0 border-gray-500`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 md:mt-[65px] overflow-y-auto bg-[#F8F2E2]">
                    <div className="space-y-6 font-medium">
                        {children}
                        <AiOutlineCloseCircle
                            onClick={toggleSidebar}
                            size={32}
                            className="text-gray-500 m-auto flex md:hidden cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;