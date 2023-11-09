'use client';

import { RiFileExcel2Fill } from "react-icons/ri";
import Button from "../buttons/Button";

const Integration = () => {
    return (
        <div className="flex flex-col md:flex-row w-3/4 border rounded-lg border-[#1565C0] items-center h-auto md:max-h-[72px]">
            <div className="w-full md:w-1/5 p-3">
                <RiFileExcel2Fill className="m-auto text-green-800" size={52} />
            </div>
            <div className="w-full md:w-3/5 flex flex-col p-1">
                <h1 className="text-xl">Integrações aqui</h1>
                <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="w-full md:w-1/5 p-3">
                <Button small label="Connect"/>
            </div>
        </div>
    )
}

export default Integration;