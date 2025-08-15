import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "",
  database: "Mars_P",
});

export class C_model {
  static async GetAll() {
    const { rows } = await pool.query(`SELECT * FROM M_C`);

    return rows;
  }
  static async Post({ data }) {
    const { rows } = await pool.query(
      `INSERT INTO M_C (name,priority) VALUES (
      $1,$2
      ) RETURNING *`,
      [data.name, data.priority]
    );

    return rows[0];
  }
  static async Patch({ data, id }) {
    const { rows } = await pool.query(`SELECT * FROM M_C WHERE id = $1`, [id]);

    const data2 = {
      ...rows[0],
      ...data,
    };

    console.log(data2);
    const result = await pool.query(
      `UPDATE M_C SET name = $1 , priority = $2  WHERE  id = $3
       RETURNING *`,
      [data2.name, data2.priority, data2.id]
    );

    return result.rows[0];
  }
  static async Delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM M_C WHERE id = $1 RETURNING *`,
      [id]
    );

    return rows[0];
  }
}
