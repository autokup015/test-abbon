import { it } from "vitest";

import { textValidate } from "../text-validate.schema";

describe("test TextValidate Schema ", () => {
  it("should return key", () => {
    const mockKey = ["name", "age"];
    const arrKey = Object.entries(textValidate);

    arrKey.forEach((item, index) => {
      expect(mockKey[index]).toBe(item[0]);
    });
  });
});
