const Db = require('../models');
const Op = require('sequelize').Op;

function getAllUser () {
  return new Promise(async(resolve, reject) => {
    try {
      const users = await Db.User.findAll({
        where: {},
        attributes: ['email', 'phoneNumber', 'lname', 'fname']
      });
      resolve(users);
    }
    catch (e) {
      reject(e);
    }
  });
}

function getUserById (id) {
  return new Promise(async(resolve, reject) => {
    try {
      const user = await Db.User.findOne({
        where: {id},
        attributes: ['email', 'phoneNumber', 'lname', 'fname']
      });
      resolve(user);
    }
    catch (e) {
      reject(e);
    }
  });
}

function createUserByInput ({email, phoneNumber, lname, fname, password}) {
  return new Promise(async(resolve, reject) => {
    try {
      const user = await Db.User.create({email, phoneNumber, lname, fname, password});
      resolve(user);
    }
    catch(e) {
      reject(e);
    }
  });
}

async function FindUser () {
  if (arguments.length === 1 && typeof arguments[0] === 'number') {
    return getUserById(arguments[0]);
  }
  else {
    return getAllUser();
  }
}

async function CreateUser () {
  return createUserByInput(arguments[0]);
}
module.exports = {
  FindUser,
  CreateUser
};
