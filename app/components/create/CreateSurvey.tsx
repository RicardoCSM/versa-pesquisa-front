'use client';

import { useState } from "react";
import Survey from "./survey/Survey";
import EditHeading from "./survey/sidebar/EditHeading";
import EditQuestion from "./survey/sidebar/EditQuestion";

const CreateSurvey = () => {
    const [isEditing, setEditing] = useState(false);
    const [editType, setEditType] = useState<JSX.Element | null>(null);

    const handleToggleEdit = (type: string) => {
        setEditing(!isEditing);
        switch (type) {
            case 'heading':
                setEditType(<EditHeading />);
                break;
            case 'newQuestion':
                setEditType(<EditQuestion />);
                break;
            case 'question':
                setEditType(<EditQuestion />);
                break;
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className={`flex w-full ${isEditing ? 'lg:w-[71.7%]' : ''} border-b lg:border-b-0 border-gray-500`}>
                <div className="flex justify-center p-3 w-full">
                    <Survey 
                        title="My test survey" 
                        onToggleEdit={handleToggleEdit}
                        isCreateMode/>
                </div>
            </div>
            {isEditing && 
                <div className="lg:w-[28.3%] mb-3 md:mb-0">
                    <div className="border-l-0 lg:border-l lg:fixed lg:h-screen border-gray-500"></div>
                    <div className="w-full flex justify-center ">
                        {isEditing ? editType : ''}
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateSurvey;