Coderhouse Backend 2 Pre entrega

Proyecto de Autenticación con JWT y Manejo de Sesiones

Este proyecto es una implementación de un sistema de autenticación de usuarios utilizando JSON Web Tokens (JWT) y Passport.js para gestionar las estrategias de autenticación. Los usuarios pueden registrarse, iniciar sesión, ver su información y cerrar sesión de manera segura.

Funcionalidades

- Registro de Usuario: Permite registrar un nuevo usuario en el sistema.
- Inicio de Sesión: Autenticación de usuarios mediante JWT utilizando la estrategia JWT de Passport.
- Ver Información del Usuario: Después de iniciar sesión, el usuario puede ver su información (como nombre, correo electrónico y rol).
- Cerrar Sesión: El usuario puede cerrar sesión y ser redirigido fuera del sistema.

Tecnologías Utilizadas

Node.js: JavaScript para el servidor.
Express: Framework web para Node.js.
Passport.js: Middleware para la autenticación, utilizando estrategias como JWT.
JWT (JSON Web Tokens): Para la autenticación sin estado.
Handlebars: Motor de plantillas para renderizar vistas.
CSS: Para el estilo de la interfaz.
dotenv: Para gestionar variables de entorno de manera segura.
(contradictorio ya que el archivo .env se agrego al repo)
bcrypt: Para el hashing seguro de contraseñas.