"use client";

//possibly make the track a component to avoid the whole page being a client side item

import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  //might need to add overflow: hidden for now scroll bar
  useEffect(() => {
    const track = document.getElementById("img_track");
    if (track) {
      window.onmousedown = (e: MouseEvent) => {
        (track.dataset.mouseDownAt = e.clientX.toString()); 
      };
      window.onmousemove = (e: MouseEvent) => {
        if(track.dataset.mouseDownAt === "0") return;
        //add touch functionality look at code pen
        const mouseDownValue = track.dataset.mouseDownAt;
        const prevPercentage = track.dataset.prevPercentage
        if (mouseDownValue !== undefined && prevPercentage !== undefined) {
          const mouseDelta = parseFloat(mouseDownValue) - e.clientX;
          const maxDelta = window.innerWidth / 2;

          const percentage = (mouseDelta / maxDelta) * -100;
          const nextPercentage = parseFloat(prevPercentage) + percentage

          track.dataset.percentage = nextPercentage.toString()

          track.style.transform = `translate(${nextPercentage}%, 0%)`;
        }
      };
      window.onmouseup = () => {
        track.dataset.mouseDownAt = "0"
        track.dataset.prevPercentage = track.dataset.percentage
        console.log("mouseup funct: ", track.dataset.prevPercentage, track.dataset.mouseDownAt)
      }
      console.log("parent funct:",track.dataset.prevPercentage, track.dataset.mouseDownAt)
    }
  }, []);

  return (
    <main className={styles.main_wrapper}>
      <h1 className={styles.page_title}>Welcome.</h1>
      <div className={styles.page_intro}>
        <p>
          My name is Jose Padilla. I'm a Full-Stack Developer in Houston, Texas.
          Programming is a true enjoyment of mine since it accommodates my need
          of solving problems. Current I am sharpening my skills with projects
          and volunteering as a Full-Stack Developer at Hack For LA.
        </p>
      </div>
      <div
        id="img_track"
        className={styles.img_track}
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        <Image
          src="/sampleImg.jpeg"
          height={200}
          width={300}
          alt="sample img"
          className={styles.image}
          draggable="false"
        />
        <Image
          src="/sampleImg.jpeg"
          height={200}
          width={300}
          alt="sample img"
          className={styles.image}
          draggable="false"
        />
        <Image
          src="/sampleImg.jpeg"
          height={200}
          width={300}
          alt="sample img"
          className={styles.image}
          draggable="false"
        />
        <Image
          src="/sampleImg.jpeg"
          height={200}
          width={300}
          alt="sample img"
          className={styles.image}
          draggable="false"
        />
        <Image
          src="/sampleImg.jpeg"
          height={200}
          width={300}
          alt="sample img"
          className={styles.image}
          draggable="false"
        />
      </div>
    </main>
  );
}
