import React from "react";
import ContenidoTabla from "./ContenidoTabla";
import TaskForm from "./TaskForm";
import {useContext} from "react";
import DataContext from "./DataProvider";

function HuesoCrud({createCliente}) {
    const {cliente, setCliente} = useContext(DataContext)
   
    return (
        <>

            <div className="d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-center">

            <h1>Hueso Jeans</h1>
                </div>
                <div className="d-flex justify-content-center" >

            <TaskForm cliente={cliente} createCliente={createCliente}/>
                </div>

            </div>
            <table className="table container text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Tiempo de Entrega</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <ContenidoTabla cliente={cliente}/>
                </tbody>
            </table>
        </>
    )
}

export default HuesoCrud