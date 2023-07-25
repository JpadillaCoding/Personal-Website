import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';


const Navigation = () => {
  return (
    <header>
      <nav className="nav-wrapper">
          <Link href="/">
            <Image
              src="/logo.png"
              height={50}
              width={150}
              alt="Logo with the name Jose Padilla between brackets"
            />
          </Link>
        <div className="nav-left-items">
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
          <FontAwesomeIcon icon={faLinkedin} size="2xl" color="#6f7174" />
          <FontAwesomeIcon icon={faGithub} size="2xl" color="#6f7174" />
          <FontAwesomeIcon icon={faTwitter} size="2xl" color="#6f7174" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
