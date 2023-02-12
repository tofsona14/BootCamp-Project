import React from 'react'
import './SecondFull.css'
import SecondSecond from '../SecondComponents/SecondSecond'
import SecondFirst from '../SecondComponents/SecondFirst'
import Cv from '../../CV/Cv'
const SecondFull = () => {
    return(
        <div className='Second--Full'>
            <SecondFirst />
            <SecondSecond />
            <Cv />
        </div>
    )
}

export default SecondFull