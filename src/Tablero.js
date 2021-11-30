import './App.css';
import './color.css';
import './func.js';

const parchisTablero = `
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="color.css">
</head>

<body>
<h1 style = "color:blueviolet" >Tablero de parchis</h1>
<h1 style = "color:gold" id = "turno">Turno de:amarillo</h1>
<section class= "casillaAm" id = "5"> + </section>
      <section class= "casillaAm"id = "5"> +</section>
      <section class= "casillaAm"id = "5"> +</section>
     <section class= "casillaAm"id = "5"> +</section>
<table border="1px">

<link rel="stylesheet" href="color.css">
  <!-- 1 -->

  <tr>
  
    <td class="amarillo" colspan="7" rowspan="7">                 
          <div class="tile1"> </div>
          <div class="tile1"></div>
      <button  id = "botamarillo" class="button">Jugar<button>
    </td>
    
    <td colspan="2" class = "casilla" id = "1">1 </td>
    <td colspan="2" class = "casilla" id = "68">68</td>
    <td colspan="2" class = "casilla" id = "67">67</td>
    <td class="verde" colspan="7" rowspan="7">
      <div class="tile1"> </div>
      <div class="tile1"></div>
    <button  id = "botamarillo" class="button"</> Jugar <button>
    </td>
  </tr>
  <!-- 2 -->
  <tr>
    <td colspan="2" class = "casilla"  id = "2">2</td>
    <td class="amarillo" colspan="2">-</td>
    <td colspan="2" class = "casilla"  id = "66">66</td>
  </tr>
  <!-- 3 -->
  <tr>
    <td colspan="2" class = "casilla" id = "3">3</td>
    <td class="amarillo" colspan="2">-</td>     
    <td colspan="2" class = "casilla" id = "65">65</td>
  </tr>
  <!-- 4 -->
  <tr>
    <td colspan="2" class = "casilla" id = "4">4</td>
    <td class="amarillo" colspan="2">-</td>
    <td colspan="2" class = "casilla" id = "64">64</td>
  </tr>
  <!-- 5 -->
  <tr>
    <td class="casilla" colspan="2"  id = "5">5</td>
    <td class="amarillo" colspan="2">-</td>      
    <td colspan="2" class = "casilla" id = "63">63</td>
  </tr>
  <!-- 6 -->
  <tr>
    <td colspan="2" class = "casilla" id = "6">6</td>
    <td class="amarillo" colspan="2" >-</td>
    <td colspan="2" class = "casilla" id = "62">62</td>
  </tr>
  <!-- 7 -->
  <tr>
    <td colspan="2" class = "casilla" id = "7">7</td>
    <td class="amarillo" colspan="2" >-</td>
    <td colspan="2" class = "casilla" id = "61">61</td>
  </tr>
  <!-- 8 -->
  <!-- Primera línea justo debajo de los grandes -->
  <tr>
    <td rowspan="2" class = "casilla" id = "16">16</td>
    <td rowspan="2" class = "casilla" id = "15">15</td>
    <td rowspan="2" class = "casilla" id = "14">14</td>
    <td rowspan="2" class = "casilla" id = "13">13</td>
    <td rowspan="2" class = "casilla" id = "12">12</td>
    <td rowspan="2" class = "casilla" id = "11">11</td>
    <td rowspan="2" class = "casilla" id = "10">10</td>
    <td id="vacio"></td>
    <td class = "casilla" id = "8">8</td>
    <td>-</td>
    <td>-</td>
    
    <td class = "casilla" id = "60">60</td>
    <td id="vacio"></td>
    
    <td rowspan="2" class = "casilla" id = "58">58</td>
    <td rowspan="2" class = "casilla" id = "57">57</td>
    <td class="casilla" rowspan="2" id = "56">56</td>
    <td rowspan="2" class = "casilla" id = "55">55</td>
    <td rowspan="2" class = "casilla" id = "54">54</td>
    <td rowspan="2" class = "casilla" id = "53">53</td>
    <td rowspan="2" class = "casilla" id = "52">52</td>      
    
    
  </tr>
  <!-- 9 -->
  <tr>
    <td class = "casilla" id = "9">9</td>

    <td colspan="4" rowspan="4"><img src="https://www.tec.ac.cr/sites/default/files/styles/slide/public/media/img/slide/dji_0128_compressed_.jpg" /></td>
    <td class = "casilla" id = "59">59</td>
  </tr>
  <!-- 10 -->
  <tr>
    <td rowspan="2" class = "casilla" id = "17">17</td>
    <td class="azul" rowspan="2">|</td>
    <td class="azul" rowspan="2">|</td>
    <td class="azul" rowspan="2">|</td>
    <td class="azul" rowspan="2">|</td>
    <td class="azul" rowspan="2">|</td>
    <td class="azul" rowspan="2">|</td>
    <td>|</td>
    <td>|</td>
    <td class="verde" rowspan="2">|</td>
    <td class="verde" rowspan="2">|</td>
    <td class="verde" rowspan="2">|</td>
    <td class="verde" rowspan="2">|</td>
    <td class="verde" rowspan="2">|</td>
    <td class="verde" rowspan="2">|</td>
    <td rowspan="2" class = "casilla" id = "51">51</td>
  </tr>
  <!-- 11 -->
  <tr>
    <td>|</td>
    <td>|</td>
  </tr>
  <!-- 12 -->
  <tr>
    <td rowspan="2" class = "casilla" id = "18">18</td>
    <td rowspan="2" class = "casilla" id = "19">19</td>
    <td rowspan="2" class = "casilla" id = "20">20</td>
    <td rowspan="2" class = "casilla" id = "21">21</td>
    <td class="casilla" rowspan="2" id = "22">22</td>
    <td rowspan="2" class = "casilla" id = "23">23</td>
    <td rowspan="2" class = "casilla" id = "24">24</td>
    <td class = "casilla" id = "25">25</td>
    <td class = "casilla" id = "43">43</td>
    <td rowspan="2" class = "casilla" id = "44">44</td>
    <td rowspan="2" class = "casilla"id = "45">45</td>
    <td rowspan="2" class = "casilla"id = "46">46</td>
    <td rowspan="2" class = "casilla"id = "47">47</td>
    <td rowspan="2" class = "casilla"id = "48">48</td>
    <td rowspan="2" class = "casilla"id = "49">49</td>
    <td rowspan="2" class = "casilla"id = "50">50</td>
  </tr>
  <!-- 13 -->
  <tr>
    <td id="vacio"></td>
    <td class = "casilla" id = "26">26 </td>
    <td>-</td>
    <td>-</td>
    <td class = "casilla"id = "42">42</td>
    <td id="vacio"></td>
  </tr>
  <!-- 14 -->
  <tr>
    <td class="azul" colspan="7" rowspan="7">
      <div class="tile1"> </div>
      <div class="tile1"></div>
      <button  id = "botamarillo" class="button"> Jugar <button>

    </td>
    <td colspan="2" class = "casilla"id = "27">27</td>
    <td class="rojo" colspan="2" class = "casilla">-</td>
    <td colspan="2" class = "casilla"id = "41">41</td>
    <td class="rojo" colspan="7" rowspan="7">
      <div class="tile1"> </div>
      <div class="tile1"></div>
      <button  id = "botRojo" class="button"</> Jugar <button>
    </td>
  </tr>
  <!-- 15 -->
  <tr>
    <td colspan="2" class = "casilla"id = "28">28</td>
    <td class="rojo" colspan="2" >-</td>
    <td colspan="2" class = "casilla"id = "40">40</td>
  </tr>
  <!-- 16 -->
  <tr>
    <td colspan="2" class = "casilla"id = "29">29</td>
    <td class="rojo" colspan="2" >-</td>
    <td class="casilla" colspan="2"id = "39">39</td>
  </tr>
  <!-- 17 -->
  <tr>
    <td colspan="2" class = "casilla"id = "30">30</td>
    <td class="rojo" colspan="2" >-</td>
    <td colspan="2" class = "casilla"id = "38">38</td>
  </tr>
  <!-- 18 -->
  <tr>
    <td colspan="2" class = "casilla"id = "31">31</td>
    <td class="rojo" colspan="2" >-</td>
    <td colspan="2" class = "casilla"id = "37">37</td>
  </tr>
  <!-- 19 -->
  <tr>
    <td colspan="2" class = "casilla"id = "32">32</td>
    <td class="rojo" colspan="2" >-</td>
    <td colspan="2" class = "casilla"id = "36">36</td>
  </tr>
  <!-- 20 -->
  <tr>
    <td colspan="2" class = "casilla"id = "33">33</td>
    <td colspan="2" class = "casilla"id = "34">34</td>
    <td colspan="2" class = "casilla"id = "35">35</td>
  </tr>

</table>

<section class= "casillaRoja" id = "39"> + </section>
     <section class= "casillaRoja"id = "39"> +</section>
      <section class= "casillaRoja"id = "39"> +</section>
     <section class= "casillaRoja"id = "39"> +</section>
</body>
<script src="./func.js"></script>
</html>
`;


var template = { __html: parchisTablero };

function Tablero({users}) {
  
  return (
    
    <div id = "AppContainer" dangerouslySetInnerHTML={template}>
    </div> 
    );
}


export default Tablero