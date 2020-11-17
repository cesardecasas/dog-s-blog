import { PromiseProvider } from 'mongoose'
import React from 'react'

const Comment = (props) =>{
    return (
        <div className='comment dropdown-item'>
            <h6>{props.user}</h6>
                <p>{props.comment}</p>
        </div>
    )
}

export default Comment