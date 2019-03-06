function mostrar()
{
	var contador = 0;
	var marcaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var respuesta = "si";
	var cantTemperaturaPar = 0;
	var masPesado;
	var marcaMasPesado;
	var menosPesado;
	var cantProductosbajoCero = 0;
	var promedioPeso;
	var sumaPesos = 0;


	while(respuesta !="no")
	{
		contador++;

		marcaIngresada = prompt("Ingrese la marca del producto.");
		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada = prompt("Ingrese la marca del producto.");
		}

		
		pesoIngresado = prompt("Ingrese el peso del producto. Debe ser entre 1 y 100.");
		pesoIngresado = parseInt(pesoIngresado);
		while(isNaN(pesoIngresado)==true||pesoIngresado<1||pesoIngresado>100)
		{
			pesoIngresado = prompt("Ingrese el peso del producto. Debe ser entre 1 y 100.");
			pesoIngresado = parseInt(pesoIngresado);
		}

		sumaPesos = sumaPesos + pesoIngresado;

		temperaturaIngresada = prompt("Ingrese la temperatura de almacenamiento. Debe ser entre -30 y 30.");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada)==true||temperaturaIngresada<-30||temperaturaIngresada>30)
		{
			temperaturaIngresada = prompt("Ingrese la temperatura de almacenamiento. Debe ser entre -30 y 30.");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}

		if (temperaturaIngresada%2==0) 
		{
			cantTemperaturaPar++;
		}

		if (temperaturaIngresada<0) 
		{
			cantProductosbajoCero++;
		}

		if (contador==1) 
		{
			masPesado = pesoIngresado;
			marcaMasPesado = marcaIngresada;
			menosPesado = pesoIngresado;
		}
		else
		{
			if (pesoIngresado>masPesado) 
			{
				masPesado = pesoIngresado;
				marcaMasPesado = marcaIngresada;
			}

			if (pesoIngresado<menosPesado) 
			{
				menosPesado = pesoIngresado;
			}
		}

		respuesta = prompt("Desea continuar?. Escriba 'no' para detenerse.");
	}
	promedioPeso = sumaPesos/contador;


	document.write("Cantidad de temperaturas pares: " + cantTemperaturaPar + "<br>" + "Marca del producto más pesado: " + marcaMasPesado + "<br>" + "Cantidad de productos conservados a menos 0 grados: " + cantProductosbajoCero + "<br>" + "Promedio de todos los pesos: " + promedioPeso + "<br>" + "El peso máximo es: " + masPesado + "<br>" + "El peso minimo es: " + menosPesado);


}
