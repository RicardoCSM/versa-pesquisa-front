'use client';

import Button from "@/app/components/buttons/Button";
import ColorInput from "../../../inputs/ColorInput";
import SelectInput from "../../../inputs/SelectInput";
import SidebarTitle from "../../../sidebar/SidebarTitle";

const Text = () => {
    return (
        <div>
            <SidebarTitle bigger label="Text" />
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <ColorInput label="Primary Color" />
                <ColorInput label="Secondary Color" />
                <SelectInput label="Font" />
                <div className="mt-3 w-2/3">
                    <Button small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default Text;