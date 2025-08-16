export async function Call_Categories() {
  const res = await fetch("http://localhost:1234/category");

  const json = await res.json();
  const data = json.map((category) => {
    return {
      id: category.id,
      name: category.name,

      priority: category.priority,
    };
  });

  return data;
}

export async function Add_C(data) {
  const res = await fetch("http://localhost:1234/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  const category = {
    id: json.id,
    name: json.name,
    priority: json.priority,
  };

  return category;
}

export async function Patch_C(data) {
  const ts_category = {
    name: data.name,
    priority: data.priority,
  };

  const res = await fetch("http://localhost:1234/category/" + data.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ts_category),
  });

  const json = await res.json();

  const category = {
    id: json.id,
    name: json.name,
    priority: json.priority,
  };

  return category;
}

export async function Delete_C(id) {
  const res = await fetch("http://localhost:1234/category/" + id, {
    method: "DELETE",
  });
  if (res.ok) {
    return "ok";
  }

  return "err";
}
