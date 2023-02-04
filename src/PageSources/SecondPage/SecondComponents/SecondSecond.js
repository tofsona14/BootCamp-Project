import React from 'react'
import './SecondSecond.css'

const SecondSecond = () => {
    return(
        <div className='Second--Second'>
            <div className='Second--Header'>
                <h2>პირადი ინფო</h2>
                <h3 style={{ color: "gray"}}>1/3</h3>
            </div>
            <div className='Second--Body'>
                <div>
                    <div className='Second--Body--First--First'>
                        <div>
                            <label>სახელი</label>
                            <div>
                            <input className='Second--Body--First--First--Input' placeholder='ანზორ' minLength={2}></input>
                            <p className='Second--Body--First--First-P' style={{color:"gray"}}>მინიმუმ 2 ასო, ქართული ასოებით</p>
                            </div>
                        </div>
                        <div>
                            <label>გვარი</label>
                            <div>
                            <input className='Second--Body--First--First--Input' placeholder='მუმლაძე' minLength={2}></input>
                            <p className='Second--Body--First--First-P' style={{color:"gray"}}>მინიმუმ 2 ასო, ქართული ასოებით</p>
                            </div>
                        </div>
                    </div>
                    <div className='Second--Body--First--Second'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSecond