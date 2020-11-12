    import React, { Component } from 'react'
    import '../styles/Feed.css'
    import Card from '../components/Card'
    import {__GetPosts, __UploadPost} from '../services/PostsServices'
    import TextInput from '../components/TextInput'
    import '../styles/CreatePost.css'

    class Feed extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
            currentPage:1,
            image_url:'',
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
                            placeholder='Description'
                            name='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                        <button className='btn btn-primary btn-sm'>Create</button>
                    </form>
                    <br/>
                    {this.state.posts.map((post)=>(
                        <Card key={post._id}>
                                    <div className="card post" style={{width: 400}}>
                                        <div className='row user'>
                                            <h6>{post.user_id.name}</h6>
                                        </div>
                                        <img src={post.image_url} className="card-img-top img-thumbnail" alt="ike"/>
                                        <div className="card-body">
                                            <p className="card-text">{post.description}</p>
                                            <p>{post.likes}</p>
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