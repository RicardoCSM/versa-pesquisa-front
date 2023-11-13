import React from "react";
import { FiUpload } from "react-icons/fi";

interface FileInputProps {
    id?: string;
    label: string;
}

const FileInput: React.FC<FileInputProps> = ({ id, label }) => {
    return (
        <div className="relative cursor-pointer w-[200px]">
            <input
                className="absolute block py-2 px-4 w-full opacity-0"
                type="file"
                id={id}
            />
            <label htmlFor={id} className="border border-[#1565C0] text-[#1565C0] rounded-md py-2 px-4 w-full inline-flex items-center">
                <FiUpload className="text-[#1565C0]" size={18}/>
                <span className="ml-2">{label}</span>
            </label>
        </div>
    );
}

export default FileInput;
