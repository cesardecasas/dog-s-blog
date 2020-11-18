require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_URI =process.env.MONGO_URI

const connection = mongoose.connect(process.env.NODE_ENV === 'production' ? MONGO_URI : 'mongodb://localhost:27017/petblog', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
mongoose.set('debug', true)

module.exports = connection

