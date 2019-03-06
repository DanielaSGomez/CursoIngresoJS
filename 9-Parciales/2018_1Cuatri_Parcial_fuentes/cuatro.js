function mostrar()
{

	/*var numeroProductos;
	var precioProducto;
	var precioNoFinal;
	var descuentoAplicadoDeDos;
	var descuentoAdicional;
	var recargoConTarjeta;
	var metodoDePago;
	var mensaje;

	numeroProductos = prompt("Ingrese la cantidad de productos que desea comprar");
	numeroProductos = parseInt(numeroProductos);
	precioProducto = prompt("Ingrese el precio Unitario del producto");
	precioProducto = parseInt(precioProducto);
	metodoDePago = prompt("Si paga en efectivo ingrese: 1, si paga con tarjeta ingrese:2");
	metodoDePago =parseInt(metodoDePago);
	precioNoFinal = numeroProductos*precioProducto;

	descuentoAplicadoDeDos = precioNoFinal-((precioNoFinal*10)/100);
	descuentoAdicional = precioNoFinal-((precioNoFinal*25)/100);
	recargoConTarjeta = precioNoFinal+((precioNoFinal*10)/100);

	if (numeroProductos>2&&metodoDePago==1) {
		mensaje="El precio final con descuento es $"+descuentoAplicadoDeDos;
	} else if( precioNoFinal>2000&&metodoDePago==1){
		mensaje="El precio final con descuento adicional es $"+descuentoAdicional;
	} else if (metodoDePago==2) {
		mensaje="El precio final con recargo por pago con tarjeta es $"+ recargoConTarjeta;
	}else{
		mensaje="El precio final es $"+ precioNoFinal;
	}
//fijarse de no hacer tantas cuentas innecesarias
//mostrar solo lo que hay que mostrar



alert(mensaje);*/


	var primerNumero;
	var segundoNumero;
	var resultado;
	var mensaje;

	primerNumero = prompt("Ingrese un número");
	primerNumero = parseInt(primerNumero);
	segundoNumero = prompt("Ingrese un segundo número");
	segundoNumero = parseInt(segundoNumero);

	if (primerNumero>segundoNumero) 
	{
		resultado = primerNumero - segundoNumero;
		mensaje = "La resta es " + resultado;
	}

	else
	{
		if (primerNumero<segundoNumero) 
		{
			resultado = primerNumero + segundoNumero;
			mensaje = "La suma es " + resultado;
			if (resultado > 10) 
			{
				
				mensaje ="La suma es " + resultado + " y superó el 10.";
			}
		}
		else
		{
			mensaje = "El primer número es " + primerNumero + " y el segundo es " + segundoNumero;
		}
	}

	alert(mensaje);


}
