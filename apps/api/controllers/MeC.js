import { M_e_s, M_e_s_p } from "../schemas/Me.js";

export class M_e_Controller {
  constructor({ Mars_M }) {
    this.model = Mars_M;
  }

  GetAll = async (req, res) => {
    const result = await this.model.GetAll();

    res.status(200).json(result);
  };

  Post = async (req, res) => {
    const data = req.body;
    const result = M_e_s(data);

    if (result.error) {
      return res.status(400).json(JSON.parse(result.error.message));
    }

    const result2 = await this.model.Post({ data: result.data });

    res.status(200).json(result2);
  };

  Patch = async (req, res) => {
    const data = req.body;
    const { id } = req.params;

    const result = M_e_s_p(data);

    if (result.error) {
      return res
        .status(400)
        .json({ message: JSON.parse(result.error.message) });
    }

    const result2 = await this.model.Patch({ data: result.data, id: id });

    res.status(200).json(result2);
  };

  Delete = async (req, res) => {
    const { id } = req.params;

    const result = await this.model.Delete(id);

    res.status(200).json(result);
  };
}
