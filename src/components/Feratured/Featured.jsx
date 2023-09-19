import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, GluGlu is here!</b> Discover my stories and creative recipes.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem Ipsum Dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className={styles.postDescription}>
            Lorem Ipsum Dolor sit amet alim consectetur adipisicing elit Lorem
            Ipsum Dolor sit amet alim consectetur adipisicing elit Lorem Ipsum
            Dolor sit amet alim consectetur adipisicing elit Lorem Ipsum Dolor
            sit amet alim consectetur adipisicing elit
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
