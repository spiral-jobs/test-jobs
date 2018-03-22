const chalk = require('chalk');

function handleError (err, req, res, next) {
  if (!err) {
    console.log('not err');
    next();
  }
  if (!err.statusCode) {
    err.statusCode = 500;
  }

  if (err.statusCode >= 500) {
    console.log(chalk.red(`STATUS: ${err.statusCode}`), chalk.red(`ERROR: ${err.error}`), `${err.message}`);
  } else if (err.statusCode >= 400 && err.statusCode < 500) {
    console.log(chalk.yellow(`STATUS: ${err.statusCode}`), chalk.yellow(`ERROR: ${err.error}`), `${err.message}`);
  }
  res.status(err.statusCode).send({status: 0, message: err.message});
}

function boomError (err, req, res, next) {
  if (err.isBoom) {
    // return res.status(err.output.statusCode).json(err.output.payload);
    err.error = err.output.payload.error;
    err.statusCode = err.output.payload.statusCode;
    err.message = err.output.payload.message;
    return next(err);
  } else if (err) {
    return next(err);
  }
  next();
}

module.exports = {
  handleError: handleError,
  boomError: boomError
};
