const db = require('../db')

const params = {
  calcId: '_MOCK.GET_GROUP_DESCRIPTION',
  args: null,
  ticket: null
}

exports.all = (args, callback) => {
  params.args = args
  db.getData(params, (err, data) => callback(err, data))
}