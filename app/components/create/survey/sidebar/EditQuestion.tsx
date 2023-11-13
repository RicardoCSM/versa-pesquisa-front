'use client';

import SelectInput from "@/app/components/inputs/SelectInput";
import TextInput from "../../../inputs/TextInput";
import SidebarTitle from "../../../sidebar/SidebarTitle";
import Button from "@/app/components/buttons/Button";
import CheckInput from "@/app/components/inputs/CheckInput";
import { IoMdAdd } from "react-icons/io";
import { BsPencil } from "react-icons/bs";

const EditQuestion = () => {
    return (
        <div>
            <SidebarTitle bigger label="Question"/>
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <SelectInput label="Type"/>
                <TextInput label="Title"/>
                <CheckInput label="Obrigatory"/>
                <div className="flex flex-col w-[200px] gap-2">
                    <div className="flex w-full border-b border-gray-700 items-center justify-between">
                        <div className="text-gray-700">Options</div>
                        <IoMdAdd className="text-gray-700 cursor-pointer"/>
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <div className="text-gray-700">Option 1</div>
                        <BsPencil className="text-gray-700 cursor-pointer"/>
                    </div>
                </div>
                <div className="mt-3 w-2/3">
                    <Button small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default EditQuestion;