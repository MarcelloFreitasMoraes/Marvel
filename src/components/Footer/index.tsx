import Link from "next/link";

import * as S from "./styles";

export function FooterComponent() {
  return (
    <S.Footer>
      <div className="container">
        <p>
          Desenvolvido por{" "}
          <Link href="https://github.com/ViniciusIDaCruz" passHref>
            <strong>Vinicius Italo</strong>
          </Link>
        </p>
        <div className="icons">
          <Link href="https://github.com/ViniciusIDaCruz" passHref>
            <S.Github />
          </Link>

          <Link href="https://www.facebook.com/viniitalodacruz/" passHref>
            <S.Facebook />
          </Link>

          <Link href="https://br.linkedin.com/in/vinicius-italo-da-cruz-79402821a" passHref>
            <S.Linkedin />
          </Link>
        </div>
      </div>
    </S.Footer>
  );
}
