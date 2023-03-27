import './App.css';
import freeCodeCampLogo from './imgs/freecodecamp-logo.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [contador, setNumClicks] = useState(0);

  const manejarClick = ()=>{
    setNumClicks( contador+1 );
  }
  const reiniciarContador = ()=>{
    setNumClicks( 0 );
  }


  return (
    <div className="App">
      <Contador nroClicks={contador}/>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-Principal'>
        <Boton
          texto='Clic'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
