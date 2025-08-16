import { use } from "react";
import { T_categories } from "../contexts/C_context";
import { Categories } from "./Categories";

export function S_Categories() {
  const { categories } = use(T_categories);

  return <Categories categories={categories}></Categories>;
}
