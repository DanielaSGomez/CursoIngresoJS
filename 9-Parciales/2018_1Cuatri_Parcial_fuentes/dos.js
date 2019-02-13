function mostrar()
{
 /*var name;
  var adress;

  name = elNombre.value;
  adress = laLocalidad.value;

  alert("Usted es " + name + " y vive en la localidad de " + adress +".");*/

var precioIngresado;
var precioConRecargo;
var precioFinal;

precioIngresado = elNombre.value;
precioIngresado = parseInt(precioIngresado);

precioConRecargo = (precioIngresado*10)/100;

precioFinal = precioIngresado + precioConRecargo;

alert("El precio del producto en efectivo es: $"+ precioIngresado+", con tarjeta tiene un recargo del 10% que seria $:" + precioConRecargo + ", costandole final $:" + precioFinal);



}
