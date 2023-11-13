import React from "react";

interface CheckInputProps {
    id?: string;
    label: string;
}

const CheckInput: React.FC<CheckInputProps> = ({ id, label }) => {
    return (
        <div className="flex items-center w-[200px] gap-2">
            <input
                id={id}
                type="checkbox"
                className="bg-[#F8F2E2] border border-[#1565C0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4 h-4"
            />
            <div className="text-gray-700">{label}</div>
        </div>
    );
}

export default CheckInput;