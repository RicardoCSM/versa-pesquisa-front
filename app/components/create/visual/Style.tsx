'use client';

import ColorInput from "../../inputs/ColorInput";
import SelectInput from "../../inputs/SelectInput";
import SidebarTitle from "../../sidebar/SidebarTitle";

const Style = () => {
    return (
        <div>
            <SidebarTitle bigger label="Style"/>
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <ColorInput label="Primary Color"/>
                <ColorInput label="Secondary Color"/>
                <SelectInput label="Font"/>
            </div>
        </div>
    )
}

export default Style;