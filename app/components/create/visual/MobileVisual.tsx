'use client';

import Survey from "../survey/Survey";

const MobileVisual = () => {
    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[1.67rem] h-[450px] w-[213px] shadow-xl">
            <div className="w-[106.5px] h-[13.5px] bg-gray-800 top-0 rounded-b-[0.83rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[33.75px] w-[1.67px] bg-gray-800 absolute -left-[9.17px] top-[90.5px] rounded-l-lg"></div>
            <div className="h-[33.75px] w-[1.67px] bg-gray-800 absolute -left-[9.17px] top-[128.33px] rounded-l-lg"></div>
            <div className="h-[45px] w-[1.67px] bg-gray-800 absolute -right-[9.17px] top-[108.33px] rounded-r-lg"></div>
            <div className="rounded-[1.39rem] overflow-hidden w-[191.39px] h-[400.39px] bg-gray-800">
                <div className="flex items-center justify-center w-[191.39px] h-[400.39px] bg-[#F8F2E2]">
                    <div className="flex flex-col items-center h-[300px] w-3/4 p-3 border-2 border-[#1565C0] rounded-lg">
                        <div className="text-lg text-[#1565C0]">
                            Title
                        </div>
                        <div className="text-sm">
                            Description
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileVisual;