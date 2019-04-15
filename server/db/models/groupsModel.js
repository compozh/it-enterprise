const db = require('../db')

const params = {
  calcId: '_MOCK.GET_GROUPS',
  args: null,
  ticket: null
}

exports.all = callback => db.getData(params, (err, data) => callback(err, data))