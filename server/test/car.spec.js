import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';
import {
  validAd,

  undefinedManufacturer,
  nonStringManufacturer,
  undefinedModel,
  nonStringModel,
  undefinedPrice,
  undefinedState,
  nonStringState,
  undefinedStatus,
  nonStringStatus,
  undefinedBodyType,
} from './mockData/carMock';


chai.use(chaiHttp);
const {
  should,
  expect,
} = chai;
should();

describe('/GET /api/v2/car', () => {
  it('it should get all cars whether sold or unsold', (done) => {
    chai.request(app)
      .get('/api/v2/car')
      .send(validAd)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });
});

describe('POST /api/v2/car', () => {
  it('it should not create a car ad if the user is not authenticated', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should return 400 status if manufacturer is undefined', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(undefinedManufacturer)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should return 400 status if car manufacturer is not a string', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(nonStringManufacturer)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });
  it('it should return 400 status if car model is undefined', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(undefinedModel)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should return 400 status if car model is not a string', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(nonStringModel)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });
  it('it should return 400 status if car price is undefined', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(undefinedPrice)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should return 400 status if car state is undefined', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(undefinedState)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should return 400 status if car state is not a string', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(nonStringState)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });
  it('it should return 400 status if car status  is undefined', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(undefinedStatus)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should return 400 status if car status is not a string', (done) => {
    chai.request(app)
      .post('/api/v2/car')
      .send(nonStringStatus)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });
  // it('it should return 400 status if car image is not uploaded', (done) => {
  //   chai.request(app)
  //     .post('/api/v2/car')
  //     .end((err, res) => {
  //       expect(res).to.have.status(400);
  //       expect(res.body).be.an('object');
  //       expect(res.body.message).to.equal('car image is required');
  //       done();
  //     });
  // });
});
describe('/GET a car by their id', () => {
  it('it should get a specific car by the given id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v2/car/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});

describe('/GET /api/v2/car', () => {
  it('it should get a specific car by their id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v2/car/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('Car Ad retrieved successfully');
        done();
      });
  });
});
describe('/PATCH update a car price', () => {
  it('it should update a specific car price', (done) => {
    const updateUrl = '/api/v2/car/1/price';
    chai.request(app)
      .patch(updateUrl)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('car price updated successfully');
        done();
      });
  });
});
describe('/PATCH update a car status', () => {
  it('it should update a specific car status', (done) => {
    chai.request(app)
      .patch('/api/v2/car/:id/status')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equal('car successfully marked as sold');
        done();
      });
  });
});
describe('/GET all available cars', () => {
  it('it should get all unsold cars', (done) => {
    chai.request(app)
      .get('/api/v2/car/status/available')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});
describe('/GET all new available cars', () => {
  it('it should get all new available cars', (done) => {
    chai.request(app)
      .get('/api/v2/car/status/available/new')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
describe('/GET all used available cars', () => {
  it('it should get all used available cars', (done) => {
    chai.request(app)
      .get('/api/v2/car/status/available/used')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
describe('/GET all available cars within a price range', () => {
  it('it should get all available cars within a price range', (done) => {
    chai.request(app)
      .get('/api/v2/car/status/available/minPrice/maxPrice')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
  it('should return 400 status if min price and max price is undefined', (done) => {
    chai.request(app)
      .post('/api/v2/car/status/available/minPrice/maxPrice')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('car max price and min price is required');
        done();
      });
  });
  it('should return 400 status if min price is not a number', (done) => {
    chai.request(app)
      .post('/api/v2/car/status/available/minPrice/maxPrice')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('car min price must be a number');
        done();
      });
  });
  it('should return 400 status if max price is not a number', (done) => {
    chai.request(app)
      .post('/api/v2/car/status/available/minPrice/maxPrice')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('car max price must be a number');
        done();
      });
  });
});
describe('/DELETE a car by their id', () => {
  it('it should delete a car by their id', (done) => {
    const id = 1;
    chai.request(app)
      .delete(`/api/v2/car/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(202);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Purchase order deleted successfully');
        done();
      });
  });
});
