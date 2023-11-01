'use client';

import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div
            className="
                max-w-[2520px]
                mx-auto
                xl:px-15
                md:px-8
                sm:px-1
                px-4
            "
        >
            {children}
        </div>
    )
}

export default Container;