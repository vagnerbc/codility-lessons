import { products } from "../entities/products";

// { result: { electronics: 3, furniture: 2, kitchen: 1 } }

const productsByCategory = products.reduce((acc: any, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;

  return acc;
}, {});

const main = () => {
  const result = productsByCategory;

  console.log({
    result,
  });
};

main();
