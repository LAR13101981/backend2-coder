import { createHash } from '../utils/bcrypt.js';
import { userRepo } from '../repositories/index.js';
import ShowUserDTO from '../dao/dto/show-user-info.dto.js';
import CreateUserDTO from '../dao/dto/create-users.dto.js';

export const getAllFilteredUsers = async () => {
  const users = await userRepo.getAllUsers();
  const filteredUsers = users.map((user) => new ShowUserDTO(user));
  return filteredUsers;
};

export const getAllUsers = async () => {
  return await userRepo.getAllUsers();
};

export const registerNewUser = async (user) => {
  const userDTO = { ...new CreateUserDTO(user) };
  console.log(userDTO);
  const { first_name, last_name, email, age, password, role } = userDTO;

  try {
    if (!first_name || !last_name || !email || !age || !password) {
      throw new Error('Faltan completar campos para el registro');
    }

    const newUser = await userRepo.createNewUser({
      ...userDTO,
      password: createHash(password),
    });

    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByEmail = async (user) => {
  return await userRepo.getUserByEmail(user);
};

export const getUserById = async (id) => {
  return await userRepo.findById(id);
};
