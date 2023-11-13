import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface ColorInputProps {
    id?: string;
    label: string;
}

const ColorInput: React.FC<ColorInputProps> = ({ id, label }) => {
    const [selectedColor, setSelectedColor] = useState("#1565C0");

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <div className="text-gray-700">{label}</div>
            <div className="w-[200px] rounded-sm items-center flex border-2 border-[#1565C0]">
                <input
                    id={id}
                    type="color"
                    value={selectedColor}
                    onChange={handleColorChange}
                    className="w-1/2 cursor-pointer"
                />
                <RiArrowDropDownLine size={24} className="text-gray-700"/>
                <p className="text-gray-700 cursor-default">{selectedColor}</p>
            </div>
        </div>
    );
}

export default ColorInput;