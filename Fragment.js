import { Fragment } from "react";
export const App =() =>{
    return(
        <Fragment>
            <html>
                <head>
                    <title>Rorte de Ventas</title>
                </head>
                <body>
                    <h1>Este es el Reporte de Ventas</h1>
                    <h1 className="Sub_Title">Venta por Mes</h1>
                    <div className="box_Title"> 
                        <h2>Venta por Unidades </h2>
                    </div>
                    <div className="box_Title">
                        <h2>Venta $</h2>
                    </div>
                    <div className="box_Title">
                        <h2>Tipo de Consulta</h2>
                    </div>
                    <div className="box_VentaMes">
                        <h2 id="Venta_U">0</h2>
                    </div>
                    <div className="box_VentaMes">
                        <h2 id="Venta_V">0</h2>
                    </div>
                    <div className="box_VentaMes">
                        <p></p>
                        <select className="MES" id="MES_I">
                        <option value="VACIO" selected>Selecciones mes</option>
                        <option value="ENERO">ENERO</option>
                        <option value="FEBRERO">FEBRERO</option>
                        <option value="MARZO">MARZO</option>
                        <option value="ABRIL">ABRIL</option>
                        <option value="MAYO">MAYO</option>
                        <option value="JUNIO">JUNIO</option>
                        <option value="JULIO">JULIO</option>
                        <option value="AGOSTO">AGOSTO</option>
                        <option value="SEPTIEMBRE">SEPTIEMBRE</option>
                        <option value="OCTUBRE">OCTUBRE</option>
                        <option value="NOVIEMBRE">NOVIEMBRE</option>
                        <option value="DICIEMBRE">DICIEMBRE</option>
                        </select>
                        <p></p>
                        <button id="consultar" onClick={constultM}>Consulta</button>
                    </div>
                    <h1 className="Sub_Title">Venta por material</h1>
                    <div className="box_VentaMes">
                        <h2 id="Venta_U">0</h2>
                    </div>
                    <div className="box_VentaMes">
                        <h2 id="Venta_V">0</h2>
                    </div>
                    <div className="box_VentaMes">
                        <p></p>
                        <input id="material"></input>
                        <p></p>
                        <button id="consultar" onClick={constultM}>Consulta</button>
                    </div>
                </body>
            </html>
        </Fragment>
    );
} 

const Venta_mes =[
    {MES: 'AGOSTO', Unds: 88988989, Valor: 1000000},
    {MES: 'SEPTIEMBRE',Unds: 100001, Valor: 10067001},
    {MES: 'OCTUBRE',Unds: 103001, Valor: 1020001}
]

function look_U(Mes_id){
    const K = Venta_mes.findIndex(T => T.MES === Mes_id);
    if(K<0){
        return 0;
    }
    else{
    return new Intl.NumberFormat('es-CO').format(Venta_mes[K].Unds);}
}

function look_V(Mes_id){
    const K = Venta_mes.findIndex(T => T.MES === Mes_id);
    if(K<0){
        return 0;
    }
    else{
    return new Intl.NumberFormat('es-CO',{style: 'currency', currency:'COP', maximumFractionDigits: 0}).format(Venta_mes[K].Valor);}
}

function constultM (){
    var Vu =  look_U(document.getElementById("MES_I").value);
    document.getElementById("Venta_U").innerHTML = Vu;
    var Vv =  look_V(document.getElementById("MES_I").value);
    document.getElementById("Venta_V").innerHTML = Vv;
}