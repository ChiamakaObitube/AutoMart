import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';


chai.use(chaiHttp);
const {
  should,
  expect,
} = chai;
should();

describe('POST /api/v1/flag', () => {
  it('it should report/flag a posted ad as fraudulent', (done) => {
    const newFlag = {
      id: 1,
      carId: 4,
      reason: 'Ridiculous pricing',
      description: 'I have never seen this car at this price',
      reportedBy: 2,
      createdOn: Date(),
    };
    chai.request(app)
      .post('/api/v1/flag')
      .send(newFlag)
      .end((err, res) => {
        expect(res).to.have.status(403);
        res.body.should.have.property('error');
        done();
      });
  });
});
describe('/GET /api/v1/flag', () => {
  it('it should get all reported car Ads', (done) => {
    chai.request(app)
      .get('/api/v1/flag')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        done();
      });
  });
});
describe('/GET /api/v1/flag/<flag:id>', () => {
  it('it should get a specific flag by their id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/api/v1/flag/${id}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        done();
      });
  });
});
