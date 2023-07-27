import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function imgage_track() {
    return (
        <div
        id="img_track"
        className={styles.img_track}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <div className={styles.img_wrapper}>
          <Image
            src="/spaceSnap.png"
            height={200}
            width={300}
            alt="sample img"
            className={styles.image}
            draggable="false"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            src="/trivia.png"
            height={200}
            width={300}
            alt="sample img"
            className={styles.image}
            draggable="false"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            src="/curly.jpg"
            height={200}
            width={300}
            alt="sample img"
            className={styles.image}
            draggable="false"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            src="/hackLa.png"
            height={200}
            width={300}
            alt="sample img"
            className={styles.image}
            draggable="false"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            src="/calorieTrakr.png"
            height={200}
            width={300}
            alt="sample img"
            className={styles.image}
            draggable="false"
          />
        </div>
        <div className={styles.img_wrapper}>
          <Image
            src="/nycApi.png"
            height={200}
            width={300}
            alt="sample img"
            className={styles.image}
            draggable="false"
          />
        </div>
      </div>
    )
}
