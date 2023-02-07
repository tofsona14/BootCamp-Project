import React from "react";
import { useFormik } from "formik";
import { basicschema } from "./schema";
import './exerc.css'

const Exercise = () => {
    const { values, errors, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            repeatPassword: ""
        },
        validationSchema: basicschema
    })
    return(
        <form autoComplete="off">
            <label className={errors.email ? "accept" : "declined"} htmlFor="email">Email</label>
            <input
                value={values.email} 
                onChange={handleChange}
                onBlur={handleBlur}
                id="email" type='email' placeholder="Enter your email"/>
            <label htmlFor="age">Age</label>
            <input
                value={values.age} type="number" onChange={handleChange} onBlur={handleBlur} name="age" id="age"/>
            <label htmlFor="password">Password</label>
            <input value={values.password} type="password" onChange={handleChange} onBlur={handleBlur} name="password" id="password" />
            <label  htmlFor="repeatPassword">Repeat-Password</label>
            <input value={values.repeatPassword} type="password" onChange={handleChange} onBlur={handleBlur} name="repeatPassword" id="repeatPassword" />
        </form>
    )
}
export default Exercise