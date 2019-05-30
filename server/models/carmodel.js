import cars from '../database/car';
import users from '../database/user';

class Car {
  postAd(data) {
    const newAd = {
      id: cars.length + 1,
      owner: users[users.length - 1].id,
      email: users[users.length - 1].email,
      address: users[users.length - 1].address,
      createdOn: Date(),
      state: data.state,
      status: 'available',
      price: 1000000.00,
      manufacturer: data.manufacturer,
      model: data.model,
      imageUrl: data.imageUrl,
    };
    cars.push(newAd);
    return newAd;
  }

  getAllCars() {
    return cars;
  }

  getSpecificCar(id) {
    const specificCar = cars.find(car => car.id === id);
    return specificCar;
  }

  getAvailableCars() {
    const availableCars = cars.filter(car => car.status === 'available');
    // console.log(availableCars);
    return availableCars;
  }


  deleteOneCar(id) {
    const specificCar = cars.find(car => car.id === id);

    const index = cars.indexOf(specificCar);
    cars.splice(index, 1);
    return specificCar;
  }
}

export default new Car();
