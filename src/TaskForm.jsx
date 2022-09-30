import React from "react";
import { useState } from "react";


function TaskForm(params) {
    const [nombre,setNombre] = useState("")
    const [precio,setPrecio] = useState(0)
    const handleSubmitNombre = (e) => {
        e.preventDefault()

        setNombre(e.target.value)
    }
    const handleSubmitPrecio = (e) => {
        e.preventDefault()
        setPrecio(e.target.value)
        console.log(e.target.value)
    }
    const handleDuracion = (precio) => {
      const duracion = precio/36*5.5
      return duracion
    }
    const handleTiempo = (precio) => {
       const tiempo = ((precio/36)*5.5 )+ 20
       return tiempo
    }
    const nuevoCliente ={
        id:1,
        nombreCliente: nombre,
        precio: precio,
        duracion: handleDuracion(precio),
        tiempoEstimado: handleTiempo(precio),
        estado: "Listo"
    }

    console.log(nuevoCliente)
    return (<>
        <form className="form d-flex flex-row" action="" >

            <input type="text" onChange={handleSubmitNombre}/>
            <input type="number" onChange={handleSubmitPrecio} />
            <button className="btn btn-info" type="submit">Guardar</button>
        </form>

    </>)

}

export default TaskForm