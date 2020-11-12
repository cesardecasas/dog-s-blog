import React, { Component } from 'react'

class Card extends Component{
    render(){
        return(
        <div className="card" style={{width: 180}}>
            <div className='row user'>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ea6a3774006559.5c1cfb8de73c5.jpg"  style={{width: 30}} className='img-fluid' alt="profile pic"/>
            <h6>Cesar De Casas</h6>
            </div>
            
            <img src="https://genealogyvsthracia776.files.wordpress.com/2014/06/ike-smash.jpg" className="card-img-top img-thumbnail" alt="ike"/>
            <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>

        )
    }
}

export default Card