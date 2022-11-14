import React, { Component} from "react";

class Producto extends Component{
    render() {
        return(
            <div className="boxEncb">
                <h2>PRODUCTO</h2>
                <div className="img">
                    <img src ="https://media.istockphoto.com/id/1177900338/es/foto/taza-de-espresso-con-granos-de-caf%C3%A9.jpg?s=612x612&w=0&k=20&c=kK3bovtRdJjfHGAt7LX3FxgeRRRE762kOVBcAHpgdp0=" alt="carro" title="carros" width="150" height="150"/>
                </div>
                <div className="boxProduc">
                    <p>Material</p>
                    <h3>Descripcion</h3>
                </div>
                <div className="boxProduc">
                    <h3>Unidades</h3>
                    <h3 id="valor">{valor}</h3>
                    <input id="cantidad" type="number" className="Input" min="1" onClick={total}/>
                </div>
                <div className="boxProduc">
                    <h3>Precio Total</h3>
                    <p id="Tl">{total}</p>
                </div>
            </div>
        )
    }
}
export default Producto;

function total(){
    var ct = document.getElementById("cantidad").value;
    var vr = valor();
    var tlr = ct + vr;
    return document.getElementById("Tl").innerHTML = frt(tlr);
}
function frt (vt){
    return new Intl.NumberFormat('es-CO',{style: 'currency', currency:'COP', maximumFractionDigits: 0}).format(vt);
}
function valor (){
    var vlr = 30000;
    return document.getElementById("valor").innerHTML= frt(vlr);
}
