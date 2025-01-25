import { z } from "zod";

const CreateListSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(1, { message: "Please enter your first and last name." }),
  age: z.number().min(1, { message: "Please enter your age." }),
});

type TCreateList = z.infer<typeof CreateListSchema>;

// ---------------------------------------------------------------------------------

export { CreateListSchema };
export type { TCreateList };
