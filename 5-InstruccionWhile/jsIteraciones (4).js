function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while(numero<0||numero>=10)
	{
		alert("El numero ingresado es incorrecto");
		numero = prompt("ingrese un número entre 0 y 9.");
	}

Numero.value=numero;



}//FIN DE LA FUNCIÓN