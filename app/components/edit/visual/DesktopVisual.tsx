'use client';

import useThemeStore from "@/app/hooks/useThemeStore";
import ITheme from "@/app/interfaces/ITheme";
import { useEffect, useState } from "react";

const DesktopVisual = () => {
    const [theme, setTheme] = useState<ITheme | null>();
    const selectedTheme = useThemeStore((state) => state.selectedTheme);

    useEffect(() => {
        setTheme(selectedTheme);
    }, [selectedTheme]);

    const cssVariables = {
        '--primary-color': selectedTheme?.primary_color || '#000000',
        '--background-color': selectedTheme?.background_color || '#FFFFFF',
        '--secondary-color': selectedTheme?.secondary_color || '#000000',
    };

    return (
        <>
            <style>
                {`
                    :root {
                        ${Object.entries(cssVariables)
                            .map(([property, value]) => `${property}: ${value};`)
                            .join('\n')}
                    }
                `}
            </style>
            <div aria-label="Desktop Visual" className="mx-auto border-gray-800 border-[16px] rounded-t-xl h-[294px] max-w-[512px]">
                <div className="rounded-xl overflow-hidden h-[262px]">
                    <div className="flex items-center justify-center h-[262px] w-full rounded-xl bg-[#F8F2E2]">
                        <div className={`flex flex-col items-center h-[180px] w-4/5 p-3 border-2 border-[var(--primary-color)] bg-[var(--background-color)] rounded-lg`}>
                            <div className={`text-lg text-[var(--primary-color)]`}>
                                Title
                            </div>
                            <div className={`text-sm text-[var(--secondary-color)]`}>
                                Description
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto bg-gray-700 rounded-b-xl h-[42px] max-w-[512px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[95px] max-w-[142px]"></div>
        </>
    );
};

export default DesktopVisual;