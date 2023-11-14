'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Questions = () => {

    const data = {
        labels: ['Response 1', 'Response 2', 'Response 3', 'Response 4'],
        datasets: [
            {
                label: 'Answers',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    '#1565C0',
                    '#6F5575',
                    '#555F71',
                    '#221B00'
                ],
                borderColor: [
                    '#FFF'
                ],
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="flex flex-col gap-3 w-full items-center">
            <div className="flex flex-col w-3/4 min-h-[250px] border border-[#1565C0] rounded-lg mb-3">
                <div className="flex w-full text-xl">
                    <div className="ms-5 flex items-center justify-center w-[35px] h-[35px] bg-[#1565C0] text-white">
                        1
                    </div>
                    <div className="p-1">
                        This is a example of a survey question:
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div>
                        <Doughnut
                            data={data}
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
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-3/4 min-h-[250px] border border-[#1565C0] rounded-lg  mb-3">
                <div className="flex w-full text-xl">
                    <div className="ms-5 flex items-center justify-center w-[35px] h-[35px] bg-[#1565C0] text-white">
                        2
                    </div>
                    <div className="p-1">
                        This is a example of a second survey question:
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div>
                        <Doughnut
                            data={data}
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions;