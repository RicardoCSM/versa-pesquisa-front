'use client';

import TextInput from "../../../inputs/TextInput";
import SidebarTitle from "../../../sidebar/SidebarTitle";
import Button from "@/app/components/buttons/Button";

interface EditHeadingProps {
    'title'?: string,
    'description'?: string,
};

const EditHeading: React.FC<EditHeadingProps> = ({title, description}) => {
    return (
        <div>
            <SidebarTitle bigger label="Heading"/>
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <TextInput label="Title" value={title}/>
                <TextInput label="Description" value={description}/>
                <div className="mt-3 w-2/3">
                    <Button small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default EditHeading;