import React, { useEffect } from 'react'
import './ThirdSecond.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { thirdSchema } from '../../schemas/schemas'
import { useState } from 'react'
import logo from '../../images/damtanjet.png'


const ThirdSecond = () => {
    const [experience, setExperience] = useState([{position: "", employer:"",start_date:"",due_date:"",description:""}])
    const [err,setErr] = useState({posErr:"",empErr:""})
    const formValidation = (se) => {
        const s = [...se]
        for(let index = 0; index < s.length; index++) {
            if(s[index].position == "" || s[index].position[0].length < 2) {
                setErr((prev) => {
                    let i = prev
                    i.posErr = "required"
                    return i
                })
            
            }else {

                setErr((prev) => {
                    let i = prev
                    i.posErr = ""
                    return i
                })
            }
            if(s[index].employer == "" || s[index].employer[0].length < 2) {
                setErr((prev) => {
                    let i = prev
                    i.empErr = 'required'
                    return i
                })
            
            }else {

                
            }
            setData(s)
        }
    }
    const [data, setData] = useState([{position: "",employer: "",start_time: "",due_time: "",description: "",}])
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
        setData([...data, {position: "",employer: "",start_time: "",due_time: "",description: "",}]) 
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
    setExperience((prev) => {
                return [...prev, {position: "", employer:"",start_date:"",due_date:"",description:""}]
            })
            
    
    } 
    const [boolean, setBoolean] = useState("")
    const [required,setRequired] = useState([])
    const handleChange = (e, i) => {
        let newForm = [...data]
        newForm[i][e.target.name] = [e.target.value][0]
        setData(newForm)
        formValidation(data)
        console.log(e.target.name)
        
        if(e.target.name == 'position') {
            setExperience((prev) => {
                let p = prev
                p[i][e.target.name] = [e.target.value][0]
                return p
            })
        }
        if(e.target.name == 'employer') {
            setExperience((prev) => {
                let p = prev
                p[i][e.target.name] = [e.target.value][0]
                return p
            })
        } 
        if(e.target.name == 'start_time') {
            setExperience((prev) => {
                let p = prev
                p[i].start_date = [e.target.value][0]
                return p 
            })
        }
        if(e.target.name == 'due_time') {
            setExperience((prev) => {
                let p = prev
                p[i].due_date = [e.target.value][0]
                return p
            })
        }
        if(e.target.name == 'description') {
            setExperience((prev) => {
                let p = prev
                p[i].description = [e.target.value][0]
                return p
            })
        }
        setRequired((prev) => {
            let s = [...prev]
            if(data[0].position == "" || data[0].employer == "" || data[0].start_time == "" || data[0].due_time == "" || data[0].description == "" || data[0].positionErr != "" || data[0].employerErr != ""  ) {
               s[0] = 'required'
               setRequired(s) 
            }else {
                s[0] = ""
                setRequired(s)
            }
            if(i != 0 && data[i].position == "" && data[i].employer == "" && data[i].start_time == "" && data[i].due_time == "" && data[i].description == "" ) {
                s[i] = ""
                setRequired(s)
            }if(i != 0 && data[i].employerErr == "" && data[i].positionErr == "" ) {
                s[i] = ''
                setRequired(s)
            }
            else {
                if(i != 0) {
                    s[i] = 'required'
                    setRequired(s)
                }
            
        }
            }

        )
        setBoolean(required.includes('required'))
        
    }
    
    useEffect(() => {
        const secondVal = window.localStorage.getItem("val-2")
        if(secondVal) {
            setData(JSON.parse(secondVal))
        }
        
},[])
    useEffect(() => {
        
    })
    useEffect(() => {
        setTimeout(() => {

            window.localStorage.setItem("val-2", JSON.stringify(data))
        }, 400)
    })
    console.log(experience)
    useEffect(() => {
        setTimeout(() => {
            window.localStorage.setItem("infos", JSON.stringify(experience))

        },400)
    })

    useEffect(() => {
        const secondVal = window.localStorage.getItem("infos")
        if(secondVal) {
            setExperience(JSON.parse(secondVal))
        }
},[])
    console.log(experience)
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
                        <div className='relatives'>
                            <input    id="position" name='position' onChange={(e) => handleChange(e,i)} value={data[i].position || ""} className={data[i].position.length == 0 ? 'Third--Body--First--Input':  data[i].positionErr != "" ? "Third--Body--First--Input--declined" : "Third--Body--First--Input--accepted"} placeholder='დეველოპერი, დიზაინერი და ა.შ'></input>
                            {data[i].position.length == 0 ?<img  style={{display:"none"}} src={logo}></img>: 1 != "" ? <img  style={{display:"none"}} src={logo}></img> : <img  style={{display:"flex"}} src={logo}></img>}
                        </div>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{e.eight}</p>
                    </div>
                </div>
                <div className='Third--Second--Body--Second'>
                    <label htmlFor='employer'>{e.third}</label>
                    <div >
                        <div className='relatives'>
                        <input  id="employer" name='employer' onChange={(e) => handleChange(e,i)} value={data[i].employer || ""} className={data[i].employer.length == 0 ?'Third--Body--First--Input': data[i].employerErr != "" ? "Third--Body--First--Input--declined" : "Third--Body--First--Input--accepted" } placeholder='დამსაქმებელი'></input>
                        {data[i].employer.length == 0 ?<img  style={{display:"none"}} src={logo}></img>: data[i].employerErr != "" ? <img  style={{display:"none"}} src={logo}></img> : <img  style={{display:"flex"}} src={logo}></img>}

                        </div>
                        <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{e.eight}</p>
                    </div>
                </div>
                <div className='Third--Body--First--First'>
                        <div>
                            <label htmlFor='startTime'>{e.fifth}</label>
                            <div>
                            <input name='start_time' onChange={(e) => handleChange(e,i)} value={data[i].start_time || ""}  id="startTime" type= "date"className={data[i].start_time.length == 0 ? 'Third--Body--First--First--Input' : "Third--Body--First--First--Input--accepted"}  placeholder='mm / dd / yyyy' minLength={2}></input>
                            </div>
                        </div>
                        <div className='Third--Body--First--Second'>
                            <label htmlFor='due_time'>{e.fifth}</label>
                            <div>
                            <input name='due_time'onChange={(e) => handleChange(e,i)} value={data[i].due_time || ""}  id="due_time" type= "date"className={data[i].due_time.length == 0 ? 'Third--Body--First--First--Input' : "Third--Body--First--First--Input--accepted"} placeholder='mm / dd / yyyy' minLength={2}></input>
                            </div>
                        </div>
                </div>
                <div className='Second--Body--Third'>
                        <div className='Second--Body--Third--First'>
                            <label>{e.six}</label>
                        </div>
                        <input name='description'onChange={(e) => handleChange(e,i)} value={data[i].description} style={{fontSize: "15px"}} className='Second--Body--Third--Second' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'></input>
                </div>
                <div className='Third--Body--Fourth'></div>
                <button onClick={addRow} className='Third--Body--Button'> {e.seven} </button>
            </div>
            )) }
                <div className='Third--Body--Fifth'>
                    
                    <Link to="/Private-Info"><button className='Third--Body--Fifth--st--button'>უკან</button></Link>
                    {boolean == false ? <Link to="/Education"><button className='Third--Body--Fifth--nd--button'>შემდეგი</button></Link>:<button className='Third--Body--Fifth--nd--button'>შემდეგი</button>}
                </div>
        </div>
    )
}

export default ThirdSecond