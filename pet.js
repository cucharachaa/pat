var pet= document.getElementById("pet");
pet.addEventListener("click",acariciar);

var stop= document.getElementById("stop");
stop.addEventListener("click",parar);

function acariciar()
{
    var monita = document.getElementById("monita");
    if (monita.src.match("mueve")) {
        monita.src = "monita_mueve.gif";
    } else {
        monita.src = "monita_mueve.gif";
    }
}

function parar()
{
	var monita= document.getElementById("monita");
	if (monita.src.match("monita")){
		monita.src="monita.png";
	}else{
		monita.src="monita.png";
	}
}
