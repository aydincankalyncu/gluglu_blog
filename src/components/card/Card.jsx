import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({key, item}) => {
  return (
    <div key={key} className={styles.container}>
      <div className={styles.imageContainer}>
        {item.image && <Image className={styles.image} src={item.image} alt="" fill />}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.createdAt.substr(0,10)} - </span>
          <span className={styles.category}>{item.categorySlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.description}>
          {item.description}
        </p>
        <Link className={styles.link} href={`/posts/${item.slug}`}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
