import React from "react";
import PortfolioItems from "../components/portfolio Items/portfolio_items";

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
      <PortfolioItems />
    </main>
  );
}
