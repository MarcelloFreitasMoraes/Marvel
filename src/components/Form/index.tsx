import { FormEvent, useState } from "react";

import { InputComponent } from "./Input";
import { IConditionProps } from "./Input/type";

import { Form } from "./styles";

export function FormComponent({ isSearch, isSend }: IConditionProps) {
  const [hero, setHero] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitSearch = (event: FormEvent) => {
    event.preventDefault()

    window.location.href = `result?name=${hero}`;
  }

  const onSendEmail = (event: FormEvent) => {
    event.preventDefault();

    console.log(email);
  }

  return (
    <>
      {isSearch && (
        <Form onSubmit={onSubmitSearch}>
          <InputComponent
            placeholder="Busque por seu herói..."
            value={hero}
            onClick={onSubmitSearch}
            //@ts-ignore
            onChange={(event) => setHero(event.target.value)}
            iconSearch
          />
        </Form>
      )}
      {isSend && (
        <Form onSubmit={onSendEmail}>
          <InputComponent
            placeholder="Digite o seu email..."
            value={email}
            onClick={onSendEmail}
            //@ts-ignore
            onChange={(event) => setEmail(event.target.value)}
            iconSend
          />
        </Form>
      )}
    </>
  );
}
