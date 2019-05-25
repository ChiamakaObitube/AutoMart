class Order {
  constructor() {
    this.orders = [];
  }

  postNewOrder(data) {
    const newOrder = {
      id: this.orders.length + 1,
      carId: 1,
      buyer: 2,
      createdOn: Date(),
      status: data.status,
      price: parseFloat(data.price),
      priceOffered: parseFloat(data.priceOffered),
    };
    this.orders.push(newOrder);
    return newOrder;
  }
}
export default new Order();
