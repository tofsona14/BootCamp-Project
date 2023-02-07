import React from "react";
import { useFormik } from "formik";

const Exercise = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            repeatPassword: ""
        }
    })
    console.log(formik)
    return(
        <form autoComplete="off">
            <label htmlFor="email">Email</label>
            <input
                value={formik.values.email} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email" type='email' placeholder="Enter your email"/>
            <label htmlFor="age">Age</label>
            <input
                value={formik.values.age} type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} name="age" id="age"/>
            <label htmlFor="password">Password</label>
            <input value={formik.values.password} type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" id="password" />
            <label htmlFor="repeatPassword">Repeat-Password</label>
            <input value={formik.values.repeatPassword} type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} name="repeatPassword" id="repeatPassword" />
        </form>
    )
}
export default Exercise