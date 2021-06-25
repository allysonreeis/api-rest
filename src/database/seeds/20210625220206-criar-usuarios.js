const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users', [{
    nome: 'John Doe',
    email: 'johndoe@email.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Lucca Doe',
    email: 'luccadoe@email.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Mary Doe',
    email: 'marydoe@email.com',
    password_hash: await bcryptjs.hash('123456', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  ], {}),

  down: async () => {

  },
};
