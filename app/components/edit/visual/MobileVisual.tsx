'use client';

import useThemeStore from "@/app/hooks/useThemeStore";

const MobileVisual = () => {
    const selectedTheme = useThemeStore((state) => state.selectedTheme);
    return (
        <div aria-label="Mobile" className="mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[1.67rem] h-[450px] w-[213px] shadow-xl">
            <div className="h-[33.75px] w-[1.67px] bg-gray-800 absolute -left-[9.17px] top-[90.5px] rounded-l-lg"></div>
            <div className="h-[33.75px] w-[1.67px] bg-gray-800 absolute -left-[9.17px] top-[128.33px] rounded-l-lg"></div>
            <div className="rounded-[1.39rem] overflow-hidden w-[191.39px] h-[400.39px] bg-gray-800">
                <div className={`flex items-center justify-center w-[191.39px] h-[400.39px] bg-[${selectedTheme?.background_color}]`}>
                    <div className={`flex flex-col items-center h-[300px] w-4/5 p-3 border-2 border-[${selectedTheme?.primary_color}] bg-[${selectedTheme?.background_color}] rounded-lg`}>
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
    )
}

export default MobileVisual;