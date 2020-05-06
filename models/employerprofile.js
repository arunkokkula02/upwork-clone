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
    },
    userId: {
      type:DataTypes.INTEGER,
      references :{
        model:'Users',
        key:'id'
      },
      onDelete:"SET NULL",
      onUpdate:"CASCADE"
  }
  }, {});
  EmployerProfile.associate = function(models) {
    // associations can be defined here
  };
  return EmployerProfile;
};