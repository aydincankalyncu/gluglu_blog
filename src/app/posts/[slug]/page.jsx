import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/Comments/Comments";
import axios from "axios";

const getData = async (slug) => {
  try {
    console.log(`Slug: ${slug}`);
    const result = await axios.get(`http://localhost:3000/posts/${slug}`);
    return result.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <div className={styles.container}>
      {data && (
        <>
          <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{data.title}</h1>
              <div className={styles.user}>
                {data.image && (
                  <div className={styles.userImageContainer}>
                    <Image
                      src={data.image}
                      alt=""
                      className={styles.avatar}
                      fill
                    />
                  </div>
                )}
                <div className={styles.userTextContainer}>
                  <span className={styles.username}>Aydıncan Kalyoncu</span>
                  <span className={styles.date}>20.09.2023</span>
                </div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image src={data.image} alt="" fill className={styles.image} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.post}>
              {/* <div className={styles.description}>
                <p>{data.description}</p>
              </div> */}
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
              <Comments />
            </div>
            <Menu />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default SinglePage;
