import Image from "next/image";

import error from "assets/notfound.png";

import * as S from "./styles";
import { ButtonComponent } from "components/Button";

function redirectToHome() {
  window.location.href = "/";
}

export function NotFoundComponent() {
  return (
    <S.Background>
      <div className="container">
        <S.NotFound>
          <Image src={error} width={450} height={200} alt="DeadPool" />
          <h1>Desculpe, mas a sua pesquisa não existe aqui nesse site!</h1>
          <ButtonComponent
            title="Voltar para home"
            type="button"
            onClick={redirectToHome}
          />
        </S.NotFound>
      </div>
    </S.Background>
  );
}
