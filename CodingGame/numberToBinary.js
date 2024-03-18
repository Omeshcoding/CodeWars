// A number is given convert the number into the binary form (1s and 0s)
const x = parseInt(30);
let a = x.toString(2);
let b = 0;
for (c of a) {
  c == 1 ? b++ : b;
}
console.log(b);
