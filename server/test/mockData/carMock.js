const validAd = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};

const undefinedManufacturer = {
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};
const emptyManufacturer = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: '',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};
const nonStringManufacturer = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: ['Ford'],
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};
const undefinedModel = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};

const nonStringModel = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: ['2009'],
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};

const undefinedPrice = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};

const emptyPrice = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: '',
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};
const nonFloatPrice = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: '150000.00',
  state: 'new',
  status: 'sold',
  body_type: 'truck',
};

const undefinedState = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  status: 'sold',
  body_type: 'truck',
};


const nonStringState = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: ['new'],
  status: 'sold',
  body_type: 'truck',
};

const undefinedStatus = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  body_type: 'truck',
};



const nonStringStatus = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: ['sold'],
  body_type: 'truck',
};

const undefinedBodyType = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
};



const nonStringBodyType = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: ['truck'],
};

export {
  validAd,
  
  undefinedManufacturer,
  emptyManufacturer,
  nonStringManufacturer,
  undefinedModel,
  nonStringModel,
  undefinedPrice, 
  nonFloatPrice,
  undefinedState,
  nonStringState,
  undefinedStatus,
  nonStringStatus,
  undefinedBodyType,
  nonStringBodyType,

};
