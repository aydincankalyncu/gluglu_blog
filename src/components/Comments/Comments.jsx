import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="Writw a comment..." />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a Comments</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image className={styles.image} src="/p1.jpeg" width={50} height={50}/>
            <div className={styles.userInfo}>
              <span className={styles.username}>Aydıncan Kalyoncu</span>
              <span className={styles.date}>24.09.2023</span>
            </div>
          </div>
          <p className={styles.decsription}>Lorem Ipsum dolor</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image className={styles.image} src="/p1.jpeg" width={50} height={50}/>
            <div className={styles.userInfo}>
              <span className={styles.username}>Aydıncan Kalyoncu</span>
              <span className={styles.date}>24.09.2023</span>
            </div>
          </div>
          <p className={styles.decsription}>Lorem Ipsum dolor</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image className={styles.image} src="/p1.jpeg" width={50} height={50}/>
            <div className={styles.userInfo}>
              <span className={styles.username}>Aydıncan Kalyoncu</span>
              <span className={styles.date}>24.09.2023</span>
            </div>
          </div>
          <p className={styles.decsription}>Lorem Ipsum dolor</p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image className={styles.image} src="/p1.jpeg" width={50} height={50}/>
            <div className={styles.userInfo}>
              <span className={styles.username}>Aydıncan Kalyoncu</span>
              <span className={styles.date}>24.09.2023</span>
            </div>
          </div>
          <p className={styles.decsription}>Lorem Ipsum dolor</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
