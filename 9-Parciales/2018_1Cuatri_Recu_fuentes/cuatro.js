//ingresar cuatro importes, mostrar el mayor
//mostrar el total, si supera 100 pesos hacer descuento de 10%, si supera los 50 pesos el descuento es del 5%, si es menos de 50 se le suma un recargo de 15%
function mostrar()
{

	var primerNumero;
	var segundoNumero;
	var tercerNumero;
	var cuartoNumero;
	var numeroMayor;
	
	var precioTotal;
	var descuento;

	primerNumero=prompt("Ingrese un valor");
	primerNumero=parseInt(primerNumero);
	segundoNumero=prompt("Ingrese el segundo valor");
	segundoNumero=parseInt(segundoNumero);
	tercerNumero=prompt("Ingrese el tercer valor");
	tercerNumero=parseInt(tercerNumero);
	cuartoNumero=prompt("Ingrese el cuarto valor");
	cuartoNumero=parseInt(cuartoNumero);

	
	if (primerNumero>segundoNumero&&primerNumero>tercerNumero&&primerNumero>cuartoNumero)
	 {
	 	numeroMayor=primerNumero;
	 	
	 }
	 else
	 {
	 	if (segundoNumero>primerNumero&&segundoNumero>tercerNumero&&segundoNumero>cuartoNumero) 
	 	{
	 		numeroMayor=segundoNumero;
	 		
	 	}else
	 	{
	 		if (tercerNumero>primerNumero&&tercerNumero>segundoNumero&&tercerNumero>cuartoNumero) 
	 		{
	 			numeroMayor=tercerNumero;
	 			
	 		}else{
	 			numeroMayor=cuartoNumero;
	 			
	 		}
	 	}
	 }

alert("El numero mayor es "+numeroMayor);

	precioTotal=primerNumero+segundoNumero+tercerNumero+cuartoNumero;

	alert("El precio es "+ precioTotal);

	if (precioTotal>100) 
	{
		descuento=precioTotal-((precioTotal*10)/100);

	}else 
	{
		if (precioTotal>50) 
		{
			descuento=precioTotal-((precioTotal*5)/100);
		}else{
			descuento=precioTotal+((precioTotal*15)/100);
		}
	}




alert("El precio final es "+descuento);






}
