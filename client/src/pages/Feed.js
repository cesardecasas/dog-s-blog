import React, { Component } from 'react'
import '../styles/Feed.css'
import Card from '../components/Card'

class Feed extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className='feed'>
                <main>
                    <h1 className='post'>Feed</h1>
                    <Card/>
                    <Card/>
                </main>
            </div>
        )
    }
}

export default Feed