'use client';

import IQuestionOption from "@/app/interfaces/IQuestionOption";
import questionOptionsService from "@/app/services/questionOptions.service";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface MultipleChoiceOptionStaticProps {
    question_id: number
}

const MultipleChoiceOptionStatic: React.FC<MultipleChoiceOptionStaticProps> = ({ question_id }) => {
    const [options, setOptions] = useState<IQuestionOption[]>([])

    useEffect(() => {
        fetchOptions();
    }, [options]);

    const fetchOptions = async () => {
        try {
            const response = await questionOptionsService.get(question_id);
            setOptions(response.data);
        } catch (error) {
            toast.error("Error fetching the question options!")
        }
    };
    return (
        <>
            <div>
                {options.map((option) => (
                    <div key={option.id} className="flex items-center align-middle">
                        <input type="radio" name="multipleChoice" className="w-4 h-4 bg-[#F8F2E2] cursor-pointer accent-gray-700" />
                        <label className="ms-2 font-medium text-gray-900">{option.option_text}</label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MultipleChoiceOptionStatic; 