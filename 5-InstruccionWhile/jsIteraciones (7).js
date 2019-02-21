function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;


	while(respuesta=="si")
	{

		contador++;
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;

		respuesta=prompt("Seguir sumando?");


	}






document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN