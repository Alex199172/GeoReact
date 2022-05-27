const express = require('express')
const authRouter = require('./src/routes/authRouter')
const config = require('./knexfile');
const knex = require('knex')(config.development)



const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
app.use(express.static(__dirname + '/view'))


const start = () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}


start()
