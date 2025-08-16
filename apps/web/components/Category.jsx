import { useState } from "react";

export function N_category({ category, handleEdit }) {
  return (
    <article className="A_Category">
      <p>{category.name}</p>
      <p>{category.priority}</p>
      <button onClick={() => handleEdit(category.id)}>Edit</button>
      <button>Delete</button>
    </article>
  );
}

export function Partial_category({ category, Handle_Nedit }) {
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

  console.log(category);
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
        required
        value={data.priority}
      />
      <button>Update</button>
      <button onClick={Handle_Nedit}>Cancel</button>
    </form>
  );
}

export function Form_category() {
  const [add, setAdd] = useState(true);

  const HandleAdd = () => {
    setAdd(!add);
  };

  return (
    <>
      {add ? (
        <form id="Category_button">
          <button onClick={HandleAdd}>+</button>
        </form>
      ) : (
        <form className="Category_Form">
          <input type="text" />
          <input type="text" />
          <button>Create</button>
          <button onClick={HandleAdd}>Cancel</button>
        </form>
      )}
    </>
  );
}
