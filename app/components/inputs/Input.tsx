'use client';

import React from "react";

interface InputProps {
    id: string;
    placehoder: string;
    type?: string;
    accept?: string;
    disabled?: boolean;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({
    id,
    placehoder,
    type = "text",
    accept,
    disabled,
    required,
}) => {

    return (
        <div className="w-full relative" aria-label={placehoder}>
            <input
                id={id}
                disabled={disabled}
                accept={accept}
                placeholder={placehoder}
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
                `}
            />
        </div>
    )
}

export default Input;