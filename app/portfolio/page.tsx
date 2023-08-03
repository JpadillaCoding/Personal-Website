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
          src={"/trivia.png"}
          description={"trivia game"}
          alt={"preview of trivia gmae homescreen"}
        />
        <PortfolioItem
          src={"/trivia.png"}
          description={"trivia game"}
          alt={"preview of trivia gmae homescreen"}
        />
        <PortfolioItem
          src={"/trivia.png"}
          description={"trivia game"}
          alt={"preview of trivia gmae homescreen"}
        />
      </div>
    </main>
  );
}
