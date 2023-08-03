import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';


const Navigation = () => {
  return (
    <header>
      <nav className={styles.nav_wrapper}>
          <Link href="/">
            <Image
              src="/logo.png"
              height={50}
              width={150}
              alt="Logo with the name Jose Padilla between brackets"
            />
          </Link>
        <div className={styles.nav_left_items}>
          <Link href="/portfolio" className={styles.nav_link}>
            PORTFOLIO
          </Link>
          <Link href="/about" className={styles.nav_link}>
            ABOUT
          </Link>
          <Link href="/resume" className={styles.nav_link}>
            TAB
          </Link>
        </div>
        <div className={styles.nav_right_items}>
          <FontAwesomeIcon icon={faLinkedin} size="2xl" color="#6f7174" />
          <FontAwesomeIcon icon={faGithub} size="2xl" color="#6f7174" />
          <FontAwesomeIcon icon={faTwitter} size="2xl" color="#6f7174" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
