function mostrar()
{
//tomo la edad  
var edadIngresada;
edadIngresada = edad.value;
edadIngresada = parseInt(edadIngresada);

if (edadIngresada<13||edadIngresada>17) {
	alert("Usted no es adolescente");
}

}//FIN DE LA FUNCIÓN

/*Otra forma:

if(edadIngresada<13){
	if(edadIngresada>17){
		alert("Usted no es adolescente");
	}
}



*/