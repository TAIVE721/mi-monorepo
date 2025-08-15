import { Create_Mars_Api } from "./index.js";
import { C_model } from "./models/deploy/McP.js";
import { E_model } from "./models/deploy/MeP.js";

Create_Mars_Api({
  Category_model: C_model,
  Element_model: E_model,
});
