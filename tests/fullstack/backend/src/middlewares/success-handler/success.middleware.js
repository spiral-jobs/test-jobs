const chalk = require('chalk');

function handleSuccess (req, res, next) {
  let message;
  if (!req.message) {
    message = 'Success';
  } else {
    message = req.message;
  }
  if (!req.data) {
    return res.status(400).send({status: 0, message: 'Error'});
  }
  console.log(chalk.green('STATUS: ' + 200), message);
  res.status(200).send({status: 1, message: message, data: req.data});
}

module.exports = {
  handleSuccess: handleSuccess
};
