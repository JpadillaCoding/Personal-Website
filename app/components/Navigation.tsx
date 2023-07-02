import React from "react";
import Link from "next/link";
const Navigation = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    Logo
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