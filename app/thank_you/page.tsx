'use client'

import Logo from "../components/navbar/Logo";

const ThankYou = () => {

    return (
        <div className="flex w-full items-center justify-items-center min-h-screen">
            <div className="flex flex-col w-full items-center">
                <Logo />
                <h1>Thank you for answering this survey!</h1>
            </div>
        </div>
    );
};

export default ThankYou;