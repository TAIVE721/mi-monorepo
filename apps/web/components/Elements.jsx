import { useState } from "react";
import { Form_Element, N_element, Partial_element } from "./Element";

export function Elements({ Elements }) {
  const [edit, setEdit] = useState(0);

  const HandleEdit = (id) => {
    setEdit(id);
  };

  return (
    <>
      {Elements.map((element) => {
        if (element.id != edit) {
          return (
            <N_element
              key={element.id}
              HandleEdit={HandleEdit}
              element={element}
            ></N_element>
          );
        }
        return <Partial_element element={element}></Partial_element>;
      })}
      <Form_Element></Form_Element>
    </>
  );
}
