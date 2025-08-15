export function C_reducer(state, action) {
  if (action.type == "reaload") {
    return action.payload;
  }

  if (action.type == "post") {
    const category = action.payload;

    return [
      ...state,
      {
        ...category,
      },
    ];
  }

  if (action.type == "patch") {
    const data = action.payload;

    const index = state.findIndex((category) => category.id == data.id);

    const new_state = structuredClone(state);

    new_state[index] = data;

    return [...new_state];
  }

  if (action.type == "delete") {
    const id = action.payload;

    const new_state = state.filter((category) => category.id != id);

    return [...new_state];
  }
}
