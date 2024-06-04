// User.js
const bcrypt = require('bcryptjs');

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }
}

module.exports = User;
