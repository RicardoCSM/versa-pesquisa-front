'use client';

import Title from "../Title";
import Button from "../buttons/Button";
import CheckInput from "../inputs/CheckInput";

const CreateSettings = () => {

    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full">
                <Title title="Settings" />
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col w-2/4 mt-5 gap-3">
                        <CheckInput label="Create test" bigger/>
                        <CheckInput label="Collect email addresses" bigger/>
                        <CheckInput label="Send participants a copy of their responses" bigger/>
                        <CheckInput label="Make questions mandatory by default" bigger/>
                        <CheckInput label="Limit to 1 answer" bigger/>
                        <CheckInput label="Show link to send another answer" bigger/>
                    </div>
                    <div className="md:fixed bottom-0 flex p-3 gap-3 w-1/3">
                        <Button small outline label="Revert" />
                        <Button small label="Apply" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSettings;