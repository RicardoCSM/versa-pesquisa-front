'use client';

import { AiOutlineMenu } from "react-icons/ai"
import { RxQuestionMark } from "react-icons/rx"
import React, { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import NavbarButton from "../buttons/NavbarButton";
import Link from "next/link";

const HomeMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <Link 
                    href={"/about"}
                    aria-label="About"
                    className="
                        hidden
                        sm:flex
                        mr-8
                        p-2
                        border-[1px]
                        border-gray-800
                        flex-row
                        items-center
                        text-lg
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    ">
                    <RxQuestionMark />
                </Link>

                <NavbarButton href="/signin" label="Sign In"/>
                <NavbarButton href="/signup" label="Sign Up"/>
                
                <div
                    onClick={toggleOpen}
                    aria-label="Toggle"
                    className="
                        sm:hidden
                        p-3
                        border-[1px]
                        border-gray-400
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    "
                >
                    <AiOutlineMenu />
                </div>

                {isOpen && (
                <div className="
                    absolute
                    block
                    sm:hidden
                    rounded-xl
                    shadow-lg
                    w-[40vw]
                    md:w-3/4
                    bg-white
                    overflow-hidden
                    right-0
                    top-11
                    text-sm
                    ">
                    <div className="flex flex-col cursor-pointer">
                        <MenuItem onClick={() => {}} label="About" aria-label="About"/>
                        <MenuItem onClick={() => {}} label="Sign In" aria-label="Sign In"/>
                        <MenuItem onClick={() => {}} label="Sign Up" aria-label="Sign Up"/>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default HomeMenu;