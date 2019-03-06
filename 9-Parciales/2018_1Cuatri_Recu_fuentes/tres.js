function mostrar()
{
	var precioIngresado;
	var descuentoIngresado;
	var precioFinal;

	precioIngresado = prompt("Ingrese el precio");
	precioIngresado = parseInt(precioIngresado);
	descuentoIngresado = prompt("Ingrese el descuento");
	descuentoIngresado = parseInt(descuentoIngresado);

	precioFinal = precioIngresado - ((precioIngresado*descuentoIngresado)/100);

	elPrecioFinal.value=precioFinal;
}
