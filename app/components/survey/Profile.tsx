'use client';

import Title from "../Title";
import Button from "../buttons/Button";
import TextInput from "../inputs/TextInput";

const Profile = () => {
    return (
        <div className="md:pt-[65px]">
        <Title title="Profile"/>
        <div className="flex justify-center w-full mt-[30px]">
            <div className="flex flex-col gap-3 w-1/3">
                <TextInput label="Email" bigger/>
                <TextInput label="First name" bigger/>
                <TextInput label="Last name" bigger/>
                <TextInput label="Password" bigger/>
                <div className="fixed bottom-0 flex p-3 gap-3 w-1/3">
                    <Button small outline label="Revert" />
                    <Button small label="Apply" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile;