import { products } from "../entities/products";

const productsById = products.reduce((acc: any, curr) => {
  acc[curr.id] = curr;

  return acc;
}, {});

const main = () => {
  const result = productsById;

  console.log({
    result,
  });
};

main();
