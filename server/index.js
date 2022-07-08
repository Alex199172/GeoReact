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
const rooms = new Map()

app.get('/rooms', (req,res) => {
  res.json(rooms)
})

app.post('/rooms', (req,res) => {
  res.send
  rooms.set(
    roomId,
    newMap([
      ['users', new Map()],
      ['messages', []],
    ])
  )
    res.send()
})

io.on('connection', (socket) => {
  console.log('socket connected', socket.id)
})


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
