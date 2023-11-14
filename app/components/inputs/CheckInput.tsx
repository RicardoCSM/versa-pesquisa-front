import React from "react";

interface CheckInputProps {
    id?: string;
    label: string;
    bigger?: boolean;
}

const CheckInput: React.FC<CheckInputProps> = ({ id, label, bigger }) => {
    return (
        <div className={`flex items-center  ${bigger ? 'w-full' : 'w-[200px]'} gap-2`}>
            <input
                id={id}
                type="checkbox"
                className="bg-[#F8F2E2] border border-[#1565C0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 h-4"
            />
            <div className="text-gray-700">{label}</div>
        </div>
    );
}

export default CheckInput;