import { orders } from "../entities/orders";

const totalSellerByUserId = orders
  .filter((order) => order.status === "paid")
  .reduce((acc: any, order) => {
    if (!acc[order.userId]) {
      acc[order.userId] = 0;
    }

    acc[order.userId] += order.items.reduce((itemAcc, item) => {
      return itemAcc + item.quantity * item.unitPrice;
    }, 0);

    return acc;
  }, {});

const main = () => {
  const result = totalSellerByUserId;

  console.log({
    result,
  });
};

main();
