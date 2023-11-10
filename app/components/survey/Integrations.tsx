'use client';

import { useState } from "react";
import Container from "../Container";
import Title from "../Title";
import Integration from "../integrations/Integration";
import Sidebar from "../sidebar/Sidebar";
import SidebarMenuItem from "../sidebar/SidebarMenuItem";
import SidebarTitle from "../sidebar/SidebarTitle";

const Integrations = () => {
    const [activeSidebar, setActiveSidebar] = useState<string>('all');

    const handleCategoriesChange = (contentName: string) => {
        setActiveSidebar(contentName);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div>
                <Sidebar>
                    <SidebarTitle label="Categories"/>
                        <SidebarMenuItem
                            small
                            activeSidebar={activeSidebar}
                            onClick={() => handleCategoriesChange('all')}
                            label="All"/>
                        <SidebarMenuItem
                            small
                            activeSidebar={activeSidebar}
                            onClick={() => handleCategoriesChange('analytics')}
                            label="Analytics"/>
                        <SidebarMenuItem
                            small
                            activeSidebar={activeSidebar}
                            onClick={() => handleCategoriesChange('automation')}
                            label="Automation"/>
                        <SidebarMenuItem
                            small
                            activeSidebar={activeSidebar}
                            onClick={() => handleCategoriesChange('collaboration')}
                            label="Collaboration"/>
                        <SidebarMenuItem
                            small
                            activeSidebar={activeSidebar}
                            onClick={() => handleCategoriesChange('documents')}
                            label="Documents"/>
                        <SidebarMenuItem
                            small
                            activeSidebar={activeSidebar}
                            onClick={() => handleCategoriesChange('payment')}
                            label="Payment"/>
                </Sidebar>
            </div>
            <div className="w-full md:ml-[238px] md:mt-[65px]">
                <Title title="Integrations"/>
                <Container>
                    <div className="flex flex-col w-full items-center py-9 gap-6">
                        <Integration />
                        <Integration />
                        <Integration />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Integrations;