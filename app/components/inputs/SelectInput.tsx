import React from "react";

interface SelectOption {
    value: any;
    label: string;
}

interface SelectInputProps {
    id: string;
    label: string;
    options: SelectOption[];
    onChange: (selectedValue: any) => void;
    default_value?: any
}

const SelectInput: React.FC<SelectInputProps> = ({ id, label, options, onChange, default_value }) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };
    
    return (
        <div aria-label={label}>
            <label className="text-gray-700">{label}</label>
            <div className="w-[200px]">
                <select id={id} className="bg-[#F8F2E2] border border-[#1565C0] text-gray-700 rounded-md block w-full p-1" onChange={handleSelectChange} defaultValue={default_value}>
                {options.map((option) => (
                    <option 
                        className="bg-[#F8F2E2]"
                        aria-label={option.label}
                        key={option.value}
                        value={option.value}
                        >
                        {option.label}
                    </option>
                ))}
                </select>
            </div>
        </div>
    );
}

export default SelectInput;