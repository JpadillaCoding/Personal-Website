import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    <Image 
                    src="/logo.png"
                    height={40}
                    width={120}
                    alt="Logo with the name Jose Padilla between brackets"
                    />
                </Link>
                <Link href="/portfolio">
                    Portfolio
                </Link>
                <Link href="/about">
                    About 
                </Link>
                <Link href="/resume">
                    Resume
                </Link>
            </nav>
        </header>
    )
}

export default Navigation