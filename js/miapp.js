// Tomo el boton de Empieza el juego
let btn = document.getElementById('comenzar')

let numIngresados = document.getElementById('numerosIngresados')
let numPrevios = document.getElementById('numerosPrevios')
let respuesta = document.getElementById('respuesta')

// Tomo el valor del dato que ingreso en el formulario
let numIngresado = document.getElementById('adivina').value


// Tomo la clase game
let game = document.querySelector('.game')


// escucho el evento click del boton Empieza el juego
btn.addEventListener('click',function() {
   game.classList.toggle('.game')

   console.log("Presionaste empieza el juego")
  });

 

// creo la func para obtener el num de la maquina con fun flecha
let numMaquina = ()=>{
   
   // // la maquina selecciona un numero 
return Math.floor(Math.random() * (1 - 101)) + 101;

  }

// Tomo el boton de Check
let boton = document.getElementById('submit')

let contador=0
boton.addEventListener('click', adivinar);



 function adivinar(){
 



contador++
console.log(contador)

// console.log(numIngresado)
if(numIngresado ===""){
  //document.write
  //textContent
  //innerHtml
  respuesta.textContent = "Ingrese un numero valido"
}else if (numIngresado === numMaquina){
   respuesta.textContent = "Ganaste"
   }else if (numIngresado > numMaquina){
respuesta.textContent = "num muy alto"
}else if (numIngresado < numMaquina){
   respuesta.textContent = "num muy bajo"
   }
   numIngresados.textContent+=numIngresado
  if(contador===10)
  respuesta.textContent = "Perdiste"
 }

 





 




// }
// while(numMaquina !== numIngresado && oportunidades>1){
//    oportunidades--
//    numIngresado = document.getElementById("adivina").value
   
//    return 
//    }

// let oportunidades = 10
// for(let i=0; i<11; i++){
// if (numMaquina === numIngresado && oportunidades>1) {
//  console.log("GANASTE") 
// } else if (numMaquina > numIngresado) {
// console.log("Número mas alto") 
//  oportunidades--
// }else if (numMaquina < numIngresado) {
// console.log("Número mas bajo") 
// oportunidades--
// }
// else{
// "mejor suerte la próxima vez"
// }

 
//     }
