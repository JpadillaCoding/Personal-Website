"use client";

//possibly make the track a component to avoid the whole page being a client side item

import { useEffect } from "react";
import styles from "./page.module.css";
import ImageTrack from "./components/Image track/img_track";

export default function Home() {

  useEffect(() => {
    const track = document.getElementById("img_track");
    if (track) {
      window.onmousedown = (e: MouseEvent) => {
        track.dataset.mouseDownAt = e.clientX.toString();
      };
      window.onmousemove = (e: MouseEvent) => {
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
    <main className={styles.main_wrapper} id="main_wrapper">
      <div className={styles.intro_wrapper}>
        <h1 className={styles.page_title}>Welcome.</h1>
        <div className={styles.page_intro}>
          <p>
            My name is Jose Padilla. I'm a Full-Stack Developer in Houston,
            Texas. Programming is a true enjoyment of mine since it accommodates
            my need of solving problems. Currently I am sharpening my skills
            with projects and volunteering as a Full-Stack Developer at Hack For
            LA.
          </p>
        </div>
      </div>
      <div className={styles.divider}>
      </div>
      <ImageTrack />
    </main>
  );
}
