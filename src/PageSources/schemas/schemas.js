import * as yup from 'yup'
const minTW = /^[ა-ჰ]{2,}$/
const numd = /^\+995\d{9}$/
const emailC = /redberry.ge$/
const minTL = /\w{2}/
export const secondSchema = yup.object().shape({
    name: yup.string().matches(minTW, {message: "type min 2 letter"}).required("required"),
    surname: yup.string().matches(minTW, {message: "type min 2 letter"}).required("required"),
    phone: yup.string().matches(numd, 'error message').required("required"),
    email: yup.string().matches(emailC, {message: "isn't end with redberry.ge"}).required("required"),
                            

})

export const thirdSchema = yup.object().shape({
    position: yup.string().matches(minTW, {message: 'need another letter'}).required("required")
})