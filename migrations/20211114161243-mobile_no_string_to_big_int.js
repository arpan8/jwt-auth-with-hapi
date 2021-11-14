'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'mobile_number', {
      type: Sequelize.BIGINT(11)
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'mobile_number', {
    })
  }
};
