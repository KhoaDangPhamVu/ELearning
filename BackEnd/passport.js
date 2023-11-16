const passport = require('passport');
const db = require("./models");
const User = db.user
const config = require('./config/authConfig')

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// passport.use(
//     new JwtStrategy({
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         secretOrKey: config.jwtSecret
//     }),async function(jwtPayload,done){
//         try{
//             const user = await User.findOne({
//                 where: {
//                     userID: jwtPayload.userID
//                 }
//             })
//             if(!user){
//                 return done(new Error(),false)
//             }
//             return done(null,user);
//         }catch(err){
//             return done(new Error(),false);
//         }
//     }
// )

passport.use(
    new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret
    }, async function (jwtPayload, done) {
      try {
        const user = await User.findOne({
          where: {
            userID: jwtPayload.userID
          }
        })
        if (!user) {
          return done(new Error(), false)
        }
        return done(null, user)
      } catch (err) {
        return done(new Error(), false)
      }
    })
  )

module.exports = null