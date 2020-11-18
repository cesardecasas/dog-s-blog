const Router = require('express').Router()
const PetController = require('../controllers/PetController')

Router.get('/:user_id', PetController.GetPets )
Router.post('/:user_id', PetController.CreatePet)

module.exports = Router