const app = require('express')()

// Passing application to process router
require('./router/routes')(app)

app.listen(3000, () => console.log('Server running...'))