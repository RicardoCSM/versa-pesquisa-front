'use client';

import { useEffect, useState } from "react";
import Container from "../Container";
import Pagination from "../Pagination";
import Title from "../Title";
import { GrAddCircle } from "react-icons/gr";
import ISurvey from "@/app/interfaces/ISurvey";
import surveysService from "@/app/services/surveys.service";
import getAccessToken from '@/app/actions/getAccessToken';
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Home = () => {
    const [surveys, setSurveys] = useState<ISurvey[]>([]);
    const accessToken = getAccessToken();

    useEffect(() => {
        fetchSurveys();
    });

    const getSession = async () => {
        return await getServerSession(authOptions);
    }
    
    const fetchSurveys = async () => {
        try {
            const session = await getServerSession(authOptions);
            console.log(session?.accessToken);
            const response = await axios.get(`http://localhost:8000/api/surveys`, {
                headers: {
                'Authorization': `Bearer ${accessToken}`
                }
            });
            setSurveys(response.data);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="md:pt-[65px]">
            <Title title="Dashboard" />
            <Container>
                <div className="flex mt-7">
                    <div className="w-full">
                        <div className="overflow-x-auto min-h-[350px] border border-gray-700 rounded-xl">
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
                                            
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {surveys.map((survey) => (
                                    <tr>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {survey.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {survey.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            {survey.status}
                                        </td>
                                        <td className="px-6 py-4">
                                            {survey.created_at}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                                        </td>
                                    </tr> 
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-2 justify-around p-4">
                            <div className="flex items-center gap-2 lg:text-xl cursor-pointer">
                            <GrAddCircle />
                            <p>Create new survey</p>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home;