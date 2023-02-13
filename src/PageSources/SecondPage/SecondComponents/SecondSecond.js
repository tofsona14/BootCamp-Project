import React, { useEffect, useState } from 'react'
import './SecondSecond.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { secondSchema } from '../../schemas/schemas'
import { minTW } from '../../schemas/schemas'
import Cv from '../../CV/Cv'

const SecondSecond = () => {
    
    const Validations = (info) => {
        setInfo((prev) => {
            let s = [...prev]
            if(s[0].name == '' || s[0].name.length < 2 || !s[0].name.match(/^[ა-ჰ]{2,}$/) ) {
                s[0].nameErr = 'required'
            }else {
                s[0].nameErr = ""
            }
            if(s[0].surname == "" || s[0].surname.length < 2 || !s[0].surname.match(/^[ა-ჰ]{2,}$/)) {
                s[0].surnameErr = 'required'
            }else {
                s[0].surnameErr = ""
            }
            if(!s[0].email.match(/redberry.ge$/)) {
                s[0].emailErr = "required"
            }else (
                s[0].emailErr = ""
            )
            if(!s[0].phone.match(/^\+995\d{9}$/) ) {
                s[0].phoneErr = "required"
            } else {
                s[0].phoneErr = ""
            }
            return s
        })
        
        
    }
    const [info,setInfo] = useState([{name: "", surname: "", about: "", email: "", phone: "",nameErr: "", surnameErr: 
    "", emailErr: "", phoneErr: ""}])
    const onChanges = (e) => {
        setInfo(prev => {
            let info = prev
            info[0][e.target.name] = e.target.value
            return info
        })
        Validations(info) 
        console.log(info)
    }
    useEffect(() => {
       const infos =  window.localStorage.getItem("first-val")
       if(info) {
            setInfo(JSON.parse(infos))
       }
    }, [])
    useEffect(() => {
        setTimeout(() => {
            window.localStorage.setItem("first-val", JSON.stringify(info))

        },

       400 )
    },)
    const [ds, setDs] = useState(null)
    const SetPhoto = async (e) => {
        const file = e[0]
        const base64 = await convertBase64(file)
        setDs(base64)
        
    }
    const convertBase64 = (file) => {
        return new Promise((resolve,reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            
            fileReader.oneerror = (error) => {
                reject(error);
            }
        })
    }
    console.log(ds)
    useEffect(() => {
        let so = window.localStorage.getItem('val-base')
        setDs(JSON.parse(so))
    },[])
    useEffect(() => {
        setTimeout(() => {

            window.localStorage.setItem("val-base", JSON.stringify(ds))
        }, 400)
    })
    return(
        <div className='Second--Second'>
            <div className='Second--Header'>
                <h2>პირადი ინფო</h2>
                <h3 style={{ color:"#2E2E2E"}}>1/3</h3>
            </div>
            <div className='Second--Body'>
                    <div className='Second--Body--First--First'>
                        <div>
                            <label htmlFor='name'>სახელი</label>
                            <div>
                            <input id='name' name='name' type="text" onChange={onChanges} value={info[0].name} className={info[0].name.length == 0 ? 'Second--Body--First--First--Input' : info[0].nameErr != "" ? "Second--Body--First--First--Input--declined" : "Second--Body--First--First--Input--accepted"} placeholder='ანზორ' minLength={2}></input>
                            <p className='Second--Body--First--First-P' style={{color:"#2E2E2E"}}>მინიმუმ 2 ასო, ქართული ასოებით</p>
                            </div>
                        </div>
                        <div className='Second--Body--First--Second'>
                            <label htmlFor='surname'>გვარი</label>
                            <div>
                            <input id="surname" name="surname"value={info[0].surname} onChange={onChanges} className={info[0].surname.length == 0 ? 'Second--Body--First--First--Input' : info[0].surnameErr ? "Second--Body--First--First--Input--declined" : "Second--Body--First--First--Input--accepted"} placeholder='მუმლაძე' minLength={2}></input>
                            <p className='Second--Body--First--First-P' style={{color:"#2E2E2E"}}>მინიმუმ 2 ასო, ქართული ასოებით</p>
                            </div>
                        </div>
                    </div>
                    <div className='Second--Body--Second--First'>
                        <label>პირადი ფოტოს ატვირთვა</label>
                        <input type="file" className='Second--Body--Second--First--Button' onChange={(e) => SetPhoto(e.target.files)}></input>

                    </div>
                    <div className='Second--Body--Third'>
                        <div className='Second--Body--Third--First'>
                            <label>ჩემს შესახებ(არასავალდებულო)</label>
                        </div>
                            <input className='Second--Body--Third--Second' value={info[0].about}  onChange={onChanges} id='about' name='about' placeholder='ზოგადი ინფო შენს შესახებ'></input>
                    </div>
                    <div className='Second--Body--Fourth'>
                        <label htmlFor='email'>ელ.ფოსტა</label> 
                        <div >
                            <input id="email" name="email"onChange={onChanges} value={info[0].email} className={info[0].email.length == 0 ? 'Second--Body--Fourth--Input' : info[0].emailErr ? "Second--Body--Fourth--Input--declined" : "Second--Body--Fourth--Input--accepted"} placeholder='Redberry@redberry.ge'></input></div>
                            <p className="Second--Body--First--First-P" style={{color:"#2E2E2E"}} >უნდა მთავრდებოდეს @redberry.ge-ით</p>
                        </div>
                    <div className='Second--Body--Fifth'>
                        <label htmlFor='phone'>მობილურის ნომერი</label>
                        <div ><input id="phone" type="text" name="phone"value={info[0].phone} onChange={onChanges} className={info[0].phone.length == 0 ? 'Second--Body--Fourth--Input' : info[0].phoneErr ? "Second--Body--Fourth--Input--declined" : "Second--Body--Fourth--Input--accepted"} placeholder='+995 551 12 34 56'></input></div>
                        <p className="Second--Body--First--First-P" style={{color:"#2E2E2E"}} >უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                    </div>
                    <div className='Second--Body--Sixth'>
                        {info[0].name != "" && info[0].surname != "" && info[0].email != "" && info[0].phone != "" && info[0].nameErr != "required" && info[0].surnameErr != "required" && info[0].emailErr != "required" && info[0].phoneErr != "required" ? <Link to="/Experience"><button className='Second--Body--Fifth--Button'>შემდეგი</button></Link> : <button className='Second--Body--Fifth--Button'>შემდეგი</button> }
                    </div>
                </div>
        </div>
    )
}

export default SecondSecond