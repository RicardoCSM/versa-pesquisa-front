'use client';

import { RiSurveyLine } from "react-icons/ri";
import { TbLogicBuffer } from "react-icons/tb";
import { BsPalette } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Sidebar from "../sidebar/Sidebar";
import SidebarMenuItem from "../sidebar/SidebarMenuItem";
import { useState } from "react";
import CreateSurvey from "../create/CreateSurvey";
import CreateLogic from "../create/CreateLogic";
import CreateVisual from "../create/CreateVisual";
import CreateSettings from "../create/CreateSettings";

const Create = () => {
    const [activeSidebar, setActiveSidebar] = useState<string>('survey');
    const [content, setContent] = useState<JSX.Element>(<CreateSurvey />);

    const handleSidebarChange = (sidebarName: string) => {
        setActiveSidebar(sidebarName);
        switch (sidebarName) {
            case "survey":
                setContent(<CreateSurvey />);
                break;
            case "logic":
                setContent(<CreateLogic />);
                break;
            case "visual":
                setContent(<CreateVisual />);
                break;
            case "settings":
                setContent(<CreateSettings />);
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
                            onClick={() => handleSidebarChange("survey")}
                            label="Survey" icon={<RiSurveyLine size={20} className="text-gray-500"/>} />
                        <SidebarMenuItem
                            activeSidebar={activeSidebar}
                            onClick={() => handleSidebarChange("logic")}
                            label="Logic" icon={<TbLogicBuffer size={20} className="text-gray-500"/>} />
                        <SidebarMenuItem
                            activeSidebar={activeSidebar}
                            onClick={() => handleSidebarChange("visual")}
                            label="Visual" icon={<BsPalette size={20} className="text-gray-500"/>} />
                        <SidebarMenuItem
                            activeSidebar={activeSidebar}
                            onClick={() => handleSidebarChange("settings")}
                            label="Settings" icon={<FiSettings size={20} className="text-gray-500"/>} />
                </Sidebar>
            </div>
            <div className="w-full md:ml-[238px] md:mt-[65px]">
                {content}
            </div>
        </div>
    )
}

export default Create;