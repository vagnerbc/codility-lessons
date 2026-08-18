import { products } from "../entities/products";

// { result: 44310 }

const totalStock = products.reduce(
  (acc, curr) => acc + curr.stock * curr.price,
  0,
);

const main = () => {
  const result = totalStock;

  console.log({
    result,
  });
};

main();
