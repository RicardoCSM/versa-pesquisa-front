import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface SelectInputProps {
    id?: string;
    label: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ id, label }) => {
    const [selectedColor, setSelectedColor] = useState("#1565C0");

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <label className="text-gray-700">{label}</label>
            <div className="w-[200px]">
                <select id="countries" className="bg-[#F8F2E2] border border-[#1565C0] text-gray-700 rounded-md block w-full p-1">
                    <option selected>Roboto</option>
                </select>
            </div>
        </div>
    );
}

export default SelectInput;