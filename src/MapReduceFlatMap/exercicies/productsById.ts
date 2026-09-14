import { products } from "../entities/products";

const productsById = products.reduce((acc: any, product) => {
  acc[product.id] = product;

  return acc;
}, {});

const main = () => {
  const result = productsById;

  console.log({
    result,
  });
};

main();
