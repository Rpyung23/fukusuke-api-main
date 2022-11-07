const usersService = require('../services/users.service');

const registerUsersController = (router) => {
  router.post('/users', (req, res) => {
    usersService.create(req.body).then((user) => res.json(user));
  });

  router.get('/users/:id', (req, res) => {
    usersService.findOne(req.params.id).then((user) => res.json(user));
  });

  router.patch('/users/:id', (req, res) => {
    usersService
      .update(req.params.id, req.body)
      .then((user) => res.json(user));
  });

  router.delete('/users/:id', (req, res) => {
    usersService.remove(req.params.id).then(() => res.status(204).send());
  });
};

module.exports = {
  registerUsersController,
};
