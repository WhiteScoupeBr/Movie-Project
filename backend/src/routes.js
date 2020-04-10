const express = require('express');
const connection = require('./database/connection');
const MovieController = require('./controllers/MovieController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.get('/movies', MovieController.index);
routes.post('/movies',MovieController.create);
routes.delete('/movies/:id',MovieController.delete);
routes.put('/movies/:id',MovieController.update);

routes.post('/sessions',SessionController.create);

routes.post('/register',UserController.create);
routes.get('/register',UserController.index);
routes.delete('/register/:id',UserController.delete);


module.exports = routes;