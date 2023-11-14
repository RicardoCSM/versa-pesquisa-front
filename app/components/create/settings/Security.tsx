'use client';

const Security = () => {
    return (
        <div className="w-1/3 mt-5">
            <div className="flex items-center w-[200px] gap-2">
                <input
                    type="checkbox"
                    className="bg-[#F8F2E2] border border-[#1565C0] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-4 h-4"
                />
                <div className="text-gray-700">Authorization</div>
            </div>
        </div>
    )
}

export default Security;