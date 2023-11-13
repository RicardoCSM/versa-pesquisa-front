'use client';

import React, { useState } from 'react';
import SidebarMenuItem from '../../sidebar/SidebarMenuItem';
import Text from './sidebar/Text';
import Logo from './sidebar/Logo';
import Background from './sidebar/Background';

const VisualSidebar = () => {
    const [activeVisualSidebar, setActiveVisualSidebar] = useState<string>('text');
    const [content, setContent] = useState<JSX.Element>(<Text />);

    const handleVisualSidebarChange = (visualSidebarName: string) => {
        setActiveVisualSidebar(visualSidebarName);
        switch (visualSidebarName) {
            case "text":
                setContent(<Text />);
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
            <div className="lg:border-x border-gray-500 lg:h-screen lg:fixed">
                <div className="w-full p-3 lg:w-[130px] h-full border-b lg:border-b-0 border-gray-500">
                    <div className="flex lg:flex-col gap-6 lg:pt-[60px]">
                        <SidebarMenuItem
                            activeSidebar={activeVisualSidebar}
                            onClick={() => handleVisualSidebarChange("text")}
                            label="Text" />
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
            <div className="lg:ml-[130px] w-full lg:w-[320px]">
                {content}
            </div>
        </div>
    );
};

export default VisualSidebar;