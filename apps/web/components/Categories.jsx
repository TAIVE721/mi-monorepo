import { useState } from "react";
import { Form_category, N_category, Partial_category } from "./Category.jsx";

export function Categories({ categories }) {
  const [edit, setEdit] = useState(0);

  const HandleEdit = (id) => {
    setEdit(id);
  };

  const Handle_Nedit = () => {
    setEdit(0);
  };

  return (
    <>
      {categories.map((category) => {
        if (category.id != edit) {
          return (
            <N_category
              handleEdit={HandleEdit}
              category={category}
            ></N_category>
          );
        }
        return (
          <Partial_category
            Handle_Nedit={Handle_Nedit}
            category={category}
          ></Partial_category>
        );
      })}
      <Form_category></Form_category>
    </>
  );
}
