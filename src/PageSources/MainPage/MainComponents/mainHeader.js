import React, { useEffect } from 'react'
import './MainHeader.css'


const MainHeader = () => {
    useEffect(() => {
        let a = window.localStorage.getItem('val-2')
        let b = window.localStorage.getItem('value')
        let c = window.localStorage.getItem('val-base')
        let d = window.localStorage.getItem('first-val')
        if(!a) {
            window.localStorage.setItem('val-2', JSON.stringify([{position: "",employer: "",startTime: "",endTime: "",otherD: ""}]))
        }
        if(!b) {
            window.localStorage.setItem('value', JSON.stringify([{college: "",startDate: "", endDate: "", description: "", dropDown: ""}]))
        }
        if(!c) {
            window.localStorage.setItem('val-base', JSON.stringify(null))
        }
        if(!d) {
            window.localStorage.setItem('first-val', JSON.stringify([{name: "", surname: "", about: "", email: "", phone: "",nameErr: "", surnameErr: 
            "", emailErr: "", phoneErr: ""}]))
        }
    })
    return(
    <div className='Header--Main'>
        <h1>REDBERRY</h1>
    </div>
    )
}

export default MainHeader