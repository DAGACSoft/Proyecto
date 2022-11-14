import Producto from './componentes/Productos';
import Total from './componentes/Total';
import './Styles.css'
function App() {
  return (
    <div>
      <h1 className='Title'>CARRO DE PRODUCTOS</h1>
      <Producto/>
      <Total/>
    </div>
  );
}

export default App;
