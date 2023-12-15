import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface TextInputProps {
    id: string;
    label: string;
    bigger?: boolean;
    value?: string;
    register: UseFormRegister<FieldValues>;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, bigger, value, register }) => {
    return (
        <div aria-label={label}>
            <div className="text-gray-700">{label}</div>
            <input
                id={id}
                type="text"
                defaultValue={value}
                {...register(id)}
                className={`bg-[#F8F2E2] border border-[#1565C0] text-gray-900 text-sm rounded-lg outline-none transition focus:border-black block ${bigger ? 'w-full' : 'w-[200px]'} p-1.5`}
            />
        </div>
    );
}

export default TextInput;