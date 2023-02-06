import React from 'react'
import './DropDown.css'
import { useState } from 'react'

const DropDown = (props) => {
    const [isActive, setIsActive] = useState(false)
    const [select, setSelect] = useState('Choose')
    const option = ["React", "Vue", 'angular']
    console.log(isActive)
    
    return(
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>{select}</div>
            {isActive && (
                <div className='dropdown-content'>
                    {option.map((option) => (
                        <div onClick={(e) => {
                            setSelect(option)
                            setIsActive(false)
                            props.onSave(isActive)
                        }} 
                        className="dropdown-item">
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropDown