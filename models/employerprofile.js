'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployerProfile = sequelize.define('EmployerProfile', {
    phone_no: DataTypes.STRING,
    address: DataTypes.STRING,
    security_no: DataTypes.STRING,
    avatar: {
      type: DataTypes.STRING,
      validate:{
        isUrl:true
      }
    },
    payment_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    }
  }, {});
  EmployerProfile.associate = function(models) {
    // associations can be defined here
  };
  return EmployerProfile;
};