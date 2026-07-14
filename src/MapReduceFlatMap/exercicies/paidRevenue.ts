import { orders } from "../entities/orders";

const paidRevenue = orders
  .filter((order) => order.status === "paid")
  .reduce((acc, curr) => {
    const totalItems = curr.items.reduce((prev, current) => {
      return prev + current.quantity * current.unitPrice;
    }, 0);

    return acc + totalItems;
  }, 0);

const main = () => {
  const result = paidRevenue;

  console.log({
    result,
  });
};

main();
