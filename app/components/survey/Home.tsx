'use client';

import { useEffect, useState } from "react";
import Container from "../Container";
import Pagination from "../Pagination";
import Title from "../Title";
import { GrAddCircle } from "react-icons/gr";
import ISurvey from "@/app/interfaces/ISurvey";
import surveysService from "@/app/services/surveys.service";
import useSurveyStore from "@/app/hooks/useSurveyStore";
import toast from "react-hot-toast";

interface HomeProps {
    toggleEdit: (menuName: string) => void
};

const Home: React.FC<HomeProps> = ({toggleEdit }) => {
    const [surveys, setSurveys] = useState<ISurvey[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const setSelectedSurveyId = useSurveyStore((state) => state.setSelectedSurveyId);

    useEffect(() => {
        fetchSurveys();
    }, [currentPage]);
    
    const fetchSurveys = async () => {
        try {
            const response = await surveysService.get(currentPage);
            setSurveys(response.data);
            setTotalItems(Number(response.headers['x-pagination-total-count']));
        } catch (error) {
            toast.error('Error getting the surveys!');
        }
    };

    const totalPages = Math.ceil(totalItems / 6);

    const createSurvey = async () => {
        try {
            await surveysService.create();
            fetchSurveys();
            toast.success('Survey created with success!');
        } catch (error) {
            toast.error('Error creating the survey!');
        }
    };

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    const deleteSurvey = async (survey_id: number) => {
        try {
            await surveysService.delete(survey_id);
            fetchSurveys();
            toast.success('Survey deleted with success!');
        } catch (error) {
            toast.error('Error deleting the survey!');
        }
    };

    const handleEditClick = (survey_id: number) => {
        setSelectedSurveyId(survey_id);
        toggleEdit('edit');
    };

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString();
    };

    const handleStatusChange = async (event: React.ChangeEvent<HTMLSelectElement>, surveyId: number) => {
        const newStatus = event.target.value;
        try {
            await surveysService.update({
                id: surveyId,
                status: newStatus
            });
            fetchSurveys();
            toast.success('Status changed with success!');
        } catch (error) {
            toast.error('Error changing the status!');
        }
    };

    return (
        <div className="md:pt-[65px]">
            <Title title="Dashboard" />
            <Container>
                <div className="flex mt-7">
                    <div className="w-full">
                        <div className="overflow-x-auto min-h-[360px] border border-gray-700 rounded-xl">
                            <table className="w-full text-sm text-left text-gray-700">
                                <thead className="text-xs text-gray-700 uppercase border-b border-gray-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Survey name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Created At
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Updated At
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {surveys.map((survey) => (
                                    <tr key={survey.id}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {survey.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {survey.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            <select
                                                onChange={(event) => handleStatusChange(event, survey.id)}
                                                className="bg-transparent"
                                                defaultValue={survey.status === 1 ? '1' : '0'}
                                                >
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4">
                                            {formatDate(survey.created_at)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {formatDate(survey.updated_at)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-blue-600 hover:underline cursor-pointer" onClick={() => handleEditClick(survey.id)}>
                                                Edit
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-red-600 hover:underline cursor-pointer" onClick={() => deleteSurvey(survey.id)}>
                                                Delete
                                            </div>
                                        </td>
                                    </tr> 
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-2 justify-around p-4">
                            <div className="flex items-center gap-2 lg:text-xl cursor-pointer" onClick={() => createSurvey()}>
                                <GrAddCircle />
                                <p>Create new survey</p>
                            </div>
                            <Pagination 
                                setCurrentPage={handlePageChange}
                                currentPage={currentPage}
                                totalPages={totalPages}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home;