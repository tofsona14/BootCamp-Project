import React from 'react'
import './ThirdSecond.css'
import { Link } from 'react-router-dom'

const ThirdSecond = () => {
    return(
        <div className='Third--Second'>
            <div className='Third--Header'>
                <h2>გამოცდილება</h2>
                <h3 style={{ color:"#2E2E2E"}}>2/3</h3>
            </div>
            <div className='Third--Second--Body'>
                <div className='Third--Second--Body--First'>
                    <label>თანამდებობა</label>
                    <br></br>
                    <div >
                        <input className='Third--Body--First--Input' placeholder='დეველოპერი, დიზაინერი და ა.შ'></input>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >მინიმუმ 2 სიმბოლო</p>
                    </div>
                </div>
                <div className='Third--Second--Body--Second'>
                    <label>დამსაქმებელი</label>
                    <div >
                        <input className='Third--Body--First--Input' placeholder='დამსაქმებელი'></input>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >მინიმუმ 2 სიმბოლო</p>
                    </div>
                </div>
                <div className='Third--Body--First--First'>
                        <div>
                            <label>დაწყების რიცხვი</label>
                            <div>
                            <input className='Third--Body--First--First--Input' placeholder='ანზორ' minLength={2}></input>
                            </div>
                        </div>
                        <div className='Third--Body--First--Second'>
                            <label>დამთავრების რიცხვი</label>
                            <div>
                            <input className='Third--Body--First--First--Input' placeholder='მუმლაძე' minLength={2}></input>
                            </div>
                        </div>
                </div>
                <div className='Second--Body--Third'>
                        <div className='Second--Body--Third--First'>
                            <label>აღწერა</label>
                        </div>
                        <input style={{fontSize: "15px"}} className='Second--Body--Third--Second' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'></input>
                </div>
                <div className='Third--Body--Fourth'></div>
                <button className='Third--Body--Button'> მეტი გამოცდილების დამატება </button>
                <div className='Third--Body--Fifth'>
                    <Link to="/Private-Info"><button className='Third--Body--Fifth--st--button'>უკან</button></Link>
                    <Link to="/Education"><button className='Third--Body--Fifth--nd--button'>შემდეგი</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ThirdSecond