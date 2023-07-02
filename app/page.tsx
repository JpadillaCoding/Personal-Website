import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main_wrapper}>
      <h1 className={styles.page_title}>Welcome.</h1>
      <div className={styles.page_intro}>
      <p>My name is Jose Padilla. I'm a Full-Stack Developer in Houston, Texas. 
      Programming is a true enjoyment for me since it accommodates my need of solving problems. 
      Current I am sharpening my skills with porjects and volunteering as a full stack developer
      at Hack For LA.
      </p>
      </div>
    </main>
  )
}
