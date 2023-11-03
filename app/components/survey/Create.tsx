'use client';

import { RiSurveyLine } from "react-icons/ri";
import { TbLogicBuffer } from "react-icons/tb";
import { BsPalette } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Sidebar from "../sidebar/Sidebar";
import SidebarMenuItem from "../sidebar/SidebarMenuItem";

const Create = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div>
                <Sidebar>
                    <SidebarMenuItem label="Survey" icon={<RiSurveyLine size={20} className="text-gray-500"/>} />
                    <SidebarMenuItem label="Logic" icon={<TbLogicBuffer size={20} className="text-gray-500"/>} />
                    <SidebarMenuItem label="Visual" icon={<BsPalette size={20} className="text-gray-500"/>} />
                    <SidebarMenuItem label="Settings" icon={<FiSettings size={20} className="text-gray-500"/>} />
                </Sidebar>
            </div>
            <div>
                <h1>Create</h1>
            </div>
        </div>
    )
}

export default Create;