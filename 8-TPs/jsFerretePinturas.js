/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
	var temperaturaCalculoCelsius;
	


	temperaturaIngresada =Temperatura.value;
	temperaturaIngresada = parseInt(temperaturaIngresada);
	temperaturaCalculoCelsius = (temperaturaIngresada-32)*5/9;

	alert("La temperatura convertida a Celsius es "+ temperaturaCalculoCelsius);


}






function CentigradosFahrenheit () 
{
	
	var temperaturaIngresada;
	var temperaturaCalculoFarenheit;

	temperaturaIngresada = Temperatura.value;
	temperaturaIngresada = parseInt(temperaturaIngresada);

	temperaturaCalculoFarenheit = (temperaturaIngresada*1.8)+32;

	alert("La temperatura convertida a Farenheit es " + temperaturaCalculoFarenheit);
	

}
