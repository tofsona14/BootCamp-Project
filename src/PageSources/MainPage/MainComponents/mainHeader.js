import React, { useEffect } from 'react'
import './MainHeader.css'


const MainHeader = () => {
    useEffect(() => {
        let a = window.localStorage.getItem('val-2')
        let b = window.localStorage.getItem('value')
        let c = window.localStorage.getItem('val-base')
        let d = window.localStorage.getItem('first-val')
        let o = window.localStorage.getItem('infos')
        let p = window.localStorage.getItem('full')
        
        if(!a) {
            window.localStorage.setItem('val-2', JSON.stringify([{position: "",employer: "",start_time: "",due_time: "",description: ""}]))
        }
        if(!b) {
            window.localStorage.setItem('value', JSON.stringify([{college: "",startDate: "", endDate: "", description: "", dropDown: "",collegeChecks: "",collegeCheck: "",dropDownChecks: "",dropDownCheck: "", endDateCheck: ""}]))
        }
        if(!c) {
            window.localStorage.setItem('val-base', JSON.stringify(null))
        }
        if(!d) {
            window.localStorage.setItem('first-val', JSON.stringify([{name: "", surname: "", about: "", email: "", phone: "",nameErr: "", surnameErr: 
            "", emailErr: "", phoneErr: ""}]))
        }
        if(!o) {
            window.localStorage.setItem('infos', JSON.stringify([{position: "", employer:"",start_date:"",due_date:"",description:""}]))

        }
        if(!p) {
            window.localStorage.setItem('full', JSON.stringify([{institute:"",degree_id:"",due_date:"",description:"" }]))

        }
        // [{institute:"",degree_id:"",due_date:"",description:"" }]
    })
    return(
    <div className='Header--Main'>
        <h1>REDBERRY</h1>
    </div>
    )
}

export default MainHeader