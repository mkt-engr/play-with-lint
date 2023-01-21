import { sub } from "./sub";

const aaa = 111;
const bbb = 222;
console.log("ESLint");
console.log(`ESLint`);
console.log(`ESLint${aaa}`);
sub();
aaa === bbb;

if (aaa === bbb) {
  console.log("object");
  console.log("object");
}

if (aaa === bbb) {
  console.log("object");
}
