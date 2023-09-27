import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const getData = async () => {
  try {
    const result = await axios.get("http://localhost:3000/category");
    return result.data.data;
  } catch (error) {
    console.log("Error message: ", error);
    throw new Error("Fetch error: ", error);
  }
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.id}
          >
            {item.image && (<Image
              src={item.image}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />)}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
