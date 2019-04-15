const orders = require('../controllers/ordersController')

module.exports = app => {
  app.get('/api/orders', orders.all)
}