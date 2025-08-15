import { use } from "react";
import { T_elements } from "../contexts/E_context";

export function S_Elements() {
  const { elements } = use(T_elements);

  console.log(elements);
  return (
    <>
      <h1>hola</h1>
    </>
  );
}
