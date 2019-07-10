import users from '../../database/objectDatabase/user';

class User {
  signup(data) {
    const newUser = {
      id: users.length + 1,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      address: data.address,
      password: data.password,
      is_admin: false,
    };
    users.push(newUser);
    return newUser;
  }


  getAllUsers() {
    return users;
  }

  getSpecificUser(email) {
    const specificUser = users.find(user => user.email === email);
    return specificUser;
  }

  deleteOneUser(email) {
    const specificUser = users.find(user => user.email === email);
    const index = users.indexOf(specificUser);
    users.splice(index, 1);
    return specificUser;
  }
}


export default new User();
