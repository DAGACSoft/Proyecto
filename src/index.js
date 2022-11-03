//Practica de configuracion y funcionalidad Express


/*var express = require ("express")
var app = express()


app.get('/', function (require,res){
    res.send("HOLA MUNDO")
})

app.listen(3000, function () {
    console.log('REACT en https://localhost:3000')
}) 


'use strict'//ES6
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("HOLA MUNDO con ES6")
})

app.listen(3000, () => {console.log('React1 port')})  
*/

import React from 'react'; //Importa React
import ReactDOM from 'react-dom/client'; // Importa el DOM
import {TiendaDAGAC} from "./layouts/TiendaDAGAC";
import "./Front.css"
import reportWebVitals from "./reportWebVitals"
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';


//Mi primer componente
/*function App(){
    return (
        <div>
        <h2>Semana 3</h2>
        <a>Prueba con otro elemento</a>
        <p>Un elemento +</p>
        </div>
    )
}*/

//Renderizaciones
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TiendaDAGAC />
  </React.StrictMode>
);