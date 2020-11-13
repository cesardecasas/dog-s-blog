const { builtinModules } = require('module')
const {Schema, model} =require('mongoose')

const User = new Schema(
    {
        profile:{type:String, default:'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png'},
        name:{type:String, required:true},
        email:{type:String, required:true, unique:true, index:true},
        password_digest:{type:String, required:true}
    },{timestamps:true}
)

module.exports = model('users', User)