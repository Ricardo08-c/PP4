import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';




function Home({users}) {

  const [inputNombre, cambiarInputNombre] = useState('');
  let navigate = useNavigate();
  


  const redirect = () => {
    navigate('/Options', {name: inputNombre });
  }

  const handleSummit = (e) => {
    e.preventDefault();
    // Validar
    // si es correcto enviar
    console.log('Form enviado');
    console.log(inputNombre);
    users.userName = inputNombre;
    redirect();

  }

  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  }

  

  return (
    <div id = "AppContainer" >
        <h1 id = "WelcomeText">-Parchis-</h1>
        <div id = "MainContainer">
          <div id = "UserContainer">
            <h4>Ingrese el nombre del jugador</h4>
            <form id="myForm" action="" onSubmit={handleSummit} >   
              <input 
                id = "UserInput"
                type="text"
                name="nombre"
                value={inputNombre}
                onChange={handleInputNombre}
              />
            </form>
            <button form="myForm" class = "UserButton" type="submit">Ingresar</button>
          </div>
        </div>
    </div>
  );
}





export default Home