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
                    <Card/>
                    <Card/>
                </main>
            </div>
        )
    }
}

export default Feed