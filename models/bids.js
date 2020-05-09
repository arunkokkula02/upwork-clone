'use strict';
//const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {

    freelancerId: {
      type: DataTypes.INTEGER,
      references :{
        model:'Users',
        key:'id'
      },
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
    }
      ,
      jobsId: {
        type: DataTypes.INTEGER,
        references :{
          model:'Jobs',
          key:'id'
        },
      onDelete:"CASCADE",
      onUpdate:"CASCADE"
      }
      ,
      status: {
     type: DataTypes.BOOLEAN,
     defaultValue:false
      }
  }, {});
  
  Bid.associate = function (models) {
    // associations can be defined here
    Bid.belongsTo(models.User,{foreignKey: 'freelancerId'});
    Bid.belongsTo(models.Job,{foreignKey: 'jobsId'});

    
  };
  return Bid;
};