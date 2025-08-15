import { use } from "react";
import { T_elements } from "../contexts/E_context";
import { Elements } from "./Elements.jsx";

export function S_Elements() {
  const { elements } = use(T_elements);

  return (
    <>
      <Elements Elements={elements}></Elements>
    </>
  );
}
