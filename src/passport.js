const passport = require('passport')
const passportJWT = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy

const config = require('./config')
const { getUserByUserName, getUserById } = require('./services/users')

const ExtractJWT = passportJWT.ExtractJwt
const JWTStrategy = passportJWT.Strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (uName, uPass, next) => {
      console.log(uName, uPass)
      try {
        const user = await getUserByUserName(uName)
        const { id, username, password } = user.data
        if (password === uPass) {
          return next(
            null,
            { username, id },
            { message: 'Logged In Successfully' }
          )
        } else {
          throw new Error('Invalid password')
        }
      } catch (e) {
        next(null, false, { message: 'Incorrect email or password.' })
      }
    }
  )
)

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.SECRET
    },
    async (jwtPayload, next) => {
      try {
        const user = await getUserById(jwtPayload.id)
        if (user) return next(null, user.data)
        else throw new Error('User not found')
      } catch (e) {
        next(e)
      }
    }
  )
)
