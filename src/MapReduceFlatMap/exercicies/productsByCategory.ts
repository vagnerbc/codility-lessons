import { products } from "../entities/products";

const productsByCategory = products.reduce((acc: any, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category].push(product);

  return acc;
}, {});

// const productsByCategory = products.reduce((acc: any, product) => {
//   acc[product.category] = [...(acc[product.category] || []), product];

//   return acc;
// }, {});

const main = () => {
  const result = productsByCategory;

  console.log({
    result: result,
  });
};

main();
