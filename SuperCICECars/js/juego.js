console.log("Jugando...");

var posPlayer1 = 0;
var posPlayer2 = 0;
var jugando = true;
const SPEED = 5;
const DISTANCIA = 500;	

function inicializar(){
	var logo = document.getElementById("logo");
	//ALTERNATIVA BIND 1
	logo.onmouseover = function(){
	 	console.log("ENTRANDO");
	}
	//ALTERNATIVA BIND 2
	logo.addEventListener("mouseleave", function(){
		console.log("SALIENDO");
	});
}

function capturarPulsacion(tecla){
	//a minúscula -> Player 1
	//l minúscula -> Player 2
	if (jugando==true) {
		if (tecla.key=="a" || tecla.key=="A"){
			posPlayer1=posPlayer1+SPEED;
			document.getElementById("player1").style.paddingLeft=posPlayer1+"px";
			if (posPlayer1 >= DISTANCIA){
				document.getElementById("campeon").innerHTML="HA GANADO PLAYER 1";
				document.getElementById("ap").play();
				jugando=false;
			}
		}
		if (tecla.key=="l" || tecla.key=="L"){
			posPlayer2=posPlayer2+SPEED;
			document.getElementById("player2").style.paddingLeft=posPlayer2+"px";
			if (posPlayer2 >= DISTANCIA){
				document.getElementById("campeon").innerHTML="HA GANADO PLAYER 2";
				document.getElementById("ap").play();
				jugando=false;
			}
		}	
	}
}

function zoom(idCoche){
	var coche = document.getElementById("player"+idCoche);
	coche.style.width="500px";
}
function antizoom(idCoche){
	var coche = document.getElementById("player"+idCoche);
	coche.style.width="250px";
}
