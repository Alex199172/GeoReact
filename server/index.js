const express = require('express')
const authRouter = require('./src/routes/authRouter')
const dataRouter = require('./src/routes/dataRouter')
const mapRouter = require('./src/routes/mapRouter')
const config = require('./knexfile')
const knex = require('knex')(config.development)
const app = express()



const PORT = process.env.PORT || 5000



app.use(express.json())
app.use("/auth", authRouter)
app.use("/data", dataRouter)
app.use("/map", mapRouter)


const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (event) {
    console.log(event)
  }
}


start()
