import React from 'react'
import './SecondSecond.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { secondSchema } from '../../schemas/schemas'

const SecondSecond = () => {
    const { values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            
        },
        validationSchema: secondSchema,
    })
    console.log(values)
    console.log(errors)
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
                            <input id='name' type="text" onChange={handleChange} value={values.name} className={values.name.length == 0 ? 'Second--Body--First--First--Input' : errors.name ? "Second--Body--First--First--Input--declined" : "Second--Body--First--First--Input--accepted"} placeholder='ანზორ' minLength={2}></input>
                            <p className='Second--Body--First--First-P' style={{color:"#2E2E2E"}}>მინიმუმ 2 ასო, ქართული ასოებით</p>
                            </div>
                        </div>
                        <div className='Second--Body--First--Second'>
                            <label htmlFor='surname'>გვარი</label>
                            <div>
                            <input id="surname" name="surname"value={values.surname} onChange={handleChange} className={values.surname.length == 0 ? 'Second--Body--First--First--Input' : errors.surname ? "Second--Body--First--First--Input--declined" : "Second--Body--First--First--Input--accepted"} placeholder='მუმლაძე' minLength={2}></input>
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
                        <label htmlFor='email'>ელ.ფოსტა</label>
                        <div >
                            <input id="email" name="email"onChange={handleChange} value={values.email} className='Second--Body--Fourth--Input' placeholder='Redberry@redberry.ge'></input></div>
                            <p className="Second--Body--First--First-P" style={{color:"#2E2E2E"}} >უნდა მთავრდებოდეს @redberry.ge-ით</p>
                        </div>
                    <div className='Second--Body--Fifth'>
                        <label htmlFor='phone'>მობილურის ნომერი</label>
                        <div ><input id="phone" name="phone"value={values.phone} onChange={handleChange} className='Second--Body--Fourth--Input' placeholder='+995 551 12 34 56'></input></div>
                        <p className="Second--Body--First--First-P" style={{color:"#2E2E2E"}} >უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                    </div>
                    <div className='Second--Body--Sixth'>
                        <Link to="/Experience"><button className='Second--Body--Fifth--Button'>შემდეგი</button></Link>
                    </div>
                </div>
        </div>
    )
}

export default SecondSecond