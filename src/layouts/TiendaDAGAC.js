import {useState} from "react"

import {AddProd,ListarProd} from "../components/Tienda/"

export const TiendaDAGAC = () => {

    const [Tienda, setTienda] = useState({})
    const [Tiendas, setTiendas] = useState([
        { name: "Falda Luna", precio: "48000", cantidad:"10",imagen:"...." }])

    return (
        <div>
        <h1 className="header">Tienda</h1>
        <AddProd Tiendas={Tiendas} setTiendas={setTiendas} />
        <ListarProd Tiendas={Tiendas} setTienda={setTienda} />
        
      </div>
    );
  };