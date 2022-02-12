import { useRef, useEffect } from "react";

import { InputField, SearchIcon } from "./styles";
import { IContentProps } from "./types";

export function InputComponent({
  onClick,
  onChange,
  placeholder,
  value,
}: IContentProps) {
  const focusInput = useRef<any>(null);

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <InputField>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ref={focusInput}
      />
      <button type="submit" onClick={onClick}>
        <SearchIcon />
      </button>
    </InputField>
  );
}
