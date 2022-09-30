import React from 'react';
import ReactDOM from 'react-dom/client';
import Boton from "./Boton"
import TaskCard from "./TaskCard"
import Timer from "./Timer"
import Calculadora from "./Calculadora"

import Button from 'react-bootstrap/Button';

// or less ideally



import App from './App';
import HuesoCrud from './HuesoCrud';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HuesoCrud>
      
    </HuesoCrud>
   {/*  <Timer />
    <App />
    <TaskCard />
    <Boton text='click' /> */}


    
  </React.StrictMode>
);

