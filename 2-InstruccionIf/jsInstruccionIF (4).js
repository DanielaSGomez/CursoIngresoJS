function mostrar()
{
//tomo la edad

var edadIngresada;
edadIngresada = edad.value;
edadIngresada = parseInt(edadIngresada);

if (edadIngresada>=13&&edadIngresada<=17) {
	alert("Usted es adolescente");
}



/* otra forma:
var edadIngresada;
edadIngresada = edad.value;
edadIngresada = parseInt(edadIngresada);

if(edadIngresada<18)            <----------este if anida el otro if, si 
								se cumnple la condicion va a ejecutar
								el if siguiente quedando las dos condi
								ciones evaluadas.
{
	if(edadIngresada>12)
	{
		alert("Usted es adolescente");
	}
}







*/

}//FIN DE LA FUNCIÓN