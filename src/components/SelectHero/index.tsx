import * as S from "./styles";

import { IContentDataProps } from "types/result";

export function SelectHeroComponent({ data }: IContentDataProps) {

  const maxDescription = data.description.substring(0, 100);
  const date = data.modified.substring(10, 0);  

  return (
    <S.Content>
      <S.Container>
        <S.Thumbnail
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          width={300}
          height={280}
        />

        <S.Info>
          <h3>{data.name}</h3>

          <p>{data.description ? `${maxDescription}...` : "Dont't have description..."}</p>

          <S.FooterInfo>
              <span>{data.id}</span>
              <p>{date}</p>
          </S.FooterInfo>
        </S.Info>

        <S.Call></S.Call>
      </S.Container>
    </S.Content>
  );
}
