import { BrowserRouter, Route, Routes } from 'react-router';
import './CSS/App.css';
import Inicio from './Paginas/Inicio';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
