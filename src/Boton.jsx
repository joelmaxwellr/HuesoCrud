import {useState, useEffect} from "react"

function Boton({text}){
    const [numero, setNumero] = useState(0)
    useEffect(()=>{
        console.log("hola")
    },[numero])

    return( <div>
    <button onClick={()=> setNumero(numero+1)}>{numero}</button>
    <h1>{numero}</h1>
    </div>
    )
}

export default Boton 