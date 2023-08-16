import styles from "./page.module.css";

export default function About() {
  return (
    <div className="main_wrapper">
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.left}`}
        >
          <h3 className={styles.date}>August 2016</h3>
          <div className={styles.content}>
            <h2>First exposure</h2>
            <p>
              Dabbled with HTML and CSS in Highschool. I did some after achool
              activies to learn. Although MySpace was phased out, I still used
              it to mess with markup.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.right}`}
        >
          <h3 className={styles.date}>February 2020</h3>
          <div className={styles.content}>
            <h2>Basic Programming Refresher</h2>
            <p>
              I played around with free resources. FreeCodeCamp and mobile apps
              that taught a bit of javascript. Unfortunately, covid hit and life
              took my attention away from programming.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.left}`}
        >
          <h3 className={styles.date}>April 2022</h3>
          <div className={styles.content}>
            <h2>Self Teaching With FreeCodeCamp</h2>
            <p>
              I remembered really enjoying programming from my past exposure. At
              this point I'm already established in my career as a process
              technician, but I want to start doing something I really enjoy. I
              started solidifying my knowledge with more FreeCodeCamp courses-
              Responsive web design, Javascript, Algorithms and Data structures.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.right}`}
        >
          <h3 className={styles.date}>July 2022</h3>
          <div className={styles.content}>
            <h2>More Rigor With Harvard's CS50</h2>
            <p>
              Online reccomendations pointed to trying out Harvards CS50 since
              it taught fundamentals. I decided to try it out and see if
              programming could be an enjoyable career change. Lessons were
              taught in C to teach students what's going in behind the scenes of
              modern languages. In the end this solidified my journey and I
              started looking into my options to formalize my learning.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.left}`}
        >
          <h3 className={styles.date}>November 2022</h3>
          <div className={styles.content}>
            <h2>Formalized Education With General Assembly</h2>
            <p>
              Took a part time course in Software Engineering. I worked full
              time at 48/hrs per week while juggling the 30/hr a week course for 6 months.
              The intense schedule was worth it, as every week that I learned
              somethng new and got to solve problems was pure satisfaction. My
              proudest moment in this course was being voted most likely to
              solve a difficult problem by the class and voted most likely to
              retire in costa rica by our lead instructor. Cheesy stuff, but it
              feels nice knowing those hours of picking at the tid bit
              information was paying off.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.right}`}
        >
          <h3 className={styles.date}>May 2023</h3>
          <div className={styles.content}>
            <h2>Software Engineer Volunteer With Hack For LA- Website Team</h2>
            <p>
              Hack For LA has been a wonderful opportunity to 
              develop collaboration skills, learning bets practice, and 
              growing as a developer. I've learned a lot through participating 
              in meetings, getting pull request reviews, and reviewing pull request. 
              Added new features to the website and even got to try out opitimizing their GitHub workflow
              by automating a part of the issue system on the project board.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.left}`}
        >
          <h3 className={styles.date}>June 2023</h3>
          <div className={styles.content}>
            <h2>Curl Safe</h2>
            <p>
              Made a mobile app from scratch using React Native. The 
              app was made for a forum that had a need of analyzing 
              ingredients in hair products. I got 100+ downloads and 
              along with the opportunity to learn Google Cloud Services, solidified 
              my FrontEnd and BackEnd skills. 
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.right}`}
        >
          <h3 className={styles.date}>August 2023</h3>
          <div className={styles.content}>
            <h2>Hack For LA- Home Unite Us Project</h2>
            <p>
              Noticed that a technology in demand is Typescript, so I joined 
              the Home Unite Us Project to grow that skill and also keep my Python 
              skills up to date. I joined this project during its development phase and have 
              gotten to contribute from scratch. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
