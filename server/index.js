const express = require('express')
const authRouter = require('./src/routes/authRouter')
const dataRouter = require('./src/routes/dataRouter')
const mapRouter = require('./src/routes/mapRouter')
const config = require('./knexfile')
const knex = require('knex')(config.development)
const app = express()
const http = require('http')
const server = http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server)




io.on('connection', (socket) => {
  console.log('socket connected', socket.id)
  io.on('message', function (message) {
      message = JSON.parse(message)
      switch (message.event) {
          case 'message':
              broadcastMessage(message)
              break;
          case 'connection':
              broadcastMessage(message)
              break;
      }
  })
})


function broadcastMessage(message, id) {
    wss.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}


const PORT = process.env.PORT || 5000



app.use(express.json())
app.use("/auth", authRouter)
app.use("/data", dataRouter)
app.use("/map", mapRouter)


const start = () => {
  try {
    server.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (event) {
    console.log(event)
  }
}


start()
