import React from "react";
import ContenidoTabla from "./ContenidoTabla";
import TaskForm from "./TaskForm";

function HuesoCrud() {
    return (
        <>

            <h1>Hueso Jeans</h1>
            <TaskForm />
            <table class="table container">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Tiempo de Entrega</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <ContenidoTabla />
                </tbody>
            </table>
        </>
    )
}

export default HuesoCrud