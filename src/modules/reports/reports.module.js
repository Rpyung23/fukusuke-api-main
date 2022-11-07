const createModule = require('../../libs/module/module');
const {
  registerReportsController,
} = require('./controllers/reports.controller');

const reportsModule = createModule();

registerReportsController(reportsModule);

module.exports = { reportsModule };
