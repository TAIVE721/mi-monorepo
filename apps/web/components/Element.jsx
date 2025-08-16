import { use, useState } from "react";
import { T_elements } from "../contexts/E_context.jsx";
import { T_categories } from "../contexts/C_context.jsx";

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
      <button onClick={() => HandleEdit(element.id)}>edit</button>
      <button onClick={HandleDelete}>delete</button>
    </article>
  );
}

export function Partial_element({ element }) {
  const [data, setdata] = useState({
    name: element.name,
    category: element.category,
    weight: element.weight,
    description: element.description,
    priority: element.priority,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { categories } = use(T_categories);

  console.log(categories);
  return (
    <form>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={data.name}
      />
      <input
        name="category"
        type="number"
        onChange={handleChange}
        value={data.category}
      />
      <input
        name="weight"
        type="number"
        onChange={handleChange}
        value={data.weight}
      />
      <input
        name="description"
        type="text"
        onChange={handleChange}
        value={data.description}
      />
      <select name="priority">
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>
      <button>Cancel</button>
    </form>
  );
}

export function Form_Element() {
  const [add, setAdd] = useState(false);

  const Handle_Add = () => {
    setAdd(!add);
  };

  return (
    <>
      {add ? (
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button onClick={Handle_Add}>Cancel</button>
          <button>Create</button>
        </form>
      ) : (
        <form id="Form_button">
          <button onClick={Handle_Add}>+</button>
        </form>
      )}
    </>
  );
}
