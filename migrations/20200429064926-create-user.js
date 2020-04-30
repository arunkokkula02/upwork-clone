'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      username: {
      type: Sequelize.STRING,
      unique:true,
     },
      email: {
        type: Sequelize.STRING,
        unique:true,
        validate:{
          isEmail:true
        }
      },
      isFreelancer: {
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      isEmployor: {
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      isAdmin: {
        type:Sequelize.BOOLEAN,
        defaultValue:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};