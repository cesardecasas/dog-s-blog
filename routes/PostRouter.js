const Router = require('express').Router()
const PostController = require('../controllers/PostController')

Router.get('/', PostController.GetPosts)
Router.get('/:post_id', PostController.GetPostById)
Router.post('/:user_id', PostController.CreatePost)
Router.put('/:post_id', PostController.UpdatePost)
Router.delete('/:post_id', PostController.DeletePost)

module.exports = Router