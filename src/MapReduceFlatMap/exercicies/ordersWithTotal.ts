import { orders } from "../entities/orders";

/**
{
  result: [
    {
      id: 101,
      userId: 1,
      status: 'paid',
      createdAt: '2026-06-01',
      items: [Array],
      total: 3740
    },
    {
      id: 102,
      userId: 2,
      status: 'pending',
      createdAt: '2026-06-03',
      items: [Array],
      total: 520
    },
    {
      id: 103,
      userId: 1,
      status: 'paid',
      createdAt: '2026-06-05',
      items: [Array],
      total: 900
    },
    {
      id: 104,
      userId: 4,
      status: 'cancelled',
      createdAt: '2026-06-06',
      items: [Array],
      total: 910
    },
    {
      id: 105,
      userId: 4,
      status: 'paid',
      createdAt: '2026-06-08',
      items: [Array],
      total: 480
    }
  ]
}
 */
const orderWithTotal = orders.map((order) => {
  return {
    ...order,
    total: order.items.reduce((acc, item) => {
      return acc + item.quantity * item.unitPrice;
    }, 0),
  };
});

const main = () => {
  const result = orderWithTotal;

  console.log({
    result,
  });
};

main();
