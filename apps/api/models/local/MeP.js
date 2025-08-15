import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "",
  database: "Mars_P",
});

export class E_model {
  static async GetAll() {
    const { rows } = await pool.query(`SELECT
    M_E.id,
    M_E.name,
    description,
    weight,
    category as c_id,
    M_C.name as c_name,
    priority
    FROM M_E
    INNER JOIN M_C ON category = M_C.id`);

    return rows;
  }
  static async Post({ data }) {
    const { rows } = await pool.query(
      `INSERT INTO M_E (name,description,weight,category) VALUES (
      $1,$2,$3,$4
      )`,
      [data.name, data.description, data.weight, data.category]
    );

    return rows[0];
  }
  static async Patch({ data, id }) {
    const { rows } = await pool.query(`SELECT * FROM M_E WHERE id = $1`, [id]);

    const data2 = {
      ...rows[0],
      ...data,
    };

    const result = await pool.query(
      `UPDATE M_E  SET name = $1 , description = $2 , weight = $3 , category = $4 WHERE  id = $5
      `,
      [data2.name, data2.description, data2.weight, data2.category, id]
    );

    return result.rows[0];
  }
  static async Delete(id) {
    const { rows } = await pool.query(`DELETE FROM M_E WHERE id = $1`, [id]);

    return rows[0];
  }
}
