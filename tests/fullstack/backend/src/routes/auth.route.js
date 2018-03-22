const express = require('express');
const passport = require('passport');
require('../services/passport.service');
const requireSignin = passport.authenticate('local', { session: false });
const Authentication = require('../api/auth');
const AuthRoute = express.Router();
const ExpressJoi = require('express-joi-validator');
const AuthValidation = require('../validation/auth.validation');

AuthRoute.route('/signin')
.post(
  ExpressJoi(AuthValidation.signinBodySchema),
  requireSignin,
  Authentication.SignIn
);

AuthRoute.route('/signup')
.post(
  ExpressJoi(AuthValidation.signupBodySchema),
  Authentication.SignUp
);

module.exports = AuthRoute;
