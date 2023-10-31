import { Product, ProductCategory, Products } from '../database/models/products.model';

const product = new Products();

describe('test Product Model ', () => {
  it('1 should have an index method', () => {
    expect(product.getAllProducts).toBeDefined();
  });

  it('2 should have a show method', () => {
    expect(product.getById).toBeDefined();
  });

  it('3 show have a showByCategory method', () => {
    expect(product.showByCategory).toBeDefined();
  });

  it('4 show have a create method', () => {
    expect(product.create).toBeDefined();
  });

  it('5 index method should return a product', async () => {
    const result = await product.getAllProducts();
    const expectData: Product[] = [
      {
        name: 'Iphone 15 pro max 256gb',
        price: 168,
        id: 1
      },
      {
        name: 'Samsung galaxy',
        price: 220,
        id: 2
      },
      {
        name: 'Huawei Mate 40',
        price: 149,
        id: 3
      },
      {
        name: 'Xiaomi 13',
        price: 29.8,
        id: 4
      },
      {
        name: 'Macbook Air',
        price: 189.99,
        id: 5
      }
    ];

    expect(result).toEqual(expectData);
  });

  it('6 index method should return a product', async () => {
    const result = await product.getById('1');
    const expectData: Product = {
      name: 'Iphone 15 pro max 256gb',
      price: 168,
      id: 1
    };

    expect(result).toEqual(expectData);
  });

  it('7 index method should return products list by category - not exist', async () => {
    const result = await product.showByCategory('Television');
    const expectData: ProductCategory[] = [];

    expect(result).toEqual(expectData);
  });

  it('8 index method should create new product', async () => {
    const result = await product.create({
      name: 'iphone 15',
      price: 400
    });
    const expectData: Product = { name: 'iphone 15', price: 400, id: 6 };

    expect(result).toEqual(expectData);
  });

  it('9 index method should return products list by category - have data', async () => {
    const result = await product.showByCategory('Car');
    const expectData: ProductCategory[] = [
      { id: 1, name: 'Iphone 15 pro max 256gb', price: 168, category: 'Car' }
    ];

    expect(result).toEqual(expectData);
  });
});
