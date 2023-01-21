import { sub } from "./sub";

const aaa = 111;
const bbb = 222;
// const ccc = 333;
// const ddd = aaa === bbb ? "mori" : "makito";
// var eee = 123;

//no-unused-vars: ["error", { "varsIgnorePattern": "[iI]gnored" }]で未使用変数を無視する設定に入っているので未使用でもエラーにならない
var firstVarIgnored = 1;

//{ "varsIgnorePattern": "^_" }で変数の最初が_で始まるものは無視される
//分割代入で使えそう
var _first = 1;
var __first = 1;
const [_, __, destructured] = [1, 2, 100];
console.log(destructured);

console.log("ESLint");
console.log(`ESLint`);
console.log(`ESLint${aaa}`);
sub();

if (aaa === bbb) {
  console.log("object");
  console.log("object");
}

if (aaa === bbb) console.log("object");

// alert("aa");

// "args": "after-used", ではbazとquxがエラーになる
// "args": "all", ではfoo,baz,quxがエラーになる
(function (foo, bar, _baz, qux) {
  return bar;
})();

try {
  console.log("try");
} catch (error) {
  console.log("error");
}
