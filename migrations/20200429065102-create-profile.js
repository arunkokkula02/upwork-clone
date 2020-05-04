'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phoneno: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING,
        validate:{
          isUrl:true
        }
      },
      title: {
        type:Sequelize.STRING
      },
      bio : {
        type:Sequelize.TEXT
      },
      skills:{
      type:Sequelize.STRING
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
        type:Sequelize.INTEGER,
        references :{
          model:'Users',
          key:'id'
        },
        onDelete:"SET NULL",
        onUpdate:"CASCADE"
    }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profiles');
  }
};