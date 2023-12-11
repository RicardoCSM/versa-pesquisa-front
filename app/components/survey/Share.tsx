'use client';
import { useEffect, useState } from 'react';
import Title from "../Title";
import useSurveyStore from '@/app/hooks/useSurveyStore';
import toast from 'react-hot-toast';

interface ShareProps {
    toggleHome: (menuName: string) => void
};

const Share: React.FC<ShareProps> = ({toggleHome}) => {
    const [url, setUrl] = useState('http://localhost:3000/view');
    const selectedSurveyId = useSurveyStore((state) => state.selectedSurveyId);
    
    useEffect(() => {
        if(selectedSurveyId) {
        } else {
            toggleHome('home');
            toast.error('Select a survey first!');
        }
    }, []);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
        } catch (error) {
            console.error('Unable to copy to clipboard', error);
        }
    };

    return (
        <div className=" md:pt-[65px]">
            <Title title="Share" />
            <div className="flex items-center justify-center h-[400px]">
                <div className="border border-[#1565C0] p-8 rounded-lg flex items-center space-x-2">
                    <input
                        type="text"
                        value={url}
                        readOnly
                        className="border border-[#1565C0] rounded-lg p-2 w-[250px] bg-[#F8F2E2]"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="bg-[#1565C0] text-white px-4 py-2 rounded-lg"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Share;