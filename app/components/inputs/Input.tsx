'use client';

import React from "react";

import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
} from "react-hook-form";

interface InputProps {
    id: string;
    placeholder: string;
    type?: string;
    accept?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    placeholder,
    type = "text",
    accept,
    disabled,
    required,
    register,
    errors,
}) => {

    return (
        <div className="w-full relative" aria-label={placeholder}>
            <input
                id={id}
                disabled={disabled}
                accept={accept}
                placeholder={placeholder}
                {...register(id, { required })}
                type={type}
                className={`
                    peer
                    w-full
                    p-1
                    sm:p-2
                    font-light
                    bg-[#F8F2E2]
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${errors[id] ? 'border-red-700' : 'border-gray-300'}
                    ${errors[id] ? 'focus:border-red-700' : 'focus:border-black'}
                `}
            />
        </div>
    )
}

export default Input;