const validOrder = {
  id: 1,
  car_id: 1,
  created_on: new Date(),
  status: 'pending',
  state: 'new',
  price: parseFloat(400000.00),
  priceOffered: parseFloat(30000000.00),
};
const undefinedCarId = {
  id: 1,
  created_on: new Date(),
  status: 'pending',
  state: 'new',
  price: parseFloat(400000.00),
  priceOffered: parseFloat(30000000.00),
};

const nonIntegerCarId = {
  id: 1,
  car_id: '1',
  created_on: new Date(),
  status: 'pending',
  state: 'new',
  price: parseFloat(400000.00),
  priceOffered: parseFloat(30000000.00),
};

const nonPendingStatus = {
  id: 1,
  car_id: null,
  state: 'new',
  price: parseFloat(400000.00),
  priceOffered: parseFloat(30000000.00),
};


const nonStringStatus = {
  id: 1,
  car_id: 1,
  created_on: new Date(),
  status: 'pending',
  state: 'new',
  price: parseFloat(400000.00),
  priceOffered: parseFloat(30000000.00),
};

const undefinedPrice = {
  id: 1,
  car_id: 1,
  created_on: new Date(),
  status: 'pending',
  state: 'new',

  priceOffered: parseFloat(30000000.00),
};

const nonFloatPrice = {
  id: 1,
  car_id: 1,
  created_on: new Date(),
  status: 'pending',
  state: 'new',
  price: 'parseFloat(400000.00)',
  priceOffered: parseFloat(30000000.00),
};
const undefinedPriceOfferred = {
  id: 1,
  car_id: 1,
  created_on: new Date(),
  status: 'pending',
  state: 'new',
  price: parseFloat(400000.00),

};

const nonFloatPriceOffered = {
  id: 1,
  car_id: 1,
  created_on: new Date(),
  status: 'pending',
  state: 'new',
  price: parseFloat(400000.00),
  priceOffered: 'parseFloat(30000000.00)',
};
export {
  validOrder,
  undefinedCarId,
  nonIntegerCarId,
  nonPendingStatus,
  nonStringStatus,
  undefinedPrice,
  nonFloatPrice,
  undefinedPriceOfferred,
  nonFloatPriceOffered,
};
