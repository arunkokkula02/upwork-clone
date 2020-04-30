'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmployerProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phone_no: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      security_no: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING,
        validate:{
          isUrl:true
        }
      },
      payment_verified: {
        type: Sequelize.BOOLEAN,
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
      userId: {
        type:Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EmployerProfiles');
  }
};