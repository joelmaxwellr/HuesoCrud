import React from "react";
import "./contenidoTabla.css"

import { useContext, useEffect, useState } from "react";

import DataContext from './DataProvider';
import clienteDato from "./clienteDato"

import TaskForm from "./TaskForm"

//console.log(clienteDato)
function ContenidoTabla({ cliente }) {

    const { setCliente, nombre, setNombre, precio, setPrecio, estado, setEstado, setModificar, modificar } = useContext(DataContext)

    function handleDelete(e) {
        const id = parseInt(e.target.value)
        const elemento = cliente.filter(x =>
            x.id !== e.target.value
        )
        console.log(elemento)
        setCliente(elemento)
    }

    const handleEdit = (e) => {


        const elementos = cliente.filter(x => {
            if (x.id === e.target.value) {
                setPrecio(x.precio)
                setNombre(x.nombreCliente)
                setEstado(x.estado)

                /* x.precio=precio
                x.nombreCliente=nombre
                x.estado=estado */
            }
        })
        //const id = parseInt(e.target.value)
        const indice = cliente.map(x => x.id).indexOf(e.target.value)
        
        // setCliente([...cliente, elementos])
        console.log(indice)
        console.log(cliente)
        console.log(modificar)

    }


    useEffect(() => {
        setModificar(modificar)
      },[modificar])
   
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