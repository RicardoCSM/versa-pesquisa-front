'use client';

import { useState } from "react";
import Title from "../Title";
import Sidebar from "../sidebar/Sidebar";
import SidebarMenuItem from "../sidebar/SidebarMenuItem";
import Summary from "../results/Summary";
import Questions from "../results/Questions";

const Results = () => {
    const [activeSidebar, setActiveSidebar] = useState<string>('summary');
    const [content, setContent] = useState<JSX.Element>(<Summary />);

    const handleSidebarChange = (sidebarName: string) => {
        setActiveSidebar(sidebarName);
        switch (sidebarName) {
            case "summary":
                setContent(<Summary />);
                break;
            case "questions":
                setContent(<Questions />);
                break;
            case "settings":
                setContent(<h1>Settings</h1>);
                break;
            default:
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:pt-[60px]">
                <Sidebar>
                    <SidebarMenuItem
                        activeSidebar={activeSidebar}
                        onClick={() => handleSidebarChange("summary")}
                        label="Summary" />
                    <SidebarMenuItem
                        activeSidebar={activeSidebar}
                        onClick={() => handleSidebarChange("questions")}
                        label="Questions" />
                    <SidebarMenuItem
                        activeSidebar={activeSidebar}
                        onClick={() => handleSidebarChange("settings")}
                        label="Settings" />
                </Sidebar>
            </div>
            <div className="w-full md:ml-[238px] md:mt-[65px]">
                <Title title="Results" />
                <div className="mt-[30px] flex flex-col w-full items-center">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Results;