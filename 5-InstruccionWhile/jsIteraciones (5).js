function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo!="f"&&sexo!="m")// es && xq necesito que se cumplan las dos condiciones.
{
	alert("El valor ingresado es incorrecto. Ingrese 'f' para femenino o 'm' para masculino");
	sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN