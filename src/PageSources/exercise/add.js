import {useState} from 'react'
import './Add.css'


const Add = () => {
    const[formVal, setFormVal] = useState([{name: "", email: ""}])
    const formValidation = (formVal) => {
        const data = [...formVal]
        for(let index = 0; index < data.length; index++) {
            const element = data[index];
            if(data[index].name == "") {
                data[index].nameCheck = "name required"

            }else if (data[index].name[0].length < 2) {
                data[index].nameLengthCheck = "name should be more than 2 "
            }
            else {
                data[index].nameCheck = ""
                data[index].nameLengthCheck = ""
            }
            setFormVal(data)
        }
        console.log(data)
    }
    const addRow = () => {
        setFormVal([...formVal, {name:"", email: ""}])
    }
    const onSubmit = (e) => {
        e.preventDefault();
    }
    const onRemove = (i) => {
        const newForm = [...formVal]
        newForm.splice(i, 1)
        setFormVal(newForm)
        console.log(i)
    }
    const onHandle = (e, i) => {
        let newForm = [...formVal]
        newForm[i][e.target.name] = [e.target.value]
        setFormVal(newForm)
        formValidation(formVal)

        
    }
    return(
        <div className='App'>
            <div style={{width: "60%", margin:"20px auto"}}>
                <form onSubmit={onSubmit}>
                {formVal.map((item, i) => (
                    <div>
                        <lable>Name</lable>
                        <input type='text' name="name" className={item.name.length == 0 ? 'l' :item.nameCheck == "" ? 'o' : 's'} value={item.name || ""}  onChange={(e) => onHandle(e, i)} />
                        <span>{item.nameCheck}{item.nameLengthCheck}</span>
                        <lable>Email</lable>
                        <input type='text' name="email" value={item.email || ""} onChange={(e) => onHandle(e, i)} />
                        {i == 0 ? "" :  <button style={{width: "5vw", height: "5vh"}} onClick={()=>onRemove(i)}></button>}
                    </div>
                ))}
                <button onClick={onSubmit}></button>
                <button  onClick={addRow} type='submit'></button>
                </form>
            </div>
        </div>
    )
}

export default Add