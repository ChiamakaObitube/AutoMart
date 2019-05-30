import cars from '../database/car';
import users from '../database/user';
import orders from '../database/order';

class Order {
  postNewOrder(data) {
    const newOrder = {
      id: orders.length + 1,
      carId: cars[cars.length - 1].id,
      buyer: users[users.length - 1].email,
      createdOn: Date(),
      status: 'pending',
      price: cars[cars.length - 1].price,
      priceOffered: parseFloat(data.priceOffered),
    };
    orders.push(newOrder);
    return newOrder;
  }


  getOrders() {
    return orders;
  }

  getSpecificOrder(id) {
    return orders.find(order => order.id === id);
  }

  
}
export default new Order();
