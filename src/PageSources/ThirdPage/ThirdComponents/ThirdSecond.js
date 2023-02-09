import React from 'react'
import './ThirdSecond.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { thirdSchema } from '../../schemas/schemas'
import { useState } from 'react'

const ThirdSecond = () => {
    
    const formValidation = (se) => {
        const s = [...se]
        for(let index = 0; index < s.length; index++) {
            if(s[index].position == "") {
                s[index].positionCheck = "position required"
            }else if (s[index].position[0].length < 2){
                s[index].positionLengthCheck = "position need minimum 2 symbol"
            }else {

                s[index].positionCheck = ""
                s[index].positionLengthCheck = ""
            }
            if(s[index].employer == "") {
                s[index].employerCheck = "employer required"
            }else if (s[index].employer[0].length < 2){
                s[index].employerLengthCheck = "employer need minimum 2 symbol"
            }else {

                s[index].employerCheck = ""
                s[index].employerLengthCheck = ""
            }
            setData(s)
        }
    }
    const [data, setData] = useState([{position: "",employer: "",startTime: "",endTime: "",otherD: ""}])
    const [sama, setSama] = useState([{
        first: "გამოცდილება",
        second: "თანამდებობა",
        third: "დამსაქმებელი",
        fourth: "დაწყების რიცხვი",
        fifth: "დამთავრების რიცხვი",
        six: "აღწერა",
        seven:"მეტი გამოცდილების დამატება",
        eight: "მინიმუმ 2 სიმბოლო"
    }])
    const addRow = () => {
        setData([...data, {position: "",employer: "",startTime: "",endTime: "",otherD: ""}]) 
        setSama((prev) => {
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
    const handleChange = (e, i) => {
        let newForm = [...data]
        newForm[i][e.target.name] = [e.target.value]
        setData(newForm)
        formValidation(data)
        console.log(data)
    }
   
    
    console.log(data)
return(
        <div className='Third--Second'>
            <div className='Third--Header'>
                <h2>{sama[0].first}</h2>
                <h3 style={{ color:"#2E2E2E"}}>2/3</h3>
            </div>
            {sama.map((e, i) =>  
            (
                <div className='Third--Second--Body'>
                <div className='Third--Second--Body--First'>
                    <label htmlFor='position'>{e.second}</label>
                    <br></br>
                    <div >
                        <input    id="position" name='position' onChange={(e) => handleChange(e,i)} value={data[i].position || ""} className={data[i].position.length == 0 ? 'Third--Body--First--Input': data[i].positionCheck || data[i].positionLengthCheck ? "Third--Body--First--Input--declined" : "Third--Body--First--Input--accepted"} placeholder='დეველოპერი, დიზაინერი და ა.შ'></input>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{e.eight}</p>
                    </div>
                </div>
                <div className='Third--Second--Body--Second'>
                    <label htmlFor='employer'>{e.third}</label>
                    <div >
                        <input  id="employer" name='employer' onChange={(e) => handleChange(e,i)} value={data[i].employer || ""} className={data[i].employer.length == 0 ?'Third--Body--First--Input': data[i].employerCheck || data[i].employerLengthCheck ? "Third--Body--First--Input--declined" : "Third--Body--First--Input--accepted" } placeholder='დამსაქმებელი'></input>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{e.eight}</p>
                    </div>
                </div>
                <div className='Third--Body--First--First'>
                        <div>
                            <label htmlFor='startTime'>{e.fifth}</label>
                            <div>
                            <input name='startTime' onChange={(e) => handleChange(e,i)} value={data[i].startTime || ""}  id="startTime" type= "date"className={data[i].startTime.length == 0 ? 'Third--Body--First--First--Input' : "Third--Body--First--First--Input--accepted"}  placeholder='mm / dd / yyyy' minLength={2}></input>
                            </div>
                        </div>
                        <div className='Third--Body--First--Second'>
                            <label htmlFor='endTime'>{e.fifth}</label>
                            <div>
                            <input name='endTime'onChange={(e) => handleChange(e,i)} value={data[i].endTime || ""}  id="endTime" type= "date"className={data[i].endTime.length == 0 ? 'Third--Body--First--First--Input' : "Third--Body--First--First--Input--accepted"} placeholder='mm / dd / yyyy' minLength={2}></input>
                            </div>
                        </div>
                </div>
                <div className='Second--Body--Third'>
                        <div className='Second--Body--Third--First'>
                            <label>{e.six}</label>
                        </div>
                        <input name='otherD'onChange={(e) => handleChange(e,i)} value={data[i].otherD} style={{fontSize: "15px"}} className='Second--Body--Third--Second' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'></input>
                </div>
                <div className='Third--Body--Fourth'></div>
                <button onClick={addRow} className='Third--Body--Button'> {e.seven} </button>
            </div>
            )) }
                <div className='Third--Body--Fifth'>
                    <Link to="/Private-Info"><button className='Third--Body--Fifth--st--button'>უკან</button></Link>
                    <Link to="/Education"><button className='Third--Body--Fifth--nd--button'>შემდეგი</button></Link>
                </div>
        </div>
    )
}

export default ThirdSecond