import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// or less ideally

const Calculadora = () => {

    const [total, setTotal] = useState("")

    const handlerChar = (e) => {
        setTotal(total.concat(e.target.value))
    }
    const calcular = () => {
        setTotal(eval(total).toString())
    }
    const back = () => {
        setTotal(total.slice(0, -1))
    }



    return (
        <>
            <h1>{total}</h1>
            <div className="container flex-lg-column">

                <div>
                    <button className="btn btn-primary">%</button>
                    <button className="btn btn-primary">CE</button>
                    <button className="btn btn-primary">C</button>
                    <button className="btn btn-primary" onClick={back} >back</button>
                </div>
                <div>

                    <button className="btn btn-primary" onClick={handlerChar} value={7}>7</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={8}>8</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={9}>9</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={"/"}>/</button>
                </div>
                <div>

                    <button className="btn btn-primary" onClick={handlerChar} value={4}>4</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={5}>5</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={6}>6</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={"*"}>X</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handlerChar} value={1}>1</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={2}>2</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={3}>3</button>
                    <button className="btn btn-primary" onClick={handlerChar} value={"+"}>+</button>
                </div>

                <button className="btn btn-primary">+/-</button>
                <button className="btn btn-primary" onClick={handlerChar} value={0}>0</button>
                <button className="btn btn-primary" onClick={handlerChar} value={"."}>.</button>
                <button className="btn btn-primary" onClick={calcular} >=</button>
            </div>
        </>
    )
}

export default Calculadora