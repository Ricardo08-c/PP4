import './App.css';
import {useNavigate} from 'react-router-dom'

function Options( {users} ) {

  let navigate = useNavigate();


  const redirect = () => {
    navigate('/CrearJuego');
  }

  const handleSummit = (e) => {
    e.preventDefault();
    console.log('Form enviado');
    redirect();

  }

  const handleSummit2 = (e) => {
    e.preventDefault();
    console.log('Form enviado');
    navigate('/Ranking');
  }

  const handleSummit3 = (e) => {
    e.preventDefault();
    navigate('/Tablero');
  }

  return (
    <div id = "AppContainer" >
        <h1 id = "WelcomeText">-Parchis-</h1>
        <div id = "MainContainer">
          <div id = "UserContainer">
            <h2>
              Bienvenido: {users.userName}
            </h2>
            <button class = "OptionButton" onClick={handleSummit3} >Unirse a una partida</button>
            <button class = "OptionButton" onClick={handleSummit}>Crear una partida</button>
            <button class = "OptionButton" onClick={handleSummit2}>Ver Ranking</button>
          </div>
        </div>
    </div>
  );
}

export default Options;
