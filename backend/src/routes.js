const express = require('express');
const connection = require('./database/connection');
const MovieController = require('./controllers/MovieController');
const routes = express.Router();

routes.get('/movies', MovieController.index);
routes.post('/movies',MovieController.create);
routes.delete('/movies/:id',MovieController.delete);

module.exports = routes;