import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import cookieExtractor from '../utils/cookie-extractor.js';
import { getUserByEmail, getUserById } from '../services/user.service.js';
import { isValidPassword } from '../utils/bcrypt.js';
import env from './env.js';
import UserLoginDTO from '../dao/dto/user-login.dto.js';

const SECRET = env.JWT_SECRET;

const initializePassport = () => {
  passport.use(
    'login',
    new LocalStrategy(
      { usernameField: 'correo', passwordField: 'palabraClave' },
      async (email, password, done) => {
        try {
          const userData = new UserLoginDTO({
            correo: email,
            palabraClave: password,
          });
          const user = await getUserByEmail({ email: userData.email });

          if (!user) return done(null, false, { message: 'User not found' });

          const validPassword = isValidPassword(password, user.password);
          if (!validPassword)
            return done(null, false, { message: 'Invalid password' });

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.use(
    'jwt',
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: SECRET,
      },
      async (payload, done) => {
        try {
          const user = await getUserByEmail(payload.user);
          if (!user) return done(null, false);
          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }
    )
  );
};

export default initializePassport;
