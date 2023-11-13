'use client';


const DesktopVisual = () => {

    return (
        <>
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
                    <div className="flex items-center justify-center h-[140px] md:h-[262px] w-full rounded-xl bg-[#F8F2E2]">
                        <div className="flex flex-col items-center h-[180px] w-3/4 p-3 border-2 border-[#1565C0] rounded-lg">
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
            <div className="relative mx-auto bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
        </>
    )
}

export default DesktopVisual;