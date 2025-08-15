import { use, useState } from "react";
import { T_elements } from "../contexts/E_context.jsx";

export function N_element({ element, HandleEdit }) {
  const { DeleteElement } = use(T_elements);

  const HandleDelete = () => {
    DeleteElement(element.id);
  };

  return (
    <article>
      <p>{element.name} </p>
      <p>{element.category} </p>
      <p>{element.weight}kg</p>
      <p>{element.description} </p>
      <p>{element.priority} </p>
      <button onClick={HandleEdit(element.id)}>edit</button>
      <button onClick={HandleDelete}>delete</button>
    </article>
  );
}

export function Partial_element({ element }) {
  return (
    <form>
      <input name="name" type="text" value={element.name} />
      <input name="category" type="number" />
      <input name="weight" type="number" />
      <input name="description" type="text" />
      <select name="priority"></select>
      <button>Cancel</button>
    </form>
  );
}

export function Form_Element() {
  const [add, setAdd] = useState(false);
  return (
    <>
      {add ? (
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button>Cancel</button>
        </form>
      ) : (
        <button>+</button>
      )}
    </>
  );
}
