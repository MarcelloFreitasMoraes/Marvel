import Link from "next/link";

import * as S from "./styles";

export function FooterComponent() {
  return (
    <S.Footer>
      <div className="container">
        <p>
          Desenvolvido por{" "}
          <Link href="https://github.com/ViniciusIDaCruz">
            <strong>Vinicius Italo</strong>
          </Link>
        </p>
        <div className="icons">
          <Link href="https://github.com/ViniciusIDaCruz">
            <S.Github />
          </Link>

          <Link href="https://www.facebook.com/viniitalodacruz/">
            <S.Facebook />
          </Link>

          <Link href="https://br.linkedin.com/in/vinicius-italo-da-cruz-79402821a">
            <S.Linkedin />
          </Link>
        </div>
      </div>
    </S.Footer>
  );
}
