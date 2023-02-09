import React, { useEffect } from 'react'
import './FourthSecond.css'
import { Link } from 'react-router-dom'
import DropDown from '../../DropDownMenu/DropDown'
import { useState } from 'react'
import DropDownLogo from '../../images/Vector.png'

const FourthSecond = () => {

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
        }
    }
    const [data, setData] = useState()
    const [isActive, setIsActive] = useState(false)
    const [select, setSelect] = useState('Choose')
    const [datas, setDatas] = useState([{college: "",startDate: "", endDate: "", description: "" }])
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
        setDatas([...datas, {college: "",startDate: "", endDate: "", description: "" }])
    }
    const onChange = (e, i) => {
        let newForm = [...datas]
        newForm[i][e.target.name] = [e.target.value]
        setDatas(newForm)
        formValidation(datas)
    }
    
        useEffect(() => {
            fetch("https://resume.redberryinternship.ge/api/degrees")
            .then(response => response.json())
            .then(data => setData(data))
        }, [])
        console.log(datas)
    return(
        <div className='Third--Second'>
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
                                <input onChange={(e) => onChange(e,i)} className='Third--Body--First--Input' value={datas[i].college || ""} name='college' id='college' placeholder='სასწავლებელი'></input>
                                <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{e.six}</p>
                            </div>
                        </div>
                        <div className='Third--Body--First--First'>
                                <div>
                                    <label>{e.second}</label>
                                    <br></br>
                                    <div className='dropdown'>
                    <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>{select}</div>
                    {isActive && (
                        <div className='dropdown-content'>
                            {data.map((option) => (
                                <div onClick={(e) => {
                                    setSelect(option.title)
                                    setIsActive(false)
                                }} 
                                className="dropdown-item">
                                    {option.title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                                </div>
                                <div className='Third--Body--First--Second'>
                                    <label htmlFor='startDate'>{e.third}</label>
                                    <div>
                                    <input name="endDate" id="endDate"type="date" className='Third--Body--First--First--Input' placeholder='მუმლაძე' minLength={2}></input>
                                    </div>
                                </div>
                        </div>
                        <div className='Second--Body--Third'>
                                <div className='Second--Body--Third--First'>
                                    <label htmlFor='description'>{e.fourth}</label>
                                </div>
                                {!isActive ? <input style={{fontSize: "15px"}} name="description" id='description' className='Second--Body--Third--Second'  placeholder='განათლების აღწერა'></input>: <input style={{fontSize: "15px"}} className='Second--Body--Third--Second'  placeholder=''></input>}
                        </div>
                        <div className='Third--Body--Fourth'></div>
                        <button onClick={addRow} className='Third--Body--Button'> {e.fifth} </button>
            </div>
                ))
                }
                    <div className='Fouth--Body--Fifth--ChildDiv'>
                        <Link to="/Experience"><button className='Fourth--Body--Fifth--st--button'>უკან</button></Link>
                        <Link to="/Education"><button className='Fourth--Body--Fifth--nd--button'>შემდეგი</button></Link>
                    </div>
        </div>
    )
}

export default FourthSecond