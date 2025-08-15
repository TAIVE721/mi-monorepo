import { Router } from "express";
import { M_c_Controller } from "../controllers/McC.js";

export function M_C_Router({ C_Model }) {
  const C_Router = Router();

  const N_category_Controller = new M_c_Controller({ Mars_M: C_Model });

  C_Router.get("/", N_category_Controller.GetAll);
  C_Router.post("/", N_category_Controller.Post);
  C_Router.patch("/:id", N_category_Controller.Patch);
  C_Router.delete("/:id", N_category_Controller.Delete);

  return C_Router;
}
