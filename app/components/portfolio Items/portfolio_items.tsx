import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { relative } from "path";


export default function PortfolioItem(props:any) {
    const description:string = props.description
    const image:string = props.src
    const alt:string = props.alt

  return (
    <div className={styles.outer_wrapper}>
        <div className={styles.inner_wrapper}>
            <Image fill src={image} alt={alt} />
            <h2>{description}</h2>
        </div>
    </div>
  );
}
