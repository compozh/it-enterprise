const groups = require('../controllers/groupsController')

module.exports = app => {
  app.get('/api/groups', groups.all)
}