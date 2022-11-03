import {Fragment,useState} from "react"
import prodFrom from "../data/product.json"
export const App = () => {
    const [product, setProduct] = useState([]);
    
    return (
        <Fragment>
            <html>
                <head>
                    <title>PRODUCTOS</title>
                </head>
                <body>
                    <h1>Agregar Nuevos Productos</h1>
                    <div className="form-group">
                        <label htmlFor="name">Producto:</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Ingresar Nombre"
                            
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio:</label>
                        <input 
                            type="number"
                            step="1"
                            min="0"
                            className="form-control"
                            name="precio"
                            placeholder="Ingresar Precio"
                            
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cantidad">Cantidad:</label>
                        <input 
                            type="number"
                            step="1"
                            min="0"
                            className="form-control"
                            name="cantidad"
                            placeholder="Ingresa Cantidad"
                            
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="img">Imagen:</label>
                        <input 
                            type="file"
                            name="imagen"
                            className="form-control"
                            
                        />
                    </div>
                    <button onClick={agregar}>Mensaje</button>
                    <button onClick={saveProduct(product, setProduct)}>Agregar Producto</button>
                    <button onClick={agregar}>Mensaje</button>
                </body>
            </html>
        </Fragment>
    )
}

function agregar(){
    alert("Este Boton activa un evento")
}

function saveProduct(product,setProduct){
    return() => {
        setProduct (prodFrom)
    }
}

   
    