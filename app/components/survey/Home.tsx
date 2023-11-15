'use client';

import Container from "../Container";
import Pagination from "../Pagination";
import Title from "../Title";
import { GrAddCircle } from "react-icons/gr";

const Home = () => {
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
                                            Questions
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Answers
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Survey 1
                                        </th>
                                        <td className="px-6 py-4">
                                            My survey
                                        </td>
                                        <td className="px-6 py-4">
                                            25
                                        </td>
                                        <td className="px-6 py-4">
                                            160
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                                        </td>
                                    </tr> 
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