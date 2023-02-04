import React from 'react'
import './SecondHeader.css'
import image from '../../images/s.png'


const SecondHeader = () => {
    return(
        <div className='SecondHeader--Main'>
            <div className='left--arrows'><img className='left--arrow' src={image}></img></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default SecondHeader
