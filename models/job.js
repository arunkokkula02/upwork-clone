'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    budget: DataTypes.FLOAT,
    deadline: {
      type: DataTypes.DATE
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
  Job.associate = function(models) {
    // associations can be
  Job.belongsToMany(models.Profile,{through:'Bids',foreignKey: 'jobsId'});
  Job.belongsTo(models.User)
  };
  return Job;
};