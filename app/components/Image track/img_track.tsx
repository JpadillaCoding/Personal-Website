'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function ImageTrack() {

  useEffect(() => {
    const track = document.getElementById("img_track");
    if (track) {
      const handletouchDown = (e:TouchEvent) => {
        track.dataset.mouseDownAt = e.touches[0].clientX.toString();
        console.log(e.touches[0].clientX.toString())
      };
      const handleDown = (e:MouseEvent) => {
        track.dataset.mouseDownAt = e.clientX.toString();
        track.classList.add("dragging")
        console.log(e.clientX.toString())
      };
      const handleMove = (e:MouseEvent) => {
        if (track.dataset.mouseDownAt === "0") return;
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
      const handleTouchMove = (e:TouchEvent) => {
        e.preventDefault() /* prevents whole page from scrolling on x axis*/
        if (track.dataset.mouseDownAt === "0") return;
        const mouseDownValue = track.dataset.mouseDownAt;
        const prevPercentage = track.dataset.prevPercentage;
        if (mouseDownValue !== undefined && prevPercentage !== undefined) {
          const mouseDelta = parseFloat(mouseDownValue) - e.touches[0].clientX;
          const maxDelta = window.innerWidth / 1 /* on mobile it's lower so images won't zoom through*/
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
      const handleUp = (e:any) => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
      };
      window.onmouseup = e => handleUp(e) 
      window.ontouchend = e => handleUp(e)
      track.onmousedown = e => handleDown(e)
      track.ontouchstart = e => handletouchDown(e)
      track.onmousemove = e => handleMove(e)
      track.ontouchmove = e => handleTouchMove(e)
    }
  }, []);
    
    return (
      <div
        id="img_track"
        className={styles.img_track}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <i className={styles.double_chevron}></i>
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
