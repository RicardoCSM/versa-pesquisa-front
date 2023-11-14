'use client';

import SelectInput from "../../../inputs/SelectInput";
import ColorInput from "../../../inputs/ColorInput";
import SidebarTitle from "../../../sidebar/SidebarTitle";
import Button from "@/app/components/buttons/Button";
import FileInput from "../../../inputs/FileInput";

const Background = () => {
    return (
        <div>
            <SidebarTitle bigger label="Background" />
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <SelectInput label="Type" />
                <ColorInput label="Background Color"/>
                <FileInput label="Background image"/>
                <div className="mt-3 w-2/3">
                    <Button small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default Background;