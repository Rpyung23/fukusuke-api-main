const createModule = require('../../libs/module/module');
const {
  registerUsersController,
} = require('./controllers/users.controller');

const usersModule = createModule();

registerUsersController(usersModule);

module.exports = usersModule;