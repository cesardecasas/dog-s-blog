const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const PostRouter = require('./PostRouter')
const CommentRouter = require('./CommentRouter')
const PetRouter = require('./PetRouter')

Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/comment', CommentRouter)
Router.use('/pet', PetRouter)

module.exports = Router