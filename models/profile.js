'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    phoneno: DataTypes.STRING,
    avatar: DataTypes.STRING,
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsToMany(models.Job,{through:'Bids',foreignKey: 'freelancerId'})
  };
  return Profile;
};