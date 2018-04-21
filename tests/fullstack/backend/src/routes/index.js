
const AuthRoute = require('./auth.route');

module.exports = (app) => {
  app.get('/', (req, res, next) => { res.status(200).send({ message: 'Success', status: 1 }); });
  app.use('/api/auth', AuthRoute);
};
