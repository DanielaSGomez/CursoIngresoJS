
function mostrar()
{
	var ancho;
	var largo;
	var perimetroResultado;

	ancho = prompt("Ingrese el ancho del rectangulo");
	ancho = parseInt(ancho);

	largo = prompt("Ingrese el largo del rectangulo");
	largo = parseInt(largo);

	perimetroResultado = (ancho*2)+(largo*2);

	alert("El perimetro del rectangulo es "+ perimetroResultado);

}
