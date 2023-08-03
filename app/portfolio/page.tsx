import React from "react";
import PortfolioItem from "../components/portfolio Items/portfolio_items";
import styles from "./page.module.css";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="main_wrapper" id="main_wrapper">
      <div className="intro_wrapper">
        <h1 className="page_title">Portfolio.</h1>
        <div className="page_intro">
          <p>idk</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.portfolio_items_wrapper}>
        <PortfolioItem
          src={"/spaceSnap.png"}
          description={"SpaceSnap: NASA image search engine"}
          alt={"preview of space snap home screen"}
        />
        <PortfolioItem
          src={"/trivia.png"}
          description={"WDYKT Trivia: A trivia game"}
          alt={"preview of trivia game homescreen"}
        />
        <PortfolioItem
          src={"/curly.jpg"}
          description={"CurlSafe: Ingredient analyzer"}
          alt={"preview of Curl Safe advertisment for the app store"}
        />
        <PortfolioItem
          src={"/hackLa.png"}
          description={"HackForLA: SoftWare Engineer volunteer"}
          alt={"screen shot of hack for LA homepage"}
        />
        <PortfolioItem
          src={"/calorieTrakr.png"}
          description={"CalorieTrakr: Web app to track nutrition"}
          alt={"preview of calorie trakr homescreen"}
        />
        <PortfolioItem
          src={"/nycApi.png"}
          description={"NYC Amenities: API for amenities in NYC parks"}
          alt={"preview of NYC amenities api documentation"}
        />
      </div>
    </main>
  );
}
