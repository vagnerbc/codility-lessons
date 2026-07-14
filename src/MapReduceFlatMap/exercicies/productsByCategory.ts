import { products } from "../entities/products";

const productsByCategory = products.reduce((acc: any, curr) => {
  if (!acc[curr.category]) {
    acc[curr.category] = [];
  }

  acc[curr.category].push(curr);

  return acc;
}, {});

const main = () => {
  const result = productsByCategory;

  console.log({
    result: JSON.stringify(result),
  });
};

main();
