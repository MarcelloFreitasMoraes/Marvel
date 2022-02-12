import { useEffect, useState } from "react";
import axios from "axios";

import { IContentHeroesProps } from "types/result";

import { HeaderComponent } from "components/Header";
import { LoadingComponent } from "components/Loading";
import { NotFoundComponent } from "components/NotFound";
import { SelectHeroComponent } from "components/SelectHero";
import { TypographicComponent } from "components/Typographic";

import * as S from "styles/result";

export default function Result() {
  const [search, setSearch] = useState<IContentHeroesProps[]>([]);
  const [loading, setLoading] = useState(false);

  let url: string;
  let nameHero: string;

  if (typeof window !== "undefined") {
    url = window.location?.href;
    nameHero = url.split("name=")[1];
  }

  useEffect(() => {
    document.title = `Resultado: ${nameHero} | Marvel Comics for tests!`;
  }),
    [];

  useEffect(() => {
    const BASE_URL = process.env.NEXT_PUBLIC_RESULT_BASE_URL
    const EXTENSION_URL = process.env.NEXT_PUBLIC_RESULT_EXTENSION_URL

    setLoading(true);
    axios
      .get(
        `${BASE_URL}${nameHero}${EXTENSION_URL}`
      )
      .then((response) => {
        setSearch(response.data.data.results);
        setLoading(false);
      });
  }, []);

  const resultSearchTitle = () => {
    return (
      <S.Heading>
        <TypographicComponent title="Você pesquisou: " medium />
        <TypographicComponent title={nameHero} medium primary />
      </S.Heading>
    );
  };

  return (
    <>
      <HeaderComponent />
      <div className="container">
        {resultSearchTitle()}
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            {search.length > 0 ? (
              <S.ListHero>
                {search.map((item) => (
                  <SelectHeroComponent key={item.id} data={item} />
                ))}
              </S.ListHero>
            ) : (
              <NotFoundComponent />
            )}
          </>
        )}
      </div>
    </>
  );
}
