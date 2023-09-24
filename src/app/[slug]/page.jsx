import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/Comments/Comments";
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet scsacsa asda.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" className={styles.avatar} fill />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Aydıncan Kalyoncu</span>
              <span className={styles.date}>20.09.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet{" "}
            </p>
            <h2 className="">Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
              amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
              sit amet Lorem ipsum dolor sit amet{" "}
            </p>
          </div>
          <Comments/>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
