const clientsService = require('../services/clients.service');

const registerClientsController = (router) => {
  router.post('/clients', (req, res) => {
    clientsService.create(req.body).then((client) => res.json(client));
  });

  router.get('/clients/:id', (req, res) => {
    clientsService.findOne(req.params.id).then((client) => res.json(client));
  });

  router.patch('/clients/:id', (req, res) => {
    clientsService
      .update(req.params.id, req.body)
      .then((client) => res.json(client));
  });

  router.delete('/clients/:id', (req, res) => {
    clientsService.remove(req.params.id).then(() => res.status(204).send());
  });
};

module.exports = {
  registerClientsController,
};
