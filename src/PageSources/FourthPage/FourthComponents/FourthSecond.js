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
    useEffect(() => {
      const kk = localStorage.getItem("full");
      if (kk) {
        setFull(JSON.parse(kk));
        
      }
    }, []);
    const [experience, setExperience] = useState([{position: "", employer:"",start_date:"",due_date:"",description:""}])
    const [education, setEducation] = useState([{institute:"",degree_id:"",due_date:"",description:"" }])
    const [full, setFull] = useState({name: "",surname: "",email:"", phone_number:"",experiences:{}, educations:{},image:"",about_me:""})
    const [main, setMain] = useState([])
    const [info, setInfo] = useState({name: "",surname: "",email:"", phone_number:"",experiences:{}, educations:{},image:"",about_me:""})
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
    const [datas, setDatas] = useState([{college: "",startDate: "", endDate: "", description: "", dropDown: "",collegeChecks: "",collegeCheck: "",dropDownChecks: "",dropDownCheck: "", endDateCheck: ""}])
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
        setDatas((prev) => {
            let i = prev
            return [...i, {college: "",startDate: "", endDate: "", description: "", dropDown: "",collegeChecks: "",collegeCheck: "",dropDownChecks: "",dropDownCheck: "", endDateCheck: ""}]
        })
        setEducation((prev) => {
            return [...prev, {institute:"",degree_id:"",due_date:"",description:"" }]


        }
        )
        
        
        
        
        
        
    }
    const onChange = (e, i) => {
        let newForm = [...datas]
        newForm[i][e.target.name] = [e.target.value]
        setDatas(newForm)
        formValidation(datas)
        setEducation((prev) => {
            let o = [...prev]
            if(e.target.name == 'college') {
                o[i].institute = [e.target.value][0]
            }
           
            if(e.target.name == 'dropDown') {
                datas.map((e) => {
                
                    if( e.dropDown == 'აირჩიეთ ხარისხი') {
                        o[i].degree_id = "";
                    }else if( e.dropDown == 'ზოგადსაგანმანათლებლო დიპლომი') {
                        o[i].degree_id = 2;
                    }else if( e.dropDown == 'ბაკალავრი') {
                        o[i].degree_id = 3;
                    }else if( e.dropDown == 'მაგისტრი') {
                        o[i].degree_id = 4;
                    }else if( e.dropDown == 'დოქტორი') {
                        o[i].degree_id = 5;
                    }else if( e.dropDown == 'ასოცირებული ხარისხი') {
                        o[i].degree_id = 6;
                    }else if(e.dropDown == 'სტუდენტი') {
                        o[i].degree_id = 7;
                    }else if(e.dropDown  == 'კოლეჯი(ხარისხის გარეშე)') {
                        o[i].degree_id = 8;
                    }else if(e.dropDown == 'სხვა') {
                        o[i].degree_id = 9;
                    }else if(e.dropDown  == 'საშუალო სკოლის დიპლომი') {
                        o[i].degree_id = 1;
                    }
                })
            }
            if(e.target.name == 'endDate'){
                 o[i].due_date = [e.target.value][0]
            }
            if(e.target.name == 'description'){
                o[i].description = [e.target.value][0]
           }
            return o
        })
        
        
    }
    console.log(datas)
    console.log(education)
    
    
    useEffect(() => {
      const storedValue = localStorage.getItem("value");
      if (storedValue) {
        setDatas(JSON.parse(storedValue));
        
      }
    }, []);
    
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("value", JSON.stringify(datas));
        
        }, 400)
      },[datas]);
    
      // Get the value from local storage when the component mounts
      useEffect(() => {
        fetch("https://resume.redberryinternship.ge/api/degrees")
          .then(res => res.json())
          .then(data => {
            setOptions(data);
          });
      }, []);

      
      useEffect(() => {
          let a = window.localStorage.getItem('val-2')
          let b = window.localStorage.getItem('val-base')
          let c = window.localStorage.getItem('first-val')
          setMain((prev) => {
            let i = prev
            let o = JSON.parse(a)
            i[0] = o
            return i
          })
          setMain((prev) => {
            let i = prev
            i[1] = JSON.parse(b)
            return i
          })
          setMain((prev) => {
            let i = prev
            i[2] = JSON.parse(c)[0]
            return i
          })
        })
        
        useEffect(() => {
            setTimeout(() => {
                const looa = window.localStorage.getItem('infos')
                setExperience(JSON.parse(looa))
                },4000)
            
                    
            
        },)
        const Submit = (e) => {
            e.preventDefault()
            
            setFull((prev) => {
                let i = prev
                i.name = main[2].name
                i.surname = main[2].surname
                i.email = main[2].email
                i.phone_number = main[2].phone
                i.about_me = main[2].about
                i.image = main[1].toString('binary');
                i.educations = education
                i.experiences = experience
                return i
            })
            axios.post('https://resume.redberryinternship.ge/api/cvs"', JSON.stringify(full))
  .then(response => {
    console.log(response) 
  })
  .catch(error => {
   console.log(error)
  });
           
        }
        useEffect(() => {
            setTimeout(() => {
                localStorage.setItem("full", JSON.stringify(full));
            
            }, 400)
          },[full]);
          
          console.log(full)
        return(
        <form onSubmit={(e) => Submit(e)} className='Third--Second'>
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
                                {datas[i].college == "" ?<img  style={{display:"none"}} src={logo}></img>: datas[i].collegeCheck != "" || datas[i].collegeChecks != "" ? <img  style={{display:"none"}} src={logo}></img> : <img  style={{display:"flex"}} src={logo}></img>}

                                </div>
                                <p className="Third--Body--First--First-P" style={{color:"#2E2E2E"}} >{e.six}</p>
                            </div>
                        </div>
                        <div className='Third--Body--First--First'>
                                <div>
                                    <label>{e.second}</label>
                                    <br></br>
                    <select value={datas[i].dropDown} className={datas[i].dropDown == "" || datas[i].dropDown[0] == "აირჩიე ხარისხი" ? 'Third--Body--First--First--Input':'Third--Body--First--First--Input--accepted'} onChange={(e) => onChange(e, i)} name='dropDown' >
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
                                    <input name="endDate" onChange={(e) => onChange(e, i)} id="endDate"type="date" value={datas[i].endDate}  className={datas[i].endDate == "" ? 'Third--Body--First--First--Input' : 'Third--Body--First--First--Input--accepted'} placeholder='მუმლაძე' minLength={2}></input>
                                    </div>
                                </div>
                        </div>
                        <div className='Second--Body--Third'>
                                <div className='Second--Body--Third--First'>
                                    <label htmlFor='description'>{e.fourth}</label>
                                </div>
                                <input style={{fontSize: "15px"}} onChange={(e) => onChange(e, i)}name="description" value={datas[i].description} id='description'  className='Second--Body--Third--Second'  placeholder='განათლების აღწერა'></input>
                                
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
                        <Link to="/Education"><button  className='Fourth--Body--Fifth--nd--button'>შემდეგი</button></Link>
                    </div>
        </form>
    )
}

export default FourthSecond