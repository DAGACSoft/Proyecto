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
                    <div className="box_Title"> 
                        <h2>Venta por Unidades </h2>
                    </div>
                    <div className="box_Title">
                        <h2>Venta $</h2>
                    </div>
                    <div className="box_Title">
                        <h2>Venta mes</h2>
                    </div>
                    <div className="box_Data">
                        <h2>{look_U()}</h2>
                    </div>
                    <div className="box_Data">
                        <h2>{look_V()}</h2>
                    </div>
                    <div className="box_Data">
                        <p></p>
                        <select className="MES" id="MES_I">
                        <option value="VACIO" selected>Selecciones mes</option>
                        <option value="AGOSTO">AGOSTO</option>
                        <option value="SEPTIEMBRE">SEPTIEMBRE</option>
                        </select>
                    </div>
                </body>
            </html>
        </Fragment>
    );
} 

const Venta_mes =[
    {MES: 'AGOSTO', Unds: 88988989, Valor: 1000000},
    {MES: 'SEPTIEMBRE',Unds: 100001, Valor: 1000001},
    {MES: 'OCTUBRE',Unds: 103001, Valor: 1020001}
]

function look_U(Mes_id){
    const K = Venta_mes.findIndex(T => T.MES === Mes_id);
    if(K<0){
        return 0;
    }
    else{
    return Venta_mes[K].Unds;}
}

function look_V(Mes_id){
    const K = Venta_mes.findIndex(T => T.MES === Mes_id);
    if(K<0){
        return 0;
    }
    else{
    return Venta_mes[K].Valor;}
}
