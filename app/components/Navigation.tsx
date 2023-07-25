import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navigation = () => {
  return (
    <header>
      <nav className="nav-wrapper">
        <div className="nav-left-items">
          <Link href="/">
            <Image
              src="/logo.png"
              height={50}
              width={150}
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
        </div>
        <div className="nav-right-items">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faTwitter}/>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
