import React, { Component } from 'react'
import '../styles/AboutUs.css'
import SC from '../Imgs/SC.png'

class AboutUs extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return (
        <div className='about-us'>
            <h3 className='title'>Pet owners favorite website</h3>
            <p className='description'>Post everything about you pet's daily life. Share those funny, scary or lovely moments you share with your pet. Pets, for most of us, are more than just animals, they are our best friends, always there for us, so take a moment and share to the entire world what your pet's life is. We also provide resources that might help you improve the relationship between your pet and you.</p>
            <img src={SC} alt="Screenshot" className='sc img-thumbnail'/> 

            <h5 className='thank'>Thanks for choosing us!</h5>
        </div>)
    }
}

export default AboutUs