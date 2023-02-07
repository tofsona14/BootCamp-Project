import React from 'react'
import './ThirdSecond.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { thirdSchema } from '../../schemas/schemas'
import { useState } from 'react'

const ThirdSecond = () => {
    const info = [
        {
            first: "გამოცდილება",
            second: "თანამდებობა",
            third: "დამსაქმებელი",
            fourth: "დაწყების რიცხვი",
            fifth: "დამთავრების რიცხვი",
            six: "აღწერა",
            seven:"მეტი გამოცდილების დამატება",
            eight: "მინიმუმ 2 სიმბოლო"
        }
    ]
    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            position: "",
            employer: "",
            startTime: "",
            endTime: ""
        },
        validationSchema: thirdSchema
    })
    console.log(values)
    const [data, setData] = useState(info)
    const Clickadd = () => {
        setData((prev) => {
            return [...prev, {
            first: "გამოცდილება",
            second: "თანამდებობა",
            third: "დამსაქმებელი",
            fourth: "დაწყების რიცხვი",
            fifth: "დამთავრების რიცხვი",
            six: "აღწერა",
            seven:"მეტი გამოცდილების დამატება",
            eight: "მინიმუმ 2 სიმბოლო"
            }]
        }
        )
    }
    console.log(data)
    return(
        <div className='Third--Second'>
            <div className='Third--Header'>
                <h2>{info[0].first}</h2>
                <h3 style={{ color:"#2E2E2E"}}>2/3</h3>
            </div>
            <div className='Third--Second--Body'>
                <div className='Third--Second--Body--First'>
                    <label htmlFor='position'>{info[0].second}</label>
                    <br></br>
                    <div >
                        <input onChange={handleChange}  values={values.position} id="position" name='position' className={values.position.length == 0 ?'Third--Body--First--Input' : errors.position ? 'Third--Body--First--Input--declined' : "Third--Body--First--Input--accepted"} placeholder='დეველოპერი, დიზაინერი და ა.შ'></input>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{info[0].eight}</p>
                    </div>
                </div>
                <div className='Third--Second--Body--Second'>
                    <label htmlFor='employer'>{info[0].third}</label>
                    <div >
                        <input values={values.employer} id="employer" name='employer' onChange={handleChange}  className={values.employer.length == 0 ?'Third--Body--First--Input' : errors.employer ? 'Third--Body--First--Input--declined' : "Third--Body--First--Input--accepted"} placeholder='დამსაქმებელი'></input>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{info[0].eight}</p>
                    </div>
                </div>
                <div className='Third--Body--First--First'>
                        <div>
                            <label htmlFor='startTime'>{info[0].fourth}</label>
                            <div>
                            <input name='startTime' values={values.startTime} onChange={handleChange} id="startTime" type= "date"className={ values.startTime.length == 0 ?'Third--Body--First--First--Input' : 'Third--Body--First--First--Input--accepted'} placeholder='mm / dd / yyyy' minLength={2}></input>
                            </div>
                        </div>
                        <div className='Third--Body--First--Second'>
                            <label htmlFor='endTime'>{info[0].fifth}</label>
                            <div>
                            <input name='endTime' values={values.endTime} onChange={handleChange} id="endTime" type= "date"className={ values.endTime.length == 0 ?'Third--Body--First--First--Input' : 'Third--Body--First--First--Input--accepted'} placeholder='mm / dd / yyyy' minLength={2}></input>
                            </div>
                        </div>
                </div>
                <div className='Second--Body--Third'>
                        <div className='Second--Body--Third--First'>
                            <label>{info[0].six}</label>
                        </div>
                        <input style={{fontSize: "15px"}} className='Second--Body--Third--Second' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'></input>
                </div>
                <div className='Third--Body--Fourth'></div>
                <button onClick={Clickadd} className='Third--Body--Button'> {info[0].seven} </button>
                <div className='Third--Body--Fifth'>
                    <Link to="/Private-Info"><button className='Third--Body--Fifth--st--button'>უკან</button></Link>
                    <Link to="/Education"><button className='Third--Body--Fifth--nd--button'>შემდეგი</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ThirdSecond