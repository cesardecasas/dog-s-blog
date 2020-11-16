const { Schema, model } = require('mongoose')

const Comment  = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    post_id:{
      type: Schema.Types.ObjectId,
      ref:'posts'
    }
  },
  { timestamps: true }
)

module.exports=model('comments', Comment)