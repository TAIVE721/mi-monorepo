import { useState } from "react";
import { N_element, Partial_element } from "./Element";

export function Elements({ Elements }) {
  const [edit, setEdit] = useState(0);

  const HandleEdit = (id) => {
    setEdit(id);
  };

  return (
    <>
      {Elements.map((element) => {
        if (element.id == edit) {
          return <Partial_element element={element}></Partial_element>;
        }
        return (
          <N_element HandleEdit={HandleEdit} element={element}></N_element>
        );
      })}
    </>
  );
}
