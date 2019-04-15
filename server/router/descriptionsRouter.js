const descriptions = require('../controllers/descriptionsController')

module.exports = app => {
  app.get('/api/description/:id', descriptions.all)
}