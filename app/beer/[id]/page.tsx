import { Suspense } from "react";
import { Beer } from "../../../domain/entities/beer";
import BeerDetailLoading from "./loading";

import styles from "./page.module.scss";

async function getBeer(id: string) {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  return await response.json();
}

async function BeerDetails({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const [beer]: Beer[] = await getBeer(params.id);
  console.log(beer.ingredients.hops);

  const hops = beer.ingredients.hops.reduce((acc, item) => {
    const key = item.attribute;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, Beer["ingredients"]["hops"]>);

  return (
    <Suspense fallback={<BeerDetailLoading />}>
      <div className={styles.container}>
        <div className={styles.bgimg} />
        <div className={styles.content}>
          <div className={styles.left}>
            <img src={beer.image_url} alt="img" />
          </div>
          <div className={styles.right}>
            <h1>{beer.name}</h1>
            <div className={styles.block}>
              <p className={styles.bold}>
                ABV: <span>{beer.abv}%</span>
              </p>
              <p className={styles.bold}>
                IBU: <span>{beer.ibu}</span>
              </p>
            </div>
            <div className={styles.yeastBlock}>
              <div className={styles.yeastLabel}>Yeast:</div>{" "}
              <div>{beer.ingredients.yeast}</div>
            </div>
            <p className={styles.tagline}>{beer.tagline}</p>

            <div className={styles.tipsBlock}>
              <p className={styles.tipsLabel}>Tips: </p>
              <p className={styles.tips}>{beer.brewers_tips}</p>
            </div>
            <div className={styles.tastes}>
              <div className={styles.tastesLabel}>Tastes:</div>
              <div className={styles.tastesItem}>
                {beer.food_pairing.join(", ")}
              </div>
            </div>
            <div className={styles.description}>
              <p className={styles.text}>{beer.description}</p>
            </div>
          </div>
        </div>
      </div>
      ;
    </Suspense>
  );
}

export default BeerDetails;
