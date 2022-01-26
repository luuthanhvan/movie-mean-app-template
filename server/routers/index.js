const movieRoutes = require('./movie');

function route(app){
  app.use('/movies', movieRoutes);
}

module.exports = route;