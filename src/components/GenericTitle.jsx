import React from 'react'
import './GenericTitle.css'
const GenericTitle = ({children}) => {
    return(
        <h1 className='genericTitle'> {children} </h1>
    )
}

export default GenericTitle