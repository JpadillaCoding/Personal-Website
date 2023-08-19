import styles from "./page.module.css";

export default function Resume() {
  return (
    <main className="main_wrapper" id="main_wrapper">
      <div className="intro_wrapper">
        <h1 className="page_title">Resume.</h1>
      </div>
      <div className="divider"></div>
      <div className={styles.resume_wrapper}>
        <object
          data="https://docs.google.com/document/d/1bwXcVwzp6sHV-imUdj8bVup8Aif4RFmTDJjwSWMjQ-E/edit?usp=sharing"
          width={"80%"}
          height={"100%"}
          className={styles.resume_frame}
        >
          <p>Browser failed to load the pdf. You can visit this <a href="https://docs.google.com/document//1bwXcVwzp6sHV-imUdj8bVup8Aif4RFmTDJjwSWMjQ-E/edit?usp=sharing">Link</a> to see it on google drive</p>
        </object>
      </div>
    </main>
  );
}
