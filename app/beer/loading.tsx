import styles from "./beer.module.scss";

function ListLoading() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.containerS}>
        <div className={styles.img} />
        <div className={styles.info}>
          <div className={styles.name} />
          <div className={styles.abv} />
          <div className={styles.tagline} />
          <div className={styles.yeast} />
        </div>
      </div>
      <div className={styles.containerS}>
        <div className={styles.img} />
        <div className={styles.info}>
          <div className={styles.name} />
          <div className={styles.abv} />
          <div className={styles.tagline} />
          <div className={styles.yeast} />
        </div>
      </div>
      <div className={styles.containerS}>
        <div className={styles.img} />
        <div className={styles.info}>
          <div className={styles.name} />
          <div className={styles.abv} />
          <div className={styles.tagline} />
          <div className={styles.yeast} />
        </div>
      </div>
      <div className={styles.containerS}>
        <div className={styles.img} />
        <div className={styles.info}>
          <div className={styles.name} />
          <div className={styles.abv} />
          <div className={styles.tagline} />
          <div className={styles.yeast} />
        </div>
      </div>
    </div>
  );
}

export default ListLoading;
