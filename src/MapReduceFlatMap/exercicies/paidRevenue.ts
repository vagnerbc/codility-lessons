import { orders } from "../entities/orders";

// { result: 5120 }

const paidRevenue = orders
  .filter((order) => order.status === "paid")
  .flatMap((order) => order.items)
  .reduce((acc, item) => {
    return acc + item.quantity * item.unitPrice;
  }, 0);

const main = () => {
  const result = paidRevenue;

  console.log({
    result,
  });
};

main();
