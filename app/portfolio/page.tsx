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
          description={"HackForLA: SoftWare Engineer volunteer"}
          alt={"screen shot of hack for LA homepage"}
          tech={"Typscript, React, Python, Redux, PostgresSQL, AWS, Docker"}
        />
        <PortfolioItem
          src={"/curly.jpg"}
          description={"CurlSafe: Ingredient analyzer"}
          alt={"preview of Curl Safe advertisment for the app store"}
          tech={
            "React Native, Express.js, Redux, MongoDB, Google Cloud Services"
          }
        />
        <PortfolioItem
          src={"/calorieTrakr.png"}
          description={"CalorieTrakr: Web app to track nutrition"}
          alt={"preview of calorie trakr homescreen"}
          tech={"Node.js, Express.js, React, JWT, MongoDB"}
        />
        <PortfolioItem
          src={"/nycApi.png"}
          description={"NYC Amenities: API for amenities in NYC parks"}
          alt={"preview of NYC amenities api documentation"}
          tech={"Node.js, Express.js, MongoDB, REST API, Postman, Apidocs"}
        />
        <PortfolioItem
          src={"/spaceSnap.png"}
          description={"SpaceSnap: NASA image search engine"}
          alt={"preview of space snap home screen"}
          tech={"React, Bootstrap, API, Asynchronous  programming "}
        />
        <PortfolioItem
          src={"/trivia.png"}
          description={"WDYKT Trivia: A trivia game"}
          alt={"preview of trivia game homescreen"}
          tech={"Javascript, DOM manipulation, Storybook"}
        />
      </div>
    </main>
  );
}
