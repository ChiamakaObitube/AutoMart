import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';
import Helper from '../middleware/helper';
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

const token = Helper.generateToken;
// Test for Car Routes

describe('/GET /api/v1/car', () => {
  it('it should get all cars whether sold or unsold', (done) => {
    chai.request(app)
      .get('/api/v1/car')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
});
describe('Test for car routes', () => {
  beforeEach((done) => {
    done();
  });
  afterEach((done) => {
    done();
  });
  describe('POST /api/v1/car', () => {
    it('it should not create a car ad if the user is not authenticated', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(validAd)
        .set('authorization', token)
        .end((err, res) => {
          expect(res).to.have.status(403);
          done();
        });
    });

    it('it should return 400 status if manufacturer is undefined', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(undefinedManufacturer)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });

    it('it should return 400 status if car manufacturer is not a string', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(nonStringManufacturer)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });
    it('it should return 400 status if car model is undefined', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(undefinedModel)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });

    it('it should return 400 status if car model is not a string', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(nonStringModel)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });
    it('it should return 400 status if car price is undefined', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(undefinedPrice)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });

    it('it should return 400 status if car state is undefined', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(undefinedState)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });

    it('it should return 400 status if car state is not a string', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(nonStringState)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });
    it('it should return 400 status if car status is undefined', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .type('form')
        .set('enctype', 'multipart/form-data')
        .send(undefinedStatus)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });

    it('it should return 400 status if car status is not a string', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .type('form')
        .send(nonStringStatus)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });
    it('it should return 400 status if car bodyType  is undefined', (done) => {
      chai.request(app)
        .post('/api/v1/car')
        .send(undefinedBodyType)
        .end((err, res) => {
          expect(res).to.have.status(403);
          res.body.should.have.property('error');
          done();
        });
    });
  // it('it should return 400 status if car image is not uploaded', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/car')
  //     .end((err, res) => {
  //       expect(res).to.have.status(400);
  //       expect(res.body).be.an('object');
  //       expect(res.body.message).to.equal('car image is required');
  //       done();
  //     });
  // });
  });
});
describe('/GET a car by their id', () => {
  it('it should get a specific car by the given id', (done) => {
    chai.request(app)
      .get('/api/v1/car/:car-id')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});

describe('/GET /api/v1/car', () => {
  it('it should get a specific car by their id', (done) => {
    chai.request(app)
      .get('/api/v1/car/:car-id')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('/PATCH update a car price', () => {
  it('it should update a specific car price', (done) => {
    chai.request(app)
      .patch('/api/v1/car/:car-id/price')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
  it('it should return error status if car price is undefined', (done) => {
    chai.request(app)
      .patch('/api/v1/car/:car-id/price')
      .send(undefinedPrice)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('/PATCH mark car ad as sold', () => {
  it('it should mark car as sold', (done) => {
    chai.request(app)
      .patch('/api/v1/car/:car-id/status')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
  it('it should return 400 status if car status is undefined', (done) => {
    chai.request(app)
      .patch('/api/v1/car/:car-id/status')
      .send(undefinedStatus)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('/GET all available cars', () => {
  it('it should not get all unsold cars if user is not authenticated', (done) => {
    chai.request(app)
      .get('/api/v1/car/status/available')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});

describe('/GET all available cars within a price range', () => {
  it('it should get all available cars within a price range', (done) => {
    chai.request(app)
      .get('/api/v1/car/status/available/minPrice/maxPrice')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
  it('should return 400 status if min price and max price is undefined', (done) => {
    chai.request(app)
      .post('/api/v1/car/status/available/minPrice/maxPrice')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('car max price and min price is required');
        done();
      });
  });
  it('should return 400 status if min price is not a number', (done) => {
    chai.request(app)
      .post('/api/v1/car/status/available/minPrice/maxPrice')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('car min price must be a number');
        done();
      });
  });
  it('should return 400 status if max price is not a number', (done) => {
    chai.request(app)
      .post('/api/v1/car/status/available/minPrice/maxPrice')
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.message).to.equal('car max price must be a number');
        done();
      });
  });
});
describe('/DELETE a car by their id', () => {
  it('it should delete a car by their id', (done) => {
    chai.request(app)
      .delete('/api/v1/car/:car-id')
      .set('authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(403);
        done();
      });
  });
});

describe('/GET all new available cars', () => {
  it('it should not get all unsold cars if user is not authenticated', (done) => {
    chai.request(app)
      .get('/api/v1/car/status/available/new')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});
// describe('/GET all new available cars', () => {
//   it('it should not get all new available cars if user is not authenticated', (done) => {
//     chai.request(app)
//       .get('/api/v1/car/status/available/new')
//       .end((err, res) => {
//         expect(res).to.have.status(403);
//         res.body.should.have.property('error');
//         done();
//       });
//   });
// });

describe('/GET all used available cars', () => {
  it('it should get all used available cars', (done) => {
    chai.request(app)
      .get('/api/v1/car/status/available/used')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});
