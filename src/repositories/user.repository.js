import UserDAO from '../dao/classes/user.dao.js';

export default class UserRepository {
  constructor() {
    this.dao = new UserDAO();
  }

  async getAllUsers() {
    const users = await this.dao.get();
    return users;
  }

  async getUserByEmail(user) {
    return await this.dao.getUser(user);
  }

  async getUserById(user) {
    return await this.dao.getUserById(user);
  }

  async createNewUser(user) {
    return await this.dao.createUser(user);
  }
}
