import { z } from "zod";
import { textValidate } from "../../../../utils/text-validate.schema";

// ---------------------------------------------------------------------------------

const CreateListSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: textValidate.name }),
  age: z.number().min(1, { message: textValidate.age }),
});

type TCreateList = z.infer<typeof CreateListSchema>;

// ---------------------------------------------------------------------------------

export { CreateListSchema };
export type { TCreateList };
