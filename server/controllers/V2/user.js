import Helper from '../../middleware/helper';
import db from '../../database/index';

class userController {
  static async userSignup(req, res) {
    try {
      const hashedPassword = Helper.hashPassword(req.body.password);
      req.body.password = hashedPassword;
      const is_admin = false;

      const createQuery = `INSERT INTO
		users("first_name", "last_name", "email", "address", "password", "is_admin")
	  VALUES($1, $2, $3, $4, $5, $6)
		returning * `;

      const values = [
        req.body.first_name,
        req.body.last_name,
        (req.body.email).trim().toLowerCase(),
        req.body.address,
        hashedPassword,
        is_admin,
      ];

      const { rows } = await db.query(createQuery, values);
      const token = Helper.generateToken(rows[0]);
      const {
        id, email, first_name, last_name, password, address,
      } = rows[0];
      const registeredUser = {
        token,
        id,
        email,
        first_name,
        last_name,
        password,
        address,
        is_admin,
      };
      return res.status(201).json({
        status: 201,
        message: 'Account created successfully.',
        data: registeredUser,
      });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).json({
          status: 400,
          error: 'User with that EMAIL already exist',
        });
      }
      return res.status(500).send({ status: 500, error: 'signup failed' });
    }
  }

  static async loginUser(req, res) {
    try {
      const loginQuery = 'SELECT * FROM users WHERE email = $1';

      const values = [
        (req.body.email).trim().toLowerCase(),
      ];

      const { rows } = await db.query(loginQuery, values);

      const { email, password, is_admin } = rows[0];

      // Compares user's password with hashed paswword in the database
      const loggedInUser = Helper.comparePassword(req.body.password, password);
      if (!loggedInUser) {
        return res.status(401).send({
          message: 'Login unsuccessful',
        });
      }

      const token = Helper.generateToken(rows[0]);

      // Destructuring the user data.
      const loggedinUser = {
        token,
        email,
        password,
        is_admin,
      };

      return res.status(200).send({
        status: 200,
        message: 'User logged in successfully',
        data: loggedinUser,
      });
    } catch (error) {
      return res.status(400).send({ status: 'error', error: 'Login failed, try again' });
    }
  }

  static async getAllUsers(req, res) {
    const usersQuery = 'SELECT * FROM users';
    try {
      const { rows, rowCount } = await db.query(usersQuery);

      if (!rows) {
        return res.status(404).send({
          message: 'There are no users in this database',
        });
      }
      // Only admin can view all users
      if (!req.user.is_admin) {
        return res.status(401).send({
          status: 401,
          error: 'You are not authorized to perform this action',
        });
      }
      return res.status(200).send({
        message: 'All users retrieved successfully',
        data: rows,
        rowCount,
      });
    } catch (error) {
      return res.status(500).send({
        error: 'Error fetching users, try again',
      });
    }
  }

  static async getSpecificUser(req, res) {
    const text = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await db.query(text, [req.params.email]);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'user does not exist',
        });
      }
      if (!req.user.is_admin) {
        return res.status(401).send({
          status: 401,
          error: 'You are not authorized to perform this action',
        });
      }
      return res.status(200).send({
        status: 200,
        message: 'user retrieved successfully',
        data: rows[0],
      });
    } catch (error) {
      return res.status(500).send({
        error: 'Error fetching user, try again',
      });
    }
  }

  static async deleteSpecificUser(req, res) {
    const deleteQuery = 'DELETE FROM users WHERE email = $1 returning *';
    try {
      const {	rows } = await db.query(deleteQuery, [req.params.email]);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'This user does not exist',
        });
      }

      if (!req.user.is_admin) {
        return res.status(401).send({
          status: 401,
          error: 'You are not authorized to perform this action',
        });
      }
      return res.status(202).send({
        message: 'User deleted successfully',
      });
    } catch (error) {
      return res.status(500).send({
        error: 'User cannot be deleted now, try again later',
      });
    }
  }

  static async makeAdmin(req, res) {
    const makeAdminQuery = 'UPDATE users SET "is_admin"=\'true\' WHERE "email" = $1 returning *';
    try {
      const { rows } = await db.query(makeAdminQuery, [req.user.email]);
      if (!rows[0]) {
        return res.status(404).send({
          message: 'This user does not exist',
        });
      }
      return res.status(202).send({
        message: 'User updated successfully',
      });
    } catch (error) {
      return res.status(500).send({
        error: 'Error updating user to Admin, try again later',
      });
    }
  }
}

export default userController;
