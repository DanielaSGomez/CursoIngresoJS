/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoIngresado;
	var porcentaje;
	var calculo;

	sueldoIngresado = sueldo.value;
	sueldoIngresado = parseInt(sueldoIngresado);

	porcentaje = (sueldoIngresado*10)/100;
	
	resultado.value = porcentaje + sueldoIngresado;


}
