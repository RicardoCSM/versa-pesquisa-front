import React from "react";

interface TextInputProps {
    id?: string;
    label: string;
    bigger?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ id, label, bigger }) => {
    return (
        <div>
            <div className="text-gray-700">{label}</div>
            <input
                id={id}
                type="text"
                className={`bg-[#F8F2E2] border border-[#1565C0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ${bigger ? 'w-full' : 'w-[200px]'} p-1.5`}
            />
        </div>
    );
}

export default TextInput;