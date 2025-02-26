import UserModel from '../models/user.model.js';

export default class UserDAO {
  constructor() {}

  get = async () => {
    return await UserModel.find();
  };

  getUser = async (user) => {
    return await UserModel.findOne(user);
  };

  createUser = async (user) => {
    return await UserModel.create(user);
  };

  updateUser = async (user) => {
    return await UserModel.findupdateOne(user);
  };  
}
