'use client';
import { useEffect, useState } from 'react';
import Title from "../Title";
import useSurveyStore from '@/app/hooks/useSurveyStore';
import toast from 'react-hot-toast';
import { MdOutlineContentCopy } from "react-icons/md";

interface ShareProps {
    toggleHome: (menuName: string) => void
};

const Share: React.FC<ShareProps> = ({toggleHome}) => {
    const [url, setUrl] = useState(process.env.NEXT_PUBLIC_FRONT_BASE_URL);
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);
    
    useEffect(() => {
        if(!selectedSurveyId) {
            toggleHome('home');
            toast.error('Select a survey first!');
        }
    }, []);

    const copyToClipboard = async () => {
        try {
            if(url) {
                await navigator.clipboard.writeText(url);
                toast.success("Url copied to clipboard!")
            }
        } catch (error) {
            console.error('Unable to copy to clipboard', error);
        }
    };

    return (
        <div className="w-full md:pt-[65px]">
            <Title title="Share" />
            <div className="w-full flex items-center justify-center h-[400px]">
                <div className="w-1/2 border border-[#1565C0] p-8 rounded-lg flex items-end space-x-2">
                    <div className='w-3/4'>
                        <h1>Base URL:</h1>
                        <input
                            type="text"
                            value={url + '/view?survey_id=' + selectedSurveyId}
                            readOnly
                            className="border border-[#1565C0] rounded-lg p-2 w-full bg-[#F8F2E2]"
                        />
                    </div>
                    <button
                        onClick={copyToClipboard}
                        className="bg-[#1565C0] text-white px-4 rounded-lg w-1/4 pt-1"
                    >
                        <div className='flex w-full justify-center text-xl p-2'>
                            <MdOutlineContentCopy />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Share;