import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import clienteDato  from "./clienteDato"
import TaskForm  from "./TaskForm"

//console.log(clienteDato)
function ContenidoTabla() {
   
    const [cliente, setCliente] = useState([])
   
    const handleDelete = () => {

    }
    useEffect(() => {
        setCliente(clienteDato)
    }, [])
    return (
        <>
        

            {cliente.map(({ nombreCliente, id, precio, duracion, tiempoEstimado, estado }) => (
                <tr>
                    <th scope="row">{id}</th>
                    <td>{nombreCliente}</td>
                    <td>{precio}</td>
                    <td>{duracion}</td>
                    <td>{tiempoEstimado}</td>
                    <td>{estado}</td>
                    <td>
                        <button className="btn btn-success">imprimir</button>
                        <button className="btn btn-info">modificar</button>
                        <button className="btn btn-danger">eliminar</button>
                    </td>
                </tr>


            ))}


        </>)
}

export default ContenidoTabla