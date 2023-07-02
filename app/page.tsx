import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  //might need to add overflow: hidden for now scroll bar
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
      <div className={styles.img_track}>
        <Image src="/sampleImg.jpeg" height={200} width={300} alt="sample img" className={styles.image}/>
        <Image src="/sampleImg.jpeg" height={200} width={300} alt="sample img" className={styles.image}/>
        <Image src="/sampleImg.jpeg" height={200} width={300} alt="sample img" className={styles.image}/>
        <Image src="/sampleImg.jpeg" height={200} width={300} alt="sample img" className={styles.image}/>
        <Image src="/sampleImg.jpeg" height={200} width={300} alt="sample img" className={styles.image}/>
      </div>
    </main>
  );
}
