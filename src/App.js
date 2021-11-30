import './App.css';

import Options from './Options'
import Home from './Home'
import CrearJuego from './CrearJuego'
import Ranking from './Ranking'
import Tablero from './Tablero'

import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {


  const users = {userName: ''};

  const ganadores = [
    {ganador: 'Pepe', creador: 'Brandon', identificador: 1},
    {ganador: 'Pepe', creador: 'Brandon', identificador: 2},
    {ganador: 'Mario', creador: 'Ricardo', identificador: 3},
    {ganador: 'Pepe', creador: 'Brandon', identificador: 4},
    {ganador: 'Maria', creador: 'Brandon', identificador: 5},
  ]

  return (
    <div className="App">
      <BrowserRouter> 
        <Routes> 
          
          <Route path='/Options' element={<Options users={users} ganadores={ganadores} authed={true}/> }/>
          <Route path='/CrearJuego' element={<CrearJuego users={users} authed={true}/>} />
          <Route path='/Ranking' element={<Ranking users={users} ganadores={ganadores}  authed={true}/>} />
          <Route path='/Tablero' element={<Tablero users={users}/>} authed={true}/>
          <Route path='/' element={<Home users={users} authed={true}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
