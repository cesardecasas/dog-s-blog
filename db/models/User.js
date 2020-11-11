const { builtinModules } = require('module')
const {Schema, model} =require('mongoose')

const User = new Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true, unique:true, index:true},
        password_digest:{type:String, required:true}
    },{timestamps:true}
)

modules.export= model('users', User)