import React from "react";
import { useState, useContext, useEffect } from "react";
import DataContext from "./DataProvider";
import clienteDato  from "./clienteDato"


function TaskForm({cliente}) {
    const {setCliente} = useContext(DataContext)
    const [nombre,setNombre] = useState("")
    const [precio,setPrecio] = useState(0)
    const [estado,setEstado] = useState("En Espera")

    const handleSubmitNombre = (e) => {
      setNombre(e.target.value)
      

    }
    const handleSubmitPrecio = (e) => {
        setPrecio(e.target.value)  
        
    }
    const handleSubmitEstado = (e) => {
          
       setEstado(e.target.value)  
        
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        const nuevoCliente ={
            id: cliente.length + 1,
            nombreCliente: nombre,
            precio: precio,
            duracion: handleDuracion(precio),
            tiempoEstimado: handleTiempo(precio),
            estado: estado
        }
        setCliente([...cliente, nuevoCliente])
        // console.log(nombre, precio)
        // setPrecio(" ")  
        // setNombre(" ")
    }
    const handleDuracion = (precio) => {
      const duracion = precio/500*5.5
      return duracion
    }
    const handleTiempo = (precio) => {
       const tiempo = ((precio/500)*5.5 )+ 20
       return tiempo
    }
    
    /* console.log(nuevoCliente)
    console.log(cliente) */

    useEffect(() => {
        setCliente(clienteDato)
      }, [])
   
   

/* const createCliente =(clientes)=>{
    setCliente(...cliente,clientes)  
} */
    return (<>
        <form className="form d-flex flex-row" action=""  onSubmit={onSubmit}>

            <input type="text" onChange={handleSubmitNombre}/>
            <input type="number" onChange={handleSubmitPrecio} />
            
                <select name="estado" id="estado" onChange={handleSubmitEstado}>
                <option value="En Espera">En Espera</option>
                <option value="Aprobado">Aprobado</option>
                <option value="Cancelado">Cancelado</option>
                <option value="Imprimiendo">Imprimiendo</option>
                <option value="Listo">Listo</option>
                </select>
            <button className="btn btn-info" type="submit">Guardar</button>
        </form>

    </>)

}

export default TaskForm