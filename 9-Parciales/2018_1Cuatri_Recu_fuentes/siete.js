function mostrar()
{

	var contador = 0;
	var notaIngresada;
	var sexoIngresado;
	var promedio;
	var cantidadNotas = 0;
	var cantidadVarones = 0;
	var notaBaja;




	while(contador<5)
	{
		notaIngresada=prompt("Ingrese la nota(Entre 0 y 10");
		notaIngresada=parseInt(notaIngresada);
		cantidadNotas++;
		if(inNan(notaIngresada)==true||notaIngresada<0&&notaIngresada>10)
		{
			alert("Error");
			
		}else








	}












}
