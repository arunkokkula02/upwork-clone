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
  Job.belongsToMany(models.User,{through:'Bids',foreignKey: 'jobsId',as: 'jobbidders'});
  Job.belongsTo(models.User)
  };
  return Job;
};