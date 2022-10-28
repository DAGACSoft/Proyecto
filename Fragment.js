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
                        <h2 id="Venta_Um">0</h2>
                    </div>
                    <div className="box_VentaMes">
                        <h2 id="Venta_Vm">0</h2>
                    </div>
                    <div className="box_VentaMes">
                        <p></p>
                        <input id="material" type="text"></input>
                        <p></p>
                        <button id="consultarM" onClick={constultVm}>Consulta</button>
                    </div>
                </body>
            </html>
        </Fragment>
    );
} 

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


function look_Um(Mes_id,Mat){
    const m = Venta_Mat.findIndex(T => T.Material === Mat);
    const k = Venta_Mat[m].MESES.findIndex(t => t.MES === Mes_id);
    if(k<0){
        return 0;
    }
    else{
    return new Intl.NumberFormat('es-CO').format(Venta_Mat[m].MESES[k].Unds);}
}

function look_Vm(Mes_id,Mat){
    const m = Venta_Mat.findIndex(T => T.Material === Mat);
    const k = Venta_Mat[m].MESES.findIndex(t => t.MES === Mes_id);
    if(k<0){
        return 0;
    }
    else{
    return new Intl.NumberFormat('es-CO',{style: 'currency', currency:'COP', maximumFractionDigits: 0}).format(Venta_Mat[m].MESES[k].Valor);}
}

function constultVm (){
    var Vum =  look_Um(document.getElementById("MES_I").value,document.getElementById("material").value);
    document.getElementById("Venta_Um").innerHTML = Vum;
    var Vvm =  look_Vm(document.getElementById("MES_I").value, document.getElementById("material").value);
    document.getElementById("Venta_Vm").innerHTML = Vvm;
}


const Venta_mes =[
    {MES: 'AGOSTO', Unds: 88988989, Valor: 1000000},
    {MES: 'SEPTIEMBRE',Unds: 100001, Valor: 10067001},
    {MES: 'OCTUBRE',Unds: 103001, Valor: 1020001}
]

const Venta_Mat =[
    {
        Material: '12345',
        MESES:[
            {
                MES:'AGOSTO',
                Unds: 589,
                Valor: 10000
            },
            {
                MES:'SEPTIEMBRE',
                Unds: 589372,
                Valor: 9041
            }
        ]
    },
    {
        Material: '1234',
        MESES:[
            {
                MES:'AGOSTO',
                Unds: 56,
                Valor: 9071
            },
            {
                MES:'SEPTIEMBRE',
                Unds: 589372,
                Valor: 9041
            }
        ]
    }
]  