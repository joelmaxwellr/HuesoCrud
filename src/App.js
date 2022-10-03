import React from "react";
import HuesoCrud from './HuesoCrud';
import DataContext from './DataProvider';
import { useState } from "react";
import clienteDato from "./clienteDato"
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [cliente, setCliente] = useState([])
  const [nombre,setNombre] = useState("")
    const [precio,setPrecio] = useState(0)
    const [estado,setEstado] = useState("En Espera")
    const [modificar, setModificar] = useState(false)
  
  /* useEffect(() => {
   setCliente(clienteDato)
  }, [])
   */
  
  return (
    <>

      <DataContext.Provider value={{ cliente, setCliente, nombre, setNombre, precio, setPrecio, estado, setEstado, modificar, setModificar}}>
        <HuesoCrud />
      </DataContext.Provider>

    </>
  )
}

export default App;
