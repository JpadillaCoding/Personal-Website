import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function PortfolioItem(props: any) {
  const title: string = props.title;
  const image: string = props.src;
  const alt: string = props.alt;
  const tech: string = props.tech;
  const link: string = props.link
  const description: string = props.description

  return (
    <div className={styles.outer_wrapper}>
      <a href={link} target="blank" className={styles.anchor}>
        <div className={styles.image_wrapper}>
          <Image fill src={image} alt={alt} className={styles.image}/>
        </div>
        <div className={styles.content_wrapper}>
          <h2 className={styles.content_title}>{title}</h2>
          <h3 className={styles.content_description}>{description}</h3>
          <h4 className={styles.content_tech}>Technologies: {tech}</h4>
        </div>
      </a>
    </div>
  );
}
