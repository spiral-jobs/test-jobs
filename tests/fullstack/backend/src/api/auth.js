const UserHelper = require('../helpers/user.helper');
const ErrorHelper = require('../helpers/error.helper');
const JwtService = require('../services/jwt.service');

const SignIn = async (req, res, next) => {
  try {
    const user = await UserHelper.FindUser(req.user.id);
    req.data = { user, token: JwtService.tokenForUser(user) };
    next();
  }
  catch (e) {
    ErrorHelper.serverError(e);
  }
};

const SignUp = async (req, res, next) => {
  try {
    const { lname, fname, phoneNumber, email, password } = req.body;
    const newUser = await UserHelper.CreateUser({lname, fname, phoneNumber, email, password});
    if (!newUser) { return next(ErrorHelper.clientError('Invalid Input', 422)); }
    const user = await UserHelper.FindUser(newUser.id);
    req.data = { user, token: JwtService.tokenForUser(user) };
    next();
  }
  catch (e) {
    next(ErrorHelper.serverError(e));
  }
};

module.exports = {
  SignIn,
  SignUp
};
