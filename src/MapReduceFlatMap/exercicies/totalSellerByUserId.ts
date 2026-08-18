import { orders } from "../entities/orders";

// { result: { '1': 4640, '4': 480 } }

const totalSellerByUserId = orders
  .filter((order) => order.status === "paid")
  .reduce((acc: any, order) => {
    if (!acc[order.userId]) {
      acc[order.userId] = 0;
    }

    acc[order.userId] += order.items.reduce(
      (prev, item) => prev + item.quantity * item.unitPrice,
      0,
    );

    return acc;
  }, {});

const main = () => {
  const result = totalSellerByUserId;

  console.log({
    result,
  });
};

main();
