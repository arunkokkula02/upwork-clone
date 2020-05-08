'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: { args: true, msg: "Email is required" }
      }
    },
    isFreelancer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isEmployor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10).then(hashedPw => {
      user.password = hashedPw;
    });
  });
  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Profile);
    User.hasMany(models.Job);
    User.hasOne(models.EmployerProfile);
  };
  return User;
};