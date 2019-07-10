import cars from '../../database/objectDatabase/car';
import users from '../../database/objectDatabase/user';
import orders from '../../database/objectDatabase/order';

class Order {
  postNewOrder(data) {
    const newOrder = {
      id: orders.length + 1,
      car_id: cars[cars.length - 1].id,
      buyer: users[users.length - 1].email,
      created_on: Date(),
      status: 'pending',
      price: cars[cars.length - 1].price,
      price_offered: parseFloat(data.price_offered),
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

  deleteOnePurchaseOrder(id) {
    const specificOrder = orders.find(order => order.id === id);

    const index = orders.indexOf(specificOrder);
    orders.splice(index, 1);
    return specificOrder;
  }
}
export default new Order();
