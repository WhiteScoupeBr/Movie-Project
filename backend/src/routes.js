const express = require('express');
const routes = express.Router();

const MovieController = require('./controllers/MovieController')

/*routes.get('/movies',MovieController.index);
routes.get('/movies/:id',MovieController.show);
routes.put('/movies/:id',MovieController.update);
routes.delete('/movies/:id',MovieController.destroy);
routes.post('/movies',MovieController.store);
*/

module.exports = routes;