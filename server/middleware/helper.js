import bcrypt from 'bcrypt';

class Helper {
  static hashPassword(password) {
    const saltRounds = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, saltRounds);
  }

  static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }

  static isValidEmail(email) {
    return /\s+@\S+\.\S+/.test(email);
  }
}

export default Helper;
