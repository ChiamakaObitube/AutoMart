import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.SECRET_KEY;

class Helper {
  static hashPassword(password) {
    const saltRounds = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, saltRounds);
  }

  static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(hashPassword, password);
  }

  static isValidEmail(email) {
    return /\s+@\S+\.\S+/.test(email);
  }

  static generateToken(payload) {
    const token = jwt.sign(
      payload,
      key, {
        expiresIn: '1d',
      },
    );
    return token;
  }
}

export default Helper;
