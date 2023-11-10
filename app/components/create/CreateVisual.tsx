'use client';

import Button from "../buttons/Button";
import DeviceToggle from "./visual/DeviceToggle";
import VisualSidebar from "./visual/VisualSidebar";

const CreateVisual = () => {

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="lg:w-3/5 p-2 border-b lg:border-b-0 border-gray-500">
                <DeviceToggle />
                <div className="flex justify-center w-full">
                    <div className="flex p-3 lg:p-0 gap-3 w-1/3">
                        <Button small outline label="Revert" />
                        <Button small label="Apply" />
                    </div>
                </div>
            </div>
            <div className="lg:w-2/5 flex flex-col lg:flex-row">
                <VisualSidebar />
            </div>
        </div>
    )
}

export default CreateVisual;