function mostrar()
{
	var sexoIngresado;
	var notaIngresada;
	var contador = 0;
	var sumaNotas = 0;
	var promedio;
	var notaMasBaja;
	var sexoNotabaja;
	var cantVarones = 0;

	
	while(contador<5)
	{

		contador++;

		sexoIngresado = prompt("Ingrese el sexo del alumno ('f/m')");
		
		while(isNaN(sexoIngresado)==false||sexoIngresado!="f"&&sexoIngresado!="m")
		{
			sexoIngresado = prompt("Ingrese el sexo del alumno ('f/m')");
		}

		notaIngresada = prompt("Ingrese la nota del alumno(Entre 0 y 10).");
		notaIngresada = parseInt(notaIngresada);
		
		sumaNotas = sumaNotas + notaIngresada;
		
		while(isNaN(notaIngresada)==true||notaIngresada<0||notaIngresada>10)
		{
			notaIngresada = prompt("Ingrese la nota del alumno(Entre 0 y 10).");
			notaIngresada = parseInt(notaIngresada);
		}
	
		if (contador==1) 
		{
			notaMasBaja = notaIngresada;
			sexoNotabaja = sexoIngresado;
		}
		else
		{
			if (notaIngresada<notaMasBaja) 
			{
				notaMasBaja = notaIngresada;
				sexoNotabaja = sexoIngresado;
			}

		}

		if (sexoIngresado=="m"&&notaIngresada>=6) 
		{
			cantVarones++;
		}

	}

	promedio = sumaNotas/contador;

	alert("El promedio de las notas totales es " + promedio + " La nota mas baja es " + notaMasBaja + " y el sexo del alumno es " + sexoNotabaja +  " La cantidad de varones con nota igual o mayor a 6 es " + cantVarones);
}
