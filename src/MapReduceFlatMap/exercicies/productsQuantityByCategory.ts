import { orders } from "../entities/orders";
import { products } from "../entities/products";

const productsByCategory = products.reduce((acc: any, curr) => {
  acc[curr.category] = (acc[curr.category] || 0) + 1;

  return acc;
}, {});

const main = () => {
  const result = productsByCategory;

  console.log({
    result,
  });
};

main();
