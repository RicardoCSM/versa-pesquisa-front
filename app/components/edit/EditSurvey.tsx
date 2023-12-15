'use client';

import { useEffect, useState } from "react";
import Survey from "./survey/Survey";
import EditHeading from "./survey/sidebar/EditHeading";
import EditQuestion from "./survey/sidebar/EditQuestion";
import ISurvey from "@/app/interfaces/ISurvey";
import useThemeStore from "@/app/hooks/useThemeStore";
import ITheme from "@/app/interfaces/ITheme";
import useSurveyStore from "@/app/hooks/useSurveyStore";
import surveysService from "@/app/services/surveys.service";

interface SurveyDetails {
    'survey': ISurvey | null,
    'questions': []| null,
    'pages': []| null,
    'theme': ITheme | null,
    'settings': []
}

const EditSurvey = () => {
    const [isEditing, setEditing] = useState(false);
    const [editType, setEditType] = useState<JSX.Element | null>(null);
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);
    const selectedTheme = useThemeStore((state) => state.selectedTheme);
    const setSelectedTheme = useThemeStore((state) => state.setSelectedTheme);
    const [seed, setSeed] = useState(1);
    const reset = () => {
        setSeed(Math.random());
    }
    const [surveyDetails, setSurveyDetails] = useState<SurveyDetails>({
        survey: null,
        questions: [],
        pages: [],
        theme: null,
        settings: [],
    });
    useEffect(() => {fetchSurvey()}, [surveyDetails]);

    const fetchSurvey = async () => {
        try {
            if(selectedSurveyId) {
                const response = await surveysService.getDetails(selectedSurveyId);
                setSurveyDetails(response.data);
                setSelectedTheme(response.data.theme);
            } else {
                console.log('None survey selected');
            }
        } catch (error) {
            console.log(error)
        }
    };

    const handleToggleEdit = (type: string) => {
        setEditing(!isEditing);
        switch (type) {
            case 'heading':
                setEditType(<EditHeading title={surveyDetails.survey?.title} description={surveyDetails.survey?.description}/>);
                break;
            case 'question':
                setEditType(<EditQuestion refreshSurvey={reset}/>);
                break;
            case 'deleted':
                setEditing(false);
                setEditType(null);
                break;
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className={`flex w-full ${isEditing ? 'lg:w-[71.7%]' : ''} border-b lg:border-b-0 border-gray-500`}>
                <div className="flex justify-center p-2 xl:pt-3 w-full">
                    <Survey
                        key={seed}
                        id={surveyDetails.survey?.id}
                        questions={surveyDetails.questions} 
                        title={surveyDetails.survey?.title}
                        description={surveyDetails.survey?.description}
                        category={surveyDetails.survey?.category}
                        type={surveyDetails.survey?.type}
                        settings={surveyDetails.settings}
                        theme={selectedTheme}
                        onToggleEdit={handleToggleEdit}
                        pages={surveyDetails.pages}
                        isCreateMode/>
                </div>
            </div>
            {isEditing && editType != null && 
                <div className="lg:w-[28.3%] mb-3 md:mb-0">
                    <div className="border-l-0 lg:border-l lg:fixed lg:h-screen border-gray-500"></div>
                    <div className="w-full items-center first-letter:xl:pl-[45px] xl:mt-[40px]">
                        {isEditing ? editType : ''}
                    </div>
                </div>
            }
        </div>
    )
}

export default EditSurvey;