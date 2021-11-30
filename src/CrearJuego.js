import './App.css';
import { useNavigate } from 'react-router-dom';

function CrearJuego({users}) {

  let navigate = useNavigate();
  

  const redirect = () => {
    navigate('/CrearJuego');
  }

  const handleSummit = (e) => {
    e.preventDefault();
    console.log('Form enviado');
    redirect();

  }
  

  return (
    <div id = "AppContainer" >
        <h1 id = "WelcomeText">-Parchis-</h1>
        <div id = "MainContainer">
          <div id = "UserContainer">
            <form action="" onSubmit={handleSummit} >   
              <h4 id = "CreateText">El nombre del creador es: {users.userName}</h4>
              
              <h4 id = "CreateText">Selecciona el tipo de juego</h4>
              <select id ="select">
                <option  value="Vs">Vs</option>
                <option  value="Tiempo">Vs Tiempo</option>
              </select>
              <h4 id = "CreateText">Selecciona la cantidad de jugadores</h4>
              <select id ="select">
                <option value="2 jugadores">2 Jugadores</option>
                <option value="4 jugadores">4 Jugadores</option>
              </select>
            </form>
            <button class = "UserButton" type="submit">Crear</button>
          </div>
        </div>
    </div>
  );
}





export default CrearJuego