const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')

Router.use('/users', UserRouter)
Router.use('/post', PostRouter)

module.exports = Router