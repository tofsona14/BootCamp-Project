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
                        <div className='Second--Body--First--Second'>
                            <label>გვარი</label>
                            <div>
                            <input className='Second--Body--First--First--Input' placeholder='მუმლაძე' minLength={2}></input>
                            <p className='Second--Body--First--First-P' style={{color:"gray"}}>მინიმუმ 2 ასო, ქართული ასოებით</p>
                            </div>
                        </div>
                    </div>
                    <div className='Second--Body--Second--First'>
                        <label>პირადი ფოტოს ატვირთვა</label>
                        <button className='Second--Body--Second--First--Button' style={{backgroundColor: '#3399FF'}}>ატვირთვა </button>
                    </div>
                    <div className='Second--Body--Third'>
                        <div className='Second--Body--Third--First'>
                            <label>ჩემს შესახებ(არასავალდებულო)</label>
                        </div>
                            <input className='Second--Body--Third--Second' placeholder='ზოგადი ინფო შენს შესახებ'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSecond