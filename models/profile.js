'use strict';
module.exports = (DataTypes, DataTypes) => {
  const Profile = DataTypes.define('Profile', {
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
    }
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsToMany(models.Job,{through:'Bids',foreignKey: 'freelancerId'})
  };
  return Profile;
};