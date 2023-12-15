'use client';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useSurveyStore from '@/app/hooks/useSurveyStore';
import questionsService from '@/app/services/questions.service';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Option {
    id: number;
    question_id: number;
    option_text: string;
    position: null | number;
}

interface Answer {
    content: string;
}

interface Question {
    question_id: number;
    question_title: string;
    question_type: string;
    question_options: Option[];
    answers: Answer[];
}

const Questions = () => {
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            if (selectedSurveyId) {
                const response = await questionsService.getDetails(selectedSurveyId);
                setQuestions(response.data);
            } else {
                console.log("Error fetching questions!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const generateChartData = (question: Question) => {
        if (question.question_type === 'multipleChoice') {
            const questionOptions = question.question_options.map((option) => option.option_text);
            const answerCount = questionOptions.map(label => 
                question.answers.filter(answer => answer.content === label).length
            );
            const backgroundColor = Array.from({ length: questionOptions.length }, () => getRandomColor());

            return {
                labels: questionOptions,
                datasets: [
                    {
                        label: 'Answers',
                        data: answerCount,
                        backgroundColor: backgroundColor,
                        borderColor: ['#FFF'],
                        borderWidth: 2,
                    },
                ],
            };
        }
        return {
            labels: [],
            datasets: [
                {
                    label: 'Answers',
                    data: [],
                    backgroundColor: [],
                    borderColor: ['#FFF'],
                    borderWidth: 2,
                },
            ],
        };
    };

    return (
        <div className="flex flex-col gap-3 w-full items-center">
            {questions.map((question, index) => (
                <div key={index} className="flex flex-col w-3/4 min-h-[250px] border border-[#1565C0] rounded-lg mb-3">
                    <div className="flex w-full text-xl">
                        <div className="ms-5 flex items-center justify-center w-[35px] h-[35px] bg-[#1565C0] text-white">
                            {index + 1}
                        </div>
                        <div className="p-1">
                            {question.question_title}
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div>
                            {question.question_type === 'multipleChoice' && (
                                <Doughnut
                                    data={generateChartData(question)}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: true,
                                        plugins: {
                                            legend: {
                                                display: true,
                                                position: "bottom",
                                            },
                                        },
                                    }}
                                />
                            )}
                            {question.question_type === 'openEnded' && (
                                <div className="relative w-[220px] md:w-[360px] xl:w-[600px] h-[200px] overflow-auto border border-gray-700 rounded-xl">
                                    <table className="text-sm w-full text-left text-gray-700">
                                        <thead className="text-xs text-[#1565C0] uppercase border-b border-gray-700">
                                            <tr>
                                                <th className="px-6 py-3">Answers</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {question.answers.map((answer, answerIndex) => (
                                                <tr key={answerIndex}>
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{answer.content}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Questions;