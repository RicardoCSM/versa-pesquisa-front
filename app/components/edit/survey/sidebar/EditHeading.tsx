'use client';

import useSurveyStore from "@/app/hooks/useSurveyStore";
import TextInput from "../../../inputs/TextInput";
import SidebarTitle from "../../../sidebar/SidebarTitle";
import Button from "@/app/components/buttons/Button";
import surveysService from "@/app/services/surveys.service";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface EditHeadingProps {
    'title'?: string,
    'description'?: string
};

const EditHeading: React.FC<EditHeadingProps> = ({title, description}) => {
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);

    const {
        register,
        handleSubmit
    } = useForm<FieldValues>({
        defaultValues: {
          title: title,
          description: description,
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            if(selectedSurveyId) {
                const response = await surveysService.update({
                    id: selectedSurveyId,
                    title: data.title,
                    description: data.description
                });
            }
            toast.success('Theme updated with success!');
        } catch (error) {
            toast.error('Error updating the theme!');
        }
    }

    return (
        <div>
            <SidebarTitle bigger label="Heading"/>
            <div className="w-full flex flex-col items-center p-3 gap-3">
                <TextInput id="title" label="Title" value={title} register={register}/>
                <TextInput id="description" label="Description" value={description} register={register}/>
                <div className="mt-3 w-2/3">
                    <Button onClick={handleSubmit(onSubmit)} small label="Apply" />
                </div>
            </div>
        </div>
    )
}

export default EditHeading;