import React, { useEffect, useState } from 'react'
import './Cv.css'
import logos from '../images/Vectors.png'
import logo from '../images/Vectorsa.png'


const Cv = () => {
    const [first, setFirst] = useState([])
    const [second, setSecond] = useState([])
    const [photo, setPhoto] = useState("")
    const[third, setThird] = useState([])
   
    useEffect(() => {
        setInterval(() => {
            let f = window.localStorage.getItem("val-base")
            let s = window.localStorage.getItem("first-val")
            let o = window.localStorage.getItem("val-2")
            let l = window.localStorage.getItem("value")
            if(s) {
                setFirst(JSON.parse(s))
                setSecond(JSON.parse(o))
                setPhoto(JSON.parse(f))
                setThird(JSON.parse(l))
            
        }
        }, 400)
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
            <div className='second--map'>
                {second.map((i, l) => {
                    if(i.position != 0 ) {
                    return (<div className='oo'>
                                <div className='second--map--employer'>
                                    <p className='p--map--nd'> {`${i.position},`}</p>
                                    <p className='p--map--nd'>{i.employer}</p>
                                </div>
                                {i.startTime != "" ? (
                                    <div>
                                        <p className='p--map--rd'>{`${i.start_time} - ${i.due_time}`}</p>
                                    </div>
                                ): i.endTime != "" ? (
                                    <div>
                                        <p className='p--map--rd'>{`- ${i.endTime}`}</p>
                                    </div>
                                ): '' }
                                {i.otherD != "" ? (
                                    <div><p className='descriptions'>{i.otherD}</p></div>
                                ): ''}
                            </div>
                            
                        )
                        
                    }

                    
                    
                })}
            </div>
            {third[0].college != "" || third[0].dropDown !="" || third[0].endDate != "" || third[0].description != "" ? (<div className='Gamocdileba'>განათლება</div>) : ''}
            
                {third.map((o, l) => {
                    if(o.college[0] != "") {
                        return(
                            <div>
                                <div>
                                    <div className='second--map--employer'><p className='p--map--nd'>{`${o.college},${o.dropDown}`}</p></div>
                                </div>
                                <div>
                                    <p className='p--map--rd'>{` ${o.endDate}`}</p>
                                </div>
                                <div><p className='descriptions'>{o.description}</p></div>
                            </div>
                        )
                    }else if(o.dropDown != "") {
                        return(
                        <div>
                            <div className='second--map--employer'><p className='p--map--nd'>{`${o.dropDown}`}</p></div>
                        </div>
                        )
                        
                    }else {
                        <div>
                                
                                <div>
                                    <p className='p--map--rd'>{` ${o.endDate}`}</p>
                                </div>
                                <div><p className='descriptions'>{o.description}</p></div>
                            </div>
                    }
            }
                )}
            </div>
        ))
    )
}
export default Cv