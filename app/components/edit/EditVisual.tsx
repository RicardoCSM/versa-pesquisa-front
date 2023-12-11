'use client';

import DeviceToggle from "./visual/DeviceToggle";
import VisualSidebar from "./visual/VisualSidebar";

const EditVisual = () => {
    return (
        <div className="flex flex-col xl:flex-row w-full">
            <div className="xl:w-3/5 p-2 border-b xl:border-b-0 border-gray-500">
                <DeviceToggle/>
            </div>
            <div className="xl:w-2/5 flex flex-col xl:flex-row">
                <VisualSidebar />
            </div>
        </div>
    )
}

export default EditVisual;