import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <header>
      <nav className="nav-wrapper">
        <Link href="/">
          <Image
            src="/logo.png"
            height={40}
            width={120}
            alt="Logo with the name Jose Padilla between brackets"
          />
        </Link>
        <Link href="/portfolio" className="nav-link">
          PORTFOLIO
        </Link>
        <Link href="/about" className="nav-link">
          ABOUT
        </Link>
        <Link href="/resume" className="nav-link">
          RESUME
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
