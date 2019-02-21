function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (numeroIngresado>=0)
		 {
		 	positivo=positivo+numeroIngresado;
		 }
		 else
		 {
		 	negativo=negativo*numeroIngresado;
		 }


		 respuesta=prompt("Seguir operando?");


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN