import { orders } from "../entities/orders";

/**
 [
    { orderId: 101, productId: 1, quantity: 1, unitPrice: 3500 },
    { orderId: 101, productId: 2, quantity: 2, unitPrice: 120 },
    { orderId: 102, productId: 3, quantity: 1, unitPrice: 280 },
    { orderId: 102, productId: 6, quantity: 3, unitPrice: 80 },
    { orderId: 103, productId: 4, quantity: 1, unitPrice: 900 },
    { orderId: 104, productId: 5, quantity: 1, unitPrice: 750 },
    { orderId: 104, productId: 6, quantity: 2, unitPrice: 80 },
    { orderId: 105, productId: 2, quantity: 1, unitPrice: 120 },
    { orderId: 105, productId: 3, quantity: 1, unitPrice: 280 },
    { orderId: 105, productId: 6, quantity: 1, unitPrice: 80 }
  ]
 */
const allItemsPurchased = orders.flatMap((order) => {
  return order.items.map((item) => ({
    orderId: order.id,
    ...item,
  }));
});

const main = () => {
  const result = allItemsPurchased;

  console.log({
    result,
  });
};

main();
