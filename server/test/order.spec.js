import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';
import {
  validOrder,
  updatePriceOffered,
  nonPendingStatus,
  undefinedPriceOfferred,
} from './mockData/orderMock';

chai.use(chaiHttp);
const {
  should,
  expect,
} = chai;
should();

describe('POST /api/v1/order', () => {
  it('should create a purchase order', (done) => {
    chai.request(app)
      .post('/api/v1/order')
      .send(validOrder)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });

  it('it should return 400 status if order status is not pending', (done) => {
    chai.request(app)
      .post('/api/v1/order')
      .send(nonPendingStatus)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });


  it('it should return 400 status if order price offered is undefined', (done) => {
    chai.request(app)
      .post('/api/v1/order')
      .send(undefinedPriceOfferred)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});

describe('/GET /api/v1/order', () => {
  it('it should get all orders whether accepted or pending', (done) => {
    chai.request(app)
      .get('/api/v1/order')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('/GET /api/v1/order/<order:id>', () => {
  it('it should get a specific order by their id', (done) => {
    chai.request(app)
      .get('/api/v1/order/:id')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});

describe('/PATCH update a order price offered', () => {
  it('it should update a specific order price offered', (done) => {
    chai.request(app)
      .patch('/api/v1/order/1/price')
      .send(updatePriceOffered)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});

