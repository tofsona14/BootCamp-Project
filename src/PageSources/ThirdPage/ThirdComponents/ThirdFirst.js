import React from 'react'
import './ThirdFirst.css'
import image from '../../images/s.png'
import { Link } from 'react-router-dom'


const ThirdFirst = () => {
    return(
        <div>
            <Link to='/'><img className='Third--Arrow' src={image}></img></Link>
        </div>
    )
}

export default ThirdFirst