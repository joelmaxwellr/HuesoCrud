import React from "react";
import HuesoCrud from './HuesoCrud';
import DataContext from './DataProvider';
import { useState } from "react";
import clienteDato from "./clienteDato"
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [cliente, setCliente] = useState([])
  
  /* useEffect(() => {
   setCliente(clienteDato)
  }, [])
   */
  
  return (
    <>

      <DataContext.Provider value={{ cliente, setCliente }}>
        <HuesoCrud />
      </DataContext.Provider>

    </>
  )
}

export default App;
