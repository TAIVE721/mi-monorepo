import { Router } from "express";
import { M_e_Controller } from "../controllers/MeC.js";

export function M_E_Router({ E_model }) {
  const E_router = Router();

  const N_element_controller = new M_e_Controller({ Mars_M: E_model });

  E_router.get("/", N_element_controller.GetAll);
  E_router.post("/", N_element_controller.Post);
  E_router.patch("/:id", N_element_controller.Patch);
  E_router.delete("/:id", N_element_controller.Delete);

  return E_router;
}
