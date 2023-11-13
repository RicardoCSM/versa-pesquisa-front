'use client';

import React from "react";
import SurveyHeading from "./SurveyHeading";
import Question from "./Question";
import Pagination from "../../Pagination";
import { GrAddCircle } from "react-icons/gr";

interface SurveyProps {
  title: string
  description?: string
  category?: string
  settings?: JSON
  type?: string
  status?: string
  onToggleEdit?: (type: string) => void
  isCreateMode?: boolean
}

const Survey: React.FC<SurveyProps> = ({
   title, description, onToggleEdit = () => {}, isCreateMode = false
}) => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <div className="min-h-[550px] w-3/4 md:w-2/3 p-6 border-2 border-[#1565C0] rounded-lg">
            <SurveyHeading
              title={title}
              description={description}
              primaryColor="#1565C0"
              secondaryColor="black"
              onToggleEdit={() => onToggleEdit("heading")}
              isCreateMode={isCreateMode}
            />
            <div className="flex flex-col p-2 gap-3">
              <Question
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed egestas elit. Vivamus vel sodales nulla. Curabitur non leo mauris. Ut risus dui, hendrerit ac pulvinar finibus, commodo sed velit."
                obrigatory
                onToggleEdit={() => onToggleEdit("question")}
                isCreateMode={isCreateMode}
              />
              <Question
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed egestas elit. Vivamus vel sodales nulla. Curabitur non leo mauris. Ut risus dui, hendrerit ac pulvinar finibus, commodo sed velit."
                onToggleEdit={() => onToggleEdit("question")}
                isCreateMode={isCreateMode}
              />
            </div>
            {isCreateMode &&
              <div className="flex justify-center pt-2">
                <div 
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