function mostrar()
{

	var contador=0;//cuenta algo es una var + una constante que puede ser de cuanto en cuanto que valor quiero sumar.
	var acumulador=0;//var1 + var2, sirve para a una variable hacerle algo.
	var numeroIngresado;
	//var bandera : es una var con un valor determinado como true o false casi siempre ,para ver cuando sucede algo por primera vez como un blucle, por ej
	/*bandera=true;
	while()
		{
		if(bandera)
		{
			bandera=false;	
		}
		}*/

	while(contador<5)
	{
		//++contador; contador de preincremento suma y luego muestra el valor
		contador++;//contador de posincremento, muestra el valor y luego le agrega uno
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		console.log(contador);
	}






document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN