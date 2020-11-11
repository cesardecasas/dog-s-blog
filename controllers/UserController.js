const User  = require('../db/models/User')
const jwt = require('jsonwebtoken')
const {
  checkPassword,
  generatePassword
} = require('../middleware/PasswordHandler')

const CreateUser = async (req, res) => {
  try {
    const body = req.body
    const password_digest = await generatePassword(body.password)
    const user = new User({
      name: body.name,
      email: body.email,
      password_digest
    })
    user.save()
    res.send(user)
  } catch (error) {
    throw error
  }
}

const Find = async(req,res)=>{
  const users = await User.find()
  res.send(users)
}

const SignInUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (
      user &&
      (await checkPassword(req.body.password, user.password_digest))
    ) {
      const payload = {
        _id: user._id,
        name: user.name
      }
      res.locals.payload = payload
      return next()
    }
    res.status(401).send({ msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const RefreshSession = (req, res) => {
  try {
    const token = res.locals.token
    res.send({ user: jwt.decode(token), token: res.locals.token })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateUser,
  SignInUser,
  RefreshSession,
  Find
}
