function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numeroIngresado;
	var contadorPositivo = 0;
	var contadorNegativo = 0;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado);

		if (numeroIngresado>0) //es positivo
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivo++;
		}
		else
		{
			if (numeroIngresado<0) //es negativo
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				contadorNegativo++;
			}
			else//es cero
			{
				contadorCeros++;
			}// (numeroIngresado<0)


		}//(numeroIngresado>0) 
	

		if (numeroIngresado%2 == 0) //es par
		{
			contadorPares++;
		}


		
		respuesta = prompt("Desea continuar? si/no");


	}
	promedioPositivos = sumaPositivos/contadorPositivo;
		promedioNegativos = sumaNegativos/contadorNegativo;
		diferencia = sumaPositivos - sumaNegativos;


document.write("Suma de negativos: " + sumaNegativos+ "<br>"+
"Suma de positivos: " + sumaPositivos+"<br>"+
"Cantidad de positivos: " +  contadorPositivo+"<br>"+
"Cantidad de negativos: " + contadorNegativo+"<br>"+
"Cantidad de ceros: " + contadorCeros+"<br>"+
"Cantidad de numeros pares: " + contadorPares+"<br>"+
"Promedio positivos: " + promedioPositivos+"<br>"+
"Promedio negativos: " + promedioNegativos+"<br>"+
"Diferencia: " + diferencia);

}//FIN DE LA FUNCIÓN