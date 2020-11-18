const Pet = require('../db/models/Pet')
const User = require('../db/models/User')

const GetPets = async(req,res)=>{
    try {
        const pets = await Pet.find({ user_id: req.params.user_id})
        res.send(pets)
    } catch (error) {
        throw error
    }
}

const CreatePet = async(req,res)=>{
    try {
        const pet = await new Pet({ ...req.body, user_id: req.params.user_id })
        pet.save()
        res.send(pet)
    } catch (error) {
        throw error 
    }
} 



module.exports ={
    GetPets,
    CreatePet
}