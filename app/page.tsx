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
        console.log(track.dataset.mouseDown = e.clientX.toString())
      }
      window.onmousemove = (e: MouseEvent) => {
        const mouseDownValue = track.dataset.mouseDown;
        if (mouseDownValue !== undefined) {
          const mouseDelta = parseFloat(mouseDownValue) - e.clientX;
          const maxDelta = window.innerWidth / 2;
    
          const percentage = (mouseDelta / maxDelta) * -100;
    
          track.style.transform = `translate(${percentage}%, 0%)`;
        }
      }

/*       const handleMouseDown = (e: MouseEvent) => {
        track.dataset.mouseDown = e.clientX.toString();
      };
      window.onmousemove = (e: MouseEvent) => {
        const mouseDownValue = track.dataset.mouseDown;
        if (mouseDownValue !== undefined) {
          const mouseDelta = parseFloat(mouseDownValue) - e.clientX;
          const maxDelta = window.innerWidth / 2;
    
          const percentage = (mouseDelta / maxDelta) * -100;
    
          track.style.transform = `translate(${percentage}%, 50%)`;
        }
      } */
      /* window.addEventListener("mousedown", handleMouseDown);

      return () => {
        window.removeEventListener("mousedown", handleMouseDown);
      }; */
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
      <div id="img_track" className={styles.img_track} data-mouse-down-at="0">
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
