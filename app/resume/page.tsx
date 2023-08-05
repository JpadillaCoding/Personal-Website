import styles from "./page.module.css";

export default function Resume() {
  return (
    <div className={styles.resume_wrapper}>
      <iframe
        src="https://docs.google.com/document/d/1bwXcVwzp6sHV-imUdj8bVup8Aif4RFmTDJjwSWMjQ-E/edit?usp=sharing"
        width={"80%"}
        height={"100%"}
        className={styles.resume_frame}
      >
        
      </iframe>
    </div>
  );
}
