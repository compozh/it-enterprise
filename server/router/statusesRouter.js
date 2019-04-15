const statuses = require('../controllers/statusesController')

module.exports = app => {
  app.get('/api/statuses', statuses.all)
}