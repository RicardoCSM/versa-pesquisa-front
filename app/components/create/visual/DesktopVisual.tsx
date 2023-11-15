'use client';


const DesktopVisual = () => {

    return (
        <>
            <div aria-label="Desktop Visual" className="mx-auto border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[294px] max-w-[512px]">
                <div className="rounded-xl overflow-hidden h-[262px]">
                    <div className="flex items-center justify-center h-[262px] w-full rounded-xl bg-[#F8F2E2]">
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
            <div className="relative mx-auto bg-gray-700 rounded-b-xl h-[42px] max-w-[512px]"></div>
            <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[95px] max-w-[142px]"></div>
        </>
    )
}

export default DesktopVisual;