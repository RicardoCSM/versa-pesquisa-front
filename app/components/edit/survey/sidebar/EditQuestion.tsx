'use client';

import SelectInput from "../../../inputs/SelectInput";
import TextInput from "../../../inputs/TextInput";
import SidebarTitle from "../../../sidebar/SidebarTitle";
import Button from "@/app/components/buttons/Button";
import CheckInput from "../../../inputs/CheckInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import useQuestionStore from "@/app/hooks/useQuestionStore";
import questionsService from "@/app/services/questions.service";
import toast from "react-hot-toast";
import ManageOptions from "./ManageOptions";

interface EditQuestionProps {
    refreshSurvey: () => void
}

const EditQuestion: React.FC<EditQuestionProps> = ({refreshSurvey}) => {
    const selectedQuestion = useQuestionStore((state) => state.selectedQuestion);
    const [selectedType, setSelectedType] = useState(selectedQuestion?.type);

    const typeOptions = [
        { value: "openEnded", label: "Open Ended" },
        { value: "multipleChoice", label: "Multiple Choice" },
    ];

    const {
        register,
        handleSubmit
    } = useForm<FieldValues>({
        defaultValues: {
          title: selectedQuestion?.title,
          type: selectedType,
          obrigatory: selectedQuestion?.obrigatory
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await questionsService.update({
                id: selectedQuestion?.id,
                title: data.title,
                type: selectedType,
                obrigatory: data.obrigatory ? 1 : 0
            });
            toast.success('Question updated with success!');
        } catch (error) {
            toast.error('Error updating the question!');
        }
    }

    const handleTypeChange = (selectedType: any) => {
        setSelectedType(selectedType);
    };

    return (
        <div>
            <SidebarTitle bigger label="Question"/>
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <SelectInput id="type" label="Type" options={typeOptions} onChange={handleTypeChange} default_value={selectedType}/>
                <TextInput id="title" label="Title" register={register}/>
                <CheckInput id="obrigatory" label="Obrigatory" register={register} default_value={selectedQuestion?.obrigatory}/>
                {selectedType == "multipleChoice" && (
                    <ManageOptions refreshSurvey={refreshSurvey}/>
                )}
                <div className="mt-3 w-2/3">
                    <Button onClick={handleSubmit(onSubmit)} small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default EditQuestion;