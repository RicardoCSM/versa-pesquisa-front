'use client';

import Title from "../Title";
import Button from "../buttons/Button";
import SidebarMenuItem from "../sidebar/SidebarMenuItem";

const CreateSettings = () => {

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-[71.7%] border-b lg:border-b-0 border-gray-500">
                <Title title="Settings" />
                <div className="flex justify-center w-full">

                    <div className="lg:fixed bottom-0 flex p-3 gap-3 w-1/3">
                        <Button small outline label="Revert" />
                        <Button small label="Apply" />
                    </div>
                </div>
            </div>
            <div className="lg:w-[320px]">
                <div className="border-l-0 lg:border-l lg:fixed lg:h-screen border-gray-500"></div>
                <div className="lg:mx-auto p-3 lg:mt-[65px] lg:w-2/3">
                    <div className="flex flex-row lg:flex-col lg:px-3 gap-6">
                        <SidebarMenuItem
                            activeSidebar={""}
                            onClick={() => {}}
                            label="General" />
                        <SidebarMenuItem
                            activeSidebar={""}
                            onClick={() => {}}
                            label="Responses" />
                        <SidebarMenuItem
                            activeSidebar={""}
                            onClick={() => {}}
                            label="Security" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSettings;