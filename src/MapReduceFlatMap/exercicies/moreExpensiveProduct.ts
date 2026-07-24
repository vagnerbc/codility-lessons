import { products } from "../entities/products";

// const moreExpensiveProduct = products.reduce(
//   (acc: any, curr) => {
//     if (acc.price < curr.price) {
//       acc = curr;
//     }

//     return acc;
//   },
//   {
//     price: -Infinity,
//   },
// );

const moreExpensiveProduct = products.reduce((acc, product) => {
  return Math.max(acc, product.price);
}, -Infinity);

const main = () => {
  const result = moreExpensiveProduct;

  console.log({
    result,
  });
};

main();
