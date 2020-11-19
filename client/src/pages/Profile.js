/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../styles/Profile.css'
import {__GetProfile} from '../services/UserServices'
import {__GetPostsById, __UploadPost, __UpdateLike, __DeletePost, __UpdatePost} from '../services/PostsServices'
import {__CreateComment, __GetComments} from '../services/CommentServices'
import Card from '../components/Card'
import TextInput from '../components/TextInput'
import Player from '../components/Player'
import '../styles/Feed.css'
import Comment from '../components/Comment'
import Uploader from '../components/Uploader'



export default class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            profileinf:[],
            posts:[],
            comments:[],
            currentPage:1,
            image_url:'',
            video_url:'',
            description:'',
            comment:'',
            email:'',
            profile:'',
            name:''
        }
    }

    componentDidMount(){
        this.getProfile()
        this.getPosts()
        
    }

    
    getProfile = async ()=>{
        try {
            
            const id = this.props.currentUser._id
            
            const profileData = await __GetProfile(id)
            this.setState({profileinf:profileData})
            
        } catch (error) {
            console.log(error)
        }
    }
    
    setEmail = async() =>{
      await  this.setState({email:this.state.profileinf.email})
    }

        getPosts = async () => {
            try {
                const posts = await __GetPostsById(this.props.currentUser._id)
                posts.posts.reverse()
                this.setState({ posts: posts.posts })
            } catch (error) {
                console.log(error)
            }
        }
    
        handleChange = ({ target }) => {
            this.setState({ [target.name]: target.value })
          }
    
        handleSubmit = async (e) => {
            e.preventDefault()
            try {
              await __UploadPost(this.state, this.props.currentUser._id)
              this.clearPosts()
              this.clearState()
            } catch (error) {
              console.log(error)
            }
        }
    
        clearPosts =()=>{
            this.setState({posts:[]})
            this.getPosts()
        }
    
        handleLike = async (e)=>{
                
                const index= e.target.name
                if(this.state.posts[index].__v === 0){
                    let like = this.state.posts[index].likes + 1
                    const id= e.target.id
                    await __UpdateLike(id,like)
                    this.clearPosts()
                   
                    
                }
        }

        DeletePost = async (e)=>{
            const id =e.target.name
            await __DeletePost(id)
            this.clearPosts()
            console.log('hello')
        }

        clearState=()=>{
            this.setState({description:'',image_url:'',video_url:''})
        }

        handleUpdate = async (e)=>{
            e.preventDefault()
            const id = e.target[3].name
            try {
                await __UpdatePost(this.state, id)
                this.clearPosts()
                this.clearState()
            } catch (error) {
                throw error
            }
        }

        handleCreateComment = async(e)=>{
            e.preventDefault()
            const id = e.target[1].name
            try {
                await __CreateComment(this.state,this.props.currentUser._id,id )
                console.log('done')
                this.clearPosts()
            } catch (error) {
                throw error
            }
        }

        GetComments = async(e)=>{
            const id = e.target.id
                this.setState({comments:[]})
                const comments = await __GetComments(id)
                this.setState({comments: comments})
            
        }
        removeComments = () =>{
            this.setState({comments:[]})
        }


    render(){
        const {profileinf} = this.state
        return(
            <div>
                <div className='template'>
                <main className='content'>
                    <img  
                        src={profileinf.profile} 
                        alt='profile pic'
                        className='img-thumbnail'
                    />
                    <h5 className='profilepic'>{profileinf.name}</h5>
                    <div className='btn-group update'>
                                                <input 
                                                    className="btn btn-primary btn-sm " 
                                                    data-toggle="dropdown" 
                                                    aria-haspopup="true" 
                                                    aria-expanded="false" 
                                                    id={profileinf._id} 
                                                    type="button" 
                                                    value="Update Profile"
                                                />
                                                <div className='dropdown-menu'>
                                                    <form className='px-4 py-3'  >
                                                            <div className='form-group'>
                                                                <label htmlFor='update'>Update Profile Picturet</label>
                                                                <div name={profileinf._id}>
                                                                    <Uploader {...this.props} currentUser={this.props.currentUser}/>
                                                                </div>
                                                                <div className='form-group'>
                                                                    <button name={profileinf._id} className="btn btn-primary">Update!</button>
                                                                </div>
                                                            </div>
                                                    </form>
                                                </div>
                                            </div>
                </main>
            </div>
            <div className='feed'>
                <main>
                    <br/>
                    <form onSubmit={this.handleSubmit} className='flex-col box'>
                        <p>Create Post</p>
                        <TextInput 
                            placeholder='Image URL(optional)'
                            name='image_url'
                            value={this.state.image_url}
                            onChange={this.handleChange}
                        />
                        <TextInput
                            placeholder='Video URL(optional)'
                            name='video_url'
                            value={this.state.video_url}
                            onChange={this.handleChange}
                        />
                        <TextInput 
                            placeholder='Description'
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                        <button className='btn btn-primary btn-sm'>Create</button>
                    </form>
                    <br/>
                    {this.state.posts.map((post, index)=>(
                        <Card key={index}>
                                    <div className="card post" style={{width: 475}}>
                                        <div className='row user'>
                                            <img src={post.user_id.profile} alt='profile pic' style={{width: 25}}/>
                                            <h6 className='userName'>{post.user_id.name}</h6>
                                            <div className='hello'>
                                                <div className='btn-group'>
                                                    <button  
                                                        type="button" 
                                                        className="btn btn-primary btn-sm dropdown-toggle hello" 
                                                        data-toggle="dropdown" 
                                                        aria-haspopup="true" 
                                                        aria-expanded="false"
                                                    />
                                                    <div className='dropdown-menu'>
                                                        <a className='dropdown-item' onClick={this.DeletePost} name={post._id}>Delete</a>
                                                        <form className='px-4 py-3' onSubmit={this.handleUpdate} >
                                                            <div className='form-group'>
                                                                <label htmlFor='update'>Update Post</label>
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control" 
                                                                    id='image' 
                                                                    placeholder="Image URL" 
                                                                    name='image_url' 
                                                                    value={this.state.image_url} 
                                                                    onChange={this.handleChange} 
                                                                    style={{width: 200}}
                                                                />
                                                            </div>
                                                            <div className='form-group'>
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control" 
                                                                    id='image' 
                                                                    placeholder="Video URL" 
                                                                    style={{width: 200}}
                                                                    value={this.state.video_url}
                                                                    name='video_url'
                                                                    onChange={this.handleChange}
                                                                />
                                                            </div>
                                                            <div className='form-group'>
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control" 
                                                                    id='image' 
                                                                    placeholder="Description" 
                                                                    style={{width: 200}}
                                                                    value={this.state.description}
                                                                    name='description'
                                                                    onChange={this.handleChange}
                                                                />
                                                            </div>
                                                            <button name={post._id} className="btn btn-primary">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {post.video_url ? <Player src={post.video_url}/> : <img src={post.image_url} className="card-img-top img-thumbnail" alt="ike"/> }
                                        
                                        <div className="card-body">
                                            <p className="card-text">{post.description}</p>
                                            <p className='like'>{post.likes} liked this post</p>
                                            {post.comments[0] ? <div className='btn-group comments'>
                                                <input 
                                                    onClick={this.GetComments} 
                                                    onDoubleClick={this.removeComments} 
                                                    className="btn btn-sm s" data-toggle="dropdown" 
                                                    aria-haspopup="true" 
                                                    aria-expanded="false" 
                                                    id={post._id} type="button" 
                                                    value="view comments"
                                                />
                                                <div className='drop-down-menu'>
                                                    <a className='dropdown-item'>
                                                    {this.state.comments.map(comment =>(
                                                        
                                                        <Comment key={comment._id} comment={comment.comment} user={comment.user_id.name}/>
                                                    ))}
                                                    </a>
                                                </div>
                                            </div> : <p></p>}
                                            
                                            <input 
                                                className="btn btn-primary btn-sm h" 
                                                id={post._id} 
                                                name={index} 
                                                onClick={this.handleLike} 
                                                type="button" 
                                                value="like"
                                            />
                                            <div className='btn-group s'>
                                                <input 
                                                    className="btn btn-primary btn-sm s" 
                                                    data-toggle="dropdown" 
                                                    aria-haspopup="true" 
                                                    aria-expanded="false" 
                                                    id={post._id} 
                                                    type="button" 
                                                    value="comment"
                                                />
                                                <div className='dropdown-menu'>
                                                    <form className='px-4 py-3' onSubmit={this.handleCreateComment} >
                                                            <div className='form-group'>
                                                                <label htmlFor='update'>Write Comment</label>
                                                                <div className='form-group'>
                                                                    <input 
                                                                        type="text" 
                                                                        className="form-control" 
                                                                        placeholder="Comment" 
                                                                        name='comment' 
                                                                        value={this.state.comment} 
                                                                        onChange={this.handleChange} 
                                                                        style={{width: 200}}
                                                                    />
                                                                </div>
                                                                <button name={post._id} className="btn btn-primary">Create!</button>
                                                            </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                        </Card>
                    ))}
                </main>
            </div>
        </div>
        )
    }
}