'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique:true,
     },
      email: {
        type: DataTypes.STRING,
        unique:true,
        validate:{
          isEmail:true
        }
      },
      isFreelancer: {
        type:DataTypes.BOOLEAN,
        defaultValue:false
      },
      isEmployor: {
        type:DataTypes.BOOLEAN,
        defaultValue:false
      },
      isAdmin: {
        type:DataTypes.BOOLEAN,
        defaultValue:false
      }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Profile);
    User.hasMany(models.Job);
    User.hasOne(models.EmployerProfile);
  };
  return User;
};