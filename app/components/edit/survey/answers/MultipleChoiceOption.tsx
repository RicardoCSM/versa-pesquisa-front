'use client';

import IQuestionOption from "@/app/interfaces/IQuestionOption";
import questionOptionsService from "@/app/services/questionOptions.service";
import { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";
import toast from "react-hot-toast";

interface MultipleChoiceOptionProps {
    question_id: number
    control: Control
}

const MultipleChoiceOption: React.FC<MultipleChoiceOptionProps> = ({question_id, control}) => {
    const [options, setOptions] = useState<IQuestionOption[]>([])

    useEffect(() => {
        fetchOptions();
    }, [options]);

    const fetchOptions = async () => {
        try {
            const response = await questionOptionsService.get(question_id);
            setOptions(response.data);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div>
                {options.map((option) => ( 
                    <div key={option.id} className="flex items-center align-middle">
                        <Controller
                            name={`answers[${question_id}]`}
                            control={control}
                            render={({ field }) => (
                                <input
                                type="radio"
                                value={option.option_text}
                                onChange={(e) => field.onChange({ content: e.target.value, question_id })}
                                checked={field.value?.content === option.option_text}
                                className="w-4 h-4 bg-[#F8F2E2] cursor-pointer accent-gray-700"
                                />
                            )}
                            />
                        <label className="ms-2 font-medium text-gray-900">{option.option_text}</label>
                    </div>
                ))}
            </div> 
        </>  
    )
}

export default MultipleChoiceOption;