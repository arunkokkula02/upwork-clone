'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    phoneno: DataTypes.STRING,
    avatar: DataTypes.STRING,
    avatar: {
      type: DataTypes.STRING,
      validate:{
        isUrl:true
      }
    },
    title: {
      type:DataTypes.STRING
    },
    bio : {
      type:DataTypes.TEXT
    },
    skills:{
    type:DataTypes.STRING
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
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsToMany(models.Job,{through:'Bids',foreignKey: 'freelancerId'})
    Profile.belongsTo(models.User)
  };
  return Profile;
};