import styles from "./page.module.css";
import ImageTrack from "./components/Image track/img_track";

export default function Home() {

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
