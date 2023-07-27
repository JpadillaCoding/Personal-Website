'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function ImageTrack() {

  useEffect(() => {
    const track = document.getElementById("img_track");
    if (track) {
      track.onmousedown = (e: MouseEvent) => {
        track.dataset.mouseDownAt = e.clientX.toString();
      };
      track.onmousemove = (e: MouseEvent) => {
        if (track.dataset.mouseDownAt === "0") return;
        //add touch functionality look at code pen
        const mouseDownValue = track.dataset.mouseDownAt;
        const prevPercentage = track.dataset.prevPercentage;
        if (mouseDownValue !== undefined && prevPercentage !== undefined) {
          const mouseDelta = parseFloat(mouseDownValue) - e.clientX;
          const maxDelta = window.innerWidth / 3;

          const percentage = (mouseDelta / maxDelta) * -100;
          const nextPercentageUnconstrained =
            parseFloat(prevPercentage) + percentage;
          const nextPercentage = Math.max(
            Math.min(nextPercentageUnconstrained, 0),
            -100
          );

          track.dataset.percentage = nextPercentage.toString();

          track.style.transform = `translate(${nextPercentage}%, 0%)`;

          const images = document.querySelectorAll(`.${styles.image}`);
          for (const image of images) {
            const imgElement = image as HTMLImageElement;
            imgElement.style.objectPosition = `${100 + nextPercentage}% center`;
          }
        }
      };
      window.onmouseup = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
      };
    }
  }, []);
    
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
