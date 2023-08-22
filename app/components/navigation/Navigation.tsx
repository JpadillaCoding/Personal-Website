"use client";
import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [iconColor, setIconColor] = useState<string>("#6f7174")
  const [toggleModal, setToggleModal] = useState<boolean>(false)

  function toggleColor() {
    setIconColor( iconColor === "#6f7174" ? "#ffffff" : "#6f7174")
    setToggleModal(!toggleModal)
  }
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
        <FontAwesomeIcon
          icon={faBars}
          size="2xl"
          color={iconColor}
          className={styles.bars}
          onClick={toggleColor}
        />
        <div className={`${styles.nav_items_wrapper} ${toggleModal ? styles.active : ""}`}>
          <div className={styles.nav_left_items_wrapper}>
            <Link href="/portfolio" className={styles.nav_links_left}>
              PORTFOLIO
            </Link>
            <Link href="/about" className={styles.nav_links_left}>
              ABOUT
            </Link>
            <Link href="https://docs.google.com/document/d/1bwXcVwzp6sHV-imUdj8bVup8Aif4RFmTDJjwSWMjQ-E/edit?usp=sharing" className={styles.nav_links_left}>
              RESUME
            </Link>
          </div>
          <div className={styles.nav_right_items_wrapper}>
            <a href="https://www.linkedin.com/in/jose-padilla-978ab5146/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                color="#6f7174"
                className={styles.nav_links_right}
              />
            </a>
            <a href="https://github.com/JpadillaCoding">
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                color="#6f7174"
                className={styles.nav_links_right}
              />
            </a>
            <a href="https://twitter.com/__Obelus">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2xl"
                color="#6f7174"
                className={styles.nav_links_right}
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
