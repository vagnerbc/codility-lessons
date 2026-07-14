import { orders } from "../entities/orders";
import { users } from "../entities/users";

const userByUserID = users.reduce((acc: any, user) => {
  acc[user.id] = user;
  return acc;
}, {});

const clientReport = {} as any;

orders.forEach((order) => {
  if (!clientReport[order.userId]) {
    clientReport[order.userId] = {
      userId: order.userId,
      name: userByUserID[order.userId]?.name || "No name",
      totalOrders: 0,
      totalPaidOrders: 0,
      totalSpent: 0,
    };
  }

  clientReport[order.userId].totalOrders++;

  if (order.status === "paid") {
    clientReport[order.userId].totalPaidOrders++;

    clientReport[order.userId].totalSpent += order.items.reduce((acc, item) => {
      return acc + item.quantity * item.unitPrice;
    }, 0);
  }
});

const main = () => {
  const result = Object.values(clientReport);

  console.log({
    result,
  });
};

main();
