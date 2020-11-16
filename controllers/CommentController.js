const Comment =require('../db/models/Comment')
const Post =require('../db/models/Post')

const CreateComment = async (req, res) => {
    try {
      const comment = new Comment({ ...req.body, user_id: req.params.user_id, post_id:req.params.post_id })
      comment.save()
      await Post.update(
        { _id: req.params.post_id },
        {
          $push: {
            comments: comment
          }
        }
      )
      res.send(comment)
    } catch (error) {
      throw error
    }
  }
  
  const RemoveComment = async (req, res) => {
    try{
      await Comment.deleteOne({ _id: req.params.comment_id })
      await Post.findOneAndUpdate(
        {_id: req.params.post_id},
        { $pull: { comments: req.params.comment_id  } },
        { upsert: true, new: true },
        (err, updatedPost) => {
          if(err){console.log(err)}
          res.send(updatedPost)
        }
        )
    }catch(err){
      throw err
    }
  }
  
  const UpdateComment = async (req, res) => {
    try {
      await Comment.findByIdAndUpdate(
        req.params.comment_id,
        { ...req.body },
        { upsert: true, new: true },
        (err, d) => (err ? err : res.send(d))
      )
    } catch (error) {
      throw error
    }
  }

  const GetCommentsById = async (req,res) =>{
    try {
      const comments = await Comment.find({_id:req.params.id})
      res.send(comments)
    } catch (error) {
      throw error 
    }
  }
  
  module.exports = {
    CreateComment,
    RemoveComment,
    UpdateComment
  }
  