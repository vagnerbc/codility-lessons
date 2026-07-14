import { orders } from "../entities/orders";
import { products } from "../entities/products";

/**
{
  totalOrders: 5,
  paidOrders: 3,
  pendingOrders: 1,
  cancelledOrders: 1,
  totalRevenue: 5120,
  totalItemsSold: 6
}
 */

// const resume = orders.reduce(
//   (acc: any, order) => {
//     acc.totalOrders++;

//     if (order.status === "pending") {
//       acc.pendingOrders++;
//     }

//     if (order.status === "cancelled") {
//       acc.cancelledOrders++;
//     }

//     if (order.status === "paid") {
//       acc.paidOrders++;

//       order.items.forEach((item) => {
//         acc.totalRevenue += item.quantity * item.unitPrice;
//         acc.totalItemsSold += item.quantity;
//       });
//     }

//     return acc;
//   },
//   {
//     totalOrders: 0,
//     paidOrders: 0,
//     pendingOrders: 0,
//     cancelledOrders: 0,
//     totalRevenue: 0,
//     totalItemsSold: 0,
//   },
// );

const resume = {
  totalOrders: 0,
  paidOrders: 0,
  pendingOrders: 0,
  cancelledOrders: 0,
  totalRevenue: 0,
  totalItemsSold: 0,
};

for (const order of orders) {
  resume.totalOrders++;

  if (order.status === "pending") {
    resume.pendingOrders++;
  }

  if (order.status === "cancelled") {
    resume.cancelledOrders++;
  }

  if (order.status === "paid") {
    resume.paidOrders++;

    order.items.forEach((item) => {
      resume.totalRevenue += item.quantity * item.unitPrice;
      resume.totalItemsSold += item.quantity;
    });
  }
}

const main = () => {
  const result = resume;

  console.log({
    result,
  });
};

main();
