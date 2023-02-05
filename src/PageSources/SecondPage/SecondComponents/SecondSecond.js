import React from 'react'
import './SecondSecond.css'

const SecondSecond = () => {
    return(
        <div className='Second--Second'>
            <div className='Second--Header'>
                <h2>პირადი ინფო</h2>
                <h3 style={{ color:"#2E2E2E"}}>1/3</h3>
            </div>
            <div className='Second--Body'>
                
                    <div className='Second--Body--First--First'>
                        <div>
                            <label>სახელი</label>
                            <div>
                            <input className='Second--Body--First--First--Input' placeholder='ანზორ' minLength={2}></input>
                            <p className='Second--Body--First--First-P' style={{color:"#2E2E2E"}}>მინიმუმ 2 ასო, ქართული ასოებით</p>
                            </div>
                        </div>
                        <div className='Second--Body--First--Second'>
                            <label>გვარი</label>
                            <div>
                            <input className='Second--Body--First--First--Input' placeholder='მუმლაძე' minLength={2}></input>
                            <p className='Second--Body--First--First-P' style={{color:"#2E2E2E"}}>მინიმუმ 2 ასო, ქართული ასოებით</p>
                            </div>
                        </div>
                    </div>
                    <div className='Second--Body--Second--First'>
                        <label>პირადი ფოტოს ატვირთვა</label>
                        <button className='Second--Body--Second--First--Button' style={{backgroundColor: '#0E80BF'}}>ატვირთვა </button>
                    </div>
                    <div className='Second--Body--Third'>
                        <div className='Second--Body--Third--First'>
                            <label>ჩემს შესახებ(არასავალდებულო)</label>
                        </div>
                            <input className='Second--Body--Third--Second' placeholder='ზოგადი ინფო შენს შესახებ'></input>
                    </div>
                    <div className='Second--Body--Fourth'>
                        <label>ელ.ფოსტა</label>
                        <div ><input className='Second--Body--Fourth--Input' placeholder='Redberry@redberry.ge'></input></div>
                        <p className="Second--Body--First--First-P" style={{color:"#2E2E2E"}} >უნდა მთავრდებოდეს @redberry.ge-ით</p>
                    </div>
                    <div className='Second--Body--Fifth'>
                        <label>მობილურის ნომერი</label>
                        <div ><input className='Second--Body--Fourth--Input' placeholder='+995 551 12 34 56'></input></div>
                        <p className="Second--Body--First--First-P" style={{color:"#2E2E2E"}} >უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                    </div>
                    <div className='Second--Body--Sixth'>
                        <button className='Second--Body--Fifth--Button'>შემდეგი</button>
                    </div>
                </div>

        </div>
    )
}

export default SecondSecond