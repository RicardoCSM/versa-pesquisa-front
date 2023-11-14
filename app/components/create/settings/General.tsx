'use client';

const General = () => {
    return (
        <div className="flex flex-col w-2/4 mt-5 gap-3">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="bg-[#F8F2E2] border border-[#1565C0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4 h-4"
                />
                <div className="text-gray-700">Create Test</div>
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="bg-[#F8F2E2] border border-[#1565C0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4 h-4"
                />
                <div className="text-gray-700">Collect email addresses by default</div>
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="bg-[#F8F2E2] border border-[#1565C0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4 h-4"
                />
                <div className="text-gray-700">Make questions mandatory by default</div>
            </div>
        </div>
    )
}

export default General;