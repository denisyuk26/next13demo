//@ts-ignore
import { Suspense } from "react";
import { UrlBuilder } from "../../helpers/url-builder";
import styles from "./beer.module.scss";
import BeerList from "./components/beer-list/beer-list";
import FiltersBlock from "./components/filters-block/filters-block";

export async function getBeers(params?: {
  beer_name?: string;
  abv_gt?: string;
  abv_lt?: string;
  page?: string;
}) {
  // return Promise.resolve(beers);
  const url = new UrlBuilder("https://api.punkapi.com/v2/beers");
  const response = await fetch(
    url
      .addSearchParam("beer_name", params?.beer_name)
      .addSearchParam("abv_gt", params?.abv_gt)
      .addSearchParam("abv_lt", params?.abv_lt)
      .addSearchParam("page", params?.page)
      .toString(),
    {
      cache: "no-store",
    }
  );
  return await response.json();
}

async function BeerPage({
  searchParams,
}: {
  searchParams: {
    beer_name?: string;
    abv_gt?: string;
    abv_lt?: string;
    page?: string;
  };
}) {
  const beers = await getBeers(searchParams);

  return (
    <div className={styles.container}>
      <Suspense fallback={<div>loading</div>}>
        <FiltersBlock />
        <BeerList beers={beers} />
      </Suspense>
    </div>
  );
}

export default BeerPage;
