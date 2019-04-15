const groupsModel = require('../db/models/groupsModel')

exports.all = (req, res) => {
  groupsModel.all((err, groups) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.header('Access-Control-Allow-Origin', '*')
    res.send(groups)
  })
}