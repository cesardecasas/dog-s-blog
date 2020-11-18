const mongoose = require('mongoose')

const connection = mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : 'mongodb://localhost:27017/petblog', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})


mongoose.set('debug', true)

module.exports = connection

