const jsonServer = require('json-server')
const server = jsonServer.create()
const db = require('../guides.json')
const cors = require('cors')

server.get('/guides/:id/', function (req, res) {
  const id = req.params.id
  const guide = db[id]

  if (guide) {
    res.header('Access-Control-Allow-Origin', '*').jsonp(guide)
  } else {
    res.sendStatus(404)
  }
})

server.use(cors())
server.listen(3005, function () {
  console.log('JSON Server is running on port 3005')
})
