/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../styles/Profile.css'
import {__GetProfile} from '../services/UserServices'
import {__GetPostsById, __UpdateLike} from '../services/PostsServices'
import {__CreateComment, __GetComments} from '../services/CommentServices'
import Card from '../components/Card'
import Player from '../components/Player'
import '../styles/Feed.css'
import Comment from '../components/Comment'


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
    
    

        getPosts = async () => {
            try {
                const posts = await __GetPostsById(this.props.currentUser._id)
                this.setState({ posts: posts.posts })
            } catch (error) {
                console.log(error)
            }
        }
    
        handleChange = ({ target }) => {
            this.setState({ [target.name]: target.value })
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

        

        clearState=()=>{
            this.setState({description:'',image_url:'',video_url:''})
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
            if(this.state.comments === []){
            
                this.setState({comments:[]})
               
                return 
            }else{
                this.setState({comments:[]})
                const comments = await __GetComments(id)
                this.setState({comments: comments})
            }
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
                </main>
            </div>
            <div className='feed'>
                <main>
                    <br/>
                   
                    {this.state.posts.map((post, index)=>(
                        <Card key={index}>
                                    <div className="card post" style={{width: 475}}>
                                        <div className='row user'>
                                            <img src={post.user_id.profile} alt='profile pic' style={{width: 25}}/>
                                            <h6 className='userName'>{post.user_id.name}</h6>
                                        </div>
                                        {post.video_url ? <Player src={post.video_url}/> : <img src={post.image_url} className="card-img-top img-thumbnail" alt="ike"/> }
                                        
                                        <div className="card-body">
                                            <p className="card-text">{post.description}</p>
                                            <p className='like'>{post.likes} liked this post</p>
                                            {post.comments[0] ? <div className='btn-group comments'>
                                                <input onClick={this.GetComments} className="btn btn-sm s" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id={post._id} type="button" value="view comments"/>
                                                <div className='drop-down-menu'>
                                                    <a className='dropdown-item'>
                                                    {this.state.comments.map(comment =>(
                                                        
                                                        <Comment key={comment._id} comment={comment.comment} user={comment.user_id.name}/>
                                                    ))}
                                                    </a>
                                                </div>
                                            </div> : <p></p>}
                                            
                                            <input className="btn btn-primary btn-sm h" id={post._id} name={index} onClick={this.handleLike} type="button" value="like"/>
                                            <div className='btn-group s'>
                                                <input className="btn btn-primary btn-sm s" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id={post._id} type="button" value="comment"/>
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