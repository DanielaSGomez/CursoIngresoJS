/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	numeroSecreto= Math.floor(Math.random() * 100) + 1;
	contadorIntentos=0;
	console.log(numeroSecreto);

}

function verificar()
{
	
	
	numeroIngresado=numero.value;
	numeroIngresado=parseInt(numeroIngresado);
	contadorIntentos=contadorIntentos+1;
	intentos.value=contadorIntentos;


	if (numeroIngresado==numeroSecreto) {
		mensaje="Usted es un ganador!!! y en solo "+ contadorIntentos + " intentos.";
	}else if (numeroIngresado>numeroSecreto) {
		mensaje="Se paso";
	} else{
		mensaje="Te falta";
	}
	
switch(contadorIntentos)
{
	case "1":
		mensaje="Psiquico";
		break;
	case "2":
		mensaje="Excelente percepción";
		break;
	case "3":
		mensaje="Suerte";
		break;
	case "4":
		mensaje="Tecnica";
		break;
	case "5":
		mensaje="En la media";
		break;
	case "6":
	case "7":
	case "8":
	case "9":
	case "10":
		mensaje="Falta tecnica";
		break;
	default:
		mensaje="Afortunado en el amor";


}





alert(mensaje);







}