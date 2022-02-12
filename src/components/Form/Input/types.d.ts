import { FormEvent } from "react";

export interface IContentProps {
  onClick: (event) => void;
  onChange: (event: FormEvent) => void;
  placeholder: string0;
  value: string | undefined;
}
