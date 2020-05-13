const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const port = process.env.PORT || 3000

const userRoute = require('./routes/user')
const shopRoute = require('./routes/shop')

// create a new Express app server object
const app = express()

const corsOptions = {
  origin: 'http://localhost:8080'
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use(userRoute)
app.use(shopRoute)

app
  .listen(port, () => {
    console.log(`Server is up on port ${port}`)
  })
  .on('error', err => {
    console.log(err)
  })
