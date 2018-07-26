const routes = require('next-routes')

module.exports = routes()
  .add('login')
  .add('forgot-password')
  .add('reset-password')
  .add('dashboard', '/:id/dashboard')
