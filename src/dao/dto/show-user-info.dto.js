export default class ShowUserDTO {
  constructor(user) {
    this.nombre = user.first_name;
    this.apellido = user.last_name;   
    this.edad = user.age;
  }
}
