import { orders } from "../entities/orders";
import { products } from "../entities/products";

const productByProductID = products.reduce((acc: any, product) => {
  acc[product.id] = product;
  return acc;
}, {});

// const salesReport = orders
//   .filter((order) => order.status === "paid")
//   .reduce((acc: any, order) => {
//     for (const item of order.items) {
//       if (!acc[item.productId]) {
//         acc[item.productId] = {
//           productId: item.productId,
//           name: productByProductID[item.productId].name,
//           quantitySold: 0,
//           totalRevenue: 0,
//         };
//       }

//       acc[item.productId].quantitySold += item.quantity;
//       acc[item.productId].totalRevenue += item.quantity * item.unitPrice;
//     }

//     return acc;
//   }, {});

const salesReport = {} as any;

orders
  .filter((order) => order.status === "paid")
  .forEach((order) => {
    for (const item of order.items) {
      if (!salesReport[item.productId]) {
        salesReport[item.productId] = {
          productId: item.productId,
          name: productByProductID[item.productId].name,
          quantitySold: 0,
          totalRevenue: 0,
        };
      }

      salesReport[item.productId].quantitySold += item.quantity;
      salesReport[item.productId].totalRevenue +=
        item.quantity * item.unitPrice;
    }
  });
const main = () => {
  const result = Object.values(salesReport);

  console.log({
    result,
  });
};

main();
