function mostrar()
{
	var contador = 0;
	var letraIngresada;
	var numeroIngresado;
	var cantidadPares = 0;
	var cantidadImpares = 0;
	var cantidadCeros = 0;
	var promedio;
	var cantidadPositivos = 0;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var numMax;
	var letraMax;
	var numMin;
	var letraMin;
	var respuesta = "si";


	while(respuesta!="no")
	{
		contador++;
		letraIngresada = prompt("Ingrese una letra.");

		while(isNaN(letraIngresada)==false)
		{
			letraIngresada = prompt("Ingrese una letra.");
		}

			numeroIngresado = prompt("Ingrese un número entre -100 y 100");
			numeroIngresado = parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true||numeroIngresado<-100||numeroIngresado>100)
		{

			numeroIngresado = prompt("Ingrese un número entre -100 y 100");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (numeroIngresado%2==0) 
		{
			cantidadPares++;
		}
		else
		{
			if (numeroIngresado%2!=0) 
			{
				cantidadImpares++;
			}
		}

		if (numeroIngresado===0) 
		{
			cantidadCeros++;
		}
		else
		{
			if (numeroIngresado>0) 
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				sumaNegativos = sumaNegativos + numeroIngresado;	
			}
		}


		if (contador==1) 
		{
			numMax = numeroIngresado;
			letraMax = letraIngresada;

			numMin = numeroIngresado;
			letraMin = letraIngresada;

		}

		else
		{
			if (numeroIngresado<numMin) 
			{
				numMin = numeroIngresado;
				letraMin = letraIngresada;
			}

			if (numeroIngresado>numMax) 
			{
				numMax = numeroIngresado;
				letraMax = letraIngresada;
			}
		}

		respuesta =prompt("¿Desea continuar?Escriba no para detenerse.");


	}

	promedio = sumaPositivos/cantidadPositivos;

	document.write("La cantida de números pares es: " + cantidadPares + "<br>"+ "La cantidad de números impares es: "+cantidadImpares + "<br>"+
	"La cantidad de ceros es: "+cantidadCeros+"<br>"+ "El promedio de los positivos es: " + promedio+"<br>" + "La suma de los números negativos es: "+ sumaNegativos+ "<br>"+"El número y letra del maximo es: " + numMax + letraMax + "<br>" + "El número y letra minimo es: " + numMin + letraMin);






















}
