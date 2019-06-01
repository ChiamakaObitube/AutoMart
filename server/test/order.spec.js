import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';
import {
  validOrder,

  nonPendingStatus,
  nonStringStatus,
  undefinedPrice,

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
        expect(res).to.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });

  it('it should return 400 status if order status is not pending', (done) => {
    chai.request(app)
      .post('/api/v1/order')
      .send(nonPendingStatus)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('order status must be pending');
        done();
      });
  });
  
  it('it should return 400 status if order price offered is undefined', (done) => {
    chai.request(app)
      .post('/api/v1/order')
      .send(undefinedPriceOfferred)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).be.an('object');
        expect(res.body.message).to.equal('order price offered is required');
        done();
      });
  });
});

describe('/GET /api/v1/order', () => {
  it('it should get all orders whether accepted or pending', (done) => {
    chai.request(app)
      .get('/api/v1/order')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        done();
      });
  });
});
describe('/GET /api/v1/order/<order:id>', () => {
  it('it should get a specific order by their id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/order/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        done();
      });
  });
});

describe('/PATCH update a order price offered', () => {
  it('it should update a specific order price offered', (done) => {
    const updateUrl = '/api/v1/order/1/price';
    chai.request(app)
      .patch(updateUrl)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('order price updated successfully');
        done();
      });
  });
});
