import Image from "next/image";

import { CardDetails } from "../../types/cardDetails";

import * as S from "./styles";

export function CardsDetailsComponent({ hero }: CardDetails) {
  return (
    <S.CardDetails>
      <div className="groupImage">
        <Image
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
          height={550}
          width={550}
        />
      </div>
      <S.Information>
        <h1>{hero.name}</h1>
        <p>{hero.description ? hero.description : `Not exists description this details ${hero.name}`}</p>
      </S.Information>
    </S.CardDetails>
  );
}