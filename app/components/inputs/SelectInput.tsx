import React from "react";

interface SelectOption {
    value: any;
    label: string;
}

interface SelectInputProps {
    id?: string;
    label: string;
    options: SelectOption[];
}

const SelectInput: React.FC<SelectInputProps> = ({ id, label,options }) => {

    return (
        <div aria-label={label}>
            <label className="text-gray-700">{label}</label>
            <div className="w-[200px]">
                <select id="countries" className="bg-[#F8F2E2] border border-[#1565C0] text-gray-700 rounded-md block w-full p-1">
                {options.map((option) => (
                    <option aria-label={option.label} key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                </select>
            </div>
        </div>
    );
}

export default SelectInput;