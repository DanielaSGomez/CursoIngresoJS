function mostrar()
{
	/*var tipoDePago;
	var descuento;
	var tipoDePaquete;
	var precioHabitacion;
	var precioFinal;

	precioHabitacion=prompt("Ingrese el precio de la habitacion");
	precioHabitacion=parseInt(precioHabitacion);

	tipoDePago=prompt("Ingrese su forma de pago","Ej: visa, efectivo, paypal,etc");
	tipoDePaquete=prompt("Ingrese si desea el paquete 'todoincluido'o 'soloDesayunos'");
	

	switch(tipoDePago)
	{
		case "visa":
		case "mercadopago":
			descuento=10;
			break;
		case "paypal":
			switch(tipoDePaquete)
			{
				case "todoincluido":
					descuento=25;
					break;
				default:
					descuento=15;
					break;
			}
			break;
		case "efectivo":
			switch(tipoDePaquete)
			{
				case "todoincluido":
					descuento=35;
					break;
				case "soloDesayunos":
					descuento=30;
					break;
				default:
					descuento=20;
					break;
			}	
			break;
		default:
			descuento=5;
	}
	

	precioFinal=precioHabitacion*descuento/100;
	precioFinal=precioHabitacion-descuento;

//usar solo switch sin if
//todos los case

	



	alert("El precio final de la habitacion es "+precioFinal);*/



	var diaDeLaSemana;
	var mensaje;

	diaDeLaSemana = prompt("Ingrese un dia de la semana(usar minusculas).");

	switch(diaDeLaSemana)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
					mensaje = "A trabajar";
					break;
		case "sabado":
		case "domingo":
					mensaje ="Buen finde";
					break;
		default:
					mensaje = "No es un dia válido";
					break;
	}

	alert(mensaje);


































}
