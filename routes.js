const routes = require('next-routes')();

routes
  .add('/games/new', '/games/new')
  .add('/games/:address', '/games/show')
  .add('/games/:address/players', '/games/players/index');

  module.exports = routes;
