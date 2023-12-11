'use client';

import { useEffect, useState } from "react";
import Survey from "./survey/Survey";
import EditHeading from "./survey/sidebar/EditHeading";
import EditQuestion from "./survey/sidebar/EditQuestion";
import ISurvey from "@/app/interfaces/ISurvey";
import ITheme from "@/app/interfaces/ITheme";
import IQuestion from "@/app/interfaces/IQuestion";
import useThemeStore from "@/app/hooks/useThemeStore";

interface EditSurveyProps {
    'survey': ISurvey | null,
    'questions': IQuestion[] | null,
    'pages': []| null,
    'settings': [],
};

const EditSurvey: React.FC<EditSurveyProps> = ({survey, questions, pages, settings}) => {
    const [isEditing, setEditing] = useState(false);
    const [editType, setEditType] = useState<JSX.Element | null>(null);
    const selectedTheme = useThemeStore((state) => state.selectedTheme);
    const handleToggleEdit = (type: string) => {
        setEditing(!isEditing);
        switch (type) {
            case 'heading':
                setEditType(<EditHeading title={survey?.title} description={survey?.description}/>);
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
                <div className="flex justify-center p-2 xl:pt-3 w-full">
                    <Survey
                        questions={questions} 
                        title={survey?.title}
                        description={survey?.description}
                        category={survey?.category}
                        type={survey?.type}
                        settings={settings}
                        theme={selectedTheme}
                        onToggleEdit={handleToggleEdit}
                        isCreateMode/>
                </div>
            </div>
            {isEditing && 
                <div className="lg:w-[28.3%] mb-3 md:mb-0">
                    <div className="border-l-0 lg:border-l lg:fixed lg:h-screen border-gray-500"></div>
                    <div className="lg:fixed xl:pl-[45px] xl:mt-[40px]">
                        {isEditing ? editType : ''}
                    </div>
                </div>
            }
        </div>
    )
}

export default EditSurvey;