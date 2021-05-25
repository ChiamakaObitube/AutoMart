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
