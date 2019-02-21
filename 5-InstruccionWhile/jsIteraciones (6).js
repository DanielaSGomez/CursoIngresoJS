function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador<5)
	{
		contador++;
		numeroIngresado=prompt("ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		console.log(contador);
	}






document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN