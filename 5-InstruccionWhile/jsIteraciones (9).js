function mostrar()
{//isNan(nota)==true||nota<0||nota>10) para que muestre el error

	var contador=0;
	// declarar variables
	var numeroIngresado;
	
	var max;
	var min;
	
	var respuesta='si';

	while(respuesta!="no")
	{
		contador++;//en vez de usar contador puedo usar bandera=true
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	

		if (contador==1) //aca uso bandera=truesi el contador vale 1,los maximos y minimos van a valer el num ingresado xq no hay mas, a partir de aca se van a tomar como referencia este if para determinar los otros maximos y minimos
		{
			max = numeroIngresado;
			min = numeroIngresado;
			contador++;//y aca uso bandera=false para determinar que es la priemra vez que ocurre 

		}
		else
		{
			if (numeroIngresado>max) 
			{
				max = numeroIngresado;
			}
        	else 
        	{
        		min = numeroIngresado;
        	}
		}

		



		respuesta = prompt("Desea continuar? si/no.");


	}

maximo.value=max;
minimo.value=min;


}//FIN DE LA FUNCIÓN