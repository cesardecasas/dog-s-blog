const Router = require('express').Router()
const UserController = require('../controllers/UserController')
const {
  getToken,
  createToken,
  verifyToken
} = require('../middleware/JwtHandler')


Router.get('/find', UserController.Find)
Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInUser, createToken)
Router.get('/:user_id', UserController.FindById)
Router.get(
  '/refresh/session',
  getToken,
  verifyToken,
  UserController.RefreshSession
)

module.exports = Router