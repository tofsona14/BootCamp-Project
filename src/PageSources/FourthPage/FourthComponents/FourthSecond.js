import React, { useEffect } from 'react'
import './FourthSecond.css'
import { Link } from 'react-router-dom'
import DropDown from '../../DropDownMenu/DropDown'
import { useState } from 'react'
import DropDownLogo from '../../images/Vector.png'
import '../../DropDownMenu/DropDown.css'
import logo from '../../images/damtanjet.png'
import axios from 'axios'


const FourthSecond = () => {
    const [options, setOptions] = useState([]);
    const formValidation = (se) => {
        const s = [...se]
        for (let index = 0; index < s.length; index++) {
            if(s[index].college == "") {
                s[index].collegeCheck = "you need to type something"
            } else if(s[index].college[0].length < 2) {
                s[index].collegeChecks = 'you need more letters'
            }else if(s[index].college[0] == "") {
                s[index].collegeCheck = ""
            }else if(s[index].college[0].length == 1) {
                s[index].collegeCheck = ""
            }
            else {
                s[index].collegeCheck = "";
                s[index].collegeChecks = ""
            }
            if(s[index].dropDown == undefined) {
                s[index].dropDownChecks = "you need to type something"
            }else if(s[index].dropDown[0] == "Choose") {
                s[index].dropDownCheck = "you need to choose something"
            }else {
                s[index].dropDownCheck = ""
                s[index].dropDownChecks= ""
            }
            if(s[index].endDate == "") {
                s[index].endDateCheck = "need to type something"
            }else {
                s[index].endDateCheck = ""
            }
        }
    }
    const [dropDown, setDropDown] = useState([])
    const [data, setData] = useState()
    const [select, setSelect] = useState(['Choose'])
    const [datas, setDatas] = useState([{college: "",startDate: "", endDate: "", description: "", dropDown: ""}])
    const [sama, setSama] = useState([{
        first: "სასწავლებელი",
        second: "ხარისხი",
        third: "დამთავრების რიცხვი",
        fourth: "აღწერა",
        fifth: "სხვა სასწავლებლის დამატება",
        six: "მინიმუმ 2 სიმბოლო"
    }])
    const addRow = () => {
        setSama((prev) => {
            return [...prev, {
                first: "სასწავლებელი",
                second: "ხარისხი",
                third: "დამთავრების რიცხვი",
                fourth: "აღწერა",
                fifth: "სხვა სასწავლებლის დამატება",
                six: "მინიმუმ 2 სიმბოლო"
            }]
        })
        setDatas([...datas, {college: "",startDate: "", endDate: "", description: "" ,dropDown: ""}])
        
        
        
        
    }
    const onChange = (e, i) => {
        let newForm = [...datas]
        newForm[i][e.target.name] = [e.target.value]
        setDatas(newForm)
        formValidation(datas)
        
        
    }
    console.log(datas)
    const example = (e, i) => {
        
        let newForm = [...dropDown]
        console.log(` this is ${e.target.value}`)
        newForm[i] = e.target.value
        setDropDown(newForm)
        
        formValidation(datas)
        
        
        
        
    }
    
    
    useEffect(() => {
      const storedValue = localStorage.getItem("value");
      if (storedValue) {
        setDatas(JSON.parse(storedValue));
        
      }
    }, []);
    
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("value", JSON.stringify(datas));
        
        }, 4)
      },[datas]);
    
      // Get the value from local storage when the component mounts
      useEffect(() => {
        fetch("https://resume.redberryinternship.ge/api/degrees")
          .then(res => res.json())
          .then(data => {
            setOptions(data);
          });
      }, []);

      const Submit = (e) => {
        axios.post("https://resume.redberryinternship.ge/api/cvs")
      }
        
    return(
        <form onSubmit={(e) =>Submit(e)} className='Third--Second'>
            <div className='Third--Header'>
                <h2>განათლება</h2>
                <h3 style={{ color:"#2E2E2E"}}>3/3</h3>
            </div>
                {sama.map((e, i) => ( 

                    <div className='Third--Second--Body'>
                        <div className='Third--Second--Body--First'>
                            <label htmlFor='college'>{e.first}</label>
                            <br></br>
                            <div >
                                <div className='relatives'>
                                <input onChange={(e) => onChange(e,i)} className={datas[i].college == "" ?'Third--Body--First--Input' : datas[i].collegeCheck || datas[i].collegeChecks ? 'Third--Body--First--Input--declined' : 'Third--Body--First--Input--accepted'} value={datas[i].college || ""} name='college' id='college' placeholder='სასწავლებელი'></input>
                                {sama[i].college == "" ?<img  style={{display:"none"}} src={logo}></img>: datas[i].collegeCheck || datas[i].collegeChecks ? <img  style={{display:"none"}} src={logo}></img> : <img  style={{display:"flex"}} src={logo}></img>}

                                </div>
                                <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{e.six}</p>
                            </div>
                        </div>
                        <div className='Third--Body--First--First'>
                                <div>
                                    <label>{e.second}</label>
                                    <br></br>
                    <select className={datas[i].dropDown == "" || datas[i].dropDown[0] == "აირჩიე ხარისხი" ? 'Third--Body--First--First--Input':'Third--Body--First--First--Input--accepted'} value={datas[i].dropDown || "" } onChange={(e) => onChange(e, i)} name='dropDown' >
                        <option>აირჩიე ხარისხი</option>
      {options.map(option => (
        <option  key={option.id} name="dropDown" >
          {option.title}
        </option>
      ))}
    </select>
                </div>
                                <div className='Third--Body--First--Second'>
                                    <label htmlFor='startDate'>{e.third}</label>
                                    <div>
                                    <input name="endDate" onChange={(e) => onChange(e, i)} id="endDate"type="date" value={datas[i].endDate} className={datas[i].endDate == "" ? 'Third--Body--First--First--Input' : 'Third--Body--First--First--Input--accepted'} placeholder='მუმლაძე' minLength={2}></input>
                                    </div>
                                </div>
                        </div>
                        <div className='Second--Body--Third'>
                                <div className='Second--Body--Third--First'>
                                    <label htmlFor='description'>{e.fourth}</label>
                                </div>
                                <input style={{fontSize: "15px"}} onChange={(e) => onChange(e, i)}name="description" id='description' value={datas[i].description} className='Second--Body--Third--Second'  placeholder='განათლების აღწერა'></input>
                                
                        </div>
                        <div className='Third--Body--Fourth'></div>
            <br></br>
            <br></br>
            <br></br>

            </div>
                ))
            }
            <button onClick={addRow} className='Fourth--Body--Button'> {sama[0].fifth} </button>
                    <div className='Fouth--Body--Fifth--ChildDiv'>
                        <Link to="/Experience"><button className='Fourth--Body--Fifth--st--button'>უკან</button></Link>
                        <Link to="/Education"><button onClick={Submit()} className='Fourth--Body--Fifth--nd--button'>შემდეგი</button></Link>
                    </div>
        </form>
    )
}

export default FourthSecond