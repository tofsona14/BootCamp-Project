import React from "react";
import './FourthFirst.css'
import image from '../../images/s.png'
import { Link } from 'react-router-dom'


const FourthFirst = () => {
    return(
        <div className='SecondHeader--Main'>
            <Link to="/"><div className='left--arrows'><img className='left--arrow' src={image}></img></div></Link>
            
        </div>
    )
}

export default FourthFirst