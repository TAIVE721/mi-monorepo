export function Elements_reducer(state, action) {
  if (action.type == "reload") {
    return action.payload;
  }

  if (action.type == "add") {
    const data = action.payload;

    return [
      ...state,
      {
        ...data,
      },
    ];
  }

  if (action.type == "patch") {
    const data = action.payload;

    const index = state.findIndex((element) => element.id == data.id);

    const D_state = structuredClone(state);

    D_state[index] = data;

    return [...D_state];
  }

  if (action.type == "delete") {
    const id = action.payload;

    const new_state = state.filter((element) => element.id != id);

    return new_state;
  }
}
