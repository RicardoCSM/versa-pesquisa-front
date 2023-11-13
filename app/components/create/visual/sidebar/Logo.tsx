'use client';

import Button from "@/app/components/buttons/Button";
import SidebarTitle from "../../../sidebar/SidebarTitle";
import FileInput from "@/app/components/inputs/FileInput";

const Logo = () => {
    return (
        <div>
            <SidebarTitle bigger label="Logo" />
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <FileInput label="Logo"/>
                <div className="mt-3 w-2/3">
                    <Button small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default Logo;