import { createContext, useEffect, useReducer } from "react";
import { useCategories } from "../hooks/use_c";
import { C_reducer } from "../reducers/categoriesreducer";
import { Add_C, Delete_C, Patch_C } from "../services/categories";

export const T_categories = createContext("");

export function Categories_Provider({ children }) {
  const { getCategories } = useCategories();

  const [state, dispatch] = useReducer(C_reducer, "");

  async function Reload_C() {
    const categories = await getCategories();
    dispatch({
      type: "reload",
      payload: categories,
    });
  }

  async function Post_Category(data) {
    const category = await Add_C(data);

    dispatch({
      type: "post",
      payload: category,
    });
  }

  async function Patch_Category(data) {
    const category = await Patch_C(data);

    dispatch({
      type: "patch",
      payload: category,
    });
  }
  async function Delete_Category(id) {
    await Delete_C(id);

    dispatch({
      type: "delete",
      payload: id,
    });
  }

  useEffect(() => {
    Reload_C();
  }, []);

  return (
    <T_categories
      value={{
        categories: state,
        Reload_C,
        Post_Category,
        Patch_Category,
        Delete_Category,
      }}
    >
      {children}
    </T_categories>
  );
}
