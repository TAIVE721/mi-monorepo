import z from "zod";

const M_e_schema = z.object({
  name: z.string(),
  description: z.string(),
  weight: z.number().positive(),
  category: z.number().positive(),
});

export function M_e_s(value) {
  return M_e_schema.safeParse(value);
}

export function M_e_s_p(value) {
  return M_e_schema.partial().safeParse(value);
}
