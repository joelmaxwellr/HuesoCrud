import React from "react";

import { useContext, useEffect, useState} from "react";

import DataContext from './DataProvider';
import clienteDato  from "./clienteDato"

import TaskForm  from "./TaskForm"

//console.log(clienteDato)
function ContenidoTabla({cliente}) {

   const {setCliente} = useContext(DataContext)
   // setCliente(clienteDato)

function handleDelete(clienteID){
    console.log(clienteID)
/*   cliente.find(cliente =>{
        cliente.id !== clienteID
    }) */
}


    /* useEffect(() => {
        setCliente(clienteDato,)
      }, [])
    */
    return (
        <>
            {cliente.map(({ nombreCliente, id, precio, duracion, tiempoEstimado, fecha, estado }) => (
                <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{nombreCliente}</td>
                    <td>{precio}</td>
                    <td>{duracion}</td>
                    <td>{tiempoEstimado}</td>
                    <td>{fecha}</td>
                    <td>{estado}</td>
                    
                    <td>
                        <button className="btn btn-success">imprimir</button>
                        <button className="btn btn-info">modificar</button>
                        <button className="btn btn-danger"  onClick={handleDelete(id)}>eliminar</button>
                    </td>
                </tr>


            ))}


        </>)
}

export default ContenidoTabla