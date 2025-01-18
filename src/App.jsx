import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './CSS/App.css';
import Inicio from './Paginas/Inicio';

function App() {
  const [datos, setDatos] = useState({
    plantel: '',
    turno: '',
    modalidad: '',
    carrera: '',
  });

  const [opcionesFiltradas, setOpcionesFiltradas] = useState({
    turnos: [],
    modalidades: [],
    carreras: [],
    carrerasPorModalidad: {},
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Inicio
                datos={datos}
                setDatos={setDatos}
                opcionesFiltradas={opcionesFiltradas}
                setOpcionesFiltradas={setOpcionesFiltradas}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
