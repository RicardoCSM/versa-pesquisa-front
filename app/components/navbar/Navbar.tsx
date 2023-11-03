'use client';

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import HomeMenu from "./HomeMenu";

const Navbar = () => {
    return (
        <div className="w-full bg-[#F8F2E2] z-10 shadow-lg">
            <div className="py-3">
                <Container>
                    <div className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                      ">
                        <Logo />
                        <HomeMenu />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;