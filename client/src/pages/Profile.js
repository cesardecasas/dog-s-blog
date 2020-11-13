import React, { Component } from 'react'
import '../styles/Profile.css'
import {__GetProfile} from '../services/UserServices'


export default class Profile extends Component{
    constructor(){
        super()
        this.state={
            profile:[]
        }
    }

    componentDidMount(){
        this.getProfile()
    }

    getProfile = async ()=>{
        try {
            
            const id = this.props.currentUser._id
            
            const profileData = await __GetProfile(id)
            this.setState({profile:profileData})
           
        } catch (error) {
            console.log(error)
        }
    }



    render(){
        const {profile} = this.state
        return(
            <div className='template'>
              <main className='content'>
                  <img  
                    src={profile.profile} 
                    alt='profile pic'
                    className='img-thumbnail'
                  />
                  <h5 className='profilepic'>{profile.name}</h5>
              </main>
          </div>
        )
    }
}