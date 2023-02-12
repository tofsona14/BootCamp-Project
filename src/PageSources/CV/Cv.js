import React, { useEffect, useState } from 'react'
import './Cv.css'
import logos from '../images/Vectors.png'
import logo from '../images/Vectorsa.png'


const Cv = () => {
    const [first, setFirst] = useState([])
    const [second, setSecond] = useState([])
    const [photo, setPhoto] = useState("")
   
    useEffect(() => {
        setInterval(() => {
            let f = window.localStorage.getItem("val-base")
            let s = window.localStorage.getItem("first-val")
            let o = window.localStorage.getItem("val-2")
            if(s) {
                setFirst(JSON.parse(s))
                setSecond(JSON.parse(o))
                setPhoto(JSON.parse(f))
            
        }
        }, 900)
        
    }, [])
    return(
        first.map((e, i) => (
            <div>
            <div className='MainDiv--Cv'>
                <div className='Main--Child--Div--Cv'>
                    <div>
                        <div className='name--surname'>
                            <h1>{e.name}</h1>
                            <h1>{e.surname}</h1>
                        </div>
                        <div className='email--phone'>
                            <div className='Email--Cv'>
                                <img src={logos}></img>
                                <div style={{marginLeft: "1vw"}}>{e.email}</div>
                                
                            </div>
                            <div className='phone--Cv'>
                                <img src={logo}></img>
                                <div style={{marginLeft: "1vw"}}>{e.phone}</div>
                                </div>
                        </div>
                        <br></br>
                        <div className='sdasd'  >
                            <div className='aboutMe--cv'>ჩემს შესახებ</div>
                            <div className='about--cv'><p className='p--sdasd'>{e.about}</p></div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className='img--div'>
                <img className='imgs' src={photo}></img>
                </div>
            </div>
            <div className='line'></div>
            <div className='Gamocdileba'>გამოცდილება</div>
                {second.map((i) => (
                    <div className='second--map'>
                        <div></div>
                        <div>
                        <div></div>
                        <div></div>
                        </div>
                        <div></div>
                    </div>

                ))}
            </div>
        ))
    )
}
export default Cv