function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom = Math.floor(Math.random() * 10) + 1;
	var mensaje;

	if (numeroRandom>=9&&numeroRandom<=10) {
			mensaje="Excelente, Nota: " + numeroRandom;
		} else if (numeroRandom>=4) {
			mensaje="Aprobo, Nota: " + numeroRandom;
		}else{
			mensaje="Vamos, la proxima se puede, Nota: " + numeroRandom;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN