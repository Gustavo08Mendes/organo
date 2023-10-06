import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/formulario/formulario';

function App() {

  const [colaborador, setColaborador] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}

export default App;
