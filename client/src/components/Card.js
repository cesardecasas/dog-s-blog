import React from 'react'

const Card = ({children, ...rest})=>{
    
        return(
            <div className='postBody' {...rest}>
                {children}
        </div>
        )
    
}

export default Card