import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function PortfolioItem(props: any) {
  const description: string = props.description;
  const image: string = props.src;
  const alt: string = props.alt;
  const tech: string = props.tech;
  const link: string = props.link

  return (
    <div className={styles.outer_wrapper}>
      <a href={link} target="blank" className={styles.anchor}>
        <div className={styles.image_wrapper}>
          <Image fill src={image} alt={alt} />
        </div>
        <div className={styles.content_wrapper}>
          <h2 className={styles.content_description}>{description}</h2>
          <h3 className={styles.content_tech}>Technologies: {tech}</h3>
        </div>
      </a>
    </div>
  );
}
