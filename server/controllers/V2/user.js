import Helper from '../../middleware/helper';
import db from '../../database/index';

class userController {
  static async userSignup(req, res) {
    const hashedPassword = Helper.hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const createQuery = `INSERT INTO
		users("firstName", "lastName", "email", "address", "password")
	  VALUES($1, $2, $3, $4, $5)
		returning * `;

    const values = [
      req.body.firstName,
      req.body.lastName,
      (req.body.email).toLowerCase(),
      req.body.address,
      hashedPassword,
    ];
    try {
      const { rows } = await db.query(createQuery, values);
      console.log(rows);
      return res.status(201).send({
        status: 201,
        message: 'Account created successfully',
        data: rows[0].id,
      });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({
          message: 'User with that EMAIL already exist',
        });
      }
      return res.status(400).send('signup failed');
    }
  }
}

export default userController;
