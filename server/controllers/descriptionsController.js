const descriptionsModel = require('../db/models/descriptionsModel')

exports.all = (req, res) => {
  const args = JSON.stringify({
    groupId: req.params.id
  })
  descriptionsModel.all(args, (err, descriptions) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.header('Access-Control-Allow-Origin', '*')
    res.send(descriptions)
  })
}