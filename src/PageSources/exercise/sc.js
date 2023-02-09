import react from 'react'
import { useState } from 'react'
const SS = () => {
    const [sdad, setSdad] = useState("")
    var saa = [
        {
            name: "d",
            surname: 's',
            id: 1
        }

        
    ]
    var k = {
        name: "ss",
        dd: "s",
        id: 2
    }

    const onClick = () => {
        setSdad([...sdad, {name: '', id: "" } ])
       
    }
    console.log(sdad)

    return(
        <div>
            <button onClick={onClick}> </button>
        </div>
    )
}

export default SS