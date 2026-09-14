import { products } from "../entities/products";

const moreExpensiveProduct = products.reduce((acc, product) => {
  return product.price > acc ? product.price : acc;
}, -Infinity);

// const moreExpensiveProduct = products.reduce((acc, product) => {
//   return Math.max(acc, product.price);
// }, -Infinity);

const main = () => {
  const result = moreExpensiveProduct;

  console.log({
    result,
  });
};

main();
