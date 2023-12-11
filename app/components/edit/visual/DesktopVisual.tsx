'use client';

import useThemeStore from "@/app/hooks/useThemeStore";

const DesktopVisual = () => {
    const selectedTheme = useThemeStore((state) => state.selectedTheme);

    return (
        <>
            <div aria-label="Desktop Visual" className="mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[294px] max-w-[512px]">
                <div className="rounded-xl overflow-hidden h-[262px]">
                    <div className="flex items-center justify-center h-[262px] w-full rounded-xl bg-[#F8F2E2]">
                        <div className={`flex flex-col items-center h-[180px] w-4/5 p-3 border-2 border-[${selectedTheme?.primary_color}] bg-[${selectedTheme?.background_color}] rounded-lg`}>
                            <div className={`text-lg text-[${selectedTheme?.primary_color}]`}>
                                Title
                            </div>
                            <div className={`text-sm text-[${selectedTheme?.secondary_color}]`}>
                                Description
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mx-auto bg-gray-700 rounded-b-xl h-[42px] max-w-[512px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[95px] max-w-[142px]"></div>
        </>
    )
}

export default DesktopVisual;