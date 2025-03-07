import './App.css'
import empleados from '../models/Empleados'

function App() {

  const iteraEmpleados = () => {
    return empleados.map((empleado, i) => (
      <li className='envoltura' key={i}>
        <p>Nombre: {empleado.name}</p>
        <p>Apellidos: {empleado.lastName}</p>
        <p>Hobbies: {empleado.hobbies.join(', ')}</p>
        <p>Edad: {empleado.age}</p>
      </li>
    ));
  };

  return (
      <>
      <h3>Empleados: </h3>
      <ul itemID='listaEmpleados'>
           {iteraEmpleados()}
      </ul>
      </>
  )
}

export default App
