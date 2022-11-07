const salesService = require('../services/sales.service');

const registerSalesController = (router) => {
  router.post('/sales', (req, res) => {
    salesService.create(req.body).then((sale) => res.json(sale));
  });

  router.get('/sales/:id', (req, res) => {
    salesService.findOne(req.params.id).then((sale) => res.json(sale));
  });

  router.patch('/sales/:id', (req, res) => {
    salesService.update(req.params.id, req.body).then((sale) => res.json(sale));
  });

  router.delete('/sales/:id', (req, res) => {
    salesService.remove(req.params.id).then(() => res.status(204).send());
  });
};

module.exports = {
  registerSalesController,
};
