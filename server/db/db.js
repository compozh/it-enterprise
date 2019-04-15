const axios = require('axios')

exports.getData = (requestParams, callback) => {
  axios
    .post('https://m.it.ua/ws/WebService.asmx/ExecuteEx', requestParams)
    .then(response => callback(null, response.data))
    .catch(error => callback(error))
}