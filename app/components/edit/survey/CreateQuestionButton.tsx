import useSurveyStore from "@/app/hooks/useSurveyStore";
import questionsService from "@/app/services/questions.service";
import React from "react";
import toast from "react-hot-toast";
import { GrAddCircle } from "react-icons/gr";

interface CreateQuestionButtonProps {
  page_id: number,
}

const CreateQuestionButton: React.FC<CreateQuestionButtonProps> = ({page_id}) => {
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);
    const createQuestion = async () => {
      try {
        if (selectedSurveyId) {
          await questionsService.create({
            survey_id: selectedSurveyId,
            position: 1,
            page_id: page_id
          });
          toast.success('Question created with success!');
        }
      } catch (error) {
        console.log(error)
        toast.error('Error creating the question!');
      }
    };

    return (
        <div className="flex justify-center pt-2">
            <div
                aria-label="Add new question"
                className="flex gap-2 items-center align-middle cursor-pointer"
                onClick={createQuestion}>
                <GrAddCircle />
                <p>Add new question</p>
            </div>
        </div>
    );
}

export default CreateQuestionButton;