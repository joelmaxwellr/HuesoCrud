import React from "react";

import { useContext, useEffect, useState} from "react";

import DataContext from './DataProvider';
import clienteDato  from "./clienteDato"

import TaskForm  from "./TaskForm"

//console.log(clienteDato)
function ContenidoTabla({cliente}) {

   const {setCliente,nombre,setNombre, precio,setPrecio,estado,setEstado} = useContext(DataContext)

function handleDelete(e){
const id = parseInt(e.target.value)
        const elemento = cliente.filter(x =>
        x.id !== e.target.value
    )
    console.log(elemento)
    setCliente(elemento)
}

const handleEdit = (e) =>{
    
        const elementos = cliente.filter(x =>{
            if (x.id === e.target.value) {
                setPrecio(x.precio)
                setNombre(x.nombreCliente)
                setEstado(x.estado)
                
            /* x.precio=precio
            x.nombreCliente=nombre
            x.estado=estado */
            }
        
        
    }
    )
   /*  elemento.nombreCliente = nombre
    elemento.precio = precio
    elemento.estado = estado */

    console.log(elementos)

}


    /* useEffect(() => {
        setCliente(clienteDato,)
      }, [])
    */
    return (
        <>
            {cliente.map(({ nombreCliente, id, precio, duracion, tiempoEstimado, fecha, estado }) => (
                <tr key={id}>
                  {/*   <th scope="row">{id}</th> */}
                    <td>{nombreCliente}</td>
                    <td>{precio}</td>
                    <td>{duracion}</td>
                    <td>{tiempoEstimado}</td>
                    <td>{fecha}</td>
                    <td>{estado}</td>
                    
                    <td>
                        <button className="btn btn-success">imprimir</button>
                        <button 
                        className="btn btn-info text-white"
                        value={id} 
                        onClick={handleEdit}>
                            modificar</button>
                        <button
                        className="btn btn-danger" 
                        value={id}
                        onClick={handleDelete}>
                            eliminar</button>
                    </td>
                </tr>


            ))}


        </>)
}

export default ContenidoTabla