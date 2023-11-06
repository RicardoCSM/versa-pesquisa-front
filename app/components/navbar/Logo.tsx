'use client';

import Image from 'next/image';

interface LogoProps {
    onClick?: () => void
}

const Logo: React.FC<LogoProps> = ({onClick}) => {

    const handleClick = onClick || (() => {
        window.location.href = "/";
    });

    return (
        <div onClick={handleClick} className="cursor-pointer">
            <Image 
                src="/images/logo.png"
                aria-label="Versa Pesquisa"
                alt="Logo"
                width={180} height={36.82}/>
        </div>
    )
}

export default Logo;