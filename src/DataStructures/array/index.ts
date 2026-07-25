const fruits = ["apple", "banana", "cherry", "grape", "lemon", "mango"];

const slice = fruits.slice(1, 3); // (start, end)

const copyWithSlice = fruits.slice();
const copyWithSpread = [...fruits];
const copyWithNewArray = new Array(...fruits);

const splice = fruits.splice(1, 2, "another", "another2"); // (start, n to delete, ...item to add)

const newArr = Array.from(
  {
    length: 10,
  },
  (_, index) => index + 1,
);

const newArr2 = new Array(10).fill(null).map((_, index) => index + 1);

const buffer = Buffer.alloc(10, "a");

console.log({
  fruits,
  slice,
  copyWithSlice,
  copyWithSpread,
  copyWithNewArray,
  splice,
  newArr,
  newArr2,
  buffer,
  bufferToStr: buffer.toString(),
});
