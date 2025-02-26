export default class CreateUserDTO {
  constructor(user) {
    this.first_name = user.nombre;
    this.last_name = user.apellido;
    this.email = user.correo;
    this.age = user.edad;
    this.password = user.palabraClave;
    this.role = user.rol || 'user';
  }
}
