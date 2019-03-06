
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho");
	ancho = parseInt(ancho);
	largo = prompt("Ingrese el largo");
	largo = parseInt(largo);

	perimetro = (ancho*2)+ (largo*2);

	alert("El perimetro es " + perimetro +"m.");

}
