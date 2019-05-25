class User {
  constructor() {
    this.users = [];
  }

  signup(data) {
    const newUser = {
      id: this.users.length + 1,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      password: data.password
    };
    this.users.push(newUser);
    return newUser;
  }

  signin(data) {
    const existingUser = {
      id: this.users.length + 1,
      email: data.email,
      passowrd: data.password
    };
    this.users.push(existingUser);
    return existingUser;
  }
}

export default new User();
