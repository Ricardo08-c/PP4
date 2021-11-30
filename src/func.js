import './color.css'


window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.amarillo'));   
     
    const seccionDados = Array.from(document.querySelectorAll('.tile1')); 
    const casillas = Array.from(document.querySelectorAll('.casilla')); 
    const fichasAmarillas = Array.from(document.querySelectorAll('.casillaAm')); 
    const fichasRojas= Array.from(document.querySelectorAll('.casillaRoja')); 
    
    
    var input1 = document.getElementById("22");
    if (input1) {
        document.getElementById("22").style.backgroundColor = "blue";    
    }

    var input2 = getInnerText("5");
    if (input2) {
        getInnerText("5").style.backgroundColor = "yellow";    
    }
    
    var input3 = document.getElementById("39");
    if (input2) {
        document.getElementById("39").style.backgroundColor = "red";  
    }
    
    var input4 = document.getElementById("56")
    if (input3) {
        document.getElementById("56").style.backgroundColor = "green";    
    }
    
    
    var fichasAmarillasUt  =[];
    var currPlayer = 0;
    var casillaActualAmarillo = "5";
    var casillaActualRoja = "39";
    var darts1 = 0;
    var darts2 = 0;
    var sacoFicha = false;

    var input5 = document.getElementById("botamarillo");
    if (input5) {
        document.getElementById("botamarillo").onclick = function() {lanzarDados("amarillo")};
    }
    
    var input6 = document.getElementById("botRojo")
    if (input6) {
        document.getElementById("botRojo").onclick = function() {lanzarDados("rojo")};
    }
    
    
    
    
    
    var jugadas = 0;
    var doble = false;
    const userAction = (tile, index) => {
        //tile.innerText = "HOLA";    
        document.getElementById('myId').style.display="block";        

    }
    function eleccionDados (tile ,index) {
        
       if(tile.innerText!="" &&  tile.style.color != "red" ){
           var val1 = parseInt(tile.innerText);
           if(currPlayer==0){
               var movimiento = parseInt(casillaActualAmarillo)+val1               
               tile.style.color  = "red";
               
               //elegirFicha()
               if(fichasAmarillas.length!=0 &&  jugadas<1 &&doble){
                var fichaActual = fichasAmarillas.pop();
                fichaActual.addEventListener('click',()=>esperarFicha(movimiento,fichaActual,tile,"gold","red"));
                doble = false;
    
               }

               
               
              
               //c2.addEventListener('click',() => esperarFicha(movimiento));
               //c2.removeEventListener("click",esperarFicha, false);     // Fallo
           }else {
                var movimiento = parseInt(casillaActualRoja)+val1
             
             tile.style.color  = "gold";
            
            //elegirFicha()
                if(fichasRojas.length!=0 &&  jugadas<1 &&doble){
                 var fichaActual = fichasRojas.pop();
                 fichaActual.addEventListener('click',()=>esperarFicha(movimiento,fichaActual,tile,"red","gold"));
                 doble = false;
 
            }

            
           }


       }
        


    }

    function esperarTurno( ficha,colorTurno,colorContrario){
        var tile;
        if(seccionDados[currPlayer+1].style.color==colorContrario){
            tile= seccionDados[currPlayer+1];
        }else {
            tile = seccionDados[currPlayer];
        }
        console.log(tile.innerText);        
        console.log(ficha.id);
        if(tile.innerText!="" && tile.style.color==colorContrario){
            var turno  =parseInt( ficha.id);
            ficha.innerText = ficha.id;
            ficha.style.color = "black";
            ficha.style.fontSize = "115%";
            console.log(ficha.id);            
            var mov = turno+parseInt(tile.innerText);
            console.log(mov);
            var fichaMov = getInnerText(mov.toString());                                        
            fichaMov.innerText = "+";
            fichaMov.style.color = colorTurno;
            fichaMov.style.fontSize = "200%";
            ficha.removeEventListener("click",esperarTurno,false);
            fichaMov.addEventListener('click',() => esperarTurno(fichaMov,colorTurno,colorContrario));;
            tile.innerText="";     
            tile.style.color = "black";       
            jugadas+=1;
            if(jugadas==2){
              cambioTurno();

            } 


       } else {
           console.log("fake");
           console.log(tile.style.color);
       }
        
    }
    function cambioTurno(){
        if(currPlayer==0){
            currPlayer = 6;
            document.getElementById('turno').style.color="red";        
            document.getElementById('turno').innerText="Turno de: Rojo";        
        } else {
            currPlayer = 0;
            document.getElementById('turno').style.color="gold";        
            document.getElementById('turno').innerText="Turno de: Amarillo";        
        }                
        jugadas = 0;       
    }
    function esperarFicha(movimiento,fichaActual,tile,colorTurno,colorContrario){
        var c2 = getInnerText(movimiento.toString());
        c2.innerText = "+";
        c2.style.color = colorTurno;
        c2.style.fontSize = "200%";
        fichaActual.innerText = "";
        fichaActual.style.color = "white";        
        tile.innerText="";   
        tile.style.color = "black";        
  
        
        
        //tile.removeEventListener("click",eleccionDados,false);
        sacoFicha = true;   
        jugadas+=1;             
        

        c2.addEventListener('click',() => esperarTurno(c2,colorTurno,colorContrario));
        
    }
    //tiles.forEach( (tile, index) => {

        //tile.addEventListener('click', () => userAction(tile, index));
    //});
    seccionDados.forEach( (tile, index) => {

        tile.addEventListener('click', () => eleccionDados(tile, index));
    });


    
    function getInnerText(texto){    
        let i = 0;      
        for( i = 0 ; i < casillas.length; i ++)  {
            if(casillas[i].id==texto){
                return casillas[i];
            }            

        }
            
  
    }

    function lanzarDados (turno) {
        if(currPlayer==6 && turno=="rojo" && jugadas<1){
            seccionDados[currPlayer].style.color = "black";
            seccionDados[currPlayer+1].style.color = "black";
                darts1 = Math.round(Math.random() * (6 - 1) +1);        
                darts2 = Math.round(Math.random() * (6 - 1) +1);          
                seccionDados[currPlayer].innerText = darts1.toString();
                seccionDados[currPlayer+1].innerText = darts2.toString();     
                if(darts1==darts2){
                    doble = true;
                }
        }        
        if(currPlayer==0 && turno=="amarillo"&& jugadas<1) {
            seccionDados[currPlayer].style.color = "black";
            seccionDados[currPlayer+1].style.color = "black";
            darts1 = Math.round(Math.random() * (6 - 1) +1);        
            darts2 = Math.round(Math.random() * (6 - 1) +1);          
            seccionDados[currPlayer].innerText = darts1.toString();
            seccionDados[currPlayer+1].innerText = darts2.toString();       
            if(darts1==darts2){
                doble = true;
            }         

        }
        
        //getInnerText("64").innerText= "X";
        


    }
});
