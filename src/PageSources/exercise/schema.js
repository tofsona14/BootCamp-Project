import * as yup from 'yup'

export const basicschema = yup.object().shape({
    email: yup.string().email("please enter a valid email").required("required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup
    .string()
    .min(5),
    repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Password must match")
    .required("Required")
})