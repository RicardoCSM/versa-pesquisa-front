'use client';

import useSurveyStore from "@/app/hooks/useSurveyStore";
import responsesService from "@/app/services/responses.service";
import { useEffect, useState } from "react";

const Summary = () => {
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);
    const [responses, setResponses] = useState();
    const [totalSend, setTotalSend] = useState<number>(0);
    const [surveyResponsesPercentage, setSurveyResponsesPercentage] = useState<number>(0);

    useEffect(() => {
        fetchResponses();
    }, [])

    const fetchResponses = async () => {
        try {
            if(selectedSurveyId) {  
                const response = await responsesService.getPerSurvey(selectedSurveyId);
                setResponses(response.data);
                const totalSend = response.data.length;
                const surveyResponses = response.data.filter((response: any) => response.ended_at !== null);
                const surveyResponsesPercentage = (surveyResponses.length / totalSend) * 100;
                setTotalSend(totalSend);
                setSurveyResponsesPercentage(surveyResponsesPercentage);
            } else {
                console.log("Error fetching results!");
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col w-3/4 min-h-[250px] border border-[#1565C0] rounded-lg mb-6">
            <div className="flex justify-center p-3 w-full text-xl">
                Survey Stats
            </div>
            <div className="flex flex-col md:flex-row p-2 mx-7 gap-3 justify-around">
                <div className="border-l-8 border-[#1565C0] h-[150px]">
                    <div className="p-2">
                        <div className="text-2xl">{totalSend}</div>
                        <p>Total Send</p>
                    </div>
                </div>
                <div className="border-l-8 border-[#555F71] h-[150px]">
                    <div className="p-2">
                        <div className="text-2xl">{surveyResponsesPercentage.toFixed(2)} %</div>
                        <p>Survey Responses</p>
                    </div>
                </div>
                <div className="border-l-8 border-[#6F5575] h-[150px]">
                    <div className="p-2">
                        <div className="text-2xl">{totalSend}</div>
                        <p>Opened</p>
                    </div>
                </div>
                <div className="border-l-8 border-[#221B00] h-[150px]">
                    <div className="p-2">
                        <div className="text-2xl">{totalSend}</div>
                        <p>Clicked</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;