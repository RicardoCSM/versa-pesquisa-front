'use client';

const Summary = () => {

    return (
        <div className="flex flex-col w-3/4 min-h-[250px] border border-[#1565C0] rounded-lg mb-6">
            <div className="flex justify-center p-3 w-full text-xl">
                Survey Stats
            </div>
            <div className="flex flex-col md:flex-row p-2 mx-7 gap-3 justify-around">
                <div className="border-l-8 border-[#1565C0] h-[150px]">
                    <div className="p-2">
                        <div className="text-2xl">50</div>
                        <p>Total Send</p>
                    </div>
                </div>
                <div className="border-l-8 border-[#555F71] h-[150px]">
                    <div className="p-2">
                        <div className="text-2xl">50.00 %</div>
                        <p>Survey Responses</p>
                    </div>
                </div>
                <div className="border-l-8 border-[#6F5575] h-[150px]">
                    <div className="p-2">
                        <div className="text-2xl">90.00 %</div>
                        <p>Opened</p>
                    </div>
                </div>
                <div className="border-l-8 border-[#221B00] h-[150px]">
                    <div className="p-2">
                        <div className="text-2xl">75.00 %</div>
                        <p>Clicked</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;