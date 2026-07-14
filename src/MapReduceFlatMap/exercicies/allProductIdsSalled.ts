import { orders } from "../entities/orders";
import { products } from "../entities/products";

const allProductIdsSelled = new Set(
  orders.flatMap((order) => {
    return order.items.map((item) => item.productId);
  }),
);

const allProductIdsSelled2 = new Set(
  orders.map((order) => order.items.map((item) => item.productId)).flat(),
);

const main = () => {
  const result = allProductIdsSelled;

  console.log({
    result,
    result2: allProductIdsSelled2,
  });
};

main();
