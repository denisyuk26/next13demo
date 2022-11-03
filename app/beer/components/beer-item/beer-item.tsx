/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Beer } from "../../../../domain/entities/beer";

import styles from "./beer-item.module.scss";

function BeerItem(props: { beer: Beer }) {
  return (
    <Link className={styles.link} href={`/beer/${props.beer.id}`}>
      <div className={styles.container}>
        <img className={styles.img} src={props.beer.image_url} alt="beer" />
        <div className={styles.info}>
          <h3 className={styles.name}>{props.beer.name} </h3>
          <p className={styles.abv}>
            ABV: <span className={styles.abvValue}>{props.beer.abv}%</span>
          </p>
          <p className={styles.tagline}>{props.beer.tagline}</p>
          <p className={styles.yeast}>{props.beer.ingredients.yeast}</p>
        </div>
      </div>
    </Link>
  );
}

export default BeerItem;
