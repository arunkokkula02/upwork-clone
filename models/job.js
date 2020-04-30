'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    budget: DataTypes.FLOAT,
    deadline: {
      type: DataTypes.DATE
    }
  }, {});
  Job.associate = function(models) {
    // associations can be
  Job.belongsToMany(models.Profile,{through:'Bids',foreignKey: 'jobsId'});
  };
  return Job;
};