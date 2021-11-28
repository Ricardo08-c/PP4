window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.amarillo'));   
     
    const seccionDados = Array.from(document.querySelectorAll('.tile1')); 
    const casillas = Array.from(document.querySelectorAll('.casilla')); 
    var currPlayer = 0;
    var casillaActualAmarillo = "5";
    var casillaActualAzul = "22";
    var darts1 = 0;
    var darts2 = 0;
    document.getElementById("botamarillo").onclick = function() {lanzarDados()};

    const userAction = (tile, index) => {
        //tile.innerText = "HOLA";    
        document.getElementById('myId').style.display="block";        

    }
    function eleccionDados (tile ,index) {
        
       if(tile.innerText!="" &&  tile.style.color != "red"){
           var val1 = parseInt(tile.innerText);
           if(currPlayer==0){
               var movimiento = parseInt(casillaActualAmarillo)+val1
               casillaActualAmarillo = movimiento.toString();
               tile.style.color  = "red";
               console.log(movimiento.toString());
               //elegirFicha()
               var c2 = getInnerText(movimiento.toString());
               c2.innerText = "+";
               c2.style.color = "yellow";
               c2.style.fontSize = "200%";
           }


       }
        


    }
    tiles.forEach( (tile, index) => {

        tile.addEventListener('click', () => userAction(tile, index));
    });
    seccionDados.forEach( (tile, index) => {

        tile.addEventListener('click', () => eleccionDados(tile, index));
    });


    
    function getInnerText(texto){   
        for( i = 0 ; i < casillas.length; i ++)  {
            if(casillas[i].innerText==texto){
                return casillas[i];
            }

        }
            
  
    }

    function lanzarDados () {
        darts1 = Math.round(Math.random() * (6 - 1) +1);        
        darts2 = Math.round(Math.random() * (6 - 1) +1);          
        seccionDados[currPlayer].innerText = darts1.toString();
        seccionDados[currPlayer+1].innerText = darts2.toString();           
        //getInnerText("64").innerText= "X";
        


    }


});