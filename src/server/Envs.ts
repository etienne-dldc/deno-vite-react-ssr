import * as zod from "zod";

const EnvsSchema = zod.object({
  MODE: zod.union([zod.literal("development"), zod.literal("production")]),
  PORT: zod
    .string()
    .nonempty()
    .transform((v) => parseInt(v, 10))
    .refine((v) => isNaN(v) === false, "Value is NaN"),
  // DATA_PATH: zod.string().nonempty(),
});

export const Envs = EnvsSchema.parse(Deno.env.toObject());
