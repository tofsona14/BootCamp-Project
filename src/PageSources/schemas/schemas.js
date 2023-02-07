import * as yup from 'yup'
const minTW = /^[ა-ჰ]{2,}$/
export const secondSchema = yup.object().shape({
    name: yup.string().matches(minTW, {message: "type min 2 letter"}).required("required"),
    surname: yup.string().matches(minTW, {message: "type min 2 letter"}).required("required"),
    email: yup.string().email().required("required"),
    phone: yup.number().positive().integer().required("required")


})