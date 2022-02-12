import { useEffect, useState } from "react";
import axios from "axios";

import * as S from "styles/result";

import { IContentHeroesProps } from "types/result";
import { NotFoundComponent } from "components/NotFound";
import { HeaderComponent } from "components/Header";
import { LoadingComponent } from "components/Loading";
import { SelectHeroComponent } from "components/SelectHero";

export default function Result() {
  const [search, setSearch] = useState<IContentHeroesProps[]>([]);
  const [searchHero, setSearchHero] = useState("");
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
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
    setLoading(true);
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHero}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
      )
      .then((preview) => {
        setSearch(preview.data.data.results);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  const pages = Math.ceil(search.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = search.slice(startIndex, endIndex);

  const resultSearchTitle = () => {
    return (
      <S.Title>
        Você pesquisou: <span>{nameHero}</span>
      </S.Title>
    );
  };

  console.log(search);

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
