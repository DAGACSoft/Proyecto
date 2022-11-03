import JSON from "../../data/product.json"
export default function AddProd(props) {
  return (
      <div className="add-Producto">
        <h1>Agregar Producto</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
  
            let data = {
              name: e.target.name.value,
              precio: e.target.precio.value,
              cantidad: e.target.cantidad.value,
              imagen: e.target.imagen.value,
              props,
            };
  
            onSubmit(data);
            e.target.reset();
          }}
        >
          <label>
            Nombre del Producto:
            <input type="text" name="name" />
          </label>
          <br />
          <br />
          <label>
            Precio de Producto:
            <input type="number" name="precio" />
          </label>
          <br />
          <br />
          <label>
            Cantidad:
            <input type="number" name="cantidad" />
          </label>
          <br />
          <br />
          <label htmlFor="img">
            Imagen del Producto:  
            <input  type="file" name="imagen"/>
          </label>
          <br />
          <br />
          <input type="submit" name="save_producto" value="Guardar Producto" />
        </form>
      </div>
  );
}
  
const onSubmit = (data) => {
    let { name, precio, cantidad, imagen, props } = data;
    props.setTiendas([...props.Tiendas, { name, precio, cantidad, imagen }]);
  
    

};
