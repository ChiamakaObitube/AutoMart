class Order {
  constructor() {
    this.orders = [];
  }

  postNewOrder(data) {
    const newOrder = {
      id: this.orders.length + 1,
      carId: data.carId,
      buyer: data.buyer,
      createdOn: Date(),
      status: data.status,
      price: parseFloat(data.price),
      priceOffered: parseFloat(data.priceOffered),
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  getOrders() {
    return this.orders;
  }
}
export default new Order();
