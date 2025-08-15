import { use } from "react";
import { T_elements } from "../contexts/E_context";

export function S_Elements() {
  const { elements } = use(T_elements);

  const handleClick = () => {
    console.log(elements);
  };

  return (
    <>
      <h1 onClick={handleClick}>hola</h1>
    </>
  );
}
