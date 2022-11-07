const createModule  = require('../../libs/module/module');
const {
  registerClientsController,
} = require('./controllers/clients.controller');

const clientsModule = createModule();

registerClientsController(clientsModule);

module.exports = clientsModule;
