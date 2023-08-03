import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function PortfolioItem(props: any) {
  const description: string = props.description;
  const image: string = props.src;
  const alt: string = props.alt;

  return (
    <div className={styles.outer_wrapper}>
      <div className={styles.image_wrapper}>
          <Image fill src={image} alt={alt} />
      </div>
      <div className={styles.content_wrapper}>
        <h2>{description}</h2>
      </div>
    </div>
  );
}
