'use client';

import { RiSurveyLine } from "react-icons/ri";
import { TbLogicBuffer } from "react-icons/tb";
import { BsPalette } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Sidebar from "../sidebar/Sidebar";
import SidebarMenuItem from "../sidebar/SidebarMenuItem";
import { useEffect, useState } from "react";
import EditSurvey from "../edit/EditSurvey";
import EditLogic from "../edit/EditLogic";
import EditVisual from "../edit/EditVisual";
import EditSettings from "../edit/EditSettings";
import toast from "react-hot-toast";
import useSurveyStore from "@/app/hooks/useSurveyStore";

interface EditProps {
    toggleHome: (menuName: string) => void
};

const Edit: React.FC<EditProps> = ({toggleHome}) => {
    const [activeSidebar, setActiveSidebar] = useState<string>('survey');
    const [content, setContent] = useState<JSX.Element>();
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);

    useEffect(() => {
        if(!selectedSurveyId) {
            toggleHome('home');
            toast.error('Select a survey in the dashboard first!');
        }
    }, []);

    const handleSidebarChange = (sidebarName: string) => {
        setActiveSidebar(sidebarName);
        switch (sidebarName) {
            case "survey":
                setContent(<EditSurvey/>);
                break;
            case "logic":
                setContent(<EditLogic />);
                break;
            case "visual":
                setContent(<EditVisual/>);
                break;
            case "settings":
                setContent(<EditSettings />);
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
                        label="Survey" icon={<RiSurveyLine size={20} className="text-gray-500" />} />
                    <SidebarMenuItem
                        activeSidebar={activeSidebar}
                        onClick={() => handleSidebarChange("logic")}
                        label="Logic" icon={<TbLogicBuffer size={20} className="text-gray-500" />} />
                    <SidebarMenuItem
                        activeSidebar={activeSidebar}
                        onClick={() => handleSidebarChange("visual")}
                        label="Visual" icon={<BsPalette size={20} className="text-gray-500" />} />
                    <SidebarMenuItem
                        activeSidebar={activeSidebar}
                        onClick={() => handleSidebarChange("settings")}
                        label="Settings" icon={<FiSettings size={20} className="text-gray-500" />} />
                </Sidebar>
            </div>
            <div className="w-full md:ml-[238px] md:mt-[65px]">
                {!content && (
                    <EditSurvey/>
                )}
                {content}
            </div>
        </div>
    )
}

export default Edit;