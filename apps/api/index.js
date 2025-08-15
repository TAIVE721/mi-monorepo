import express, { json } from "express";
import { A_cors } from "./middlewares/Available_Cors.js";
import { M_E_Router } from "./routers/MeR.js";
import { M_C_Router } from "./routers/McR.js";

export function Create_Mars_Api({ Element_model, Category_model }) {
  const App = express();

  App.disable("x-powered-by");
  App.use(json());
  App.use(A_cors());

  const PORT = process.env.PORT ?? 1234;

  App.use("/elements", M_E_Router({ E_model: Element_model }));
  App.use("/category", M_C_Router({ C_Model: Category_model }));

  App.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
  });
}
