const jwt = require('jwt-simple');
const Config = require('../../config');
module.exports = {
  tokenForUser: (user) => {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, Config.SECRET);
  }
}
