import React from 'react'
import {Link, Router} from 'react-router-dom'
import './MainBody.css'


const MainBody = () => {
    
    return(
        <div className='Main--Body'>
            
            <button><Link style={{ textDecoration: 'none', color: 'white' }} to='/General-info'> რეზიუმეს დამატება </Link></button>
        </div>
    )
}

export default MainBody