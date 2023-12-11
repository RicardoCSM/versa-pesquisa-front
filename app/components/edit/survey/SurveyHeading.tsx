'use client';

import { BsPencil } from "react-icons/bs";

interface SurveyHeadingProps {
  title?: string
  description?: string
  primaryColor?: string
  secondaryColor?: string
  onToggleEdit: () => void
  isCreateMode: boolean
}

const SurveyHeading: React.FC<SurveyHeadingProps> = ({
  title, description, primaryColor, secondaryColor, onToggleEdit, isCreateMode
}) => {
  return (
    <div className="text-center p-3 w-full">
      <div className="flex justify-center gap-2">
        <div className={`text-4xl text-[${primaryColor}]`} aria-label={title}>
          {title}
        </div>
        {isCreateMode && (
          <div className="cursor-pointer" onClick={onToggleEdit} aria-label="Edit">
            <BsPencil />
          </div>
        )}
      </div>
      <div className={`text-lg text-[${secondaryColor}]`} aria-label={description}>
        {description}
      </div>
    </div>
  );
}

export default SurveyHeading;