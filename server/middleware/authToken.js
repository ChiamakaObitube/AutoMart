import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
  }
  // const token = req.headers.authorization.split('')[1];
  jwt.verify(req.token, key, (err, data) => {
    if (err) {
      return res.status(403).json({
        status: 403,
        message: 'Error, you cannot access this resource',
      });
    }
    req.user = data;
    next();
  });
};

export default verifyToken;
