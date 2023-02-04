import React from 'react'
import {Link, Router} from 'react-router-dom'
import './MainBody.css'


const MainBody = () => {
    
    return(
        <div className='Main--Body'>
            <Link to="/General-Info"><button className='Main--Button'> დაამატეთ რეზიუმე </button></Link>
        </div>
    )
}

export default MainBody