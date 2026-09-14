import { orders } from "../entities/orders";
import { users } from "../entities/users";

/**
 [
    {
      userId: 1,
      name: 'Ana Silva',
      totalOrders: 2,
      totalPaidOrders: 2,
      totalSpent: 4640
    },
    {
      userId: 2,
      name: 'João Pereira',
      totalOrders: 1,
      totalPaidOrders: 0,
      totalSpent: 0
    },
    {
      userId: 4,
      name: 'Mariana Costa',
      totalOrders: 2,
      totalPaidOrders: 1,
      totalSpent: 480
    }
  ]
 */
const userByUserID = users.reduce((acc: any, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// const clientReport = orders.reduce((acc: any, order) => {
//   if (!acc[order.userId]) {
//     acc[order.userId] = {
//       userId: order.userId,
//       name: userByUserID[order.userId]?.name,
//       totalOrders: 0,
//       totalPaidOrders: 0,
//       totalSpent: 0,
//     };
//   }

//   acc[order.userId].totalOrders++;

//   if (order.status === "paid") {
//     acc[order.userId].totalPaidOrders++;

//     acc[order.userId].totalSpent += order.items.reduce((prev, item) => {
//       return prev + item.quantity * item.unitPrice;
//     }, 0);
//   }

//   return acc;
// }, {});

const clientReport = {} as any;

orders.forEach((order) => {
  if (!clientReport[order.userId]) {
    clientReport[order.userId] = {
      userId: order.userId,
      name: userByUserID[order.userId]?.name,
      totalOrders: 0,
      totalPaidOrders: 0,
      totalSpent: 0,
    };
  }

  clientReport[order.userId].totalOrders++;

  if (order.status === "paid") {
    clientReport[order.userId].totalPaidOrders++;

    clientReport[order.userId].totalSpent += order.items.reduce(
      (prev, item) => {
        return prev + item.quantity * item.unitPrice;
      },
      0,
    );
  }

  return clientReport;
});

const main = () => {
  const result = Object.values(clientReport);

  console.log({
    result,
  });
};

main();
