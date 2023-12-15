'use client';

import { BsQuestionCircle } from "react-icons/bs"
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import NavbarButton from "../buttons/NavbarButton";
import Link from "next/link";
import NavbarToggle from "./NavbarToggle";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import authService from "@/app/services/auth.service";

const HomeMenu = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (authService.isLoggedIn()) {
          setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        authService.logout();
    };

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
                    <BsQuestionCircle className="hover:shadow-md rounded-full text-gray-700" size={32} />
                </Link>

                {!isLoggedIn ? (
                    <>
                        <NavbarButton onClick={loginModal.onOpen} label="Sign In" />
                        <NavbarButton onClick={registerModal.onOpen} label="Sign Up" />
                    </>
                ) : (
                    <>
                        <NavbarButton onClick={() => window.location.href = '/survey'} label="Survey" />
                        <NavbarButton onClick={handleLogout} label="Sign Out" />
                    </>
                )}

                <NavbarToggle>
                    <MenuItem onClick={() => window.location.href = '/about'} label="About" aria-label="About" />
                    {!isLoggedIn ? (
                        <>
                            <MenuItem onClick={loginModal.onOpen} label="Sign In" aria-label="Sign In" />
                            <MenuItem onClick={registerModal.onOpen} label="Sign Up" aria-label="Sign Up" />
                        </>
                    ) : (
                        <>
                            <MenuItem onClick={() => window.location.href = '/survey'} label="Survey" aria-label="Survey" />
                            <MenuItem onClick={handleLogout} label="Sign Out" aria-label="Sign Out" />
                        </>
                    )}
                </NavbarToggle>
            </div>
        </div>
    );
}

export default HomeMenu;