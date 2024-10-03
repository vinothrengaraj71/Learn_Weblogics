import { multiply, makeLowerCase } from "./Assist";

test("multiplying numbers", () => {
  expect(multiply(2, 2)).toBe(4);
});

test("coverting to lower case", () => {
  expect(makeLowerCase("HI ALL")).toBe("hi all");
});
