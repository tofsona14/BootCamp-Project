import React from 'react'
import './ThirdFirst.css'
import image from '../../images/s.png'
import { Link } from 'react-router-dom'


const ThirdFirst = () => {
    return(
        <div className='SecondHeader--Main'>
            <Link to="/"><div className='left--arrows'><img className='left--arrow' src={image}></img></div></Link>
            
        </div>
    )
}

export default ThirdFirst