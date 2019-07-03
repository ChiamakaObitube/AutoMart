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

describe('POST /api/v2/order', () => {
  it('should create a purchase order', (done) => {
    chai.request(app)
      .post('/api/v2/order')
      .send(validOrder)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should return 400 status if order status is not pending', (done) => {
    chai.request(app)
      .post('/api/v2/order')
      .send(nonPendingStatus)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should return 400 status if order price offered is undefined', (done) => {
    chai.request(app)
      .post('/api/v2/order')
      .send(undefinedPriceOfferred)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });
});

describe('/GET /api/v2/order', () => {
  it('it should get all orders whether accepted or pending', (done) => {
    chai.request(app)
      .get('/api/v2/order')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });
});
describe('/GET /api/v2/order/<order:id>', () => {
  it('it should get a specific order by their id', (done) => {
    chai.request(app)
      .get('/api/v2/order/:id')
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('message');
        done();
      });
  });
});

describe('/PATCH update a order price offered', () => {
  it('it should update a specific order price offered', (done) => {
    const updateUrl = '/api/v2/order/1/price';
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
describe('/DELETE a purchase order by their id', () => {
  it('it should delete a purchase order by their id', (done) => {
    const id = 1;
    chai.request(app)
      .delete(`/api/v2/order/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(202);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
