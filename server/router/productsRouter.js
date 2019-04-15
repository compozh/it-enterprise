const products = require('../controllers/productsController')

module.exports = app => {
  app.get('/api/products', products.all)
}