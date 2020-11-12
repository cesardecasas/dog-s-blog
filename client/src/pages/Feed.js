    import React, { Component } from 'react'
    import '../styles/Feed.css'
    import Card from '../components/Card'
    import {__GetPosts} from '../services/PostsServices'

    class Feed extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
            currentPage:1
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

    render(){
        return (
            <div className='feed'>
                <main>
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