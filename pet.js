var pet= document.getElementById("pet");
var pet= document.getElementById("pet");
pet.addEventListener("click",acariciar);

var stop= document.getElementById("stop");
stop.addEventListener("click",parar);

var cuchi = document.getElementById("cuchicuchi");
cuchi.volume = 0.2;

function acariciar(){
    var monita = document.getElementById("monita");
    if (monita.src.match("mueve")) {
        monita.src = "monita_mueve.gif";
	cuchi.volume = 0.2;
        cuchi.currentTime = 0;
        cuchi.play();
    } else {
        monita.src = "monita_mueve.gif";
	cuchi.volume = 0.2;
        cuchi.currentTime = 0;
        cuchi.play();
    }
}
function parar(){
	var monita= document.getElementById("monita");
	if (monita.src.match("monita")){
		monita.src="monita.png";
    cuchi.volume = 0.2;	
    cuchi.pause();
    cuchi.currentTime = 0;
	}else{
		monita.src="monita.png";
    cuchi.volume = 0.2;		
    cuchi.pause();
    cuchi.currentTime = 0;
	}
}


