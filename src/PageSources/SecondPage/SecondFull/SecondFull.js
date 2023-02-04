import React from 'react'
import './SecondFull.css'
import SecondSecond from '../SecondComponents/SecondSecond'
import SecondFirst from '../SecondComponents/SecondFirst'
const SecondFull = () => {
    return(
        <div className='Second--Full'>
            <SecondFirst />
            <SecondSecond />
        </div>
    )
}

export default SecondFull