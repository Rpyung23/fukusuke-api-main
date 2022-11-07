const usersService = require('../services/orders.service');

const registerOrdersController = (router) => {
  router.post('/orders', (req, res) => {
    ordersService.create(req.body).then((order) => res.json(order));
  });

  router.get('/orders/:id', (req, res) => {
    ordersService.findOne(req.params.id).then((order) => res.json(order));
  });

  router.patch('/orders/:id', (req, res) => {
    ordersService
      .update(req.params.id, req.body)
      .then((order) => res.json(order));
  });

  router.delete('/orders/:id', (req, res) => {
    ordersService.remove(req.params.id).then(() => res.status(204).send());
  });
};

module.exports = {
  registerOrdersController,
};
