const {Schema, model} =require('mongoose')

const Post =  new Schema(
    {
      title: {
        type: String,
        required: true
      },
      popularity_rating: {
        type: Number,
        default: 0,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image_url: {
        type: String
      },
      location: {
        type: String
      },
      user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: 'comments'
        }
      ]
    },
    { timestamps: true }
  )
  

module.exports = model('posts', Post)