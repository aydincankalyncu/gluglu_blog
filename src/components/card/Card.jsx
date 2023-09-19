import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>19.09.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Test title</h1>
        </Link>
        <p className={styles.description}>
          Test description Test description Test descriptionTest descriptionTest
          descriptionTest descriptionTest descriptionTest descriptionTest
          descriptionTest descriptionTest descriptionTest descriptionTest
          description
        </p>
        <Link className={styles.link} href="/">Read More</Link>
      </div>
    </div>
  );
};

export default Card;
