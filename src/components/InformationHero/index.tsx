import Image from "next/image";

import { CardDetails } from "../../types/cardDetails";
import { TypographicComponent } from "../Typographic";

import * as S from "./styles";

export function InformationHerosComponent({ hero }: CardDetails) {
  return (
    <S.CardDetails>
      <div className="groupImage">
        <Image
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
          height={450}
          width={450}
        />
      </div>
      <S.Information>
        <TypographicComponent title={hero.name} large></TypographicComponent>
        <TypographicComponent regular title={hero.description ? hero.description : `Not exists description this details ${hero.name}`}></TypographicComponent>
      </S.Information>
    </S.CardDetails >
  );
}