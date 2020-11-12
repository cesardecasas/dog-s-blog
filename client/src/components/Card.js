import React from 'react'

const Card = (props)=>{
    
        return(
            <div className='postBody'>
        <div className="card post" style={{width: 400}}>
            <div className='row user'>
            <img src='...'  style={{width: 30}} className='img-fluid' alt="profile pic"/>
            <h6>{props.name}</h6>
            </div>
            
            <img src={props.src} className="card-img-top img-thumbnail" alt="ike"/>
            <div className="card-body">
            <p className="card-text">{props.description}</p>
            <p>{props.likes}</p>
            </div>
            </div>
            <br/>
        </div>
        )
    
}

export default Card