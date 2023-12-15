'use client';

import React, { useCallback, useEffect, useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import ProjectsDropdown from "../buttons/ProjectsDropdown";
import MenuItem from "./MenuItem";
import useSurveyStore from "@/app/hooks/useSurveyStore";
import surveysService from "@/app/services/surveys.service";
import ISurvey from "@/app/interfaces/ISurvey";
import toast from "react-hot-toast";

interface AdminDropdownProps {
    toggleEdit: (menuName: string) => void
};

const AdminDropdown: React.FC<AdminDropdownProps> = ({ toggleEdit }) => {
    const [isOpen, setIsOpen] = useState(false);
    const setSelectedSurveyId = useSurveyStore((state) => state.setSelectedSurveyId);
    const [surveys, setSurveys] = useState<ISurvey[]>([]);
    useEffect(() => {
        fetchSurveys();
    }, []);

    const dropdownOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])

    const fetchSurveys = async () => {
        try {
            const response = await surveysService.get(1);
            setSurveys(response.data);
        } catch (error) {
            toast.error('Error getting the surveys!');
        }
    };

    const handleEditClick = (survey_id: number) => {
        setSelectedSurveyId(survey_id);
        toggleEdit('edit');
        setIsOpen(false);
    };

    return (
        <>
            <div
                className={`flex items-center gap-2 cursor-pointer`}
                aria-label="Projects"
                onClick={dropdownOpen}>
                Projects
                <PiCaretDownBold />
            </div>
            {isOpen && (
                <ProjectsDropdown>
                    {surveys.slice(0, 3).map((survey) => (
                        <MenuItem onClick={() => handleEditClick(survey.id)} label={survey.title} aria-label={survey.title} />
                    ))}
                    <hr></hr>
                    <MenuItem onClick={() => {toggleEdit('home'); setIsOpen(false)}} label="All surveys" aria-label="All surveys" />
                </ProjectsDropdown>
            )}
        </>
    )
}

export default AdminDropdown;