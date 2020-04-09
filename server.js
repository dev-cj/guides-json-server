const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const config = require('config')
const app = express()

const port = process.env.PORT || 5000

// for dev only
app.use(cors())
const corsOpt = {
  origin: process.env.CORS_ALLOW_ORIGIN || '*', // this work well to configure origin url in the server
  methods: ['GET'], // to works well with web app, OPTIONS is required
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'x-auth-token',
    'Access-Control-Allow-Credentials',
  ], // allow json and token in the headers
}
// app.use(cors(corsOpt))

//body-parser middleware
app.use(express.json())

// DB config
const db = config.get('MongoURI')

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((response) => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err))

//Use Routes
app.use('/', require('./routes/guide_api'))

// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//   // Set Static folder
//   app.use(express.static('client/build'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }

app.listen(port, () => console.log(`Server started on port ${port}`))
