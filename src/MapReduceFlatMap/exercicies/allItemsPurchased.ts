import { orders } from "../entities/orders";
import { products } from "../entities/products";

const allItemsPurchased = orders.flatMap((order) => {
  return order.items.map((item) => ({
    orderId: order.id,
    ...item,
  }));
});

const main = () => {
  const result = allItemsPurchased;

  console.log({
    result,
  });
};

main();
