module.exports = app => {
  require('./productsRouter')(app)
  require('./groupsRouter')(app)
  require('./ordersRouter')(app)
  require('./statusesRouter')(app)
  require('./descriptionsRouter')(app)
}