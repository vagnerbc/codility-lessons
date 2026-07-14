import { orders } from "../entities/orders";
import { products } from "../entities/products";

const allItemsOfOrders = orders.flatMap((order) => {
  return order.items;
});

const allItemsOfOrders2 = orders.map((order) => order.items).flat();

const main = () => {
  const result = allItemsOfOrders;

  console.log({
    result,
    result2: allItemsOfOrders2,
  });
};

main();
