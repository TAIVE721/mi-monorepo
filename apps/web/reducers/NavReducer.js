export function NavReducer(values, action) {
  if (action == "calculate") {
    return {
      calculate: true,
    };
  }
  if (action == "categories") {
    return {
      categories: true,
    };
  }
  if (action == "elements") {
    return {
      elements: true,
    };
  }
}
