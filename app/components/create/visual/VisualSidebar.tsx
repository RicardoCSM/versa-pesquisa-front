'use client';

import React, { useState } from 'react';
import SidebarMenuItem from '../../sidebar/SidebarMenuItem';
import Layout from './Layout';
import General from './General';
import Style from './Style';
import Logo from './Logo';
import Background from './Background';

const VisualSidebar = () => {
    const [activeVisualSidebar, setActiveVisualSidebar] = useState<string>('layout');
    const [content, setContent] = useState<JSX.Element>(<Layout />);

    const handleVisualSidebarChange = (visualSidebarName: string) => {
        setActiveVisualSidebar(visualSidebarName);
        switch (visualSidebarName) {
            case "layout":
                setContent(<Layout />);
                break;
            case "general":
                setContent(<General />);
                break;
            case "style":
                setContent(<Style />);
                break;
            case "logo":
                setContent(<Logo />);
                    break;
            case "background":
                setContent(<Background />);
                     break;
        }
    };

    return (
        <div>
            <div className="md:border-x border-gray-500 md:h-screen md:fixed">
                <div className="w-full p-3 md:w-[130px] h-full border-b md:border-b-0 border-gray-500">
                    <div className="flex md:flex-col gap-6 md:pt-[60px]">
                        <SidebarMenuItem
                            activeSidebar={activeVisualSidebar}
                            onClick={() => handleVisualSidebarChange("layout")}
                            label="Layout" />
                        <SidebarMenuItem
                            activeSidebar={activeVisualSidebar}
                            onClick={() => handleVisualSidebarChange("general")}
                            label="General" />
                        <SidebarMenuItem
                            activeSidebar={activeVisualSidebar}
                            onClick={() => handleVisualSidebarChange("style")}
                            label="Style" />
                        <SidebarMenuItem
                            activeSidebar={activeVisualSidebar}
                            onClick={() => handleVisualSidebarChange("logo")}
                            label="Logo" />
                        <SidebarMenuItem
                            activeSidebar={activeVisualSidebar}
                            onClick={() => handleVisualSidebarChange("background")}
                            label="Background" />
                    </div>
                </div>
            </div>
            <div className="md:ml-[130px] w-full md:w-[320px]">
                {content}
            </div>
        </div>
    );
};

export default VisualSidebar;