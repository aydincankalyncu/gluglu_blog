import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../card/Card";
import axios from "axios";

const getData = async (page, cat) => {
  try {
    const result = await axios.get(
      `http://localhost:3000/posts?page=${page}&cat=${cat || ""}`
    );
    return result.data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Fetch error: ", JSON.stringify(error));
  }
};

const CardList = async ({ page, cat }) => {
  const data = await getData(page, cat);
  const pageNumber = parseInt(page);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (pageNumber - 1) + POST_PER_PAGE < data?.totalCount;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.postList?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Pagination cat={cat} hasNext={hasNext} hasPrev={hasPrev} page={page} />
    </div>
  );
};

export default CardList;
