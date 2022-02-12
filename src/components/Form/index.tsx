import { FormEvent, useState } from "react";

import { InputComponent } from "./Input";

import { Form } from "./styles";

export function FormComponent() {
  const [hero, setHero] = useState("");

  function onSubmitSearch(event: FormEvent) {
    event.preventDefault()

    window.location.href = `result?name=${hero}`;
  }

  return (
    <Form onSubmit={onSubmitSearch}>
      <InputComponent
        placeholder="Busque por seu herói"
        value={hero}
        onClick={onSubmitSearch}
        onChange={(event) => setHero(event.target.value)}
      />
    </Form>
  );
}
