import { use } from "react";
import { T_elements } from "../contexts/E_context.jsx";
import { M_element } from "./Element";
import { T_categories } from "../contexts/C_context";

export function Calculate() {
  const { elements } = use(T_elements);
  const { categories } = use(T_categories);

  const Sum_C = categories.map((category) => {
    const Total = {
      category_name: category.name,
      category_total: 0,
    };

    elements.forEach((element) => {
      if (element.category == category.name) {
        Total.category_total += element.weight;
      }
    });
    return Total;
  });

  return (
    <>
      {elements.map((element) => {
        return <M_element key={element.id} element={element}></M_element>;
      })}
      <div id="TotalSum">
        {Sum_C.map((EC) => {
          return (
            <aside>
              <h3>{EC.category_name}</h3>:<span>{EC.category_total}</span>
            </aside>
          );
        })}
      </div>
    </>
  );
}
