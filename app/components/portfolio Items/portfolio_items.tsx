import React from "react";
import styles from "./page.module.css";
import Image from "next/image";


export default function PortfolioItem(props:any) {
    const height:number = props.height
    const width:number = props.width
    const description:string = props.description
    const image:string = props.src
    const alt:string = props.alt

  return (
    <div>
        <div>
            <Image height={height} width={width} src={image} alt={alt} className={styles.image}/>
            <h2>{description}</h2>
        </div>
    </div>
  );
}
