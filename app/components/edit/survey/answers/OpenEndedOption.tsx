'use client';

import { Control, Controller } from "react-hook-form";

interface OpenEndedProps {
    control: Control,
    question_id: number
}

const OpenEndedOption: React.FC<OpenEndedProps> = ({control, question_id}) => {
    return (
        <Controller
            name={`answers[${question_id}]`}
            control={control}
            render={({ field }) => (
                <textarea
                {...field}
                value={field.value?.content}
                onChange={(e) => field.onChange({ content: e.target.value, question_id })}
                className="block p-2.5 w-full text-sm text-gray-900 bg-[#F8F2E2] rounded-lg border border-gray-500 outline-none transition focus:border-black"
                />
            )}
    />
    )
}

export default OpenEndedOption;