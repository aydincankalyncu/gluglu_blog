import Featured from "@/components/Feratured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/CategoryList/CartegoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList  page={page}/>
        <Menu />
      </div>
    </div>
  );
}
