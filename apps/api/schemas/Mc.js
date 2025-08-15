import z from "zod";

const M_c_schema = z.object({
  name: z.string(),
  priority: z.number().int().min(1).max(5),
});

export function M_c_e(value) {
  return M_c_schema.safeParse(value);
}

export function M_c_e_p(value) {
  return M_c_schema.partial().safeParse(value);
}
