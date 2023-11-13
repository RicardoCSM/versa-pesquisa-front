'use client';

const MultipleChoiceOption = () => {
    return (
        <div>
            <div className="flex items-center align-middle">
                <input type="radio" name="multipleChoice" className="w-4 h-4 bg-[#F8F2E2] cursor-pointer"/>
                <label className="ms-2 font-medium text-gray-900">Teste</label>
            </div>
            <div className="flex items-center align-middle">
                <input type="radio" name="multipleChoice" className="w-4 h-4 bg-[#F8F2E2] cursor-pointer"/>
                <label className="ms-2 font-medium text-gray-900">Teste</label>
            </div>
            <div className="flex items-center align-middle">
                <input type="radio" name="multipleChoice" className="w-4 h-4 bg-[#F8F2E2] cursor-pointer"/>
                <label className="ms-2 font-medium text-gray-900">Teste</label>
            </div>
        </div>   
    )
}

export default MultipleChoiceOption;