// テストの開始コマンド
// npx vitest add.test.js

// test("1+1=2", () => {
//   expect(1 + 1).toBe(2);
// });

// test("1+4=5", () => {
//   expect(1 + 4).toBe(5);
// });

import { test, expect, fail, describe } from "vitest";
import fizzBuzz from "./FizzBuzz.js";

describe("数を文字列に変換する", () => {
  test("数値を引数として、文字列を返す", () => {
    const result = fizzBuzz(3);
    expect(result).toBeTypeOf("string");
  });

  test("3の倍数", () => {
    const result = fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  test("5の倍数", () => {
    const result = fizzBuzz(5);
    expect(result).toBe("Buzz");
  });
});
