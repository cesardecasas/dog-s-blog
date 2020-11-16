    import React, { Component } from 'react'
    import '../styles/Feed.css'
    import Card from '../components/Card'
    import {__GetPosts, __UploadPost, __UpdateLike} from '../services/PostsServices'
    import TextInput from '../components/TextInput'
    import '../styles/CreatePost.css'
    import Player from '../components/Player'
    

    class Feed extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
            currentPage:1,
            image_url:'',
            video_url:'',
            description:''
        }
    }

    componentDidMount(){
        this.getPosts()
    }

    getPosts = async () => {
        try {
            const posts = await __GetPosts(this.state.currentPage)
            this.setState({ posts: [...this.state.posts, ...posts] })
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
          this.props.history.push('/profile')
          
        } catch (error) {
          console.log(error)
        }
    }

    clearPosts = async ()=>{
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

    render(){
        return (
            <div className='feed'>
                <main>
                    <br/>
                    <form onSubmit={this.handleSubmit} className='flex-col box'>
                        <p>Create Post</p>
                        <TextInput 
                            placeholder='Image URL'
                            name='image_url'
                            value={this.state.image_url}
                            onChange={this.handleChange}
                        />
                        <TextInput
                            placeholder='Video URL'
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
                                        </div>
                                        {post.video_url ? <Player src={post.video_url}/> : <img src={post.image_url} className="card-img-top img-thumbnail" alt="ike"/> }
                                        <div className="card-body">
                                            <p className="card-text">{post.description}</p>
                                            <p className='like'>{post.likes} liked this post</p>
                                            <input className="btn btn-primary btn-sm h" id={post._id} name={index} onClick={this.handleLike} type="button" value="like"/>
                                            <input className="btn btn-primary btn-sm s" id={post._id} type="button" value="comment"/>
                                        </div>
                                    </div>
                                    <br/>
                        </Card>
                    ))}
                </main>
            </div>
        )
    }
    }

    export default Feed