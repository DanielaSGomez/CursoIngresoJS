function mostrar()
{
	var respuesta = "si";
	var contador = 0;
	var numeroIngresado;
	var letraIngresada;
	var numeroPares = 0;
	var numerosImpares = 0;
	var ceros = 0;
	var promedio;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var max = 0;
	var min = 0;
	var numLetraMax;
	var numLetraMin;

	while(respuesta!="no")
	{

		numeroIngresado=prompt("Ingrese un numero entre -100 y 100.");
		numeroIngresado=parseInt(numeroIngresado);

		while(isNaN(numeroIngresado)==true||numeroIngresado<-100||numeroIngresado>100)
		{

			numeroIngresado=prompt("Error. Ingrese un número entre -100 y 100.")
			numeroIngresado=parseInt(numeroIngresado);

		}


		letraIngresada=prompt("Ingrese una letra");
		while(isNaN(letraIngresada)==false)
		{
			letraIngresada=prompt("Error. Ingrese una letra");
		}


		if (numeroIngresado%2==0) 
		{
			numeroPares++;
		}
		else
		{
			numerosImpares++;
		}

		if (numeroIngresado===0) 
		{
			ceros++;
		}
		if (numeroIngresado<0) 
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;
		}

		if (contador==0) 
		{
			max = numeroIngresado;
			numLetraMax = max + letraIngresada;

			min = numeroIngresado;
			numLetraMin = min +letraIngresada;

		}
		else
		{
			if (numeroIngresado>max) 
			{
				max = numeroIngresado
				numLetraMax = max + letraIngresada;
			}
			
			
			if (numeroIngresado<min) 
			{
				min = numeroIngresado;
				numLetraMin = min + letraIngresada;
			}
			
		}




		contador++;
		respuesta = prompt("Desea continuar? Si/No.")
	}


promedio = sumaPositivos/cantidadPositivos;




document.write("La cantida de números pares es: " + numeroPares + "<br>"+ "La cantidad de números impares es: "+numerosImpares + "<br>"+
	"La cantidad de ceros es: "+ceros+"<br>"+ "El promedio de los positivos es: " + promedio+"<br>" + "La suma de los números negativos es: "+ sumaNegativos+ "<br>"+"El número y letra del maximo es: " + numLetraMax + "<br>" + "El número y letra minimo es: " + numLetraMin);




}
