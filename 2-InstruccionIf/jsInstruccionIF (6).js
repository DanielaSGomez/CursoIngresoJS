function mostrar()
{
//tomo la edad  
var edadIngresada;
edadIngresada = edad.value;
edadIngresada = parseInt(edadIngresada);

if (edadIngresada>18) {
	alert("Usted es mayor de edad");
}else if (edadIngresada>=13&&edadIngresada<=17) {

	alert("Usted es un adolescente");
}else{
	alert("Usted es un niño");
}




}//FIN DE LA FUNCIÓN