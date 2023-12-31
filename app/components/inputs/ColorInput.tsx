import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { RiArrowDropDownLine } from "react-icons/ri";

interface ColorInputProps {
    id: string;
    label: string;
    default_value?: string;
    register: UseFormRegister<FieldValues>;
}

const ColorInput: React.FC<ColorInputProps> = ({ id, label, default_value, register }) => {
    const [selectedColor, setSelectedColor] = useState(default_value);

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div aria-label={label}>
            <div className="text-gray-700">{label}</div>
            <div className="w-[200px] rounded-sm items-center flex border-2 border-[#1565C0]">
                <input
                    id={id}
                    type="color"
                    {...register(id)}
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