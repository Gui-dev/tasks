'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' }
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      doned: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      estimated: {
        type: Sequelize.DATE
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('tasks')

  }
}




