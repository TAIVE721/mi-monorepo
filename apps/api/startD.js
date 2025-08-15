import { Create_Mars_Api } from "./index.js";
import { C_model } from "./models/Docker/McP.js";
import { E_model } from "./models/Docker/MeP.js";

Create_Mars_Api({
  Element_model: E_model,
  Category_model: C_model,
});
