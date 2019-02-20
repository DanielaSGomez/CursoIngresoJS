function mostrar()
{
	var planetaIngresado;

	planetaIngresado=prompt("Ingrese un planeta del Sistema Solar","Ej:mercurio,venus,etc");

	var mensaje;

	switch(planetaIngresado)
	{
		case "tierra":
			mensaje="Acá vivimos";
			break;

		case "venus":
		case "mercurio":
			mensaje="Acá hace más calor";
			break;

		case "marte":
		case "júpiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "plutón":
			mensaje="Acá hace más frio";
			break;

		default:
			mensaje="No es un planeta válido.";


	}

alert(mensaje);

}
