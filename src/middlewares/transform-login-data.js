import UserLoginDTO from '../dao/dto/user-login.dto.js';

const transformLoginData = (req, res, next) => {
  if (req.body.correo && req.body.palabraClave) {
    const loginData = new UserLoginDTO(req.body);
    req.body = loginData;
  }
  next();
};

export default transformLoginData;
