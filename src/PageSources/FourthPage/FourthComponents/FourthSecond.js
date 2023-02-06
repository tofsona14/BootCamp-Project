import React from 'react'
import './FourthSecond.css'
import { Link } from 'react-router-dom'

const FourthSecond = () => {
    return(
        <div className='Third--Second'>
            <div className='Third--Header'>
                <h2>განათლება</h2>
                <h3 style={{ color:"#2E2E2E"}}>3/3</h3>
            </div>
            <div className='Third--Second--Body'>
                <div className='Third--Second--Body--First'>
                    <label>სასწავლებელი</label>
                    <br></br>
                    <div >
                        <input className='Third--Body--First--Input' placeholder='სასწავლებელი'></input>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >მინიმუმ 2 სიმბოლო</p>
                    </div>
                </div>
                <div className='Third--Body--First--First'>
                        <div>
                            <label>ხარისხი</label>
                            <div>
                            <input className='Third--Body--First--First--Input' placeholder='ანზორ' minLength={2}></input>
                            </div>
                        </div>
                        <div className='Third--Body--First--Second'>
                            <label>დამთავრების რიცხვი</label>
                            <div>
                            <input type="date" className='Third--Body--First--First--Input' placeholder='მუმლაძე' minLength={2}></input>
                            </div>
                        </div>
                </div>
                <div className='Second--Body--Third'>
                        <div className='Second--Body--Third--First'>
                            <label>აღწერა</label>
                        </div>
                        <input style={{fontSize: "15px"}} className='Second--Body--Third--Second' placeholder='განათლების აღწერა'></input>
                </div>
                <div className='Third--Body--Fourth'></div>
                <button className='Third--Body--Button'> სხვა სასწავლებლის დამატება </button>
                <div className='Fourth--Body--Fifth'>
                    <div className='Fouth--Body--Fifth--ChildDiv'>
                        <Link to="/Experience"><button className='Fourth--Body--Fifth--st--button'>უკან</button></Link>
                        <Link to="/Education"><button className='Fourth--Body--Fifth--nd--button'>შემდეგი</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSecond