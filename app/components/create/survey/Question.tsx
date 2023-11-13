'use client';

import React from "react";
import OpenEndedOption from "./answers/OpenEndedOption";
import MultipleChoiceOption from "./answers/MultipleChoiceOption";
import { BsPencil } from "react-icons/bs";

interface QuestionProps {
    type?: string
    title: string
    options?: JSON
    validation?: JSON
    settings?: JSON
    obrigatory?: boolean
    score?: number
    onToggleEdit: () => void
    isCreateMode: boolean
}

const Question: React.FC<QuestionProps> = ({
    title, obrigatory, type, onToggleEdit, isCreateMode
}) => {
    const renderOption = () => {
        switch (type) {
          case 'multipleChoice':
            return <MultipleChoiceOption />;
          case 'openEnded':
          default:
            return <OpenEndedOption />;
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-2">
                <div className={`text-justify ${obrigatory ? 'w-4/5' : 'w-full'}`}>
                    {title}
                </div>
                {obrigatory && (
                    <div className="flex w-1/5 justify-end text-sm text-red-500 pt-1">
                        Required
                    </div>
                )}
                {isCreateMode && (
                <div className="cursor-pointer" onClick={onToggleEdit}>
                    <BsPencil />
                </div>
                )}
            </div>
            {renderOption()}
        </div>
    )
}

export default Question;