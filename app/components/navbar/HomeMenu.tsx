'use client';

import { BsQuestionCircle } from "react-icons/bs"
import React from "react";
import MenuItem from "./MenuItem";
import NavbarButton from "../buttons/NavbarButton";
import Link from "next/link";
import NavbarToggle from "./NavbarToggle";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

const HomeMenu = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

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
                    ">
                    <BsQuestionCircle className="hover:shadow-md rounded-full text-gray-700" size={32}/>
                </Link>

                <NavbarButton onClick={loginModal.onOpen} label="Sign In"/>
                <NavbarButton onClick={registerModal.onOpen} label="Sign Up"/>
                
                <NavbarToggle>
                    <MenuItem onClick={() => {}} label="About" aria-label="About"/>
                    <MenuItem onClick={() => {}} label="Sign In" aria-label="Sign In"/>
                    <MenuItem onClick={() => {}} label="Sign Up" aria-label="Sign Up"/>
                </NavbarToggle>
            </div>
        </div>
    );
}

export default HomeMenu;