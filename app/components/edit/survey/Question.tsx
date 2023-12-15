'use client';

import React from "react";
import OpenEndedOption from "./answers/OpenEndedOption";
import MultipleChoiceOption from "./answers/MultipleChoiceOption";
import { BsPencil, BsTrash } from "react-icons/bs";
import questionsService from "@/app/services/questions.service";
import toast from "react-hot-toast";
import { Control, Controller, FieldValues } from "react-hook-form";
import MultipleChoiceOptionStatic from "./answers/MultipleChoiceOptionStatic";
import OpenEndedOptionStatic from "./answers/OpenEndedOptionStatic";

interface QuestionProps {
    id: number
    type?: string
    title: string
    options?: JSON
    validation?: JSON
    settings?: JSON
    obrigatory?: boolean
    score?: number
    onToggleEdit: () => void
    questionDeleted: () => void
    isCreateMode: boolean
    control: Control<FieldValues>
}

const Question: React.FC<QuestionProps> = ({
    id, title, obrigatory, type, onToggleEdit, isCreateMode, questionDeleted, control
}) => {
    const renderOption = () => {
        switch (type) {
          case 'multipleChoice':
            return !isCreateMode ? (
                <MultipleChoiceOption control={control} question_id={id} />
              ) : (
                <MultipleChoiceOptionStatic question_id={id} />
              );
          case 'openEnded':
          default:
            return !isCreateMode ? (
                <OpenEndedOption control={control} question_id={id} />
              ) : (
                <OpenEndedOptionStatic />
              );
        }
    };

    const deleteQuestion = async () => {
        try {
            await questionsService.delete(id);
            toast.success('Question deleted with success!');
            questionDeleted();
        } catch (error) {
            toast.error('Error deleting the question!');
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex gap-2">
                <div className={`text-justify ${obrigatory ? 'w-[98%]' : 'w-full'}`} aria-label={title}>
                    {title}
                </div>
                {obrigatory ? (
                    <div className="flex md:w-[2%] justify-end text-sm text-red-500 pt-1" aria-label="Required">
                        *
                    </div>
                ) : <></>}
                {isCreateMode && (
                    <div className="flex align-middle gap-2">
                        <div className="cursor-pointer" onClick={deleteQuestion} aria-label="Edit">
                            <BsTrash />
                        </div>
                        <div className="cursor-pointer" onClick={onToggleEdit} aria-label="Edit">
                            <BsPencil />
                        </div>
                    </div>
                )}
            </div>
            <Controller
                name={`answers[${id}]`}
                control={control}
                render={({ field }) => <div>{renderOption()}</div>}
            />
        </div>
    )
}

export default Question;