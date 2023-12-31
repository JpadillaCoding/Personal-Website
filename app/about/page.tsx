import styles from "./page.module.css";

export default function About() {
  return (
    <main className="main_wrapper">
      <div className="intro_wrapper">
        <h1 className="page_title">Timeline.</h1>
        <div className="page_intro">
          <p>
            Major milestones through my developer journey. I started as a
            self-taught, formalized my education, and am currently gaining
            experience as a Software Engineer volunteer!
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.left}`}
        >
          <h3 className={styles.date}>August 2016</h3>
          <div className={styles.content}>
            <h2>First exposure</h2>
            <p>
              Dabbled with HTML and CSS in Highschool. I did some after school
              activities to learn. Although MySpace was phased out, I still used
              it to practice HTML and CSS.
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
              that taught a bit of Javascript. I continued making small projects
              and creating neat things on my computer and on CodePen throughout
              the years.
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
              At this point, I'm already established in my career as a process
              technician where I learned to be a leader and manage projects with
              teams, but I want to start doing something I really enjoy. I
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
              Online recommendations pointed to trying out Harvards CS50 since
              it taught Computer Science fundamentals. Lessons were taught in C
              to teach students what's going in behind the scenes of modern
              languages. Major things covered included abstraction, algorithms,
              data structures, encapsulation, resource management, security,
              software engineering, and web development
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
              time at 48/hrs per week while juggling the 30/hr a week course for
              6 months. The intense schedule was worth it, as every week that I
              learned something new and got to solve problems was pure
              satisfaction. My proudest moment in this course was being voted
              most likely to solve a difficult problem by the class and voted
              most likely to retire in costa rica by our lead instructor. Cheesy
              stuff, but it feels nice knowing those hours of picking at the tid
              bit information was paying off.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.right}`}
        >
          <h3 className={styles.date}>April 2023</h3>
          <div className={styles.content}>
            <h2>Software Engineer Volunteer With Hack For LA- Website Team</h2>
            <p>
              Hack For LA has been a wonderful opportunity to develop
              collaboration skills, learn best practices, and grow as a
              developer. I've learned a lot through participating in meetings,
              getting pull request reviews, and reviewing pull requests. Added
              new features to the website and even got to try out optimizing
              their GitHub workflow by automating a part of the issue system on
              the project board.
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
              Made a mobile app from scratch using React Native. The app was
              made for a forum that needed to analyze ingredients in hair
              products. I got 100+ downloads along with the opportunity to learn
              Google Cloud Services and solidifying my Front-End and Back-End
              skills.
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
              Noticed that a technology in demand is Typescript, so I joined the
              Home Unite Us Project to grow that skill and also keep my Python
              skills up to date. I joined this project during its development
              phase and have contributed by implementing features with our
              backend, upgrading security, and making UX/UI designs come to
              life.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div
          className={`${styles.content_container}
         ${styles.left}`}
        >
          <h3 className={styles.date}>November 2023</h3>
          <div className={styles.content}>
            <h2>Flow Lobby- Social media platform</h2>
            <p>
              I noticed a productivity increase with my code production at Hack For
              LA. I used this increase in performance to join another project in
              tandem with Hack For LA to work on my programming skillset. Here,
              I've implemented resuable and scalable React Native components for
              a social media application. With a start-up environment, I have
              been able to contribute a significant amount to our beta app and
              have been more involved in design and architecture planning.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
