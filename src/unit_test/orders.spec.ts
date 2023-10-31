import { OrderDetail, Orders } from '../database/models/orders.model';

const order = new Orders();

describe('test Order Model', () => {
  it('1 should have an index method', () => {
    expect(order.getOderById).toBeDefined();
  });

  it('2 get oder by userId', async () => {
    const result = await order.getOderById(1);
    const expectData: OrderDetail[] = [
      {
        id: 1,
        noted: 'complete',
        user_id: '1',
        order_status: 'ok'
      }
    ];

    expect(result).toEqual(expectData);
  });

  it('3 get oder by userId: not exist', async () => {
    const result = await order.getOderById(100);
    const expectData: OrderDetail[] = [];

    expect(result).toEqual(expectData);
  });
});
