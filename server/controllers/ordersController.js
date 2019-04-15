const ordersModel = require('../db/models/ordersModel')

exports.all = (req, res) => {
  ordersModel.all((err, orders) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.send(orders)
  })
}