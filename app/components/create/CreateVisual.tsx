'use client';

import DeviceToggle from "./visual/DeviceToggle";
import VisualSidebar from "./visual/VisualSidebar";

const CreateVisual = () => {

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="lg:w-3/5 p-2 border-b lg:border-b-0 border-gray-500">
                <DeviceToggle />
            </div>
            <div className="lg:w-2/5 flex flex-col lg:flex-row">
                <VisualSidebar />
            </div>
        </div>
    )
}

export default CreateVisual;