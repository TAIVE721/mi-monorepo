import { use, useState } from "react";
import { T_categories } from "../contexts/C_context.jsx";
import { T_elements } from "../contexts/E_context.jsx";

export function N_category({ category, handleEdit }) {
  const { Delete_Category } = use(T_categories);
  const { elements } = use(T_elements);

  const handleDelete = () => {
    Delete_Category(category.id);
  };
  const someone = elements.some((element) => element.c_id == category.id);

  const isDisabled = someone ? true : false;

  return (
    <article className="A_Category">
      <p>{category.name}</p>
      <p>{category.priority}</p>
      <button onClick={() => handleEdit(category.id)}>Edit</button>
      <button disabled={isDisabled} onClick={handleDelete}>
        Delete
      </button>
    </article>
  );
}

export function Partial_category({ category, Handle_Nedit }) {
  const { Patch_Category } = use(T_categories);
  const { Reload_E } = use(T_elements);

  const [data, setdata] = useState({
    name: category.name,
    priority: category.priority,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleUdate(formdata) {
    const name = formdata.get("name");
    const priority = formdata.get("priority");
    Patch_Category({
      id: parseInt(category.id),
      name: name,
      priority: parseInt(priority),
    });
    Reload_E();
  }

  return (
    <form className="Category_Form">
      <input
        onChange={handleChange}
        name="name"
        type="text"
        required
        value={data.name}
      />
      <input
        onChange={handleChange}
        name="priority"
        type="number"
        max={5}
        min={1}
        required
        value={data.priority}
      />
      <button formAction={handleUdate}>Update</button>
      <button onClick={Handle_Nedit}>Cancel</button>
    </form>
  );
}

export function Form_category() {
  const { Post_Category } = use(T_categories);
  const [add, setAdd] = useState(false);

  const HandleAdd = () => {
    setAdd(!add);
  };

  function handleCreate(formdata) {
    const name = formdata.get("name");
    const priority = formdata.get("priority");

    Post_Category({
      name: name,
      priority: parseInt(priority),
    });
  }

  return (
    <>
      {add ? (
        <form action={handleCreate} className="Category_Form">
          <input type="text" name="name" required />
          <input type="number" name="priority" max={5} min={1} required />
          <button>Create</button>
          <button onClick={HandleAdd}>Cancel</button>
        </form>
      ) : (
        <form id="Category_button">
          <button onClick={HandleAdd}>+</button>
        </form>
      )}
    </>
  );
}
