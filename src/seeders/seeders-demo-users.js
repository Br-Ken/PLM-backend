'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Ken',
      lastName: 'Nguyen',
      address: 'China',
      gender: 0,
      admin: 0,
      branchNumber: 0,

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
