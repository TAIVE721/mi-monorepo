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

export function Partial_element({ element, Handle_Nedit }) {
  const { categories } = use(T_categories);
  const { PatchElement } = use(T_elements);
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

  function HandleUpdate(formdata) {
    const name = formdata.get("name");
    const weight = formdata.get("weight");
    const description = formdata.get("description");
    const category = formdata.get("category");

    PatchElement({
      id: element.id,
      name,
      weight,
      description,
      category,
    });
  }

  return (
    <form id="Edit_Form">
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={data.name}
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
      <select name="category" onChange={handleChange} value={element.id}>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>
      <button onClick={Handle_Nedit}>Cancel</button>
      <button formAction={HandleUpdate}>Update</button>
    </form>
  );
}

export function Form_Element() {
  const [add, setAdd] = useState(false);
  const { categories } = use(T_categories);

  const Handle_Add = () => {
    setAdd(!add);
  };

  return (
    <>
      {add ? (
        <form id="Create_Form">
          <input name="name" type="text" placeholder="name" required />
          <input name="weight" type="number" placeholder="weight" required />
          <input
            name="description"
            type="text"
            placeholder="description"
            required
          />
          <select name="category">
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
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
