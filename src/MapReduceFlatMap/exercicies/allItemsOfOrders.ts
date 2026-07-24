import { orders } from "../entities/orders";

/**
 [
    { productId: 1, quantity: 1, unitPrice: 3500 },
    { productId: 2, quantity: 2, unitPrice: 120 },
    { productId: 3, quantity: 1, unitPrice: 280 },
    { productId: 6, quantity: 3, unitPrice: 80 },
    { productId: 4, quantity: 1, unitPrice: 900 },
    { productId: 5, quantity: 1, unitPrice: 750 },
    { productId: 6, quantity: 2, unitPrice: 80 },
    { productId: 2, quantity: 1, unitPrice: 120 },
    { productId: 3, quantity: 1, unitPrice: 280 },
    { productId: 6, quantity: 1, unitPrice: 80 }
  ]
 */
const allItemsOfOrders = orders.flatMap((order) => {
  return order.items;
});

const allItemsOfOrders2 = orders.map((order) => order.items).flat();

const main = () => {
  const result = allItemsOfOrders;

  console.log({
    result,
    result2: allItemsOfOrders2,
  });
};

main();
