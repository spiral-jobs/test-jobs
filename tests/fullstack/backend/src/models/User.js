const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phoneNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
    fname: { type: DataTypes.STRING, allowNull: true },
    lname: { type: DataTypes.STRING, allowNull: true },
    password: DataTypes.STRING
  });

  // User.associate = models => {
  // };
  User.beforeSave(User => {
    const salt = bcrypt.genSaltSync(10);
    User.password = bcrypt.hashSync(User.password, salt);
  });
  return User;
};
