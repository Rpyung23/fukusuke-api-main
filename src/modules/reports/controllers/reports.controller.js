const reportsService = require('../services/reports.service');

const registerReportsController = (router) => {
  router.post('/reports',(req, res) => {
    reportsService.create(req.body).then((report) => res.json(report));
  });

  router.get('/reports/:id', (req, res) => {
    reportsService.findOne(req.params.id).then((report) => res.json(report));
  });

  router.patch('/reports/:id', (req, res) => {
    reportsService
      .update(req.params.id, req.body)
      .then((report) => res.json(report));
  });

  router.delete('/reports/:id', (req, res) => {
    reportsService.remove(req.params.id).then(() => res.status(204).send());
  });
};

module.exports = {
  registerReportsController,
};
