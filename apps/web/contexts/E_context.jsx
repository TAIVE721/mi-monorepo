import { createContext, useEffect, useReducer } from "react";
import { useElements } from "../hooks/use_e.js";
import { Elements_reducer } from "../reducers/Elementsreducer.js";
import { Add_E, Delete_E, Patch_E } from "../services/elements.js";

export const T_elements = createContext("");

export function Elements_Provider({ children }) {
  const { getElements } = useElements();

  const [state, dispatch] = useReducer(Elements_reducer, []);

  async function Reload_E() {
    const elements = await getElements();

    dispatch({
      type: "reload",
      payload: elements,
    });
  }

  async function AddElement(element) {
    const new_element = await Add_E(element);

    dispatch({
      type: "add",
      payload: new_element,
    });
  }

  async function PatchElement(element) {
    const new_element = await Patch_E(element);
    dispatch({
      type: "patch",
      payload: new_element,
    });
  }

  async function DeleteElement(id) {
    await Delete_E(id);

    dispatch({
      type: "delete",
      payload: id,
    });
  }

  useEffect(() => {
    Reload_E();
  }, []);

  return (
    <T_elements.Provider
      value={{
        elements: state,
        Reload_E,
        AddElement,
        PatchElement,
        DeleteElement,
      }}
    >
      {children}
    </T_elements.Provider>
  );
}
