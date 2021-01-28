let pet= document.getElementById("pet");
pet.addEventListener("click",acariciar);

let stop= document.getElementById("stop");
stop.addEventListener("click",parar);

let cuchi = document.getElementById("cuchicuchi");
cuchi.volume = 0.1;

let timeoutId;
let contador = 0;
let monita = document.getElementById("monita");
//console.log()

function acariciar(){
   //Cada que se presiona este boton cambia a la imagen original

    if (monita.src.match("monita.png")) {
        monita.src = "monita_mueve.gif";

    } else {
        monita.src = "monita_mueve.gif";

    }
}

function parar(){
	if (monita.src.match("monita")){
		monita.src="monita.png";
    cuchi.pause();
    cuchi.currentTime = 0;
	}else{
		monita.src="monita.png";
    cuchi.pause();
    cuchi.currentTime = 0;
	}
}


function suma(){
  //concepto: debounce -> Si se presiona en menos de 195 milisegundos no aumenta contador
  if (timeoutId){
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() =>{
    cuchi.currentTime = 0;
    cuchi.play();
    document.getElementById('contando').innerHTML = contador+=1
  },170)
}
/*duerme
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
*/
