import React from 'react'
import './ThirdFull.css'
import ThirdFirst from '../ThirdComponents/ThirdFirst'
import ThirdSecond from '../ThirdComponents/ThirdSecond'
import Cv from '../../CV/Cv'
const ThirdFull = () => {
    return(
        <div className='Third--Full--Main'>
            <ThirdFirst />
            <ThirdSecond />
            <Cv />
        </div>
    )
}

export default ThirdFull