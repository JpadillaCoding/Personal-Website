import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.timeline}>
        <div className={styles.content_container}>
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
  );
}
