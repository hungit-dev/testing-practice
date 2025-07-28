import {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("capitalize function that returns the first character capitalized", () => {
  expect(capitalize("dog")).toBe("Dog");
});
test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
test("calculator operations", () => {
  expect(calculator.add(3, 5)).toBe(8);
  expect(calculator.subtract(10, 5)).toBe(5);
  expect(calculator.divide(20, 2)).toBe(10);
  expect(calculator.multiply(15, 2)).toBe(30);
});
test("caesar cipher ", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
test("analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
