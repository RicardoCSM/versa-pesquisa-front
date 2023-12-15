'use client';

import React, { useEffect, useState } from "react";
import SurveyHeading from "./SurveyHeading";
import Question from "./Question";
import ITheme from "@/app/interfaces/ITheme";
import IQuestion from "@/app/interfaces/IQuestion";
import toast from "react-hot-toast";
import useQuestionStore from "@/app/hooks/useQuestionStore";
import Button from "../../buttons/Button";
import IResponse from "@/app/interfaces/IResponse";
import responsesService from "@/app/services/responses.service";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import answersService from "@/app/services/answers.service";
import CreateQuestionButton from "./CreateQuestionButton";
import pagesService from "@/app/services/pages.service";

interface SurveyProps {
  id?: number,
  title?: string
  description?: string
  category?: string
  settings: []
  theme?: ITheme | null
  pages: any
  questions?: IQuestion[] | null
  type?: string
  status?: string
  onToggleEdit?: (type: string) => void
  isCreateMode?: boolean
  response?: IResponse
}

const Survey: React.FC<SurveyProps> = ({
  title, description, onToggleEdit = () => { }, isCreateMode = false, theme, questions, response, pages, id
}) => {
  const setSelectedQuestion = useQuestionStore((state) => state.setSelectedQuestion);
  const [currentPage, setCurrentPage] = useState(1);
  const sortedPages = [...pages].sort((a, b) => a.position - b.position);

  const {
    control,
    handleSubmit
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    endResponse(data);
  };

  const endResponse = async (data: FieldValues) => {
    try {
      await responsesService.update({
        id: response?.id,
        ended_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
      });
      data.answers.forEach((answer: any) => {
        answersService.create({
          response_id: response?.id,
          question_id: answer.question_id,
          content: answer.content
        });
      });
      toast.success('Response sended with success!');
    } catch (error) {
      console.log(error)
      toast.error('Error sending the response!');
    }
  };

  const createPage = async () => {
    try {
      await pagesService.create({
        survey_id: id,
        position: sortedPages.length + 1
      });
      toast.success('Page created with success!');
    } catch (error) {
      console.log(error)
      toast.error('Error creating the page!');
    }
  }

  const editQuestion = (question: IQuestion) => {
    setSelectedQuestion(question);
    onToggleEdit("question");
  }

  const questionDeleted = () => {
    onToggleEdit("deleted");
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className={`flex flex-col justify-between min-h-[500px] min-w-[80%] p-6 border-2 border-[${theme?.primary_color}] rounded-lg bg-[${theme?.background_color}]`}>
        <div>
          <SurveyHeading
            title={title}
            description={description}
            primaryColor={theme?.primary_color}
            secondaryColor={theme?.secondary_color}
            onToggleEdit={() => onToggleEdit("heading")}
            isCreateMode={isCreateMode}
          />
          <div className="flex flex-col p-2 gap-3">
            {questions
              ?.filter(question => question.page_id === sortedPages[currentPage - 1]?.id)
              ?.map((question) => (
                <Question
                  id={question.id}
                  key={question.id}
                  title={question.title}
                  type={question.type}
                  obrigatory={question.obrigatory}
                  onToggleEdit={() => editQuestion(question)}
                  questionDeleted={() => questionDeleted()}
                  isCreateMode={isCreateMode}
                  control={control}
                />
              ))}
          </div>
          {isCreateMode && (
            <CreateQuestionButton page_id={sortedPages[currentPage - 1]?.id} />
          )}
        </div>
        <div>
          {!isCreateMode && currentPage === sortedPages.length && (
            <div className="flex w-full justify-center pt-10">
              <div className="w-1/5">
                <Button label="Submit" small onClick={handleSubmit(onSubmit)} />
              </div>
            </div>
          )}
          <div className="w-full flex justify-center gap-3 pt-6">
            <div className="inline-flex -space-x-px text-sm">
              <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-700 border border-gray-700 rounded-l-lg hover:bg-gray-300">
                Previous
              </button>
              <span className="flex items-center justify-center px-3 leading-tight text-gray-700 border border-gray-700 hover:text-gray-700">Page {currentPage}</span>
              <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === sortedPages.length} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-700 rounded-r-lg hover:bg-gray-300">
                Next
              </button>
            </div>
            {isCreateMode && (
              <div
                aria-label="Add new page"
                className="items-center cursor-pointer text-gray-700 pt-1"
                onClick={() => createPage()}>
                <p>Add new page</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Survey;