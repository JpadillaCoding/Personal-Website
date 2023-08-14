import styles from "./page.module.css";

export default function About() {
  return (
    <div className="main_wrapper">
      <div className={styles.timeline}>
        <div className={`${styles.content_container}
         ${styles.left}`}>
          <h3 className={styles.date}>August 2016</h3>
          <div className={styles.content}>
          <h2>First item..</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={`${styles.content_container}
         ${styles.right}`}>
          <h3 className={styles.date}>February 2020</h3>
          <div className={styles.content}>
          <h2>Second item..</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
