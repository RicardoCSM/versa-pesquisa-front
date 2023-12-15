import React, { useEffect, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckInputProps {
    id: string;
    label: string;
    bigger?: boolean;
    register: UseFormRegister<FieldValues>;
    default_value: any
}

const CheckInput: React.FC<CheckInputProps> = ({ id, label, bigger, register, default_value }) => {
    const [checked, setChecked] = useState(default_value);

    useEffect(() => {
        setChecked(default_value);
    }, [default_value]);
    
    return (
        <div aria-label={label} className={`flex items-center  ${bigger ? 'w-full' : 'w-[200px]'} gap-2`}>
            <input
                id={id}
                {...register(id)}
                type="checkbox"
                value="1"  
                checked={checked == 1}
                onChange={() => setChecked(!checked)}
                className="bg-[#F8F2E2] accent-gray-700 text-sm rounded-lg h-4"
            />
            <div className="text-gray-700">{label}</div>
        </div>
    );
}

export default CheckInput;