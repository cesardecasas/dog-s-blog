const {Schema, model} =require('mongoose')

const Pet = new Schema(
    {
        pet_pic:{type:String, default:'https://image.freepik.com/free-vector/dog-cat-pet-care-outline-line-art-monoline-logo-vector-icon_7688-520.jpg'},
        name:{type:String, required:true},
        type:{type:String, required:true, unique:true, index:true},
        breed:{type:String, required:true},
        user_id:{type: Schema.Types.ObjectId, ref:'users'}
    },{timestamps:true}
)

module.exports = model('pets', Pet)