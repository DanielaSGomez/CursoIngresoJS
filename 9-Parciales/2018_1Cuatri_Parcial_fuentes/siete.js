function mostrar()
{
	var contador = 0;
	var notaIngresada;
	var sexoIngresado;
	var promedio;
	var notaBaja;
	var cantidadNotas= 0;
	var alumno;
	var cantidadVarones=0;
	var sumaNotas=0;

	while(contador<5)
	{
		contador++;
		notaIngresada=prompt("Ingrese la nota de 0 a 10");
		notaIngresada=parseInt(notaIngresada);
		



		if (notaIngresada>=0&&notaIngresada<=10) 
		{
			cantidadNotas++;
			sumaNotas=sumaNotas+notaIngresada;
			
			sexoIngresado=prompt("Ingrese el sexo del alumno (f/m");
			if (sexoIngresado!="f"&&sexoIngresado!="m") 
			{
				sexoIngresado=prompt("No es valido. Ingrese f o m");
			}
			
		}
		else
		{
			notaIngresada=prompt("La nota ingresada es invalida. Ingrese un numero entre 0 y 10");
		}

		if (sexoIngresado=="m"&&notaIngresada>=6) {
			cantidadVarones++;

		}

		
	//console.log(contador);

		if (contador==1) 
		{
			notaBaja=notaIngresada;
	
		}

		else
		{
			if (notaIngresada<notaBaja) 
			{
				notaBaja=notaIngresada + " y el sexo es: "+sexoIngresado;

			}
		}



	}





promedio= sumaNotas/cantidadNotas;



alert("El promedio de las notas es "+promedio);

alert("La nota más baja es "+notaBaja);

alert("Cantidad de varones con nota mayor o igual a 6: "+cantidadVarones);

}
