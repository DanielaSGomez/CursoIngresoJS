function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;


	while(respuesta!="no")
	{

		contador++;
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;

		respuesta=prompt("Seguir sumando?");


	}

/*
el while tiene tres partes
inicializacion: var contador = 0;
condicion: while(condicion: contador<10/continuar!="si")
iteracion: contador +1; contador++; contador +=1;prompt("seguir?");




*/




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN