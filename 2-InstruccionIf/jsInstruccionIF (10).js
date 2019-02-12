function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom = Math.floor(Math.random() * 10) + 1;


	if (numeroRandom>=9&&numeroRandom<=10) {
			alert("Excelente, Nota: " + numeroRandom);
		} else if (numeroRandom>=4) {
			alert("Aprobo, Nota: " + numeroRandom);
		}else{
			alert("Vamos, la proxima se puede, Nota: " + numeroRandom);
	}


}//FIN DE LA FUNCIÓN