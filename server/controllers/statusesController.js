const statusesModel = require('../db/models/statusesModel')

exports.all = (req, res) => {
  statusesModel.all((err, statuses) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.send(statuses)
  })
}