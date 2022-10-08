import React from "react";
import { useState, useContext, useEffect } from "react";
import DataContext from "./DataProvider";
import clienteDato  from "./clienteDato"
import { v4 as uuidv4 } from 'uuid';

function TaskForm({cliente}) {
    const {id, setCliente,nombre,setNombre, precio,setPrecio,estado,setEstado, modificar, setModificar} = useContext(DataContext)
    

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
        return fecha.getDate()+"-"+ fecha.getUTCMonth() +"-"+  fecha.getFullYear() +" "+  fecha.getHours() +":"+ fecha.getMinutes()
     }

    const onSubmit = (e) =>{
        e.preventDefault()
        const nuevoCliente ={
            id: uuidv4(),
            nombreCliente: nombre.toUpperCase(),
            precio: separator(precio),
            duracion: handleDuracion(precio),
            tiempoEstimado: handleTiempo(precio),
            fecha: fecha(),
            estado: estado
        }
        setCliente([nuevoCliente,...cliente])
        // console.log(nombre, precio)
        setPrecio(" ")  
        setNombre(" ")
        setEstado(e.target.value = "En Espera")
        
    }
    const formatoHora = (duracion) =>{
        let horas = Math.floor(duracion/60)
        horas = (horas < 10) ? "0"+ horas : horas
        let minutos = Math.floor(duracion % 60)
        minutos = (minutos < 10) ? "0"+ minutos : minutos
        let segundos = Math.floor((duracion*60)% 60)
        segundos = (segundos < 10) ? "0"+ segundos : segundos
        return horas +  ":" + minutos + ":" + segundos
    }
    const handleDuracion = (precio) => {
      const duracion = precio/500*5.5
     return formatoHora(duracion)
    }
    const handleTiempo = (precio) => {
       const tiempo = ((precio/500)*5.5 )+ 20
       return formatoHora(tiempo)
    }

    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
      }
    console.log(id)
    /* console.log(nuevoCliente)
    console.log(cliente) */
    const modificarCliente = (e) =>{
    e.preventDefault()
    setModificar(true)
    

    const elementos = cliente.filter(x => {
        if (x.id === e.target.value) {
            setPrecio(0)
            setNombre("")
            setEstado("En Epera")

            x.precio=precio
            x.nombreCliente=nombre
            x.estado=estado
            setModificar(false)
            }
        })
        //const id = parseInt(e.target.value)
        const indice = cliente.map(x => x.id).indexOf(e.target.value)
        setCliente(cliente.concat(cliente.splice(indice, 1)))

        console.log(elementos)
        console.log(cliente)

        console.log(e.target.value)
     }
           
    const cancelarModificacion = () =>{
            setPrecio(0)
            setNombre("")
            setEstado("En Epera")
            setModificar(false)

    }
    useEffect(() => {
        setCliente(clienteDato)
      }, [])
   
   

/* const createCliente =(clientes)=>{
    setCliente(...cliente,clientes)  
} */
    return (<>
        <form className="form d-flex flex-row" action=""  onSubmit={onSubmit}>

            <input type="text" value={nombre} placeholder={"Cliente"} onChange={handleSubmitNombre}/>
            <input type="number" value={precio} placeholder={"Precio"} onChange={handleSubmitPrecio} />
            
                <select value={estado} name="estado" id="estado" onChange={handleSubmitEstado}>
                <option value="En Espera">En Espera</option>
                <option value="Aprobado" >Aprobado</option>
                <option value="Cancelado">Cancelado</option>
                <option value="Imprimiendo">Imprimiendo</option>
                <option value="Listo">Listo</option>
                </select>
            {modificar ? <div> <button className="btn btn-info" type="submit" value={id} onClick={modificarCliente}>Modificar</button> 
            <button className="btn btn-info" type="submit" value={id} onClick={cancelarModificacion}>Cancelar</button></div>:
             <button className="btn btn-info" type="submit" >Guardar</button>  
        }
        </form>

    </>)

}

export default TaskForm