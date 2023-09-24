import React from "react";
import PortfolioItem from "../components/portfolio Items/portfolio_items";
import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <main className="main_wrapper" id="main_wrapper">
      <div className="intro_wrapper">
        <h1 className="page_title">Portfolio.</h1>
        <div className="page_intro">
          <p>
            Featured projects and experience as a Software Engineer. Each
            project reinforced my skillset or showcases my adaptability to new
            technologies.
          </p>
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.portfolio_items_wrapper}>
        <PortfolioItem
          src={"/hackLa.png"}
          title={"HackForLA- Software Engineer volunteer"}
          alt={"screen shot of hack for LA homepage"}
          tech={"Typscript, React, Python, Redux, PostgresSQL, AWS, Docker, Figma"}
          link={"https://www.hackforla.org/"}
          description={
            "Full stack experience by contributing to civic-minded projects that benefit the communities of the greater LA area."
          }
        />
        <PortfolioItem
          src={"/curly.jpg"}
          title={"CurlSafe: Ingredient analyzer"}
          alt={"preview of Curl Safe advertisment for the app store"}
          tech={
            "React Native, Express.js, Redux, MongoDB, Google Cloud Services"
          }
          link={"https://github.com/JpadillaCoding/CurlSafe-Frontend"}
          description={
            "Mobile app that analyzes hair product ingredients. Made for a forum that seeks to remove certain ingredients from their hair routine."
          }
        />
        <PortfolioItem
          src={"/calorieTrakr.png"}
          title={"CalorieTrakr: Web app to track nutrition"}
          alt={"preview of calorie trakr homescreen"}
          tech={"Node.js, Express.js, React, JWT, MongoDB"}
          link={"https://github.com/JpadillaCoding/Front-end-MERN-Project"}
          description={"Collaborative project that helps track micro and macro nutrient intake."}
        />
        <PortfolioItem
          src={"/nycApi.png"}
          title={"NYC Amenities: API for amenities in NYC parks"}
          alt={"preview of NYC amenities api documentation"}
          tech={"Node.js, Express.js, MongoDB, REST API, Postman, Apidocs"}
          link={"https://github.com/JpadillaCoding/NYC-parks-and-amenities"}
          description={"API that takes in data from NYC's OpenAPI to bundle amenities at parks in all 5 boroughs."}
        />
        <PortfolioItem
          src={"/spaceSnap.png"}
          title={"SpaceSnap: NASA image searcher"}
          alt={"preview of space snap home screen"}
          tech={"React, Bootstrap, API, Asynchronous programming "}
          link={"https://github.com/JpadillaCoding/SpaceSnap"}
          description={"Search through NASA's image database with real time images and info about the image."}
        />
        <PortfolioItem
          src={"/trivia.png"}
          title={"WDYKT Trivia: A trivia game"}
          alt={"preview of trivia game homescreen"}
          tech={"Javascript, DOM manipulation, Storybook"}
          link={"https://github.com/JpadillaCoding/WDYKT-Trivia"}
          description={"Trivia game with random tidbit information that I know. It's what I'm known for!"}
        />
      </div>
    </main>
  );
}
