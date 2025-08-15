export async function Call_Elements() {
  const res = await fetch("http://localhost:1234/elements");

  const json = await res.json();
  const data = json.map((element) => {
    return {
      id: element.id,
      name: element.name,
      description: element.description,
      weight: element.weight,
      c_id: element.c_id,
      category: element.c_name,
      priority: element.priority,
    };
  });

  return data;
}

export async function Add_E(data) {
  const res = await fetch("http://localhost:elements", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = res.json();

  const n_data = {
    id: json.id,
    name: json.name,
    description: json.description,
    weight: json.weight,
    c_id: json.c_id,
    category: json.c_name,
    priority: json.priority,
  };

  return n_data;
}

export async function Patch_E(data) {
  const ts_data = {
    name: data.name,
    description: data.description,
    weight: data.weight,
    category: data.c_id,
  };

  const res = fetch("http://localhost:1234/elements/" + data.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ts_data),
  });

  const json = res.json();

  const n_data = {
    id: json.id,
    name: json.name,
    description: json.description,
    weight: json.weight,
    c_id: json.c_id,
    category: json.c_name,
    priority: json.priority,
  };

  return n_data;
}

export async function Delete_E(id) {
  const res = fetch("http://localhost:1234/" + id, {
    method: "DELETE",
  });

  if (res.ok) {
    return "ok";
  }

  return "err";
}
