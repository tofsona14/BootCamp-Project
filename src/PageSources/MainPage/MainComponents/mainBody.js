import React from 'react'
import {Link} from 'react-router-dom'
import './MainBody.css'


const MainBody = () => {
    
    return(
        <div className='Main--Body'>
            <Link to="/Private-Info"><button className='Main--Button'> დაამატეთ რეზიუმე </button></Link>
        </div>
    )
}

export default MainBody