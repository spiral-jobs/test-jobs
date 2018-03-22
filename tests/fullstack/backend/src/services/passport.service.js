const Passport = require('passport');
const Db = require('../models');
const Config = require('../../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const Op = require('sequelize').Op;

const bcrypt = require('bcrypt-nodejs');
const localOptions = { usernameField: 'loginName'};
const { User } = Db;
const localLogin = new LocalStrategy(localOptions, (loginName, password, done) => {
  User.findOne({
    where:{
      [Op.or]: [
        { email: loginName },
        { phoneNumber: loginName }
      ]
    }
  })
  .then(user => {
    if(!user){return done(null, false);}
    bcrypt.compare(password, user.password, function(err, isMatch) {
      if (err) {return done(err);}
      if (!isMatch) {return done(null, false);}
      return done(null, user);
    });

  })
  .catch(err => {
    return done(err);
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: Config.SECRET
};

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  
  user.findOne({
    where:{
      id: payload.sub
    }
  })
  .then(user => {
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
  .catch(err => {
    return done(err, false);
  });
});

Passport.use(jwtLogin);
Passport.use(localLogin);
