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
    }
  },
  { timestamps: true }
)

module.exports=model('comments', Comment)