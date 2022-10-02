import React from "react";
import { useState, useContext, useEffect } from "react";
import DataContext from "./DataProvider";
import clienteDato  from "./clienteDato"
import { v4 as uuidv4 } from 'uuid';

function TaskForm({cliente}) {
    const {setCliente,nombre,setNombre, precio,setPrecio,estado,setEstado} = useContext(DataContext)
    

    const handleSubmitNombre = (e) => {
      setNombre(e.target.value)
      

    }
    const handleSubmitPrecio = (e) => {
        setPrecio(e.target.value)  
        
    }
    const handleSubmitEstado = (e) => {
          
       setEstado(e.target.value)  
       
    }
    const fecha = () => {
          
        let fecha = new Date()
        return fecha.getDay()+"-"+ fecha.getMonth() +"-"+  fecha.getFullYear() +" "+  fecha.getHours() +":"+ fecha.getMinutes()
     }

    const onSubmit = (e) =>{
        e.preventDefault()
        const nuevoCliente ={
            id: uuidv4(),
            nombreCliente: nombre,
            precio: precio,
            duracion: handleDuracion(precio),
            tiempoEstimado: handleTiempo(precio),
            fecha: fecha(),
            estado: estado
        }
        setCliente([...cliente, nuevoCliente])
        // console.log(nombre, precio)
        setPrecio(" ")  
        setNombre(" ")
        setEstado(e.target.value = "En Espera")
        
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

            <input type="text" value={nombre} onChange={handleSubmitNombre}/>
            <input type="number" value={precio} onChange={handleSubmitPrecio} />
            
                <select value={estado} name="estado" id="estado" onChange={handleSubmitEstado}>
                <option value="En Espera">En Espera</option>
                <option value="Aprobado" >Aprobado</option>
                <option value="Cancelado">Cancelado</option>
                <option value="Imprimiendo">Imprimiendo</option>
                <option value="Listo">Listo</option>
                </select>
            <button className="btn btn-info" type="submit">Guardar</button>
        </form>

    </>)

}

export default TaskForm