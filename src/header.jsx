import './App.css'
import logoEmpresa from './assets/cocretainc.jpg'

function Header() {
  return (
      <>
      <header>
        <h1>Cocreta INC</h1>
        <img src={logoEmpresa} alt="Logo de la Empresa" />
      </header>
      </>
  )
}

export default Header