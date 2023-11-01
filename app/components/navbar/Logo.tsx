'use client';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {

    return (
        <Link href={"/"}>
            <Image 
                src="/images/logo.png"
                aria-label="Versa Pesquisa"
                alt="Logo"
                width={180} height={36.82}/>
        </Link>
    )
}

export default Logo;