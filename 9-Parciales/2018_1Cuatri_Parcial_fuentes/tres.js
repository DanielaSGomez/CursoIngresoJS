function mostrar()
{
	var precioIngresado;
	var descIngresado;
	var calculoDesc;

	precioIngresado = prompt("Ingrese el precio");
	precioIngresado = parseInt(precioIngresado);
	descIngresado = prompt("Ingrese el descuento");
	descIngresado = parseInt(descIngresado);

	calculoDesc = precioIngresado - (precioIngresado*descIngresado/100);

	elPrecioFinal.value = calculoDesc;


}
