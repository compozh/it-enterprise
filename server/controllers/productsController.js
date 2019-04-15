const productModel = require('../db/models/productsModel')

exports.all = (req, res) => {
  productModel.all((err, products) => {
    if (err) {
      console.log(err)
      return res.sendStatus(500)
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.send(products)
  })
}

