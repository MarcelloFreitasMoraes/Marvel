import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

import { HeaderComponent } from '../components/Header'
import { InformationHerosComponent } from "../components/InformationHero";
import { LoadingComponent } from "../components/Loading";
import { NotFoundComponent } from "../components/NotFound";

import { Hero } from "../types/hero";

import * as S from '../styles/details'
//@ts-ignore
// import { ListHeroComponent } from "../components/ListInformationHero";

export default function Details() {
  const [searchContentHero, setSearchContentHero] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);

  let url: string;
  let idHero: string;

  if (typeof window !== "undefined") {
    url = window.location?.href;
    idHero = url.split("id=")[1];
  }

  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_RESULT_DETAILS_BASE_URL
    const EXTENSION_URL = process.env.NEXT_PUBLIC_RESULT_EXTENSION_DETAILS_URL

    setLoading(true);
    axios
      .get(
        `${BASE_URL}${idHero}${EXTENSION_URL}`
      )
      .then((response) => {
        setSearchContentHero(response?.data.data.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Detalhes de herois | Marvel Comics for tests!</title>
      </Head>

      <HeaderComponent />

      <div className="container">
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            {searchContentHero.length > 0 ? (
              <S.ListHero>
                {searchContentHero.map((item) => (
                  <InformationHerosComponent key={item.id} hero={item} />
                ))}

                {/* {searchContentHero.map((item) => (
                  <ListHeroComponent key={item.id} hero={item} />
                ))} */}
              </S.ListHero>
            ) : (
              <NotFoundComponent />
            )}
          </>
        )}
      </div>
    </>
  )
}
