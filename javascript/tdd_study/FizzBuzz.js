// 1から100までの数をプリントするプログラムを書け
// 3の倍数の時は、Fizz と出力
// 5の倍数の時は、Buzz と出力
// 3 と 5 の両方の倍数の時は FizzBuzz と出力

// 3の倍数の時は、Fizz と出力

// 5の倍数の時は、Buzz と出力

const fizzBuzz = function (n) {
  if (n % 3 === 0) {
    return "Fizz";
  }

  if (n % 5 === 0) {
    return "Buzz";
  }
};

export default fizzBuzz;
