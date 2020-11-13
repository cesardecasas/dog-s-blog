import React, { Component } from 'react'
import '../styles/Profile.css'

class MyPet extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){

    }

    render(){
        return (
            <div className='template'>
                <main className='content'>
                  <img  
                    src='https://vignette.wikia.nocookie.net/character-stats-and-profiles/images/7/7a/Ike_(Path_Of_Radiance).png/revision/latest?cb=20200612075834' 
                    alt='profile pic'
                    className='img-thumbnail'
                  />
                  <h4 className='profilepic'>name</h4>
              </main>
            </div>
        )
    }
}

export default MyPet