/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*Primer comand de consola */




	var item;
	var porcentaje;
	var calculo;

	item = importe.value;
	item = parseInt(item);

	porcentaje = (item*25)/100;

	calculo = item - porcentaje;

	resultado.value = calculo;


	
}
