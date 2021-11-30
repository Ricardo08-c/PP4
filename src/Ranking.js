import './App.css';
import { useNavigate } from 'react-router-dom';


function Ranking({users, ganadores}) {

  let navigate = useNavigate();
  

  const redirect = () => {
    navigate('/Options');
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
            <h4 id = "CreateText">Ranking</h4>
            <ul class='ul-vertical'>
            <li> <h4 id = "CreateText">Ganador | Creador | ID</h4> </li>
            {ganadores.map((ganador) => (
            <li>
                <h4 id = "CreateText">
                {ganador.ganador} | {ganador.creador} | {ganador.identificador}
                </h4>
            </li>
            ))}
        </ul>
            <button class = "UserButton" onClick={handleSummit}>Volver</button>
          </div>
        </div>
    </div>
  );
}





export default Ranking