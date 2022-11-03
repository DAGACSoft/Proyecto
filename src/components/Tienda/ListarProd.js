export default function ListarProd(props) {
  const listItems = props.Tiendas.map((Tienda, i) => (
    <li key={i} onClick={selectTienda(props, i)}>
      {Tienda.name}: {Tienda.precio}: {Tienda.cantidad}: {Tienda.imagen}
    </li>
  ));

  return (
    <div className="list-Producto">
      <h1>Listar Productos</h1>
      <ul className="list">
        {listItems} 
      </ul>
    </div>
  ); 
}

const selectTienda = (props, i) => {
  return () => {
    props.setTinda(props.Tiendas[i]);
  };
};