import { sub } from "./sub";

const aaa = 111;
const bbb = 222;
// const ccc = 333;
// const ddd = aaa === bbb ? "mori" : "makito";
// var eee = 123;

//no-unused-vars: ["error", { "varsIgnorePattern": "[iI]gnored" }]で未使用変数を無視する設定に入っているので未使用でもエラーにならない
let firstVarIgnored = 1;

//{ "varsIgnorePattern": "^_" }で変数の最初が_で始まるものは無視される
//分割代入で使えそう
let _first = 1;
let __first = 1;
// const [_, __, destructured] = [1, 2, 100];
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
// (function (foo, bar, _baz, qux) {
//   return bar;
// })();

try {
  console.log("try");
} catch (error) {
  console.log(error);
}
/* eslint-disable camelcase */
const full_name = "makito mori";

const FULL_NAME = "makito mori";

console.log(full_name, FULL_NAME);

// const _func01 = function () {
//   console.log(ffff);
// };

function _func02() {
  console.log("func02s");
}
_func02();

const _func03 = () => {
  console.log("func03");
};

let _a = 1;
function _bar() {}
// var inOneHour = now + 60 * 60 * 1;

// const _thing = foo ? bar : baz === qux ? quxx : foobar;
// foo ? (baz === qux ? quxx() : foobar()) : bar();

function _foo(bar, bar2, hofe) {
  bar.prop = "value";
  bar2.props = "change";
  // hofe.props = "nomal";
}

let a, b;
