import { orders } from "../entities/orders";

const orderWithTotal = orders.map((order) => {
  return {
    ...order,
    total: order.items.reduce((acc, item) => {
      return acc + item.quantity * item.unitPrice;
    }, 0),
  };
});

const main = () => {
  const result = orderWithTotal;

  console.log({
    result,
  });
};

main();
