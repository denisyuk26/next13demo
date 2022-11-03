"use client";
import { useSearchParams } from "next/navigation";
import { Beer } from "../../../../domain/entities/beer";
import BeerItem from "../beer-item/beer-item";
import styles from "./beer-list.module.scss";

function Pagination() {
  const params = useSearchParams();
  function loadMore(pageNumber: number) {
    window.location.search = `?page=${pageNumber}`;
  }

  const arr = new Array(10).fill(0).map((_, i) => i);

  return (
    <div className={styles.pagination}>
      {arr.map((item) => {
        const active =
          Number(params.get("page")) === item + 1 ||
          (params.get("page") === null && item === 0);
        return (
          <button
            className={`${styles.paginationItem} ${
              active && styles.paginationItemActive
            }`}
            key={item}
            onClick={() => loadMore(item + 1)}
          >
            {item + 1}
          </button>
        );
      })}
    </div>
  );
}

function BeerList({ beers }: { beers: Beer[] }) {
  return (
    <>
      <div className={styles.container}>
        {beers.map((item) => (
          <BeerItem key={item.id} beer={item} />
        ))}
      </div>
      {beers.length === 25 && <Pagination />}
    </>
  );
}

export default BeerList;
