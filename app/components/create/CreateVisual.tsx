'use client';

import Button from "../buttons/Button";
import DeviceToggle from "./visual/DeviceToggle";
import VisualSidebar from "./visual/VisualSidebar";

const CreateVisual = () => {

    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-3/5 p-2 border-b md:border-b-0 border-gray-500">
                <DeviceToggle />
                <div className="flex justify-center w-full">
                    <div className="flex p-3 md:p-0 gap-3 w-1/3">
                        <Button small outline label="Revert" />
                        <Button small label="Apply" />
                    </div>
                </div>
            </div>
            <div className="md:w-2/5 flex flex-col md:flex-row">
                <VisualSidebar />
            </div>
        </div>
    )
}

export default CreateVisual;