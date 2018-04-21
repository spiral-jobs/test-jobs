const _ = require('lodash');

const tokenTrimmer = (req, res, next) => {
  if(req.headers['authorization']) {
    const token = _.trim(req.headers['authorization'], 'Bearer');
    req.headers['authorization'] = token.trimLeft();
    return next();
  }
  next();
}

module.exports = {
  tokenTrimmer: tokenTrimmer
};
