'use client';

import useSurveyStore from "@/app/hooks/useSurveyStore";
import Title from "../Title";
import Button from "../buttons/Button";
import CheckInput from "../inputs/CheckInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import surveySettingsService from "@/app/services/surveySettings.service";
import { useEffect, useState } from "react";
import ISurveySetting from "@/app/interfaces/ISurveySetting";
import toast from "react-hot-toast";

const EditSettings = () => {
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);
    const [setting, setSurveySetting] = useState<ISurveySetting>();

    useEffect(() => {
        fetchSetting()
    }, []);

    const fetchSetting = async () => {
        try {
            if(selectedSurveyId) {
                const response = await surveySettingsService.get(selectedSurveyId)
                setSurveySetting(response.data)
            } else {
                console.log('None survey selected');
            }
        } catch (error) {
            console.log(error)
        }
    };

    const {
        register,
        handleSubmit
    } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const response = await surveySettingsService.update({
                id: setting?.id,
                create_test: data.create_test ? 1 : 0,
                collect_email_addresses: data.collect_email_addresses ? 1 : 0,
                send_participants_copy_of_responses: data.send_participants_copy_of_responses ? 1 : 0,
                make_questions_mandatory_by_default: data.make_questions_mandatory_by_default ? 1 : 0,
                limit_to_1_answer: data.limit_to_1_answer ? 1 : 0,
                show_link_to_send_another_answer: data.show_link_to_send_another_answer ? 1 : 0,
            });
            toast.success('Settings updated with success!');
        } catch (error) {
            toast.error('Error updating the settings!');
        }
    }

    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full">
                <Title title="Settings" />
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col w-2/4 mt-5 gap-3">
                        <CheckInput id="create_test"
                            label="Create test" bigger
                            register={register} default_value={setting?.create_test}/>
                        <CheckInput id="collect_email_addresses"
                            label="Collect email addresses" bigger
                            register={register} default_value={setting?.collect_email_addresses}/>
                        <CheckInput id="send_participants_copy_of_responses"
                            label="Send participants a copy of their responses" bigger
                            register={register} default_value={setting?.send_participants_copy_of_responses}/>
                        <CheckInput id="make_questions_mandatory_by_default"
                            label="Make questions mandatory by default" bigger
                            register={register} default_value={setting?.make_questions_mandatory_by_default}/>
                        <CheckInput id="limit_to_1_answer" 
                            label="Limit to 1 answer" bigger
                            register={register} default_value={setting?.limit_to_1_answer}/>
                        <CheckInput id="show_link_to_send_another_answer"
                            label="Show link to send another answer" bigger
                            register={register} default_value={setting?.show_link_to_send_another_answer}/>
                    </div>
                    <div className="md:fixed bottom-0 flex p-3 gap-3 w-1/3">
                        <Button small outline label="Revert" onClick={() => console.log(setting?.make_questions_mandatory_by_default)}/>
                        <Button small label="Apply" onClick={handleSubmit(onSubmit)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditSettings;