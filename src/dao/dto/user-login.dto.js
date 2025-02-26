export default class UserLoginDTO {
  constructor(user) {
    this.email = user.correo;
    this.password = user.palabraClave;
  }
}
