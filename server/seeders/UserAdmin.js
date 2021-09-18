'use strict';
const bcrypt = require('bcrypt')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Accounts', [{
            name: "Admin",
            email: "admin@gmail.com",
            password: bcrypt.hashSync("admin", 10),
            status_user: "Admin",
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
    }
};
