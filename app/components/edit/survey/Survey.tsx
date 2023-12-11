'use client';

import React, { useEffect } from "react";
import SurveyHeading from "./SurveyHeading";
import Question from "./Question";
import { GrAddCircle } from "react-icons/gr";
import ITheme from "@/app/interfaces/ITheme";
import IQuestion from "@/app/interfaces/IQuestion";

interface SurveyProps {
  title?: string
  description?: string
  category?: string
  settings: []
  theme?: ITheme | null
  questions?: IQuestion[] | null 
  type?: string
  status?: string
  onToggleEdit?: (type: string) => void
  isCreateMode?: boolean
}

const Survey: React.FC<SurveyProps> = ({
   title, description, onToggleEdit = () => {}, isCreateMode = false, theme, questions
}) => {

    return (
      <div className={`flex justify-center w-full`}>
        <div className="flex flex-col items-center w-full">
          <div className={`min-h-[500px] min-w-[80%] p-6 border-2 border-[${theme?.primary_color}] rounded-lg bg-[${theme?.background_color}]`}>
            <SurveyHeading
              title={title}
              description={description}
              primaryColor={theme?.primary_color}
              secondaryColor={theme?.secondary_color}
              onToggleEdit={() => onToggleEdit("heading")}
              isCreateMode={isCreateMode}
            />
            <div className="flex flex-col p-2 gap-3">
            {questions?.map((question) => (
              <Question
                key={question.id}
                title={question.title}
                type={question.type}
                obrigatory
                onToggleEdit={() => onToggleEdit("question")}
                isCreateMode={isCreateMode}
              />
            ))}
            </div>
            {isCreateMode &&
              <div className="flex justify-center pt-2">
                <div
                 aria-label="Add new question"
                  className="flex gap-2 items-center align-middle cursor-pointer"
                  onClick={() => onToggleEdit("newQuestion")}>
                  <GrAddCircle />
                  <p>Add new question</p>
                </div>
              </div>
            }
          </div>
          {/* <div className="w-2/3 flex justify-center pt-3">
            <Pagination />
          </div> */}
        </div>
      </div>
    );
  };
  

export default Survey;