'use client';

import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon,
    type = "button"
}) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-xl
                hover:opacity-80
                transition
                w-full
                ${outline ? 'bg-[#F8F2E2]' : 'bg-[#1565C0]'}
                ${outline ? 'border-black' : 'bg-[#1565C0]'}
                ${outline ? 'text-black' : 'text-[#F8F2E2]'}
                ${small ? 'py-2' : 'py-2'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'font-light' : 'font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
            `}
        >
            {Icon && (
                <Icon
                    size={24}
                    className="
                        absolute
                        left-4
                        top-2
                    "
                />
            )}
            {label}
        </button>
    )
}

export default Button;