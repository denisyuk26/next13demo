import Link from "next/link";
import styles from "./main-page.module.scss";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Find your perfect beer!</h1>
      <Link className={styles.link} href={"/beer"}>
        Enter
      </Link>
    </div>
  );
}
